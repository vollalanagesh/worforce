import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms'

import {EmployeeServiceService} from './services/employee-service.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CreateUpdateEmployeeComponent } from './employees/create-update-employee/create-update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    CreateUpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [HttpClientModule,EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
