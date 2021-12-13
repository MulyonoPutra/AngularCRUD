import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
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

