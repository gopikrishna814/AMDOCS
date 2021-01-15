import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import {BrowserModule} from '@angular/platform-browser';
 import { NgSelectModule } from '@ng-select/ng-select';
 import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DatamatrixComponent } from './datamatrix/datamatrix.component';



@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent, DatamatrixComponent],
  imports: [
    CommonModule,
    
    SharedModule,
    BrowserModule,
     HighchartsChartModule ,
     NgSelectModule,
    NgxChartsModule
     
  ]
})
export class OrdersModule { }
