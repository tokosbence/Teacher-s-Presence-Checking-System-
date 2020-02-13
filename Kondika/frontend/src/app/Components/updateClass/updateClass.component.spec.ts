import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclassesComponent } from './updateclasses.component';

describe('UpdateclassesComponent', () => {
  let component: UpdateclassesComponent;
  let fixture: ComponentFixture<UpdateclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
