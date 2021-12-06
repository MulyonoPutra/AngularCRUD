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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this._id = +params.get('id')!;
      this.employee = this.employeeService.findById(this._id);
    });
  }

  viewNext(){
    this._id = this._id + 1;
    this.router.navigate(['/details/' + this._id]);
    console.log();

  }
}
