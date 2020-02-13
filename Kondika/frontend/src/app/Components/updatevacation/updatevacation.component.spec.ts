import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevacationComponent } from './updatevacation.component';

describe('UpdatevacationComponent', () => {
  let component: UpdatevacationComponent;
  let fixture: ComponentFixture<UpdatevacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
