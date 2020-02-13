import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Subject } from '../../Model/Subject';
import { Employer} from '../../Model/Employer';
import { SubjectService } from '../../Services/subject.service';
import { EmployerService } from '../../Services/employer.service';


@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  model: any = {};
  errormessage : string ;
  
  @Input() employers: Employer[];
  @Input() subjects: Subject[];
  @Input() selectedSubject: Subject;
  @Input() newSubject: Subject;
 
  

  constructor(private router:Router, private subjectServices: SubjectService, private employerServices: EmployerService ) { }

    getEmployers(): void {
    this.employerServices
        .getEmployers()
        .then(employers => this.employers = employers);
  }
  
   ngOnInit() {
    this.newSubject = new Subject();
    this.getEmployers();

    
  } 
 

addSubject(subject: Subject): void{
     console.log("addSubject called");

      console.log("name: |"+subject.name+"|");
      console.log("passgrade: |"+subject.passgrade+"|");
      console.log("schoolbook: |"+subject.schoolbook+"|");

    if (subject.name === undefined || subject.name === null || subject.name === "") {
      console.log("hurra");
      this.errormessage = "Name not set!";
      return;
    }
  else if (subject.passgrade === undefined || subject.passgrade === null ) {
      console.log("hurra");
      this.errormessage = "Passgrade not set!";
      return;
    }
  else if (subject.schoolbook === undefined || subject.schoolbook === null || subject.schoolbook === "" ) {
      console.log("hurra");
      this.errormessage = "Schoolbook not set!";
      return;
    }
     this.subjectServices.addSubjects(subject)
    .then(subject=>{
      this.subjects.push(subject);
      this.selectedSubject = null;
      
    });
     this.router.navigate(['../subjects']);
     
  }
}
