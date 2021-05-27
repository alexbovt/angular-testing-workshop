import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {SearchReactiveComponent} from './search-reactive.component';
import {SearchService} from './search.service';
import {of, Subject} from 'rxjs';
import {By} from '@angular/platform-browser';
import {byDataTest} from '../is-active-class/is-active-class.component.spec';
import {ReactiveFormsModule} from '@angular/forms';


describe('SearchReactiveComponent', () => {
  let component: SearchReactiveComponent;
  let fixture: ComponentFixture<SearchReactiveComponent>;
  let service: SearchService;

  const mocks = {
    result$: new Subject<string[]>(),
    term: 'foo'
  };

  const selectors = {
    input: () => fixture.debugElement.query(By.css(byDataTest('input'))).nativeElement,
    ul: () => fixture.debugElement.query(By.css(byDataTest('ul')))?.nativeElement,
    li: () => fixture.debugElement.queryAll(By.css(byDataTest('li'))).map(x => x.nativeElement),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchReactiveComponent],
      providers: [
        {
          provide: SearchService,
          useValue: {
            search: jasmine.createSpy().and.returnValue(mocks.result$)
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReactiveComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get results from service', fakeAsync(() => {
    const spy = jasmine.createSpy();
    // const spy = jest.fn();
    component.results$.subscribe(spy);
    typeToInput(mocks.term);
    mocks.result$.next(['bar', 'baz']);
    expect(spy).toHaveBeenCalledWith(['bar', 'baz']);
  }));

  it('should call service once', fakeAsync(() => {
    typeToInput(mocks.term);
    expect(service.search).not.toHaveBeenCalled();
    tick(1000);
    expect(service.search).toHaveBeenCalledWith('foo');
  }));

  it('should call service once', fakeAsync(() => {
    typeToInput(mocks.term);
    tick(1000);
    typeToInput(mocks.term);
    tick(1000);

    expect(service.search).toHaveBeenCalledTimes(1);
  }));

  it('should render ul', () => {
    expect(selectors.ul()).toBeUndefined();
    component.results$ = of(['foo', 'bar']);
    fixture.detectChanges();
    expect(selectors.ul()).toBeDefined();
  });

  it('should 3 li', () => {
    component.results$ = of(['foo', 'bar', 'baz']);
    fixture.detectChanges();
    expect(selectors.li()).toHaveSize(3);
  });

  function typeToInput(str: string): void {
    const input = selectors.input();
    input.value = str;
    input.dispatchEvent(new Event('input'));
  }
});
