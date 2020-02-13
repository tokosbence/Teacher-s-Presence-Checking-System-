import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubjectComponent } from './usersubject.component';

describe('UsersubjectComponent', () => {
  let component: UsersubjectComponent;
  let fixture: ComponentFixture<UsersubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
