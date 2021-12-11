import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {

constructor(private employeeService: EmployeeService,
  private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeExist = !!this.employeeService.findById(+route.paramMap.get('id')!);
    if (employeeExist) {
      return true;
    } else {
      this.router.navigate(['/404']);
      return false;
    }
  }
}
