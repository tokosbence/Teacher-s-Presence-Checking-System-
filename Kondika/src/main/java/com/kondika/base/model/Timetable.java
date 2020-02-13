package com.kondika.base.model;

import java.sql.Time;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Timetable")
public class Timetable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

    @Enumerated(EnumType.ORDINAL)
	private Day day;
    private Time start_time;
    private Time end_time;
	
	@OneToMany(mappedBy= "timetable")
	private List<TimeRoomSubjectClass> trsc;
	
	public static enum Day{
		 MONDAY, 
		 TUESDAY, 
		 WEDNESDAY,
		 THURSDAY, 
		 FRIDAY,
		 SATURDAY;
	}
	
	public Timetable() {
		
	}

	public Timetable(Integer id, Day day, Time start_time,Time end_time) {
		super();
		this.id = id;
		this.day = day;
		this.start_time = start_time;
		this.end_time = end_time;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Day getDay() {
		return day;
	}

	public void setDay(Day day) {
		this.day = day;
	}

	public Time getStart_time() {
		return start_time;
	}

	public void setStart_time(Time start_time) {
		this.start_time = start_time;
	}

	public Time getEnd_time() {
		return end_time;
	}

	public void setEnd_time(Time end_time) {
		this.end_time = end_time;
	}


		
}
