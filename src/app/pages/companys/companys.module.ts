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

export const routes = [
  { path: '', redirectTo: 'CompanyComponent', pathMatch: 'full'},
  { path: '', component: CompanyComponent, data: { breadcrumb: 'Company' } },
]
@NgModule({
  declarations: [CompanyComponent, CompanysDiolgComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    PipesModule,
    NgxPaginationModule
  ],
  providers: [CompanyService ,UsersService],
  entryComponents:[
    CompanysDiolgComponent
  ]
})
export class CompanysModule { }
