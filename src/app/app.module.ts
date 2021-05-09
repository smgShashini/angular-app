import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmpInfoComponent } from './emp-info/emp-info.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ChannelCardComponent } from './channel-card/channel-card.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChannelComponent } from './channel/channel.component';
import { DialogComponent } from './dialog/dialog.component';
import { DescriptionComponent } from './description/description.component';
import { ContactComponent } from './contact/contact.component';
import { DoctypeComponent } from './doctype/doctype.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponent } from './navigation/navigation.component';
import { PatientComponent } from './patient/patient.component';
import { ShowDelComponent } from './patient/show-del/show-del.component';
import { AddEditComponent } from './patient/add-edit/add-edit.component';
import { AddDeleteComponent } from './doctor/add-delete/add-delete.component';
import { ShowEditComponent } from './doctor/show-edit/show-edit.component';
import { AddComponent } from './doctor/add/add.component';
import { UpdateComponent } from './update/update.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { PatientCardComponent } from './patient/patient-card/patient-card/patient-card.component';
import { PatientListComponent } from './patient/patient-list/patient-list/patient-list.component';
import { PserviceService } from './services/pservice.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { DemoComponent } from './demo/demo.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Demo2Component } from './demo2/demo2.component';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    DoctorComponent,
    ChannelCardComponent,
    ChannelComponent,
    DialogComponent,
    DescriptionComponent,
    ContactComponent,
    DoctypeComponent,
    NavigationComponent,
    PatientComponent,
    ShowDelComponent,
    AddEditComponent,
    AddDeleteComponent,
    ShowEditComponent,
    AddComponent,
    UpdateComponent,
    PatientCardComponent,
    PatientListComponent,
    PatientFormComponent,
    DemoComponent,
    Demo2Component,
    SendComponent,
    ReceiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [SharedService, PserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
