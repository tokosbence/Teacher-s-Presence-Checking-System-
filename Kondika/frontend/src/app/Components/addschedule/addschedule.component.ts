import { Component, OnInit,Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Schedule } from '../../Model/Schedule';
import { ScheduleService } from '../../Services/schedule.service';



@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
model: any = {};
errormessage:string;




  @Input() schedules: Schedule[];
  @Input() selectedSchedule: Schedule;
  @Input() newSchedule: Schedule;
  

  constructor(private router:Router, private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.newSchedule = new Schedule();
    this.newSchedule.start_date = new Date();
    this.newSchedule.end_date = new Date();

  }

  addSchedule(schedule: Schedule): void{
   console.log("Start date:" + schedule.start_date);
     console.log("End date:" + schedule.end_date);

     /*Validation*/
      if (schedule.start_date === undefined || schedule.start_date === null) {
      console.log("hurra");
      this.errormessage = "Start date not set!";
      return;
    }
   else if (schedule.end_date === undefined || schedule.end_date === null ) {
      console.log("hurra");
      this.errormessage = "End date not set!";
      return;
    }
   else if (schedule.start_date >= schedule.end_date ) {
         this.errormessage="Start date not good!";
         return;
   }

    this.scheduleService.addSchedule(schedule)
    .then(schedule=>{
      this.schedules.push(schedule);
      this.selectedSchedule = null;
    });
     this.router.navigate(['../schedule']);
  }

}
