import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from 'src/app/models/department';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  panelTitle!: string;
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
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = +paramMap.get('id')!;
      this.getEmployee(id);
    });
  }

  getEmployee(id: number) {
    // If the id is 0, we want to create a new employee. So we intialise the employee
    // property with an Employee object with all properties set to null. The template
    // is bound to this employee property so all the form fields are displayed blank,
    // to enter details of a new employee we want to create
    if (id === 0) {
      this.employee = {
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
      };
      // Resetting the form, resets any previous validation errors
      this.createEmployeeForm.reset();
      this.panelTitle = 'Create Employee';
    } else {
      this.employee = Object.assign({}, this.employeeService.findById(id));
      this.panelTitle = 'Edit Employee';
    }
  }

  saveEmployee(empForm: NgForm): void {
    const newEmployee = Object.assign({}, this.employee);
    this.employeeService.save(newEmployee);
    empForm.reset();
    this.router.navigate(['list']);
  }

  reset(empForm: NgForm): void {
    empForm.reset();
  }

  togglePhotoPreview() {
    this.previewPhotos = !this.previewPhotos;
  }
}
