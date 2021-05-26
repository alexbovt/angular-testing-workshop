import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightHostComponent } from './highlight-host.component';

describe('HighlightHostComponent', () => {
  let component: HighlightHostComponent;
  let fixture: ComponentFixture<HighlightHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
