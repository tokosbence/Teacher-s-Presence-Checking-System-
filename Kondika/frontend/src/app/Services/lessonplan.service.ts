import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Lessonplan } from '../Model/Lessonplan';

@Injectable()
export class LessonplanService{
    constructor(private http:Http){

    }
    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private lessonplanUrl = '/lessonplan';

  getLessonplans():Promise<Lessonplan[]>{
      return this.http.get(this.lessonplanUrl)
      .toPromise()
      .then(response => response.json() as Lessonplan[])
      .catch(this.handleError);
  }


  addLessonplan(lessonplan : Lessonplan): Promise<Lessonplan>{
     
        return this.http.post(this.lessonplanUrl+"/new", JSON.stringify(lessonplan),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Lessonplan)
        .catch(this.handleError);
  }

  deleteLessonplan(lessonplan: Lessonplan): Promise<void> {
    const url = `${this.lessonplanUrl}/deleteLessonplan/${lessonplan.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

 updateLessonplan(lessonplan: Lessonplan): Promise<Lessonplan> {
    return this.http
      .post(this.lessonplanUrl + "/updateLessonplan", JSON.stringify(lessonplan), { headers: this.headers })
      .toPromise()
      .then(() => lessonplan)
      .catch(this.handleError);
  }

   getLessonplan(id: number): Promise<Lessonplan> {
    const url = `${this.lessonplanUrl}/getLessonplan/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Lessonplan)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}