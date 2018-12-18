import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolvesComponent } from './volves.component';

describe('VolvesComponent', () => {
  let component: VolvesComponent;
  let fixture: ComponentFixture<VolvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
