import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Schedule} from '../Model/Schedule';

@Injectable()
export class ScheduleService{
    constructor(private http:Http){

    }

    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private scheduleUrl = '/schedule';

  getSchedules():Promise<Schedule[]>{
      return this.http.get(this.scheduleUrl)
      .toPromise()
      .then(response => response.json() as Schedule[])
      .catch(this.handleError);
  }


  addSchedule(schedule : Schedule): Promise<Schedule>{
     
        return this.http.post(this.scheduleUrl+"/new", JSON.stringify(schedule),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Schedule)
        .catch(this.handleError);
  }

  deleteSchedule(schedule: Schedule): Promise<void> {
    const url = `${this.scheduleUrl}/deleteSchedule/${schedule.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

      updateSchedule(schedule: Schedule): Promise<Schedule> {
    return this.http
      .post(this.scheduleUrl + "/updateSchedule", JSON.stringify(schedule), { headers: this.headers })
      .toPromise()
      .then(() => schedule)
      .catch(this.handleError);
  }

   getSchedule(id: number): Promise<Schedule> {
    const url = `${this.scheduleUrl}/getSchedule/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Schedule)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}