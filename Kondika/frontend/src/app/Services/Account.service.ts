import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';


import {Employer} from '../Model/Employer';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AccountService{
    
    constructor(private http:Http,  private authenticationService: AuthenticationService){

    }
 /*   
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private newteachersUrl = '/teachers';*/

  getEmployers():Observable<Employer[]>{
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
      let options = new RequestOptions({ headers: headers });

      return this.http.get('/api/employers', options)
        .map((response: Response) => response.json());
    
     /* .toPromise()
      .then(response => response.json() as Employer[])
      .catch(this.handleError);*/

  }
      /*   updateEmployer(employer: Employer): Promise<Employer> {
    return this.http
      .post(this.newteachersUrl + "/updateEmployer", JSON.stringify(employer), { headers: this.headers })
      .toPromise()
      .then(() => employer)
      .catch(this.handleError);
  }

   getEmployer(id: number): Promise<Employer> {
    const url = `${this.newteachersUrl}/getEmployer/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Employer)
      .catch(this.handleError);
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}