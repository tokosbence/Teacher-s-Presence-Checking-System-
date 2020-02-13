import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LogEntry } from '../Model/LogEntry';

@Injectable()
export class LogEntryService{
    constructor(private http:Http){

    }
    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private logEntryUrl = '/logEntry';

  getLogEntrys():Promise<LogEntry[]>{
      return this.http.get(this.logEntryUrl)
      .toPromise()
      .then(response => response.json() as LogEntry[])
      .catch(this.handleError);
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}