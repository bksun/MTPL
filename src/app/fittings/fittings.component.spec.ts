import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FittingsComponent } from './fittings.component';

describe('FittingsComponent', () => {
  let component: FittingsComponent;
  let fixture: ComponentFixture<FittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
