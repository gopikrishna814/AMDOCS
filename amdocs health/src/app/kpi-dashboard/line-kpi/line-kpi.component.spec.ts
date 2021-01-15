import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineKpiComponent } from './line-kpi.component';

describe('LineKpiComponent', () => {
  let component: LineKpiComponent;
  let fixture: ComponentFixture<LineKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
