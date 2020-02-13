package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.Employer;
import com.kondika.base.model.Log;
import com.kondika.base.model.LogEntry;
import com.kondika.base.model.Room;
import com.kondika.base.repository.EmployerRepository;
import com.kondika.base.repository.LogEntryRepository;
import com.kondika.base.repository.RoomRepository;

@Service
public class LogEntryServices {
	@Autowired
	private LogEntryRepository logentryRepository;
	@Autowired
	private EmployerRepository employerRepository;
	@Autowired
	private RoomRepository roomRepository;
	
	public LogEntry addLog(Log log) {
		
		String cardId = log.getCardId();
		String readerId = log.getReaderId();
		Employer employer = new Employer();
		Room room = new Room();
		employer = this.employerRepository.findByCard(cardId);
		room = this.roomRepository.findByReader(readerId);
		LogEntry logentry = new LogEntry();
		logentry.setEmployer(employer);
		logentry.setRoom(room);
		logentry.setDate(new Date());
	
		return logentryRepository.save(logentry);
	}


 public List<LogEntry> getAllLogEntry() {
    	
		  ArrayList<LogEntry> result=new ArrayList<LogEntry>();
		  logentryRepository.findAll().forEach(result::add);
		  
		  return result;
	  	}
	
 public void deleteAllLogEntry() {
	 logentryRepository.deleteAll();
	}
}
