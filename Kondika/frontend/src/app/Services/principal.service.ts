import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { EmployeUser } from '../Model/EmployeUser';
import { EmpuserService } from '../Services/empuser.service';

@Injectable()
export class PrincipalService {
  empUser: EmployeUser;

  constructor(
     private eService: EmpuserService,
  ) { 
     console.log('PrincipalService is connected...');
  }

  setPrincipal() : Observable<void>
  {
    console.log('SetPrincipal is called...');
    return this.eService.getCurrentUser().map(
      user => {
        this.empUser = user;
        console.log('SetPrincipal -> EmployeUser set...');
      });
  }
   
  isAdmin() : boolean
  {
    return this.empUser.role == 1;
  }

}
