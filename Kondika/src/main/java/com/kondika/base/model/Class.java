package com.kondika.base.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Class")
public class Class {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String profile;
	private String form_master;
	private Integer student_number;
	
	@OneToMany(mappedBy= "classObj")
	private List<SubjectClassPlan> plans;
	
	@OneToMany(mappedBy= "classObj")
	private List<TimeRoomSubjectClass> trsc;
	
	public Class() {
		
	}
	
	public Class(Integer id, String name, String profile, String form_master, Integer student_number) {
		super();
		this.id = id;
		this.name = name;
		this.profile = profile;
		this.form_master = form_master;
		this.student_number = student_number;
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

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getForm_master() {
		return form_master;
	}

	public void setForm_master(String form_master) {
		this.form_master = form_master;
	}

	public Integer getStudent_number() {
		return student_number;
	}

	public void setStudent_number(Integer student_number) {
		this.student_number = student_number;
	}
	
}
