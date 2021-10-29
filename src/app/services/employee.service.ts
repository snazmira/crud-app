import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../shared/employee.modal';
import {  Employeeall } from '../shared/employeeall.modal';
import { User } from '../shared/user.modal';

@Injectable()

export class EmployeeService {

employeeList: Employeeall[];
user: User;
userCount=[];
base_URL = 'http://localhost/backend';

constructor(private httpClient: HttpClient, private router: Router){}

addEmployee(employee: Employee): Observable<Employee>{
const _url = this.base_URL + '/core/create.php';
return this.httpClient.post<Employee>(_url, employee, {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    
  }).pipe(
    catchError(this.handleError)
);
}

getEmployee(): Observable<Employeeall[]>{
const _url = this.base_URL + '/core/read.php';
return this.httpClient.get(_url).pipe(map((res)=> { return this.employeeList = res['data']}),
catchError(this.handleError)
   )
}

/* deleteEmployee(employeeId: number): Observable<Employeeall[]>{
    const _url = this.base_URL + '/core/delete.php';
    const params = new HttpParams()
      .set('employeeId', employeeId.toString());

    return this.httpClient.delete(_url, {params: params}).pipe(map((res)=>{
const filteredList = this.employeeList.filter((Employeeall)=>{
  return +Employeeall['employeeId'] !== +employeeId;
});
return this.employeeList = filteredList;
    }),
    catchError(this.handleError));

} */

deleteEmployee(employeeId: number){
  return this.httpClient.delete<Employee>(`${this.base_URL}/core/delete.php?employeeId=${employeeId}`);
}

getSingleEmployee(employeeId: number): Observable<Employeeall[]>{
    const _url = this.base_URL + '/core/getemployee.php';
    const params = new HttpParams().set('employeeId', employeeId.toString());

    return this.httpClient.get(_url, {params: params}).pipe(map((result)=>{
        return this.employeeList = result['dataSingle'];
    }),
    catchError(this.handleError));
}

updateEmployee(employeeList: Employeeall){
const _url = this.base_URL + '/core/update.php';

return this.httpClient.post(_url, employeeList, {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    
  }).pipe(map((data)=>{
      this.employeeList = data['data'];
  }),
  catchError(this.handleError))

}


signUp(user: User): Observable<User>{
    const _url = this.base_URL + '/core/signup.php';
return this.httpClient.post<User>(_url, user, {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    
  }).pipe(
    catchError(this.handleError)
);
}

signIn(user: User){
const _url = this.base_URL + '/core/signin.php';

return this.httpClient.post(_url, user, {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    
  }).pipe(map((res)=>{
return this.userCount = res['data'];
}),
catchError(this.handleError)
);

}

handleError(error: HttpErrorResponse){
    return throwError(error.message || "");
}
}