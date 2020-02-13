
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Class } from '../Model/Class';

@Injectable()
export class ClassService{
    constructor(private http:Http){

    }

    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private classesUrl = '/classes';

  getClasses():Promise<Class[]>{
      return this.http.get(this.classesUrl)
      .toPromise()
      .then(response => response.json() as Class[])
      .catch(this.handleError);
  }

  
  addClass(class_ : Class): Promise<Class>{
     
        return this.http.post(this.classesUrl+"/new", JSON.stringify(class_),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Class)
        .catch(this.handleError);
  }

  
  deleteClass(class_: Class): Promise<void> {
    const url = `${this.classesUrl}/${class_.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

 updateClass(class_: Class): Promise<Class> {
    return this.http
      .post(this.classesUrl + "/updateClass", JSON.stringify(class_), { headers: this.headers })
      .toPromise()
      .then(() => class_)
      .catch(this.handleError);
  }

   getClass(id: number): Promise<Class> {
    const url = `${this.classesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Class)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}