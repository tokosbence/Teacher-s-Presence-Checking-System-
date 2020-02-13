package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kondika.base.model.*;
import com.kondika.base.services.*;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {
	@Autowired
	private ScheduleServices scheduleServices;
	
	 @GetMapping(value ="/getSchedule/{scheduleId}")
		public Schedule getSchedule(@PathVariable("scheduleId") Integer scheduleId) {
			return scheduleServices.getSchedule(scheduleId);
		}
	 
	 
	 @GetMapping
		public List<Schedule> getAllSchedule() {
			return scheduleServices.getAllSchedule();
		}
	
	@PostMapping("/new")
	    public  Schedule addSchedule(@RequestBody Schedule schedule) {
	    	return scheduleServices.addSchedule(schedule);
	    }
	
	 @PostMapping("/updateSchedule")
		public Schedule updateSchedule(@RequestBody Schedule schedule) {
			return scheduleServices.updateSchedule(schedule);
		}
	 
	@GetMapping(value = "/deleteSchedule/{scheduleId}")
		public void deleteSchedule(@PathVariable("scheduleId") Integer scheduleId) {
		scheduleServices.deleteSchedule(scheduleId);
		}
}
