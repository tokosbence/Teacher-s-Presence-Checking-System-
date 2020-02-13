import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule,MdTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/admin/admin.component';

import { AuthenticationService } from './authentication.service';

import { TeachersComponent } from './Components/teachers/teachers.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { ClassComponent } from './Components/class/class.component';
import { EventsComponent } from './Components/events/events.component';
import { ExamsComponent } from './Components/exams/exams.component';
import { TeacheruserComponent } from './Components/teacheruser/teacheruser.component';
 
import { EmpuserService } from './Services/empuser.service'; 
import { PrincipalService } from './Services/principal.service'; 
import { EmployerService} from './Services/employer.service';
import { SubjectService} from './Services/subject.service';
import { ClassService} from './Services/class.service';
import { RoomService} from './Services/room.service';
import { ScheduleService} from './Services/schedule.service';
import { UsersubjectService} from './Services/usersubject.service';
import { LessonplanService} from './Services/lessonplan.service';
import { AccountService} from './Services/account.service';
import { TimetableService} from './Services/timetable.service';
import { LogEntryService} from './Services/LogEntry.service';


import { AuthInterceptor } from './AuthInterceptor'; 
import { CanActivateAuthGuard } from './can-activate.authguard';
import { AddteacherComponent } from './Components/addteacher/addteacher.component';
import { AdminheaderComponent } from './Components/adminheader/adminheader.component';
import { AdminfooterComponent } from './Components/adminfooter/adminfooter.component';
import { AdminnavbarComponent } from './Components/adminnavbar/adminnavbar.component';
import { AdminbodyComponent } from './Components/adminbody/adminbody.component';
import { UpdateteacherComponent } from './Components/updateteacher/updateteacher.component';
import { AddsubjectComponent } from './Components/addsubject/addsubject.component'; 
import { UpdatesubjectComponent} from './Components/updatesubject/updatesubject.component';
import { AddclassComponent } from './Components/addclass/addclass.component';
import { UpdateClassComponent } from './Components/updateclass/updateclass.component';
import { RoomComponent } from './Components/room/room.component';
import { AddroomComponent } from './Components/addroom/addroom.component';
import { UpdateroomComponent } from './Components/updateroom/updateroom.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { AddscheduleComponent } from './Components/addschedule/addschedule.component';
import { UpdatescheduleComponent } from './Components/updateschedule/updateschedule.component';
import { VacationComponent } from './Components/vacation/vacation.component';
import { AddvacationComponent } from './Components/addvacation/addvacation.component';
import { UpdatevacationComponent } from './Components/updatevacation/updatevacation.component';
import { TimetableComponent } from './Components/timetable/timetable.component';
import { UpdatetimetableComponent } from './Components/updatetimetable/updatetimetable.component';
import { UsernavbarComponent } from './Components/usernavbar/usernavbar.component';
import { UsersubjectComponent } from './Components/usersubject/usersubject.component';
import { HolidaysComponent } from './Components/holidays/holidays.component';

import { AddlessonplanComponent } from './Components/addlessonplan/addlessonplan.component';
import { LessonplanComponent } from './Components/lessonplan/lessonplan.component';
import { UpdatelessonplanComponent } from './Components/updatelessonplan/updatelessonplan.component';


import { AccountComponent } from './Components/account/account.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { SupervisorComponent } from './Components/supervisor/supervisor.component';
import { UsertimetableComponent } from './Components/usertimetable/usertimetable.component';
import { UsertimetabledayComponent } from './Components/usertimetableday/usertimetableday.component';
import { UsertimeroomsubjectclassComponent } from './Components/usertimeroomsubjectclass/usertimeroomsubjectclass.component';
import { ReportComponent } from './Components/report/report.component';
import { LogEntryComponent } from './Components/log-entry/log-entry.component';



const appRoutes :Routes = [
  {path:'login',component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'user', component: UserComponent},
  {path:'teachers', component:TeachersComponent},
  {path:'subjects', component:SubjectComponent},
  {path:'class', component:ClassComponent},
  {path:'events', component:EventsComponent},
  {path:'room', component:RoomComponent},
  {path:'exams', component:ExamsComponent},
  {path:'teacheruser', component:TeacheruserComponent},
  {path:'addteacher', component:AddteacherComponent},
  {path:'adminheader', component: AdminheaderComponent},
  {path:'updateteacher', component:UpdateteacherComponent},
  
  {path:'addsubject', component:AddsubjectComponent},
  {path:'updatesubject', component:UpdatesubjectComponent},

  {path:'addclass', component:AddclassComponent},
  {path:'updateclass', component:UpdateClassComponent},
  {path:'addroom', component:AddroomComponent},
  {path:'updateroom', component:UpdateroomComponent},

  {path:'schedule', component:ScheduleComponent},
  {path:'addschedule', component:AddscheduleComponent},
  {path:'updateschedule', component:UpdatescheduleComponent},

  {path:'vacation', component:VacationComponent},
  {path:'addvacation', component:AddvacationComponent},
  {path:'updatevacation', component:UpdatevacationComponent},

  {path:'timetable', component:TimetableComponent},
  {path:'updatetimetable', component:UpdatetimetableComponent},
  {path:'usersubject', component:UsersubjectComponent},
  {path:'addlessonplan', component:AddlessonplanComponent},
  {path:'account', component:AccountComponent},
  {path:'changepassword', component:ChangepasswordComponent},
  {path:'supervisor', component:SupervisorComponent},
  {path:'usertimetable', component:UsertimetableComponent},
  {path:'report', component:ReportComponent},
  {path:'logEntry', component:LogEntryComponent},

  {path:'holidays', component:HolidaysComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    TeachersComponent,
    SubjectComponent,
    ClassComponent,
    EventsComponent,
    ScheduleComponent,
    ExamsComponent,
    TeacheruserComponent,
    AddteacherComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminnavbarComponent,
    AdminbodyComponent,
    UpdateteacherComponent,
    AddsubjectComponent,
    UpdatesubjectComponent,
    AddclassComponent,
    UpdateClassComponent,
    RoomComponent,
    AddroomComponent,
    UpdateroomComponent,
    AddscheduleComponent,
    UpdatescheduleComponent,
    VacationComponent,
    AddvacationComponent,
    UpdatevacationComponent,
    ScheduleComponent,
    TimetableComponent,
    UpdatetimetableComponent,
    UsernavbarComponent,
    UsersubjectComponent,
    AddlessonplanComponent,
    LessonplanComponent,
    UpdatelessonplanComponent,
    AccountComponent,
    ChangepasswordComponent,
    SupervisorComponent,
    UsertimetableComponent,
    UsertimetabledayComponent,
    UsertimeroomsubjectclassComponent,
    ReportComponent,
    LogEntryComponent,
  
    UpdatescheduleComponent,
    HolidaysComponent

 
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MdListModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdChipsModule,
    MdTableModule,
    AppRoutingModule
  ],
  providers: [PrincipalService,EmpuserService,AuthenticationService,CanActivateAuthGuard,EmployerService,SubjectService,ClassService,RoomService,ScheduleService,UsersubjectService,LessonplanService,AccountService,TimetableService,LogEntryService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
