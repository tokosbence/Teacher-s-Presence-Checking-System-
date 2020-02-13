import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonplanComponent } from './lessonplan.component';

describe('LessonplanComponent', () => {
  let component: LessonplanComponent;
  let fixture: ComponentFixture<LessonplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
