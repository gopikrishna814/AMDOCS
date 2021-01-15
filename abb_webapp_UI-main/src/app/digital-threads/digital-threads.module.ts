import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalThreadsRoutingModule } from './digital-threads-routing.module';
import { DigitalThreadsComponent } from './digital-threads.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DigitalThreadsComponent],
  imports: [
    CommonModule,
    DigitalThreadsRoutingModule,
    SharedModule
  ]
})
export class DigitalThreadsModule { }
