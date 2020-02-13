import { Component, OnInit, Input } from '@angular/core';
import { Lessonplan } from '../../Model/Lessonplan';
import { LessonplanService } from '../../Services/lessonplan.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatelessonplan',
  templateUrl: './updatelessonplan.component.html',
  styleUrls: ['./updatelessonplan.component.css']
})
export class UpdatelessonplanComponent implements OnInit {

  @Input() lessonplan : Lessonplan;

  constructor(
    private lessonplanServices:LessonplanService, 
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.lessonplan = new Lessonplan();
    this.route.params.switchMap((params: Params)=> this.lessonplanServices.getLessonplan(+params['id']))
      .subscribe(lessonplan => this.lessonplan = lessonplan);
  }

      updateLessonplan(): void {
    this.lessonplanServices.updateLessonplan(this.lessonplan);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }

}
