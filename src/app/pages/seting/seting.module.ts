import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TodoService } from './../dashboard/todo/todo.service';
import { SharedModule } from '../../shared/shared.module';
import { SatageComponent } from './satage/satage.component';
import { SettingService } from './setting.service';
// import { CompaignServiceService } from '../compaign/compaign-service.service';
import { SetingDilogComponent } from './seting-dilog/seting-dilog.component';
import { DesprictionComponent } from './despriction/despriction.component';
import { TargetComponent } from './target/target.component';
import { ForcastComponent } from './forcast/forcast.component';
import { UsersService } from '../users/users.service';
import { InvoiceComponent } from './invoice/invoice.component';
import{EnquiryServiceService} from '../enquiry/enquiry_Service/enquiry-service.service';
import { LeadProbilityComponent } from './lead-probility/lead-probility.component';
import { DropReasonComponent } from './drop-reason/drop-reason.component';
import { EnquiryTypeComponent } from './enquiry-type/enquiry-type.component';
import { EnquirySourceComponent } from './enquiry-source/enquiry-source.component';
import { AlertModule } from 'ngx-alerts';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { ProductComponent } from './product/product.component';


export const routes = [
  { path: '', redirectTo: 'CompanyComponent', pathMatch: 'full'},
  { path: 'stage', component: SatageComponent, data: { breadcrumb: 'Stage' } },
  { path: 'despriction', component: DesprictionComponent, data: { breadcrumb: 'Despriction' } },
  { path: 'target', component: TargetComponent, data: { breadcrumb: 'Target' } },
  { path: 'forcast', component: ForcastComponent, data: { breadcrumb: 'Forcast' } },
  { path: 'invoice', component: InvoiceComponent, data: { breadcrumb: 'Invoice' } },
  { path: 'lead_probility', component: LeadProbilityComponent, data: { breadcrumb: 'Lead Probability' } },
  { path: 'drop_reason', component: DropReasonComponent, data: { breadcrumb: 'Drop Reason' } },
  { path: 'enquiry_type', component: EnquiryTypeComponent, data: { breadcrumb: 'Enquiry Type' } },
  { path: 'enquiry_source', component: EnquirySourceComponent, data: { breadcrumb: 'Enquiry Source' } },
  { path: 'customer_type', component: CustomerTypeComponent, data: { breadcrumb: 'Customer Type' } },
  { path: 'product', component: ProductComponent, data: { breadcrumb: 'Product' } },
]

@NgModule({
  declarations: [SatageComponent, SetingDilogComponent, DesprictionComponent, TargetComponent, ForcastComponent, InvoiceComponent, LeadProbilityComponent, DropReasonComponent, EnquiryTypeComponent, EnquirySourceComponent, CustomerTypeComponent, ProductComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    AlertModule
  ],
  providers: [TodoService ,SettingService,UsersService,EnquiryServiceService],
  entryComponents:[
    SetingDilogComponent
  ]
})
export class SetingModule { }
