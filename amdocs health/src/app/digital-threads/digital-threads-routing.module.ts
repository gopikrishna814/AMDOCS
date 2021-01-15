import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalThreadsComponent } from './digital-threads.component';
import { DigitalThreadsModule } from './digital-threads.module';


const routes: Routes = [
  { path: 'digitalThreads', component: DigitalThreadsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalThreadsRoutingModule { }
