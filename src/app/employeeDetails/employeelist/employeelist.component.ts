import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../services/employee.service';
import { Employeeall } from '../../shared/employeeall.modal';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

employeeList: Employeeall[];
error = '';
alertDelete: string;
deleteShow = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }




  ngOnInit() {
this.getEmployee();
}

getEmployee(): void {
  this.employeeService.getEmployee().subscribe(
(data: Employeeall[]) =>{
  this.employeeList = data;
  console.log(this.employeeList);
},
(err) => {
  this.error = err;
}
  )
}

/* delete(employeeId: number){
  this.employeeService.deleteEmployee(+employeeId).subscribe((res: Employeeall[])=>{
    this.employeeList = res;
    this.deleteShow = true; 
    this.alertDelete = 'Data had been deleted!';
    // this.getEmployee();
  })
  } */

  delete(employeeId:number){
    this.employeeService.deleteEmployee(employeeId).subscribe(res => {
         this.employeeList = this.employeeList.filter(item => item.employeeId !== employeeId);
         console.log('Employee deleted successfully!');
    })
  }

  update(employeeId: number){
    this.router.navigate(['/employee/update', employeeId]);
    }

  }


