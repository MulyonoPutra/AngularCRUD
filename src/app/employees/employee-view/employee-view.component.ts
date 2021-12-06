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
export class EmployeeViewComponent implements OnInit {
  private _employee!: Employee;

  @Input()
  set employee(value: Employee) {
    console.log('Current ' + value?.fullname);
    this._employee = value
    console.log('Previous ' + this._employee ? this._employee?.fullname : 'null');
  }

  get employee():Employee {
    return this._employee
  }

  constructor() {}



  ngOnInit(): void {}
}
