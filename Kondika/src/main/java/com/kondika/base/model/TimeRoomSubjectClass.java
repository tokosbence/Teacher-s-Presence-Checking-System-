package com.kondika.base.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="TimeRoomSubjectClass",uniqueConstraints=@UniqueConstraint(columnNames={"class_id", "subject_id", "room_id","timetable_id"}))

public class TimeRoomSubjectClass {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@NotNull
	@ManyToOne(optional=false)
	@JoinColumn(name="class_id")
	private Class classObj;
	
	@NotNull
	@ManyToOne(optional=false)
	@JoinColumn(name="subject_id")
	private Subject subject;
	
	@NotNull
	@ManyToOne(optional=false)
	@JoinColumn(name="room_id")
	private Room room;
	
	@NotNull
	@ManyToOne(optional=false)
	@JoinColumn(name="timetable_id")
	private Timetable timetable;

	public TimeRoomSubjectClass () {
		
	}
	
	public TimeRoomSubjectClass(Class classObj, Subject subject, Room room, Timetable timetable) {
		super();
		this.classObj = classObj;
		this.subject = subject;
		this.room = room;
		this.timetable = timetable;
		}
	
	public Class getClassObj() {
		return classObj;
	}

	public void setClassObj(Class classObj) {
		this.classObj = classObj;
	}

	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}

	public Timetable getTimetable() {
		return timetable;
	}

	public void setTimetable(Timetable timetable) {
		this.timetable = timetable;
	}

	
}
