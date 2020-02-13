import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Timetable } from '../../Model/Timetable';
import { TimetableService } from '../../Services/timetable.service';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

 timetables: Timetable[];

  constructor(private router: Router, private timetableService: TimetableService) { }

  getTimetables(): void {
    this.timetableService
        .getTimetables()
        .then(employers => this.timetables = employers);
  }

  ngOnInit() {
    this.getTimetables();
  }

}
