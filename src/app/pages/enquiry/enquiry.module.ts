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
export const routes = [
  { path: '', redirectTo: 'EnquiryComponent', pathMatch: 'full'},
  { path: 'enquiry', component: EnquiryComponent, data: { breadcrumb: 'Enquiry' } },
]

@NgModule({
  declarations: [
    EnquiryComponent,
    EnquiryDilogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     SharedModule,
     PipesModule,
    RouterModule.forChild(routes),
  ],
  providers: [EnquiryServiceService],
  entryComponents:[
    EnquiryDilogComponent
  ]
})


export class EnquiryModule {
  
 }
 console.log("sflkdshfjdj")
