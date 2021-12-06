import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss'],
})
export class EmployeeViewComponent implements OnInit, OnChanges {
  @Input() employee!: Employee;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) { 
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    console.log('Previous : ' + (previousEmployee ? previousEmployee.fullname : 'NULL'));
    console.log('Current : ' + currentEmployee.fullname);
  }

  ngOnInit(): void {}
}
