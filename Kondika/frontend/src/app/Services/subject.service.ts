import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Subject} from '../Model/Subject';


@Injectable()
export class SubjectService{
    constructor(private http:Http){

    }

    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private subjectsUrl = '/subjects';

  getSubjects():Promise<Subject[]>{
      return this.http.get(this.subjectsUrl)
      .toPromise()
      .then(response => response.json() as Subject[])
      .catch(this.handleError);
  }


  addSubjects(subject : Subject): Promise<Subject>{
     
        return this.http.post(this.subjectsUrl+"/new", JSON.stringify(subject),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Subject)
        .catch(this.handleError);
  }

  deleteSubject(subject: Subject): Promise<void> {
    const url = `${this.subjectsUrl}/deleteSubject/${subject.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateSubject(subject: Subject): Promise<Subject> {
    return this.http
      .post(this.subjectsUrl + "/updateSubject", JSON.stringify(subject), { headers: this.headers })
      .toPromise()
      .then(() => subject)
      .catch(this.handleError);
  }

   getSubject(id: number): Promise<Subject> {
    const url = `${this.subjectsUrl}/getSubject/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Subject)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}