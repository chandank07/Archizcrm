import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { MatInputModule } from '@angular/material';
import { CountryComponent } from './country/country.component';
import { LocationService } from './location.service';
import { LocationDilogComponent } from './location-dilog/location-dilog.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RegionComponent } from './region/region.component';
import { CityComponent } from './city/city.component';
import { AlertModule } from 'ngx-alerts';

export const routes = [
  { path: '', redirectTo: 'CountryComponent', pathMatch: 'full'},
  { path: 'country', component: CountryComponent, data: { breadcrumb: 'Country' } },
  { path: 'region', component: RegionComponent, data: { breadcrumb: 'Region' } },
  { path: 'city', component: CityComponent, data: { breadcrumb: 'City' } },
]
@NgModule({
  declarations: [
    CountryComponent,
    LocationDilogComponent,
    RegionComponent,
    CityComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),  FormsModule,
    MatInputModule,
    MatSlideToggleModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     SharedModule,
     PipesModule,
     AlertModule
  ],
  providers: [LocationService],
  entryComponents:[LocationDilogComponent]
})
export class LocationsModule { }
