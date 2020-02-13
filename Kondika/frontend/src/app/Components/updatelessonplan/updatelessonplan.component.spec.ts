import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelessonplanComponent } from './updatelessonplan.component';

describe('UpdatelessonplanComponent', () => {
  let component: UpdatelessonplanComponent;
  let fixture: ComponentFixture<UpdatelessonplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatelessonplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelessonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
