import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: '1',
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
      confirmPassword: 'confirmPassword'
    },
    {
      id: '1',
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
      confirmPassword: 'confirmPassword'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
