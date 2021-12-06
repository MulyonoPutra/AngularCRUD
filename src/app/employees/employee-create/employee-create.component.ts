import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from 'src/app/models/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm!: NgForm;
  datepickerConfig!: Partial<BsDatepickerConfig>;
  previewPhotos: boolean = false;
  departments: Department[] = [
    { id: '1', name: 'Software Development' },
    { id: '2', name: 'Digital Marketing' },
    { id: '3', name: 'HR' },
  ];

  employee: Employee = {
    id: null!,
    fullname: null!,
    gender: null!,
    email: '',
    phone: null!,
    contactPreferences: null!,
    dateOfBirth: null!,
    department: 'select',
    isActive: null!,
    photo: null!,
    password: null!,
    confirmPassword: null!,
  };

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.datePickerColor();
  }

  datePickerColor() {
    this.datepickerConfig = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        dateInputFormat: 'DD/MM/YYYY',
      }
    );
  }

  ngOnInit(): void {}

  saveEmployee(): void {
    this.employeeService.save(this.employee);
    this.router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhotos = !this.previewPhotos;
  }
}
