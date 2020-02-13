package com.kondika.base.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.sun.istack.NotNull;



@Entity
@Table(name = "Employer")
public class Employer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@OneToOne(cascade = CascadeType.ALL)
	private EmployeUser employeUser;
	private String firstname;
	private String lastname;
	private String email;
	private String phone;
	private Integer birthday;
	private String cnp;
	private String adress;
	private String gender;
	@NotNull
	private String card;
	@OneToMany
	private List<Subject> subjects;
	@OneToMany
	private List<Lessonplan> lessonplan;

	
	
	public Employer() {
		
	}

	public Employer(Integer id, EmployeUser user, String firstname, String lastname, String email, String phone,
			Integer birthday, String cnp, String adress, String gender, String card, List<Subject> subjects, List<Lessonplan> lessonplan) {
		super();
		this.id = id;
		this.employeUser = user;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phone = phone;
		this.birthday = birthday;
		this.cnp = cnp;
		this.adress = adress;
		this.gender = gender;
		this.card = card;
		this.subjects = subjects;
		this.lessonplan = lessonplan;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	public EmployeUser getEmployeUser() {
		return employeUser;
	}

	public void setEmployeUser(EmployeUser employeUser) {
		this.employeUser = employeUser;
	}
	
	public EmployeUser getUserid() {
		return employeUser;
	}

	public void setUserid(EmployeUser userid) {
		this.employeUser = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCnp() {
		return cnp;
	}

	public void setCnp(String cnp) {
		this.cnp = cnp;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCard() {
		return card;
	}

	public void setCard(String card) {
		this.card = card;
	}

	public List<Subject> getSubjects() {
		return subjects;
	}

	public void setSubjects(List<Subject> subjects) {
		this.subjects = subjects;
	}
	
	public List<Lessonplan> getLessonplan() {
		return lessonplan;
	}

	public void setLessonplan(List<Lessonplan> lessonplan) {
		this.lessonplan = lessonplan;
	}

	public Integer getBirthday() {
		return birthday;
	}

	public void setBirthday(Integer birthday) {
		this.birthday = birthday;
	}
	
	
	
}
