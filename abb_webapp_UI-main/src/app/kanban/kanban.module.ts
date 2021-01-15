import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { HighchartsChartComponent } from 'highcharts-angular';

 import { HighchartsChartModule } from 'highcharts-angular';
 


 import { NgSelectModule } from '@ng-select/ng-select';
 import { NgxChartsModule } from '@swimlane/ngx-charts';


import { KanbanRoutingModule } from './kanban-routing.module';
import { KanbanmachinelevelComponent } from './kanbanmachinelevel/kanbanmachinelevel.component';
import { SharedModule } from '../shared/shared.module';
import { MachineperformanceComponent } from './machineperformance/machineperformance.component';


@NgModule({
  declarations: [KanbanmachinelevelComponent, MachineperformanceComponent,],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    BrowserModule,
     HighchartsChartModule ,
     NgSelectModule,
    NgxChartsModule
     
  ]
})
export class KanbanModule { }
