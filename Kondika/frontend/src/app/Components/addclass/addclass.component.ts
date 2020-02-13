import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Class } from '../../Model/Class';
import { ClassService } from '../../Services/class.service';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})

export class AddclassComponent implements OnInit {
  model: any = {};
  errormessage : string = "valami";

  @Input() selectedClass: Class;
  @Input() newClass: Class;


  constructor(private router:Router, private classService: ClassService) { }
 

  ngOnInit() {
    this.newClass = new Class();
  }

addClass(class_: Class): void{
  this.classService.addClass(class_)
    .then(class_=>{
          this.selectedClass = null;
    });
  }

}
