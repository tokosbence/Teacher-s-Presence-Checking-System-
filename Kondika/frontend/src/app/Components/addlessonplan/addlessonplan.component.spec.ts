import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersubjectComponent } from './addusersubject.component';

describe('AddusersubjectComponent', () => {
  let component: AddusersubjectComponent;
  let fixture: ComponentFixture<AddusersubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusersubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusersubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
