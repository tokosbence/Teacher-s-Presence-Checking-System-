
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { Class } from '../../Model/Class';
import { ClassService } from '../../Services/class.service';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {
  
  classes: Class[];
  selectedClass: Class;
 

  constructor(private router: Router, private classService: ClassService) { }

 getClasses(): void {
    this.classService
        .getClasses()
        .then(classes => this.classes = classes);
  }

  deleteClass(class_: Class): void {
    this.classService
      .deleteClass(class_)
      .then(() => {
        this.classes = this.classes.filter(h => h !== class_);
        if (this.selectedClass === class_) { this.selectedClass = null; }
      });
  }

  ngOnInit() {
    this.getClasses();
  }
 
}
