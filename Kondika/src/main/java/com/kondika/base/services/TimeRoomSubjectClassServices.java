package com.kondika.base.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.TimeRoomSubjectClass;
import com.kondika.base.repository.TimeRoomSubjectClassRepository;

@Service
public class TimeRoomSubjectClassServices {
	@Autowired
	private TimeRoomSubjectClassRepository timeRoomSubjectClassRepository;
	 
	public List<TimeRoomSubjectClass> getAllTimeRoomSubjectClass() {
	    	
		  ArrayList<TimeRoomSubjectClass> result=new ArrayList<TimeRoomSubjectClass>();
		  timeRoomSubjectClassRepository.findAll().forEach(result::add);
		  
		  return result;
	  	}

	public TimeRoomSubjectClass getTimeRoomSubjectClass(Integer timeRoomSubjectClassId) {
		return timeRoomSubjectClassRepository.findOne(timeRoomSubjectClassId);
	}
	
	public TimeRoomSubjectClass addTimeRoomSubjectClass(TimeRoomSubjectClass timeRoomSubjectClass) {
		return timeRoomSubjectClassRepository.save(timeRoomSubjectClass);
	}
	
	public TimeRoomSubjectClass updateTimeRoomSubjectClass(TimeRoomSubjectClass timeRoomSubjectClass) {
		return timeRoomSubjectClassRepository.save(timeRoomSubjectClass);
	}
	
	public void deleteTimeRoomSubjectClass(Integer timeRoomSubjectClassId) {
		timeRoomSubjectClassRepository.delete(timeRoomSubjectClassId);
	}
	
	public void deleteAllTimeRoomSubjectClass() {
		timeRoomSubjectClassRepository.deleteAll();
	}

}
