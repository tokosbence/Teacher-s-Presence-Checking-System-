import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../Model/Class';
import { ClassService } from '../../Services/class.service';
import { ActivatedRoute ,Router , Params} from '@angular/router';
import { Location } from '@angular/common';
import { MdToolbarModule, MdSidenavModule, MdButtonModule, MdChipsModule, MdListModule, MdInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports:[MdListModule]
})

@Component({
  selector: 'app-updateClass',
  templateUrl: './updateClass.component.html',
  styleUrls: ['./updateClass.component.css']
})
export class UpdateClassComponent implements OnInit {

 @Input() class: Class;

  constructor(
    private classService : ClassService,
    private route: ActivatedRoute,
    private location: Location 
  
  ) { }

  ngOnInit() : void {
     this.route.params.switchMap((params:Params)=> this.classService.getClass(+params['id']))
    .subscribe(class_ => this.class = class_);
  }
 updateClass(): void {
    this.classService.updateClass(this.class);
    this.goBack();
  }

    goBack(): void {
    this.location.back();
  }
}
