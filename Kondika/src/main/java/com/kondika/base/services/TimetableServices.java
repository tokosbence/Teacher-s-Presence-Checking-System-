package com.kondika.base.services;

import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.Timetable;
import com.kondika.base.model.Timetable.Day;
import com.kondika.base.repository.TimetableRepository;

@Service
public class TimetableServices {
	@Autowired
	private TimetableRepository timetableRepository;
	 
	public List<Timetable> getAllTimetable() {
	    	
		  ArrayList<Timetable> result=new ArrayList<Timetable>();
		  timetableRepository.findAll().forEach(result::add);
		  
		  return result;
	  	}
	
	public Timetable getTimetable(Integer timetableId) {
		return timetableRepository.findOne(timetableId);
	}
	
	public Timetable getTimetable(Day day, Time start_time, Time end_time) {
		List<Timetable> list = getAllTimetable();
		
		for (int i = 0; i < list.size(); ++i)
		{
			if (true
					&& list.get(i).getDay() == day
					&& list.get(i).getStart_time().getHours() == start_time.getHours()
					&& list.get(i).getStart_time().getMinutes() == start_time.getMinutes()
					&& list.get(i).getEnd_time().getHours() == end_time.getHours()
					&& list.get(i).getEnd_time().getMinutes() == end_time.getMinutes()
					)
				return list.get(i);
		}
		
		return null;
	}
	
	public Timetable addTimetable(Timetable timetable) {
		return timetableRepository.save(timetable);
	}
	
	public Timetable updateTimetable(Timetable timetable) {
		return timetableRepository.save(timetable);
	}
	
	public void deleteTimetable(Integer timetableId) {
		timetableRepository.delete(timetableId);
	}
	
	public void deleteAllTimetable() {
		timetableRepository.deleteAll();
	}

}
