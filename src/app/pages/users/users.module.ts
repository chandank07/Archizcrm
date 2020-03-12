import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { UsersComponent } from './users.component';
import { UsersData } from './users.data';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UsersroleComponent } from './usersrole/usersrole.component';
import { UsersService } from './users.service';
import { UserActivityComponent } from './user-activity/user-activity.component';
import { AlertModule } from 'ngx-alerts';

export const routes = [
  { path: '', component: UsersComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent, data: { breadcrumb: 'User' } },
  { path: 'role', component: UsersroleComponent, data: { breadcrumb: 'User Roles' } },
  { path: 'user_activity', component: UserActivityComponent, data: { breadcrumb: 'User Activity' } },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(UsersData, { delay: 500 }),
    NgxPaginationModule,
    AlertModule,
    SharedModule,
    PipesModule    
  ],
  declarations: [
    UsersComponent,
    UserDialogComponent,
    UsersroleComponent,
    UserActivityComponent
  ],
  entryComponents:[
    UserDialogComponent
  ],
  providers: [UsersService],
})
export class UsersModule { }
