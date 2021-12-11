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
    },
  ];

  constructor() {}

  findAll(): Observable<Employee[]> {
    return of(this.employee).pipe(delay(2000));
  }

  findById(id: number): Employee {
    return this.employee.find((e) => e.id === id)!;
  }

  save(employee: Employee) {
    if (employee.id === null) {
      // reduce() method reduces the array to a single value. This method executes
      // the provided function for each element of the array (from left-to-right)
      // When we implement the server side service to save data to the database
      // table, we do not have to compute the id, as the server will assing it
      const maxId = this.employee.reduce(function (e1, e2) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;

      this.employee.push(employee);
    } else {
      const foundIndex = this.employee.findIndex(
        (e) => e.id === employee.id
      );
      this.employee[foundIndex] = employee;
    }
  }
}
