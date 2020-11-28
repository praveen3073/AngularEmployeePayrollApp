import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/EmployeeService/user.service"
import { Employee } from "../../Employee";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
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
    this.employeeService.updateEmployee(this.employee).subscribe((response:any) => {
      console.log(response);
    })
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
