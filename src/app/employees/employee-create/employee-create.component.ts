import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})

export class EmployeeCreateComponent implements OnInit {

  datepickerConfig!: Partial<BsDatepickerConfig>
  previewPhotos: boolean = false;
  departments: Department[] = [
    { id: '1', name: 'Software Development' },
    { id: '2', name: 'Digital Marketing' },
    { id: '3', name: 'HR' },
  ]

  employee: Employee = {
    id: null!,
    fullname: null!,
    gender: null!,
    email: '',
    phone: null!,
    contactPreferences: null!,
    dateOfBirth: null!,
    department: null!,
    isActive: null!,
    photo: null!,
  }


  constructor() {
    this.datePickerColor()
  }

  datePickerColor() {
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: true,
      dateInputFormat: 'DD/MM/YYYY',
    })
  }

  ngOnInit(): void { }

  saveEmployee(employee: Employee): void {
    console.log(employee);
  }

  togglePhotoPreview(){
    this.previewPhotos = !this.previewPhotos;
  }
}
