import { Component, OnInit, Input } from '@angular/core';
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
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

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

        console.log("firstname: |"+this.employer.firstname+"|");
        console.log("lastname: |"+this.employer.lastname+"|");
        console.log("username: |"+this.employer.employeUser.username+"|");
        console.log("birthday: |"+this.employer.birthday+"|");
        console.log("cnp: |"+this.employer.cnp+"|");
        console.log("adress: |"+this.employer.adress+"|");
        console.log("phone: |"+this.employer.phone+"|"); 
        console.log("email: |"+this.employer.email+"|");
       
       
       
             
    if (this.employer.firstname === undefined || this.employer.firstname === null || this.employer.firstname === "") {
           this.errormessage = "Firstname not set!";
      return;
    }
    else if (this.employer.lastname === undefined || this.employer.lastname === null || this.employer.lastname === "") {
           this.errormessage = "Lastname not set!";
      return;
    }
    else if (this.employer.employeUser.username === undefined || this.employer.employeUser.username === null || this.employer.employeUser.username === "") {
           this.errormessage = "Username not set!";
      return;
    }
    else if (this.employer.birthday === undefined || this.employer.birthday === null ) {
           this.errormessage = "Birthday not set!";
      return;
    }
     else if (this.employer.cnp === undefined || this.employer.cnp === null || this.employer.cnp === "") {
           this.errormessage = "CNP not set!";
      return;
    }
    else if (this.employer.adress === undefined || this.employer.adress === null || this.employer.adress === "") {
          this.errormessage = "Adress not set!";
      return;
    }
     else if (this.employer.phone === undefined || this.employer.phone === null ) {
           this.errormessage = "Phone number not set!";
      return;
    }

    else if (this.employer.email === undefined || this.employer.email === null || this.employer.email === "") {
            this.errormessage = "Email not set!";
      return;
    }
 
    else if (this.employer.employeUser.password1 === undefined || this.employer.employeUser.password1 === null || this.employer.employeUser.password1 === "") {
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
