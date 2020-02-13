import { Component, OnInit, Input } from '@angular/core';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { Router } from '@angular/router';
import { TimetableService } from '../../Services/timetable.service';
import {  Report } from '../../Model/Report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
 
})
export class ReportComponent implements OnInit {

   reports : Report[];
  

  constructor(
    private router: Router, 
    private timetableService: TimetableService, 


  ) { }
 
   
 getReports(): void {
    this.timetableService
        .getReports()
        .then(reports => {this.reports = reports;console.log("hurra"+this.reports.length +this.reports[0].timetable)});
  }
  
 
  ngOnInit() {
    this.getReports();
    console.log(this.reports);
     
}

}

