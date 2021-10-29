import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../shared/employee.modal';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {



  constructor(private employeeService: EmployeeService ) { }

  addEmployee: FormGroup;
  addMessage:string;
  addMessageShow = false;
  error;

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
}
newEmployee: Employee;
onSubmit(){
    this.newEmployee = {
      fname: this.addEmployee.value.fname,
      lname: this.addEmployee.value.lname,
      email: this.addEmployee.value.email,
      phoneNum: this.addEmployee.value.phoneNum,
      hireDate: this.addEmployee.value.hireDate,
      jobTitle: this.addEmployee.value.jobTitle,
      managerId: this.addEmployee.value.managerId
}
    this.employeeService.addEmployee(this.newEmployee ).subscribe(data=>{
      console.log(data)
      this.addMessageShow = true;
      this.addMessage = "Data has been added!";
    },
    (err)=>this.error = err
    );
}

}



