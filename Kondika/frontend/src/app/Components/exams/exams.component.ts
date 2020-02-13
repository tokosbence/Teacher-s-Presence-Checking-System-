import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
   isEdit:boolean = false;
   isAdd:boolean= true;

  constructor() { }

  ngOnInit() {
  }
   toggleEdit(){
    this.isEdit =!this.isEdit;
    this.isAdd=!this.isAdd;
  }


}
