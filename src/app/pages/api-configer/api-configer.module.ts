import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TodoService } from './../dashboard/todo/todo.service';
import { SharedModule } from '../../shared/shared.module';
import { ApiDilogComponent } from './api-dilog/api-dilog.component';
import { UsersService } from '../users/users.service';
import { ApiConfromationService } from './api-confromation.service';

export const routes = [
  { path: '', redirectTo: 'QrCodeComponent', pathMatch: 'full'},
  { path: 'qr-code', component: QrCodeComponent, data: { breadcrumb: 'QR-Code' } },
]

@NgModule({
  declarations: [QrCodeComponent, ApiDilogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [TodoService,UsersService,ApiConfromationService],
  entryComponents:[
    ApiDilogComponent
  ]
})
export class ApiConfigerModule { }
