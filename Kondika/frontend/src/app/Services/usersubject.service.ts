import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Usersubject} from '../Model/Usersubject';

@Injectable()
export class UsersubjectService{
    constructor(private http:Http){

    }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private usersubjectUrl = '/usersubject';

  getUsersubjects():Promise<Usersubject[]>{
      return this.http.get(this.usersubjectUrl)
      .toPromise()
      .then(response => response.json() as Usersubject[])
      .catch(this.handleError);
  }

  

   getUsersubject(id: number): Promise<Usersubject> {
    const url = `${this.usersubjectUrl}/getUsersubject/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Usersubject)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}