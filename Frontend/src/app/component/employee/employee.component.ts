import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Employee } from "../../Employee";
import { UserService } from "../../service/EmployeeService/user.service"

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: any;

  constructor(private employeeService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employeeService.getEmployeesList().subscribe((response:Response)=>{
      console.log("Response is ====> ",response)
       this.employees = response;
      console.log(this.employees)
    })
  }

  deleteEmployee(id) {
    console.log(id)
     this.employeeService.deleteEmployee(id)
       .subscribe((response:any) => {
         console.log(response)
         this.reloadData();
       })
  }
}
