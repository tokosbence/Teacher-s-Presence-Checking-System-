import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Schedule } from '../../Model/Schedule';
import { ScheduleService } from '../../Services/schedule.service';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  schedules: Schedule[];
  selectedSchedule: Schedule;

  constructor(private router: Router, private scheduleService: ScheduleService) { }

  
 getSchedules(): void {
    this.scheduleService
        .getSchedules()
        .then(schedules => this.schedules = schedules);
  }

  deleteSchedule(schedule: Schedule): void {
    this.scheduleService
      .deleteSchedule(schedule)
      .then(() => {
        this.schedules = this.schedules.filter(h => h !== schedule);
        if (this.selectedSchedule === schedule) { this.selectedSchedule = null; }
      });
  }

  ngOnInit() {
    this.getSchedules();
  }

}
