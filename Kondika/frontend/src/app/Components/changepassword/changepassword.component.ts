import { Component, OnInit,Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Employer } from '../../Model/Employer';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { EmpuserService} from '../../Services/empuser.service';
import { EmployerService} from '../../Services/employer.service';
import { EmployeUser } from '../../Model/EmployeUser';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
 
 model: any = {};
 errormessage : string;

  @Input() employer: Employer;
  @Input() employeuser: EmployeUser;
  @Input() newEmployer: Employer;
  @Input() selectedEmployer: Employer;
 

  constructor(
    private router: Router,
    private empuserService:EmpuserService,
    private employerService:EmployerService,
    private location: Location,
  ) { }

  ngOnInit() {
      this.employer = new  Employer();
    this.employer.employeUser = new EmployeUser();
    this.empuserService.getCurrentUser()
            .subscribe(user  => {
              this.employerService.getEmployers ()
                .then(employers  => {
                  this.employer = employers.filter(employer => employer.employeUser != undefined && employer.employeUser != null && employer.employeUser.id === user.id)[0];
                });                
            } );
  }

  updateEmployer(employer: Employer): void {
     console.log("updateEmployer called")
        console.log("password: |"+this.employer.employeUser.password+"|");
        console.log("newpassword: |"+this.employer.employeUser.password1+"|");
       
     
   if (this.employer.employeUser.password === undefined || this.employer.employeUser.password === null || this.employer.employeUser.password === "") {
          this.errormessage = "New Password not set!";
      return;
    }
    if (this.employer.employeUser.password1 === undefined || this.employer.employeUser.password1 === null || this.employer.employeUser.password1 === "") {
          this.errormessage = "New Password not set!";
      return;
    }
    else if (this.employer.employeUser.password != this.employer.employeUser.password1 ){
      this.errormessage = "Password does not match!";
      return;
    }
    

    this.employerService.updateEmployer(this.employer);
    this.goBack();

    this.router.navigate(['../account']);
  }
   

   goBack(): void {
    this.location.back();
  }

}
