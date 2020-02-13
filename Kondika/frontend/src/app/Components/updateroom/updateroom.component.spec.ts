import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateroomComponent } from './updateroom.component';

describe('UpdateroomComponent', () => {
  let component: UpdateroomComponent;
  let fixture: ComponentFixture<UpdateroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
