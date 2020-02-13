package com.kondika.base.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Lessonplan")
public class Lessonplan {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer hours_number;
	private String lessons;
	private Integer week_number;
	@ManyToOne
	private Employer employer;
	@OneToMany(mappedBy= "lessonplan")
	private List<SubjectClassPlan> subjectClassPlans;
	
	
	
	public Lessonplan() {
		
	}
	
	public Lessonplan(Integer id, String name, Integer hours_number, String lessons, Integer week_number, Employer employer) {
		super();
		this.id = id;
		this.name = name;
		this.hours_number = hours_number;
		this.lessons = lessons;
		this.week_number = week_number;
		this.employer = employer;
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getHours_number() {
		return hours_number;
	}

	public void setHours_number(Integer hours_number) {
		this.hours_number = hours_number;
	}

	public String getLessons() {
		return lessons;
	}

	public void setLessons(String lessons) {
		this.lessons = lessons;
	}

	public Integer getWeek_number() {
		return week_number;
	}

	public void setWeek_number(Integer week_number) {
		this.week_number = week_number;
	}

	public Employer getEmployer() {
		return employer;
	}

	public void setEmployer(Employer employer) {
		this.employer = employer;
	}
	
	
	
	
}
