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
@Table(name="SubjectClassPlan",uniqueConstraints=@UniqueConstraint(columnNames={"class_id", "subject_id"}))

public class SubjectClassPlan {

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
	
	@ManyToOne(optional=true)
	@JoinColumn(name="lessonplan_id")
	private Lessonplan lessonplan;

}
