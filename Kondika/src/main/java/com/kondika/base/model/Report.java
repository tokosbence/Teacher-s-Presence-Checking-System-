package com.kondika.base.model;

public class Report {
	private Timetable timetable;
	private Room room;
	private Subject subject;
	private Class classObj;
	private Employer employer;
	



 public Report() {
	
}


public Report(Timetable timetable, Room room, Subject subject, Class classObj,Employer employer) {
	super();
	this.timetable = timetable;
	this.room = room;
	this.subject = subject;
	this.classObj = classObj;
	this.employer = employer;
	
}



public Employer getEmployer() {
	return employer;
}



public void setEmployer(Employer employer) {
	this.employer = employer;
}



public Room getRoom() {
	return room;
}



public void setRoom(Room room) {
	this.room = room;
}



public Subject getSubject() {
	return subject;
}



public void setSubject(Subject subject) {
	this.subject = subject;
}


public Class getClassObj() {
	return classObj;
}


public void setClassObj(Class classObj) {
	this.classObj = classObj;
}


public Timetable getTimetable() {
	return timetable;
}


public void setTimetable(Timetable timetable) {
	this.timetable = timetable;
}








 
}