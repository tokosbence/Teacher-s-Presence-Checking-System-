import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatescheduleComponent } from './updateschedule.component';

describe('UpdatescheduleComponent', () => {
  let component: UpdatescheduleComponent;
  let fixture: ComponentFixture<UpdatescheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatescheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
