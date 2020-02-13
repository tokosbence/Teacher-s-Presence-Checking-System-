import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Room} from '../Model/Room';

@Injectable()
export class RoomService{
    constructor(private http:Http){

    }

    
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private roomUrl = '/room';

  getRooms():Promise<Room[]>{
      return this.http.get(this.roomUrl)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  
  addRoom(room : Room): Promise<Room>{
     
        return this.http.post(this.roomUrl+"/new", JSON.stringify(room),{headers:this.headers}).
        toPromise()
        .then(res => res.json() as Room)
        .catch(this.handleError);
  }

  
  deleteRoom(room: Room): Promise<void> {
    const url = `${this.roomUrl}/deleteRoom/${room.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

 updateRoom(room: Room): Promise<Room> {
    return this.http
      .post(this.roomUrl + "/updateRoom", JSON.stringify(room), { headers: this.headers })
      .toPromise()
      .then(() => room)
      .catch(this.handleError);
  }

   getRoom(id: number): Promise<Room> {
    const url = `${this.roomUrl}/getRoom/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
