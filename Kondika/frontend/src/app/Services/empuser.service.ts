import { Injectable } from '@angular/core';
import { EmployeUser } from '../Model/EmployeUser';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmpuserService {
  private currentUserUrl = 'http://localhost:8080/users/current';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { 
     console.log('EmpuserService is connected...');
  }

  getCurrentUser() : Observable<EmployeUser> {
    return this.http.get(this.currentUserUrl).map(
      (user : EmployeUser) =>
      {
        return user;
      });
  }

}
