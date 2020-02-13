import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacheruser',
  templateUrl: './teacheruser.component.html',
  styleUrls: ['./teacheruser.component.css']
})
export class TeacheruserComponent implements OnInit {
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
