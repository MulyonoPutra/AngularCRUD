import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

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
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;

  // ngOnChanges
  // We get all the changes instead of just the changes related to a single property
  // useful when multiple properties changes

  // Setter
  // Property setter is specific to a given property, so we only get changes of that specific property.

  @Input()
  set employeeId(value: number) {
    this._employeeId = value;
  }

  get employeeId(): number {
    return this._employeeId;
  }

  @Input()
  set employee(value: Employee) {
    this._employee = value;
  }

  get employee(): Employee {
    return this._employee;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.selectedId = +this.route.snapshot.paramMap.get('id')!;
  }

  getEmployeeNameAndGender(): string {
    return this.employee.fullname + ' ' + this.employee.gender;
  }

  view() {
    this.router.navigate(['/details', this.employee.id], {
      queryParams: {
        searchTerm: this.searchTerm,
      },
    });
  }

  edit() {
    this.router.navigate(['/edit', this.employee.id]);
  }

  delete() {
    this.employeeService.delete(this.employee.id).subscribe(
      () => console.log(`Employee with ID: ${this.employee.id} Deleted`),
      (err) => console.log(err)
    );
    this.notifyDelete.emit(this.employee.id);
  }
}
