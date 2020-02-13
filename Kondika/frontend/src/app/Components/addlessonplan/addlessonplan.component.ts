import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Lessonplan } from '../../Model/Lessonplan';
import { LessonplanService } from '../../Services/lessonplan.service';


@Component({
  selector: 'app-addlessonplan',
  templateUrl: './addlessonplan.component.html',
  styleUrls: ['./addlessonplan.component.css']
})
export class AddlessonplanComponent implements OnInit {

   model: any = {};
 errormessage : string ;

  @Input() lessonplans: Lessonplan[];
  @Input() selectedLessonplan: Lessonplan;
  @Input() newLessonplan: Lessonplan;

  constructor(private router:Router, private lessonplanService: LessonplanService) { }

  ngOnInit() {
    this.newLessonplan = new Lessonplan();
  }

  addLessonplan(lessonplan: Lessonplan): void{
     console.log("addLessonplan called");

      console.log("hourse_number: |"+lessonplan.hours_number+"|");
      console.log("name: |"+lessonplan.name+"|");
      console.log("lessons: |"+lessonplan.lessons+"|");

    if (lessonplan.hours_number === undefined || lessonplan.hours_number === null ) {
      console.log("hurra");
      this.errormessage = "Hour number not set!";
      return;
    }
  else if (lessonplan.name === undefined || lessonplan.name === null || lessonplan.name === "" ) {
      console.log("hurra");
      this.errormessage = "Name not set!";
      return;
    }
  else if (lessonplan.lessons === undefined || lessonplan.lessons === null || lessonplan.lessons === "" ) {
      console.log("hurra");
      this.errormessage = "Lessons not set!";
      return;
    }
   

    this.lessonplanService.addLessonplan(lessonplan)
    .then(lessonplan=>{
      this.lessonplans.push(lessonplan);
      this.selectedLessonplan = null;
    });
     this.router.navigate(['../lessonplan']);
  
  }

}
