import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../Model/Subject';
import { SubjectService } from '../../Services/subject.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatesubject',
  templateUrl: './updatesubject.component.html',
  styleUrls: ['./updatesubject.component.css']
})
export class UpdatesubjectComponent implements OnInit {

  @Input() subject : Subject;

  constructor(
    private subjectServices:SubjectService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.subject = new Subject();
    this.route.params.switchMap((params: Params)=> this.subjectServices.getSubject(+params['id']))
      .subscribe(subject => this.subject = subject);
  }


    updateSubject(): void {
    this.subjectServices.updateSubject(this.subject);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }

}
