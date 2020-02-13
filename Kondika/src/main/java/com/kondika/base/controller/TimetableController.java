package com.kondika.base.controller;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kondika.base.model.Employer;
import com.kondika.base.model.LogEntry;
import com.kondika.base.model.Report;
import com.kondika.base.model.Subject;
import com.kondika.base.model.TimeRoomSubjectClass;
import com.kondika.base.model.Timetable;
import com.kondika.base.model.Timetable.Day;
import com.kondika.base.services.EmployerServices;
import com.kondika.base.services.LogEntryServices;
import com.kondika.base.services.TimeRoomSubjectClassServices;

@RestController
public class TimetableController {
	@Autowired
	private TimeRoomSubjectClassServices timeroomsubjectclassServices;
	@Autowired
	private EmployerServices employerServices;
	@Autowired
	private LogEntryServices logEntryServices;
	
	
	@RequestMapping("/timetable")
	public List<TimeRoomSubjectClass> getAllTimeRoomSubjectClass() {
		
		return timeroomsubjectclassServices.getAllTimeRoomSubjectClass();
	}

	@GetMapping(value ="/timetable/teachers/{employerId}")
	public List<TimeRoomSubjectClass> getTimetableForEmployer(@PathVariable("employerId") Integer employerId) {
		Employer teacher = employerServices.getEmployer(employerId);
		List<Subject> subjects = teacher.getSubjects();
		
		List<TimeRoomSubjectClass> trscAll = timeroomsubjectclassServices.getAllTimeRoomSubjectClass();
		List<TimeRoomSubjectClass> trscList = new ArrayList<TimeRoomSubjectClass>();
		
		for (int i = 0; i < trscAll.size(); ++i) {
			if (subjects.contains(trscAll.get(i).getSubject()))
				trscList.add(trscAll.get(i));
		}
		
		return trscList;
	}	
	
	@GetMapping(value ="/timetable/report") 
	public List<Report> getReports() {
		Date current = new Date();
		
		int cDay = current.getDay();
		int cHours = current.getHours();
		int cMinutes = current.getMinutes();
		
		List<TimeRoomSubjectClass> trsccAll = timeroomsubjectclassServices.getAllTimeRoomSubjectClass();
		List<TimeRoomSubjectClass> trsccList = new ArrayList<TimeRoomSubjectClass>();
		
		for (int i = 0; i < trsccAll.size(); ++i) {
			boolean match = true;
			Timetable t = trsccAll.get(i).getTimetable();
		
			int tStartHours = t.getStart_time().getHours();
			int tStartMinutes = t.getStart_time().getMinutes();
			int tEndHours = t.getEnd_time().getHours();
			int tEndMinutes = t.getEnd_time().getMinutes();
			
			match = match && (false || (t.getDay() == Day.MONDAY && cDay == 1) 	|| (t.getDay() == Day.TUESDAY && cDay == 2)	|| (t.getDay() == Day.WEDNESDAY && cDay == 3)|| (t.getDay() == Day.THURSDAY && cDay == 4)
							|| (t.getDay() == Day.FRIDAY && cDay == 5)	||(t.getDay() == Day.SATURDAY && cDay == 6)			)
					&& (tStartHours*60 + tStartMinutes ) <= (cHours*60 + cMinutes)
					&& (tEndHours*60 + tEndMinutes ) >= (cHours*60 + cMinutes)
					;
					
			if (match)	
				trsccList.add(trsccAll.get(i));
		}
		
		List<LogEntry> logAll = logEntryServices.getAllLogEntry(); 
		List<Report> result = new ArrayList<Report>();
		
		for (int i = 0; i < trsccList.size(); ++i) {
			Timetable t = trsccList.get(i).getTimetable();
			
			int tStartHours = t.getStart_time().getHours();
			int tStartMinutes = t.getStart_time().getMinutes();
			int tEndHours = t.getEnd_time().getHours();
			int tEndMinutes = t.getEnd_time().getMinutes();
			
			TimeRoomSubjectClass trscc = trsccList.get(i);
			Report r = new Report(trscc.getTimetable(), trscc.getRoom(), trscc.getSubject(), trscc.getClassObj(),null);
			
			for (int j = 0; j < logAll.size(); ++j) {
 				 LogEntry l = logAll.get(j);
 				 int lHours = l.getDate().getHours();
 				 int lMinutes = l.getDate().getMinutes();
 				 if ( false 
 						 || l.getDate().getYear() != current.getYear()
 						 || l.getDate().getMonth() != current.getMonth()
 						 || l.getDate().getDate() != current.getDate()
 						 )
 					 continue;
 				 
 	 			 if (true 
 	 					 && trscc.getRoom().getId() == l.getRoom().getId() 
 	 					 && (tStartHours*60 + tStartMinutes ) <= (lHours*60 + lMinutes)
 	 					 && (tEndHours*60 + tEndMinutes ) >= (lHours*60 + lMinutes)
 	 				  )
 	 					 {
 					  r.setEmployer(l.getEmployer());
 					  break;
 					  
 				 }
			}
			
			result.add(r);
		}
 			 

		return result;
		
	}	
}



