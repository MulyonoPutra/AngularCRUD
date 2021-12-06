import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeCreateComponent } from '../employees/employee-create/employee-create.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<EmployeeCreateComponent>{

  constructor() { }
  canDeactivate(component: EmployeeCreateComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard your changes?');
    }

    return true;
  }
}

