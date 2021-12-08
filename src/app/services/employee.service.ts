import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employee: Employee[] = [
    {
      id: 1,
      fullname: 'Mulyono Putra',
      gender: 'Male',
      email: 'mulyonoputra94@gmail.com',
      phone: '081289900099',
      contactPreferences: 'Email',
      dateOfBirth: new Date('01/27/1994'),
      department: 'Software Development',
      isActive: true,
      photo: 'assets/images/mark.png',
      password: 'password',
      confirmPassword: 'confirmPassword',
    },
    {
      id: 2,
      fullname: 'Devi Nurita Sari',
      gender: 'Female',
      email: 'devinurita@gmail.com',
      phone: '081289900099',
      contactPreferences: 'Email',
      dateOfBirth: new Date('02/11/1993'),
      department: 'Digital Marketing',
      isActive: true,
      photo: 'assets/images/devi.png',
      password: 'password',
      confirmPassword: 'confirmPassword',
    },
  ];

  constructor() {}

  findAll(): Observable<Employee[]> {
    return of(this.employee).pipe(delay(2000));
  }

  findById(id:number): Employee {
    return this.employee.find(e => e.id === id)!;
  }

  save(employees: Employee) {
    this.employee.push(employees);
  }
}
