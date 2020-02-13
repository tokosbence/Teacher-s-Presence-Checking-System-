import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { LogEntry } from '../../Model/LogEntry';
import { LogEntryService } from '../../Services/LogEntry.service';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.css']
})
export class LogEntryComponent implements OnInit {
 
   logEntrys: LogEntry[];
  constructor(
 private router: Router,
 private logEntryService: LogEntryService

  ) { }

  
 getLogEntrys(): void {
    this.logEntryService
        .getLogEntrys()
        .then(logEntrys => this.logEntrys = logEntrys);
  }

  ngOnInit() {
    this.getLogEntrys();
  }

}
