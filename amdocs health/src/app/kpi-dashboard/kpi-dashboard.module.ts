import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiDashboardRoutingModule } from './kpi-dashboard-routing.module';
import { KpiDashboardComponent } from './kpi-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LineKpiComponent } from './line-kpi/line-kpi.component';
import { MachineKpiComponent } from './machine-kpi/machine-kpi.component';

 import { HighchartsChartModule } from 'highcharts-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    KpiDashboardComponent,
    LineKpiComponent,
    MachineKpiComponent,
  ],
  imports: [
    SharedModule,
    KpiDashboardRoutingModule,
    BrowserModule,
    RouterModule,
     HighchartsChartModule,
    NgSelectModule,
    NgxChartsModule
  ]
})
export class KpiDashboardModule { }
