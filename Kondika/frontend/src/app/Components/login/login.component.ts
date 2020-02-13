import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication.service';
import { PrincipalService } from '../../Services/principal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
  

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private principalService: PrincipalService
  ) { }

  ngOnInit() { }

  login() {
    this.loading = true;
    this.authenticationService
      .login(this.model.username, this.model.password)
      .subscribe(result => {
          if (result == true) {
            // login successful
            this.principalService.setPrincipal().subscribe(
              () => {
                // switch startup page based on the role
                if (this.principalService.isAdmin())
                  this.router.navigate(['/admin']);
                else
                  this.router.navigate(['/user']);
              });
          } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
      }, error => {
        this.loading = false;
      });
  }



}
