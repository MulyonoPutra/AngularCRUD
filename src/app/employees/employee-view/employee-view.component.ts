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
  private _employee!: Employee;
  @Input() employeeId!: number;

  @Input()
  set employee(value: Employee) {
    console.log('Current ' + value?.fullname);
    this._employee = value
    console.log('Previous ' + this._employee ? this._employee?.fullname : 'null');
  }

  get employee(): Employee {
    return this._employee
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const props of Object.keys(changes)) {

      const change = changes[props];
      const from = JSON.stringify(change.previousValue);
      const to = JSON.stringify(change.currentValue);
      console.log(props + ' changed from ' + from + ' to ' + to);
    }
  }



  ngOnInit(): void { }
}
