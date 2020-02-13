package com.kondika.base.model;


import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.sun.istack.NotNull;

@Entity
@Table(name = "Room")
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	private String key_location; //Responsible for key!!!!!
	private Integer floor;
	@NotNull
	private String reader;
	
	@OneToMany(mappedBy= "room")
	private List<TimeRoomSubjectClass> trsc;
	
	public Room() {
		
	}

	public Room(Integer id, String name, String key_location, Integer floor, String reader) {
		super();
		this.id = id;
		this.name = name;
		this.key_location = key_location;
		this.floor = floor;
		this.reader = reader;
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

	public String getKey_location() {
		return key_location;
	}

	public void setKey_location(String key_location) {
		this.key_location = key_location;
	}

	public Integer getFloor() {
		return floor;
	}

	public void setFloor(Integer floor) {
		this.floor = floor;
	}

	public String getReader() {
		return reader;
	}

	public void setReader(String reader) {
		this.reader = reader;
	}
		
}
