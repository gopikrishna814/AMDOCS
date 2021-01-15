import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineKpiComponent } from './machine-kpi.component';

describe('MachineKpiComponent', () => {
  let component: MachineKpiComponent;
  let fixture: ComponentFixture<MachineKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
