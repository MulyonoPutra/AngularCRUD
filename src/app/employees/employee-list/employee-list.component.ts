import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  employeeDisplay!: Employee;
  filteredEmployee!: Employee[];
  private arrayOfIndex: number = 1;
  private _searchTerm!: string;
  @Input() employee!: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployee = this.filterEmployees(value);
  }

  filterEmployees(search: string) {
    return this.employees.filter(
      (employee) =>
        employee.fullname.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(list => {
      this.employees = list;
      if (this.route.snapshot.queryParamMap.has('searchTerm')) {
        this.searchTerm =
          this.route.snapshot.queryParamMap.get('searchTerm')!;
      } else {
        this.filteredEmployee = this.employees;
      }
    });


  }

  nextEmployee() {
    if (this.arrayOfIndex <= 2) {
      this.employeeDisplay = this.employees[this.arrayOfIndex];
      this.arrayOfIndex++;
    } else {
      this.employeeDisplay = this.employees[0];
      this.arrayOfIndex = 1;
    }
  }

  details(employeeId: number) {
    this.router.navigate(['/details/' + employeeId], {
      queryParams: { searchTerm: this.searchTerm, testParams: 'testValue' },
    });
  }
}
