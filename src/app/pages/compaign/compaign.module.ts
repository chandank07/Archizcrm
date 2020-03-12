import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamManegmentComponent } from './team-manegment/team-manegment.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UsersService } from '../../pages/users/users.service';
import { DataSorceComponent } from './data-sorce/data-sorce.component';
import { CompaingListComponent } from './compaing-list/compaing-list.component';
import { CompaingDilogComponent } from './compaing-dilog/compaing-dilog.component'
import { CompaignServiceService } from './compaign-service.service';
import { LocationService } from '../locations/location.service';
import { CreateCampComponent } from './create-camp/create-camp.component';

export const routes = [
  { path: '', redirectTo: 'TeamManegmentComponent', pathMatch: 'full'},
  { path: 'team_managment', component: TeamManegmentComponent, data: { breadcrumb: 'Team Mnagment' } },
  { path: 'data_sorce', component: DataSorceComponent, data: { breadcrumb: 'Data Sorce' } },
  { path: 'compaing_list', component: CompaingListComponent, data: { breadcrumb: 'Compaing List' } },
  { path: 'create_comp', component: CreateCampComponent, data: { breadcrumb: 'Assing Compaing' } },
]

@NgModule({
  declarations: [TeamManegmentComponent, DataSorceComponent, CompaingListComponent, CompaingDilogComponent, CreateCampComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SharedModule,
    PipesModule,
    DragDropModule
  ],
  providers: [UsersService ,CompaignServiceService,LocationService],
  entryComponents:[
    CompaingDilogComponent
  ]
})
export class CompaignModule { }
