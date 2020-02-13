import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableuidayComponent } from './timetableuiday.component';

describe('TimetableuidayComponent', () => {
  let component: TimetableuidayComponent;
  let fixture: ComponentFixture<TimetableuidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableuidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableuidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
