import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationService } from './../locations/location.service';
import { SharedModule } from '../../shared/shared.module';
import{EnquiryServiceService} from '../enquiry/enquiry_Service/enquiry-service.service';

export const routes = [
  { path: '', redirectTo: 'ReportComponent', pathMatch: 'full'},
  { path: 'report', component: ReportComponent, data: { breadcrumb: 'Reports' } },
]

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes),  FormsModule,
  ],
  providers:[LocationService ,EnquiryServiceService]
})
export class ReportsModule { }
