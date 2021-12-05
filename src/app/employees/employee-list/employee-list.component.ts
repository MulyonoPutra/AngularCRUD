import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employee: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employee.findAll();
  }
}
