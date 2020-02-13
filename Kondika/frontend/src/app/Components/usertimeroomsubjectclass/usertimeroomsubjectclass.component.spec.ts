import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertimeroomsubjectclassComponent } from './usertimeroomsubjectclass.component';

describe('UsertimeroomsubjectclassComponent', () => {
  let component: UsertimeroomsubjectclassComponent;
  let fixture: ComponentFixture<UsertimeroomsubjectclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertimeroomsubjectclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertimeroomsubjectclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
