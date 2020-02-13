package com.kondika.base.model;

import java.sql.Date;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Schedule")
public class Schedule {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Date start_date;
	private Date end_date;
	private Integer week_number;
	
	public Schedule() {
		
	}
	
	public Schedule(Integer id, Date start_date, Date end_date, Integer week_number) {
		super();
		this.id = id;
		this.start_date = start_date;
		this.end_date = end_date;
		this.week_number = week_number;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public Integer getWeek_number() {
		return week_number;
	}

	public void setWeek_number(Integer week_number) {
		this.week_number = week_number;
	}
	
}
