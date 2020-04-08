import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';

import { EnquiryComponent } from './enquiry/enquiry.component';
import{EnquiryServiceService} from '../enquiry/enquiry_Service/enquiry-service.service';
import { EnquiryDilogComponent } from './enquiry-dilog/enquiry-dilog.component'
import { MatInputModule } from '@angular/material';
import { LocationService } from '../locations/location.service';
import {MatBadgeModule} from '@angular/material/badge';
import { LeadComponent } from './lead/lead.component';
import { ClientComponent } from './client/client.component';
import { TaskComponent } from './task/task.component';
import { CalendarModule } from 'angular-calendar';
import { TaskDilogComponent } from './task-dilog/task-dilog.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { LeaddetalsComponent } from './leaddetals/leaddetals.component';
import { SmsComponent } from './sms/sms.component';
import { SmsDilogComponent } from './sms-dilog/sms-dilog.component';
import { EmailComponent } from './email/email.component';
import { AlertModule } from 'ngx-alerts';
import { MasterSerchComponent } from './master-serch/master-serch.component';
import { SettingService } from '../seting/setting.service';
import { QuillModule } from 'ngx-quill'
import { SocketService } from '../../../app/socket.service';
import { UsersService } from './../users/users.service';
import { CompaignServiceService } from '../../pages/compaign/compaign-service.service';


export const routes = [
  { path: '', redirectTo: 'EnquiryComponent', pathMatch: 'full'},
  { path: 'enquiry', component: EnquiryComponent, data: { breadcrumb: 'Enquiry' } },
  { path: 'lead', component: LeadComponent, data: { breadcrumb: 'Lead' } },
  { path: 'client', component: ClientComponent, data: { breadcrumb: 'Client' } },
  { path: 'task', component: TaskComponent, data: { breadcrumb: 'Task' } },
  { path: 'enquiryadd/:id', component: EnquiryFormComponent, data: { breadcrumb: 'Enquiry Detales' } },
  { path: 'leaddetals/:id', component: LeaddetalsComponent, data: { breadcrumb: 'Lead Detales' } },
  { path: 'sms', component: SmsComponent, data: { breadcrumb: 'SMS' } },
  { path: 'email', component: EmailComponent, data: { breadcrumb: 'Email' } },
  { path: 'serch/:id', component: MasterSerchComponent, data: { breadcrumb: 'Search' } },
]

@NgModule({
  declarations: [
    EnquiryComponent,
    EnquiryDilogComponent,
    LeadComponent,
    ClientComponent,
    TaskComponent,
    TaskDilogComponent,
    EnquiryFormComponent,
    LeaddetalsComponent,
    SmsComponent,
    SmsDilogComponent,
    EmailComponent,
    MasterSerchComponent,
  ],
  imports: [
    MatBadgeModule,
    QuillModule,
    CalendarModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     SharedModule,
     PipesModule,
    RouterModule.forChild(routes),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  providers: [EnquiryServiceService ,LocationService,SettingService ,UsersService,SocketService,CompaignServiceService],
  entryComponents:[
    EnquiryDilogComponent,
    TaskDilogComponent,
    SmsDilogComponent
  ]
})


export class EnquiryModule {
  
 }
 console.log("sflkdshfjdj")
