import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ResolvedEmployeeList } from 'src/app/models/resolved-employee-list.model';

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
  error!: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    const resolvedEmployeeList: Employee[] | string =
      this.route.snapshot.data['employeeList'];
    if (Array.isArray(resolvedEmployeeList)) {
      this.employees = resolvedEmployeeList;
    } else {
      this.error = resolvedEmployeeList;
    }

    if (this.route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this.route.snapshot.queryParamMap.get('searchTerm')!;
    } else {
      this.filteredEmployee = this.employees;
    }
  }

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

  ngOnInit(): void {}

  nextEmployee() {
    if (this.arrayOfIndex <= 2) {
      this.employeeDisplay = this.employees[this.arrayOfIndex];
      this.arrayOfIndex++;
    } else {
      this.employeeDisplay = this.employees[0];
      this.arrayOfIndex = 1;
    }
  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployee.findIndex((e) => e.id === id);
    if (i !== -1) {
      this.filteredEmployee.splice(i, 1);
    }
  }
}
