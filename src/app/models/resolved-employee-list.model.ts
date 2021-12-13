import { Employee } from "./employee";

export class ResolvedEmployeeList {
    constructor(public employeeList: Employee[], public error: any = null) { }
}
