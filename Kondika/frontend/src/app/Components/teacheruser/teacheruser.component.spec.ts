import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheruserComponent } from './teacheruser.component';

describe('TeacheruserComponent', () => {
  let component: TeacheruserComponent;
  let fixture: ComponentFixture<TeacheruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacheruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
