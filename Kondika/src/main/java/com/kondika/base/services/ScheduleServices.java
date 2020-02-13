package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.*;
import com.kondika.base.repository.ScheduleRepository;


@Service
public class ScheduleServices{
	
	@Autowired
	private ScheduleRepository scheduleRepository;
	 
	public List<Schedule> getAllSchedule(){
		List<Schedule> schedules = new ArrayList<Schedule>();
		Iterator<Schedule> iterator = scheduleRepository.findAll().iterator();
		while (iterator.hasNext()) {
			schedules.add(iterator.next());
		}
		
		return schedules;
	}
	
	public Schedule getSchedule(Integer scheduleId) {
		return scheduleRepository.findOne(scheduleId);
	}
	
	public Schedule addSchedule(Schedule schedule) {
		return scheduleRepository.save(schedule);
	}
	
	public Schedule updateSchedule(Schedule schedule) {
		return scheduleRepository.save(schedule);
	}
	
	public void deleteSchedule(Integer scheduleId) {
		scheduleRepository.delete(scheduleId);
	}
	
	public void deleteAllSchedule() {
		scheduleRepository.deleteAll();
	}
}
