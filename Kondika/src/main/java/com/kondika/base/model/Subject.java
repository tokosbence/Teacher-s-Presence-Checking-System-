package com.kondika.base.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Subject")
public class Subject {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private Integer passgrade;
	private String schoolbook;
	
	@ManyToMany(mappedBy="subjects")
	private List<Employer> employers;
	
	@OneToMany(mappedBy= "subject")
	private List<SubjectClassPlan> plans;
	
	@OneToMany(mappedBy= "subject")
	private List<TimeRoomSubjectClass> trsc;

	public Subject() {}
	
	public Subject(Integer id, String name, Integer passgrade, String schoolbook) {
		super();
		this.id = id;
		this.name = name;
		this.passgrade = passgrade;
		this.schoolbook = schoolbook;
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

	public Integer getPassgrade() {
		return passgrade;
	}

	public void setPassgrade(Integer passgrade) {
		this.passgrade = passgrade;
	}

	public String getSchoolbook() {
		return schoolbook;
	}

	public void setSchoolbook(String schoolbook) {
		this.schoolbook = schoolbook;
	}

	public List<Employer> getEmployers() {
		return employers;
	}

	public void setEmployers(List<Employer> employers) {
		this.employers = employers;
	}
}
