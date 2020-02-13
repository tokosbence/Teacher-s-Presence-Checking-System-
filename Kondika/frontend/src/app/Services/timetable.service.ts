import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Timetable} from '../Model/Timetable';
import { TimeRoomSubjectClass } from '../Model/TimeRoomSubjectClass';
import { Report } from '../Model/Report';


@Injectable()
export class TimetableService{
    constructor(private http:Http){

    }
    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private timetableUrl = '/timetable';
  private reportUrl = '/report';

 
  getTimetables():Promise<Timetable[]>{
      return this.http.get(this.timetableUrl)
      .toPromise()
      .then(response => response.json() as Timetable[])
      .catch(this.handleError);
  }
  
    getReports():Promise<Report[]>{
      return this.http.get(this.timetableUrl + "/report")
      .toPromise()
      .then(response => response.json() as Report[])
      .catch(this.handleError);
  }

  getTimetableForTeacher(employerid : number):Promise<TimeRoomSubjectClass[]>{
      return this.http.get(this.timetableUrl + "/teachers/"+ employerid)
      .toPromise()
      .then(response => response.json() as TimeRoomSubjectClass[])
      .catch(this.handleError);
  }

 
  addTimetable(timetable : Timetable): Promise<Timetable>{
     
        return this.http.post(this.timetableUrl+"/new", JSON.stringify(timetable),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Timetable)
        .catch(this.handleError);
  }

  deleteTimetable(timetable: Timetable): Promise<void> {
    const url = `${this.timetableUrl}/deleteTimetable/${timetable.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateTimetable(timetable: Timetable): Promise<Timetable> {
    return this.http
      .post(this.timetableUrl + "/updateTimetable", JSON.stringify(timetable), { headers: this.headers })
      .toPromise()
      .then(() => timetable)
      .catch(this.handleError);
  }

   getTimetable(id: number): Promise<Timetable> {
    const url = `${this.timetableUrl}/getTimetable/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Timetable)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}