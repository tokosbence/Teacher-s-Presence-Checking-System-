import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Room } from '../../Model/Room';
import { RoomService } from '../../Services/room.service';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[];
  selectedRoom: Room;

  constructor(private router: Router, private roomService: RoomService) { }
  
 getRooms(): void {
    this.roomService
        .getRooms()
        .then(room => this.rooms = room);
  }

  deleteRoom(room: Room): void {
    this.roomService
      .deleteRoom(room)
      .then(() => {
        this.rooms = this.rooms.filter(h => h !== room);
        if (this.selectedRoom === room) { this.selectedRoom = null; }
      });
  }

  ngOnInit() {
    this.getRooms();
  }

}
