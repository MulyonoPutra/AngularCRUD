import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { MaterialModule } from './utils/material.module';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualsValidatorDirective } from './shared/confirm-equals-validator.directive';
import { EmployeeService } from './services/employee.service';
@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeCreateComponent, SelectRequiredValidatorDirective, ConfirmEqualsValidatorDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
