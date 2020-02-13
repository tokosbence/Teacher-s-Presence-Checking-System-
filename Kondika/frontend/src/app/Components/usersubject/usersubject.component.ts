import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Usersubject } from '../../Model/usersubject';
import { UsersubjectService } from '../../Services/usersubject.service';

import { Subject } from '../../Model/Subject';
import { SubjectService } from '../../Services/subject.service';


@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-usersubject',
  templateUrl: './usersubject.component.html',
  styleUrls: ['./usersubject.component.css']
})
export class UsersubjectComponent implements OnInit {
  
  subjects: Subject[];
  selectedUsersubject: Usersubject;

  constructor(private router: Router, private usersubjectServices: UsersubjectService,private subjectService: SubjectService ) { }
  
  getSubjects(): void {
    this.subjectService
        .getSubjects()
        .then(subjects => this.subjects = subjects);
  }
  
  ngOnInit() {
    this.getSubjects();
    
  }

}
