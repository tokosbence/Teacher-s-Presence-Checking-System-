import { Component, OnInit, Input } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Employer } from '../../Model/Employer';
import { EmployerService } from '../../Services/employer.service';
import { EmployeUser} from '../../Model/EmployeUser';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
 model: any = {};
 errormessage : string ;

  @Input() employers: Employer[];
  @Input() selectedEmployer: Employer;
  @Input() newEmployer: Employer;
 
   
  
  
  constructor(private router:Router, private employerService: EmployerService) {
  
   }

  ngOnInit() {
     
    this.newEmployer = new Employer();
    this.newEmployer.employeUser=new EmployeUser();
  }

  addEmployer(employer: Employer): void{
    console.log("addEmployer called");
    
    /* validation*/
        console.log("firstname: |"+employer.firstname+"|");
        console.log("lastname: |"+employer.lastname+"|");
        console.log("username: |"+employer.employeUser.username+"|");
        console.log("email: |"+employer.email+"|");
        console.log("password: |"+employer.employeUser.password+"|");
        console.log("cnp: |"+employer.cnp+"|");
        console.log("adress: |"+employer.adress+"|");
        console.log("phone: |"+employer.phone+"|");


    if (employer.firstname === undefined || employer.firstname === null || employer.firstname === "") {
      console.log("hurra");
      this.errormessage = "Firstname not set!";
      return;
    }
   else if (employer.lastname === undefined || employer.lastname === null || employer.lastname === "") {
      console.log("hurra");
      this.errormessage = "Lastname not set!";
      return;
    }
    else if (employer.employeUser.username === undefined || employer.employeUser.username === null || employer.employeUser.username === "") {
      console.log("hurra");
      this.errormessage = "Username not set!";
      return;
    }
    else if (employer.email === undefined || employer.email === null || employer.email === "") {
      console.log("hurra");
      this.errormessage = "Email not set!";
      return;
    }
     else if (employer.employeUser.password === undefined || employer.employeUser.password === null || employer.employeUser.password === "") {
      console.log("hurra");
      this.errormessage = "Password not set!";
      return;
    }
     else if (employer.cnp === undefined || employer.cnp === null || employer.cnp === "") {
      console.log("hurra");
      this.errormessage = "CNP not set!";
      return;
    }
    else if (employer.adress === undefined || employer.adress === null || employer.adress === "") {
      console.log("hurra");
      this.errormessage = "Adress not set!";
      return;
    }
     else if (employer.phone === undefined || employer.phone === null ) {
      console.log("hurra");
      this.errormessage = "Phone number not set!";
      return;
    }

    this.employerService.addEmployer(employer)
    .then(employer=>{
      this.employers.push(employer);
      this.selectedEmployer = null;
    });
     this.router.navigate(['../teachers']);
  }


}
