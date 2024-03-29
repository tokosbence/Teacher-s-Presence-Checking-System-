import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEntryComponent } from './log-entry.component';

describe('LogEntryComponent', () => {
  let component: LogEntryComponent;
  let fixture: ComponentFixture<LogEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
