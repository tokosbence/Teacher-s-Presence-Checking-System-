import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadtimetableComponent } from './readtimetable.component';

describe('ReadtimetableComponent', () => {
  let component: ReadtimetableComponent;
  let fixture: ComponentFixture<ReadtimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadtimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
