import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: 
  [LandingPageComponent],
  imports: [
    SharedModule,
    LandingPageRoutingModule,
    BrowserModule,
    RouterModule,
  ]
})
export class LandingPageModule { }
