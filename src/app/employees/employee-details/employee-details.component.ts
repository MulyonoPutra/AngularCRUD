import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee!: Employee;
  private _id!: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  // When to use snapshot over observable?
  // Snapshot: if the route parameter value does not change and only want to read the initial route parameter value.
  // Observable: if the route parameter value changes, and if you want to react and execute some code in response to that change

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this._id = +params.get('id')!;
      this.employeeService.findById(this._id).subscribe(
        (employee) => {
          this.employee = employee;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  viewNext() {
    this._id = this._id + 1;
    this.router.navigate(['/details/' + this._id], {
      queryParamsHandling: 'preserve',
    });
    console.log();
  }
}
