import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Employer} from '../Model/Employer';

@Injectable()
export class EmployerService{
    constructor(private http:Http){

    }

    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private newteachersUrl = '/teachers';

  getEmployers():Promise<Employer[]>{
      return this.http.get(this.newteachersUrl)
      .toPromise()
      .then(response => response.json() as Employer[])
      .catch(this.handleError);
  }


  addEmployer(employer : Employer): Promise<Employer>{
     
        return this.http.post(this.newteachersUrl+"/new", JSON.stringify(employer),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Employer)
        .catch(this.handleError);
  }

  deleteEmployer(employer: Employer): Promise<void> {
    const url = `${this.newteachersUrl}/deleteEmployer/${employer.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

      updateEmployer(employer: Employer): Promise<Employer> {
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
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}