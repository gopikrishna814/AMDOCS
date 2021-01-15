import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineperformanceComponent } from './machineperformance.component';

describe('MachineperformanceComponent', () => {
  let component: MachineperformanceComponent;
  let fixture: ComponentFixture<MachineperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
