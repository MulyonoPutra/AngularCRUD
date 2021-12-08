import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root',
})
export class ListResolverService implements Resolve<Employee[]> {
  constructor(private employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Employee[] | Observable<Employee[]> | Promise<Employee[]> {
    return this.employeeService.findAll();
  }
}
