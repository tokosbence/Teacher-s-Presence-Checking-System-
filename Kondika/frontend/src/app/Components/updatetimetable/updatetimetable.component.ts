import { Component, OnInit, Input } from '@angular/core';
import { Timetable } from '../../Model/Timetable';
import { TimetableService } from '../../Services/timetable.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-updatetimetable',
  templateUrl: './updatetimetable.component.html',
  styleUrls: ['./updatetimetable.component.css']
})
export class UpdatetimetableComponent implements OnInit {

  @Input() timetable : Timetable;

  constructor(
    private timetableService:TimetableService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit():void {
     this.timetable = new Timetable();
    this.route.params.switchMap((params: Params)=> this.timetableService.getTimetable(+params['id']))
      .subscribe(timetable => this.timetable = timetable);

  }
 updateTimetable(): void {
    this.timetableService.updateTimetable(this.timetable);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }
}
