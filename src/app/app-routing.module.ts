import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorComponent } from './doctor/doctor.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
  { path: 'doctor', component: DoctorComponent },
  { path: 'channel', component: ChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
