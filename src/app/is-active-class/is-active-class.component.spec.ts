import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IsActiveClassComponent} from './is-active-class.component';
import {By} from '@angular/platform-browser';

export function byDataTest(attr: string): string {
  return `[data-test="${attr}"]`;
}

describe('IsActiveClassComponent', () => {
  let component: IsActiveClassComponent;
  let fixture: ComponentFixture<IsActiveClassComponent>;

  const selectors = {
    button: () => fixture.debugElement.query(By.css(byDataTest('toggle-button'))).nativeElement,
    content: () => fixture.debugElement.query(By.css(byDataTest('content'))).nativeElement,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsActiveClassComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsActiveClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should have active class', () => {
    const testCases = [
      [true, true],
      [true, false],
      [false, true],
      [false, false],
    ];
    testCases.forEach(([isActive, isValid]) => {
      it(`should set active class if active and valid, isActive = ${isActive}, isValid = ${isValid}`, () => {
        component.isActive = isActive;
        component.isValid = isValid;
        fixture.detectChanges();
        expect(selectors.content().classList.contains('active')).toBe(isActive && isValid);
      });
    });
  });

  it('should contain text Loerm', () => {
    expect(selectors.content().textContent).toContain('Lorem');
  });

  it('should toggle', () => {
    expect(component.isActive).toBe(false);
    selectors.button().click();
    expect(component.isActive).toBe(true);
    selectors.button().click();
    expect(component.isActive).toBe(false);
  });

  describe('', () => {

    const testCases = [
      [true, 'Disable'],
      [false, 'Enable'],
    ];

    testCases.forEach(([isActive, expectedText]: [boolean, string]) => {

      it(`button should have text ${expectedText} when isActive = ${isActive}`, () => {
        component.isActive = isActive;
        fixture.detectChanges();
        expect(selectors.button().textContent).toBe(expectedText);
      });
    });

  });

});
