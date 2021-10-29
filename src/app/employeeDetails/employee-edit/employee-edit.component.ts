import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
 
import { Employeeall } from 'src/app/shared/employeeall.modal';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeList: Employeeall[];
  editableId: number ;
  error= '';
  updateMsg: string = '';
  updateMsgShow = false;

  constructor(private employeeService: EmployeeService, private activatedroute: ActivatedRoute,  ) { }
id: number;
  addEmployee: FormGroup;

  ngOnInit() {

    this.addEmployee = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNum: new FormControl('', [Validators.required]),  
      hireDate: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      managerId: new FormControl('', [Validators.required]),
  })


this.activatedroute.paramMap.subscribe((params)=>{
const idEdit = +params.get('id');
this.getemployeewithId(idEdit);
});
}



getemployeewithId(idEdit: number): void{
  this.employeeService.getSingleEmployee(idEdit).subscribe(
    (data: Employeeall[])=> {
       this.employeeList = data;
       this.editableId = +idEdit;
       this.addEmployee.controls.fname.setValue(this.employeeList[0].fname);
       this.addEmployee.controls.lname.setValue(this.employeeList[0].lname);
       this.addEmployee.controls.email.setValue(this.employeeList[0].email);
       this.addEmployee.controls.phoneNum.setValue(this.employeeList[0].phoneNum);
       this.addEmployee.controls.hireDate.setValue(this.employeeList[0].hireDate);
       this.addEmployee.controls.jobTitle.setValue(this.employeeList[0].jobTitle);
       this.addEmployee.controls.managerId.setValue(this.employeeList[0].managerId);
      // console.log(this.employeeList[0].name);
    },
    (err)=>{this.error = err; console.log(this.error)}
  )
}

newEmployee: Employeeall;
onUpdate(employeeId: number){
    this.newEmployee = {
employeeId: employeeId,
fname: this.addEmployee.value.fname,
lname: this.addEmployee.value.lname,
email: this.addEmployee.value.email,
phoneNum: this.addEmployee.value.phoneNum,
hireDate: this.addEmployee.value.hireDate,
jobTitle: this.addEmployee.value.jobTitle,
managerId: this.addEmployee.value.managerId
}
    this.employeeService.updateEmployee(this.newEmployee).subscribe(data=>{
      console.log(data);
      this.updateMsgShow = true;
 this.updateMsg = 'Data has been updated!';
  
    });
}
}
