import { Component, OnInit ,Input } from '@angular/core';
import { Employer } from '../../Model/Employer';
import { EmployerService } from '../../Services/employer.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.component.html',
  styleUrls: ['./updateteacher.component.css']
})
export class UpdateteacherComponent implements OnInit {
  
  @Input() employer : Employer;
 
  constructor(
    private employerService:EmployerService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.employer = new Employer();
    this.route.params.switchMap((params: Params)=> this.employerService.getEmployer(+params['id']))
      .subscribe(employer => this.employer = employer);
  }

    updateEmployer(): void {
    this.employerService.updateEmployer(this.employer);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }
}
