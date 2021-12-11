import {
  Component,
  Input, Output, EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss'],
})
export class EmployeeViewComponent implements OnInit {

  selectedId!: number;
  private _employee!: Employee;
  private _employeeId!: number;
  @Input() searchTerm!: string;

  // ngOnChanges
  // We get all the changes instead of just the changes related to a single property
  // useful when multiple properties changes

  // Setter
  // Property setter is specific to a given property, so we only get changes of that specific property.

  @Input()
  set employeeId(value: number) {
    console.log(
      'changed from ' + JSON.stringify(this._employeeId) + ' to ' + value
    );
    this._employeeId = value;
  }

  get employeeId(): number {
    return this._employeeId;
  }

  @Input()
  set employee(value: Employee) {
    console.log(
      'changed from  ' +
        JSON.stringify(this._employee) +
        ' to ' +
        JSON.stringify(value)
    );
    this._employee = value;
  }

  get employee(): Employee {
    return this._employee;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.paramMap.get('id')!;
  }

  getEmployeeNameAndGender(): string {
    return this.employee.fullname + ' ' + this.employee.gender;
  }

  view(){
    this.router.navigate(['/details', this.employee.id], { queryParams: {
      'searchTerm': this.searchTerm
    }});

  }
}
