import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared/shared.module';
import { CompanyService } from './company.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { CompanysDiolgComponent } from './companys-diolg/companys-diolg.component';
import { UsersService } from '../.../../users/users.service';
import { AlertModule } from 'ngx-alerts';
import { SocketService } from '../../../app/socket.service';
import { EnquiryformfieldComponent } from './enquiryformfield/enquiryformfield.component';

export const routes = [
  { path: '', redirectTo: 'CompanyComponent', pathMatch: 'full'},
  { path: '', component: CompanyComponent, data: { breadcrumb: 'Company' } },
  { path: 'enquiryform/:id', component: EnquiryformfieldComponent, data: { breadcrumb: 'Company' } },
]
@NgModule({
  declarations: [CompanyComponent, CompanysDiolgComponent, EnquiryformfieldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    PipesModule,
    NgxPaginationModule,
    AlertModule
  ],
  providers: [CompanyService ,UsersService,SocketService],
  entryComponents:[
    CompanysDiolgComponent
  ]
})
export class CompanysModule { }
