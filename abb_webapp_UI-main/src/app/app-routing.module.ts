import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckGuard } from 'src/service/auth/check.service';
import { KanbanmachinelevelComponent } from './kanban/kanbanmachinelevel/kanbanmachinelevel.component';
import { LoginComponent } from './login/login.component';
import { MachineperformanceComponent } from './kanban/machineperformance/machineperformance.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { DatamatrixComponent } from './orders/datamatrix/datamatrix.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,canActivate:[CheckGuard]},
  { path: 'kanban', component: KanbanmachinelevelComponent},
  { path: 'machineperformance', component: MachineperformanceComponent},
  // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m =>  m.OrdersModule) },
  { path: 'orders', component: OrdersComponent},
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  // },
  { path: 'orderdetails', component: OrderDetailsComponent},
  { path: 'datamatrix', component: DatamatrixComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
