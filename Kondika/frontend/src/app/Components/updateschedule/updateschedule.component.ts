import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../../Model/Schedule';
import { ScheduleService } from '../../Services/schedule.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {

   @Input() schedule: Schedule;

  constructor(
    private scheduleService:ScheduleService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit():void {
    this.schedule = new Schedule();
    this.route.params.switchMap((params: Params)=> this.scheduleService.getSchedule(+params['id']))
      .subscribe(schedule => this.schedule = schedule);
  }
    updateSchedule(): void {
    this.scheduleService.updateSchedule(this.schedule);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }

}
