import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KpiDashboardComponent } from './kpi-dashboard.component';
import { LineKpiComponent } from './line-kpi/line-kpi.component';
import { MachineKpiComponent } from './machine-kpi/machine-kpi.component';


const routes: Routes = [
  
    { path: 'kpiDashboard', component: KpiDashboardComponent, children:[
      {path: 'line', component: LineKpiComponent},
      {path: 'machine', component: MachineKpiComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpiDashboardRoutingModule { }
