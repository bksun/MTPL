import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastenersComponent } from './fasteners.component';

describe('FastenersComponent', () => {
  let component: FastenersComponent;
  let fixture: ComponentFixture<FastenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
