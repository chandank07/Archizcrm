import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent ,DialogOverviewExampleDialog } from './login.component';
import { LoginService } from './Services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-alerts';
import { SocketService } from '../../socket.service';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AlertModule
  ],
  declarations: [LoginComponent ,DialogOverviewExampleDialog],
  entryComponents: [
    DialogOverviewExampleDialog,
  ],
  providers: [LoginService ,SocketService]
})
export class LoginModule { }