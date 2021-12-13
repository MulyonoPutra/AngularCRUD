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

  /**
    If the id is 0, we want to create a new employee. So we intialise the employee
    property with an Employee object with all properties set to null. The template
    is bound to this employee property so all the form fields are displayed blank,
    to enter details of a new employee we want to create
   */
  getEmployee(id: number) {
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
      };
      // Resetting the form, resets any previous validation errors
      this.createEmployeeForm?.reset();
      this.panelTitle = 'Create Employee';
    } else {
      this.employeeService.findById(id).subscribe(
        (employee) => {
          this.employee = employee;
        },
        (err: any) => console.log(err)
      );
      this.panelTitle = 'Edit Employee';
    }
  }

  saveEmployee(empForm: NgForm): void {
    if (this.employee.id == null) {
      this.createEmployee(empForm);
    } else {
      this.updateEmployee(empForm);
    }
  }

  createEmployee(empForm: NgForm): void {
    this.employeeService.save(this.employee).subscribe(
      (data: Employee) => {
        console.log(data);
        empForm?.reset();
        this.router.navigate(['list']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateEmployee(empForm: NgForm): void {
    this.employeeService.update(this.employee).subscribe(
      () => {
        empForm?.reset();
        this.router.navigate(['list']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  reset(empForm: NgForm): void {
    empForm.reset();
  }
}
