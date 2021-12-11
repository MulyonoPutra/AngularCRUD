import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { CreateEmployeeCanDeactivateGuardService } from './guards/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsGuardService } from './guards/employee-details-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListResolverService } from './services/list-resolver.service';

const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent,
    resolve: { employeeList: EmployeeListResolverService },
  },
  {
    path: 'details/:id',
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService],
  },
  {
    path: 'edit/:id',
    component: EmployeeCreateComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService],
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
