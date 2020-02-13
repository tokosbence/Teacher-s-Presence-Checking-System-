import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Employer } from '../../Model/Employer';
import { EmployerService } from '../../Services/employer.service';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  employers: Employer[];
  selectedEmployer: Employer;
 

  constructor(private router: Router, private employerService: EmployerService) { }

 getEmployers(): void {
    this.employerService
        .getEmployers()
        .then(employers => this.employers = employers);
  }

  deleteEmployer(employer: Employer): void {
    this.employerService
      .deleteEmployer(employer)
      .then(() => {
        this.employers = this.employers.filter(h => h !== employer);
        if (this.selectedEmployer === employer) { this.selectedEmployer = null; }
      });
  }

  ngOnInit() {
    this.getEmployers();
  }


}
