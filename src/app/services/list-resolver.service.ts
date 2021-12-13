import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from './employee.service';
import { catchError, map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeListResolverService
  implements Resolve<Employee[] | string>
{
  constructor(private employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[]> {
    return this.employeeService.findAll().pipe(
      catchError((error: any) => of(error))
    );
  }
}
