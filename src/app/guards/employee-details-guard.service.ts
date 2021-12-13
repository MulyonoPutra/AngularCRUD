import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.employeeService.findById(+route.paramMap.get('id')!).pipe(
      map((employee) => {
        const employeeExists = !!employee;

        if (employeeExists) {
          return true;
        } else {
          this.router.navigate(['404']);
          return false;
        }
      })
    );
  }
}
