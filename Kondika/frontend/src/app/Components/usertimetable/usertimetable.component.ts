import { Component, OnInit, Input } from '@angular/core';
import {  Day } from '../../Model/Timetable';
import { TimetableService } from '../../Services/timetable.service';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { Router } from '@angular/router';
import { EmpuserService} from '../../Services/empuser.service';
import { EmployerService} from '../../Services/employer.service';
import { EmployeUser } from '../../Model/EmployeUser';
import { Employer } from '../../Model/Employer';
import { TimeRoomSubjectClass } from '../../Model/TimeRoomSubjectClass';


@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-usertimetable',
  templateUrl: './usertimetable.component.html',
  styleUrls: ['./usertimetable.component.css']
})
export class UsertimetableComponent implements OnInit {
  
 forTuesday: TimeRoomSubjectClass[];
 forMonday: TimeRoomSubjectClass[];
 forWednesday: TimeRoomSubjectClass[];
 forThursday : TimeRoomSubjectClass[];
 forFriday : TimeRoomSubjectClass[];
 
  constructor(
    private router: Router, 
    private timetableService: TimetableService, 
    private empuserService:EmpuserService,
    private employerService:EmployerService,
  )
   { }

    
  ngOnInit() {
     this.empuserService.getCurrentUser()
            .subscribe(user  => {
              this.employerService.getEmployers ()
                .then(employers  => {
                  var employer = employers.filter(employer => employer.employeUser != undefined && employer.employeUser != null && employer.employeUser.id === user.id)[0];
                  this.timetableService.getTimetableForTeacher(employer.id) 
                    .then(timetables => {
                      console.log("NA! |" + Day[timetables[0].timetable.day] + "| |" + Day.TUESDAY + "| :"
                           + (Day[timetables[0].timetable.day].toString() === Day.TUESDAY.toString() ));

                      this.forMonday = timetables.filter(timetable => Day[timetable.timetable.day].toString() == Day.MONDAY.toString()); console.log("Monday:"+ this.forMonday);
                      this.forTuesday = timetables.filter(timetable => Day[timetable.timetable.day].toString() == Day.TUESDAY.toString()); console.log("Tuesday:"+ this.forTuesday);
                      this.forWednesday = timetables.filter(timetable =>Day[timetable.timetable.day].toString() == Day.WEDNESDAY.toString()); console.log("Wednesday:"+ this.forWednesday);
                      this.forThursday = timetables.filter(timetable => Day[timetable.timetable.day].toString() == Day.THURSDAY.toString());console.log("Thursday:"+ this.forThursday);
                      this.forFriday = timetables.filter(timetable => Day[timetable.timetable.day].toString() == Day.FRIDAY.toString());console.log("Friday:"+ this.forFriday);


                    });
                              });                
            } );  
 }
}
