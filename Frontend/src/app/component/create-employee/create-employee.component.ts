import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/EmployeeService/user.service"
import { Employee } from "../../Employee";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: UserService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee).subscribe((response:any) => {
      console.log(response);
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
