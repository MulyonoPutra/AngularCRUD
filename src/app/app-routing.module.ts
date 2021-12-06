import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeCanDeactivateGuardService } from './guards/create-employee-can-deactivate-guard.service';

const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  {
    path: 'create',
    component: EmployeeCreateComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService],
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
