import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register.component';
import { QurcodeFromComponent } from './qurcode-from/qurcode-from.component';

export const routes = [
  { path: '', component: RegisterComponent, pathMatch: 'full' },
  { path: 'qurcode/:id', component: QurcodeFromComponent, pathMatch: 'register' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    QurcodeFromComponent
  ]
})
export class RegisterModule { }