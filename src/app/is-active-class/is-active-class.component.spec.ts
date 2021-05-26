import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsActiveClassComponent } from './is-active-class.component';

describe('IsActiveClassComponent', () => {
  let component: IsActiveClassComponent;
  let fixture: ComponentFixture<IsActiveClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsActiveClassComponent ]
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
});
