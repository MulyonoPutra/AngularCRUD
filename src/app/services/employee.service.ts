import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>('http://localhost:3000/employees')
      .pipe(catchError(this.handleError));
  }

  findById(id: number): Employee {
    return this.employee.find((e) => e.id === id)!;
  }

  save(employees: Employee): Observable<Employee> {
    if (employees.id === null) {
      // const maxId = this.listEmployees.reduce(function (e1, e2) {
      //     return (e1.id > e2.id) ? e1 : e2;
      // }).id;
      // employee.id = maxId + 1;
      // employee.id = 0;

      // this.listEmployees.push(employee);
      return this.httpClient
        .post<Employee>('http://localhost:3000/employees', employees, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .pipe(catchError(this.handleError));
    } else {
      const foundIndex = this.employee.findIndex((e) => e.id === employees.id);

      this.employee[foundIndex] = employees;
    }

    return of(employees).pipe(delay(2000));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError(
      'There is a problem with the service.We are notified & working on it. Please try again later.'
    );
  }
}
