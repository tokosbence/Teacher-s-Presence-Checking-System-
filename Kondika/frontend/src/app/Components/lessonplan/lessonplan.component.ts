import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Lessonplan } from '../../Model/Lessonplan';
import { LessonplanService } from '../../Services/lessonplan.service';



@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-lessonplan',
  templateUrl: './lessonplan.component.html',
  styleUrls: ['./lessonplan.component.css']
})
export class LessonplanComponent implements OnInit {
  
  lessonplans: Lessonplan[];
  selectedLessonplan: Lessonplan;

  constructor( private router: Router, private lessonplanService: LessonplanService ) { }

  getLessonplans(): void {
    this.lessonplanService
        .getLessonplans()
        .then(lessonplans => this.lessonplans = lessonplans);
  }

  deleteLessonplan(lessonplan: Lessonplan): void {
    this.lessonplanService
      .deleteLessonplan(lessonplan)
      .then(() => {
        this.lessonplans = this.lessonplans.filter(h => h !== lessonplan);
        if (this.selectedLessonplan === lessonplan) { this.selectedLessonplan = null; }
      });
  }

  ngOnInit() {
    this.getLessonplans();
     }

}
