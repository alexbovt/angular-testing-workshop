import {HighlightDirective} from './highlight.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {byDataTest} from '../is-active-class/is-active-class.component.spec';

@Component({
  selector: 'app-test',
  template: `
    <div data-test="default" [appHighlight]>Default</div>
    <div data-test="red" [appHighlight]="'red'">Red</div>
  `
})
class TestComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  const selectors = {
    defaultEl: () => fixture.debugElement.query(By.css(byDataTest('default'))).nativeElement,
    redEl: () => fixture.debugElement.query(By.css(byDataTest('red'))).nativeElement
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should have default value as transparent', () => {
    expect(selectors.defaultEl().style.backgroundColor).toBe('transparent');
  });

  it('should have color from Input', () => {
    expect(selectors.redEl().style.backgroundColor).toBe('red');
  });
});
