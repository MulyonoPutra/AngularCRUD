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

  baseUrl = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>('http://localhost:3000/employees')
      .pipe(catchError(this.handleError));
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient
      .get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  save(employee: Employee): Observable<Employee> {
    return this.httpClient
      .post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }

  update(employee: Employee): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${employee.id}`, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
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
