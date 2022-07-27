import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';


import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MakeService } from './services/make.service';
import { FeatureService } from './services/feature.service';
import { VehicleService } from './services/vehicle.service';
import { AppErrorHandler } from './app.error-handler';
import { NotificationService } from './services/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DataTablesModule } from 'angular-datatables';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { PhotoService } from './services/photo.service';
import { ProgressService } from './services/progress.service'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    VehicleFormComponent,
    VehicleListComponent,
    VehicleInfoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgProgressModule,
    DataTablesModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo:'vehicles',component: VehicleListComponent, pathMatch: 'full' },
      { path: 'vehicles/new', component: VehicleFormComponent },
      { path: 'vehicles/edit/:id', component:VehicleFormComponent},
      { path: 'vehicles/:id', component: VehicleInfoComponent },
      { path: 'vehicles', component: VehicleListComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    VehicleService, PhotoService, ProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
