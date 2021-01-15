import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanmachinelevelComponent } from './kanbanmachinelevel.component';

describe('KanbanmachinelevelComponent', () => {
  let component: KanbanmachinelevelComponent;
  let fixture: ComponentFixture<KanbanmachinelevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanmachinelevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanmachinelevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
