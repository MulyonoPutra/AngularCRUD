import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})

export class EmployeeCreateComponent implements OnInit {

  datepickerConfig!: Partial<BsDatepickerConfig>

  fullname = '';
  email = '';
  gender = '';
  phone = '';
  isActive!: boolean;
  dateOfBirth = '';
  photo = '';
  contactPreference: string[] = ['Email', 'Phone', 'Whatsapp', 'Telegram'];
  department = ''
  previewPhotos: boolean = false;
  departments: Department[] = [
    { id: '1', name: 'Software Development' },
    { id: '2', name: 'Digital Marketing' },
    { id: '3', name: 'HR' },
  ]


  constructor() {
    this.datePickerColor()
  }

  datePickerColor() {
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      minDate: new Date(1945, 0, 1),
      dateInputFormat: 'DD/MM/YYYY',
    })
  }

  ngOnInit(): void { }

  saveEmployee(empForm: NgForm) {
    console.log(empForm.value);
  }

  togglePhotoPreview(){
    this.previewPhotos = !this.previewPhotos;
  }
}
