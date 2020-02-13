import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Room } from '../../Model/Room';
import { RoomService } from '../../Services/room.service';


@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
 model: any = {};
 errormessage : string ;

  @Input() room: Room[];
  @Input() selectedRoom: Room;
  @Input() newRoom: Room;
  

  constructor(private router:Router, private roomService: RoomService) { }

  ngOnInit() {
     this.newRoom = new Room();
  }

  addRoom(room: Room): void{
    console.log("addRoom called");
  
      console.log("name: |"+room.name+"|");
      console.log("floor: |"+room.floor+"|");
      console.log("key_location: |"+room.key_location+"|");

    if (room.name === undefined || room.name === null || room.name === "") {
      console.log("hurra");
      this.errormessage = "Name not set!";
      return;
    }
   else if (room.key_location === undefined || room.key_location === null || room.key_location === "" ) {
      console.log("hurra");
      this.errormessage = "Key location not set!";
      return;
    }
    else if (room.floor === undefined || room.floor === null ) {
      console.log("hurra");
      this.errormessage = "Floor not set!";
      return;
    }


       this.roomService.addRoom(room)
    .then(room=>{
      this.room.push(room);
      this.selectedRoom = null;
    });
     this.router.navigate(['../room']);
     }
}
