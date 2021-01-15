import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/service/auth/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from 'src/service/auth/auth.interceptor';
import { AuthGuard } from 'src/service/auth/auth-guard.service';
import { UserInfo } from './model/userInfo.model';
import { CheckGuard } from 'src/service/auth/check.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighchartsService } from 'src/service/highcharts.service';
import { DigitalThreadsModule } from './digital-threads/digital-threads.module';
import { KpiDashboardModule } from './kpi-dashboard/kpi-dashboard.module';
import {KanbanModule} from './kanban/kanban.module';
import {OrdersModule} from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LandingPageModule,
    DigitalThreadsModule,
    HttpClientModule,
    KanbanModule,
    OrdersModule,
    BrowserAnimationsModule,
    KpiDashboardModule,
    ToastrModule.forRoot({
      disableTimeOut: false,
      timeOut: 2000,
      tapToDismiss: true,
      easing: 'ease-in',
      easeTime: 300,
      newestOnTop: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [AuthService,AuthGuard, UserInfo, CheckGuard, HighchartsService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
