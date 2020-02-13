import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../Model/Room';
import { RoomService } from '../../Services/room.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-updateroom',
  templateUrl: './updateroom.component.html',
  styleUrls: ['./updateroom.component.css']
})
export class UpdateroomComponent implements OnInit {

  @Input() room : Room;

  constructor(
    private roomService:RoomService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.room = new Room();
    this.route.params.switchMap((params: Params)=> this.roomService.getRoom(+params['id']))
      .subscribe(employer => this.room = employer);

  }
  updateRoom(): void {
    this.roomService.updateRoom(this.room);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }
}
