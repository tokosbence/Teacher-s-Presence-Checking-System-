import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { CanActivateAuthGuard } from './can-activate.authguard';
import { LoginComponent } from './Components/login/login.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { SubjectComponent } from './Components/subject/subject.component';
import { ClassComponent } from './Components/class/class.component';

import { EventsComponent } from './Components/events/events.component';
import { RoomComponent } from './Components/room/room.component';
import { ExamsComponent } from './Components/exams/exams.component';
import { TeacheruserComponent } from './Components/teacheruser/teacheruser.component';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { AddteacherComponent } from './Components/addteacher/addteacher.component';
import { AdminheaderComponent } from './Components/adminheader/adminheader.component';
import { UpdateteacherComponent} from './Components/updateteacher/updateteacher.component';
import { AddsubjectComponent } from './Components/addsubject/addsubject.component';
import { UpdatesubjectComponent} from './Components/updatesubject/updatesubject.component';
import { AddclassComponent } from './Components/addclass/addclass.component';

import { UpdateClassComponent} from './Components/updateclass/updateclass.component';
import { AddroomComponent } from './Components/addroom/addroom.component';
import { UpdateroomComponent } from './Components/updateroom/updateroom.component';
import { TimetableComponent } from './Components/timetable/timetable.component';
import { UpdatetimetableComponent } from './Components/updatetimetable/updatetimetable.component';
import { ScheduleComponent } from './Components/schedule/schedule.component';
import { AddscheduleComponent } from './Components/addschedule/addschedule.component';
import { UpdatescheduleComponent } from './Components/updateschedule/updateschedule.component';
import { VacationComponent } from './Components/vacation/vacation.component';
import { AddvacationComponent } from './Components/addvacation/addvacation.component';
import { UpdatevacationComponent } from './Components/updatevacation/updatevacation.component';
import { UsersubjectComponent } from './Components/usersubject/usersubject.component';
import { HolidaysComponent } from './Components/holidays/holidays.component';

import { LessonplanComponent } from './Components/lessonplan/lessonplan.component';
import { AddlessonplanComponent } from './Components/addlessonplan/addlessonplan.component';
import { UpdatelessonplanComponent } from './Components/updatelessonplan/updatelessonplan.component';


import { AccountComponent } from './Components/account/account.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { SupervisorComponent } from './Components/supervisor/supervisor.component';
import { UsertimetableComponent } from './Components/usertimetable/usertimetable.component';
import { ReportComponent } from './Components/report/report.component';
import { LogEntryComponent } from './Components/log-entry/log-entry.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'user', component: UserComponent},
  {path:'teachers', component:TeachersComponent},
  {path:'subjects', component:SubjectComponent},
  {path:'class', component:ClassComponent},
  {path:'events', component:EventsComponent},
  {path:'room', component:RoomComponent},
  {path:'exams', component:ExamsComponent},

  {path:'teacheruser', component:TeacheruserComponent},
  {path:'teachers/new', component:AddteacherComponent},
  {path:'adminheader', component: AdminheaderComponent},
  {path:'teachers/updateEmployer/:id', component:UpdateteacherComponent},

  {path:'subjects/new', component:AddsubjectComponent},
  {path:'subjects/updateSubject/:id', component:UpdatesubjectComponent},
  {path:'class/new', component:AddclassComponent},
  {path:'class/updateClass/:id', component:UpdateClassComponent},
  {path:'room/new', component:AddroomComponent},
  {path:'room/updateRoom/:id', component:UpdateroomComponent},
 
  {path:'schedule', component:ScheduleComponent},
  {path:'schedule/new', component:AddscheduleComponent},
  {path:'schedule/updateSchedule/:id', component:UpdatescheduleComponent},

  {path:'vacation', component:VacationComponent},
  {path:'addvacation', component:AddvacationComponent},
  {path:'updatevacation', component:UpdatevacationComponent},

  {path:'timetable', component:TimetableComponent},
  {path:'timetable/updatetimetable/:id', component:UpdatetimetableComponent},
  
  {path:'usersubject', component:UsersubjectComponent},
  {path:'lessonplan', component:LessonplanComponent},
  {path:'lessonplan/new', component:AddlessonplanComponent},
  {path:'lessonplan/updateLessonplan/:id', component:UpdatelessonplanComponent},
  {path:'account', component:AccountComponent},
  {path:'changepassword', component:ChangepasswordComponent},
  {path:'supervisor', component:SupervisorComponent},
  {path:'usertimetable', component:UsertimetableComponent},
  {path:'report', component:ReportComponent},
  {path:'logEntry', component:LogEntryComponent},

  {path:'holidays', component:HolidaysComponent},




];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
