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
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { CreateEmployeeCanDeactivateGuardService } from './guards/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './pipe/employee-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualsValidatorDirective,
    EmployeeViewComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
