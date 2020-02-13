import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Subject } from '../../Model/Subject';
import { SubjectService } from '../../Services/subject.service';


@NgModule({
  imports:[MdListModule]
})


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[];
  selectedSubject: Subject;
 

  constructor(private router: Router, private subjectServices: SubjectService) { }

  getSubjects(): void {
    this.subjectServices
        .getSubjects()
        .then(subjects => this.subjects = subjects);
  }

  deleteSubject(subject: Subject): void {
    this.subjectServices
      .deleteSubject(subject)
      .then(() => {
        this.subjects = this.subjects.filter(h => h !== subject);
        if (this.selectedSubject === subject) { this.selectedSubject = null; }
      });
  }

  ngOnInit() {
    this.getSubjects();
  }
}
