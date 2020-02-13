package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.kondika.base.model.Log;
import com.kondika.base.model.LogEntry;
import com.kondika.base.services.LogEntryServices;

@RestController
@RequestMapping("/logging")
public class LogEntryController {
	@Autowired
	private LogEntryServices logentryServices;
	
	@PostMapping("/new")
    public  LogEntry addLog(@RequestBody Log log) {
    	return logentryServices.addLog(log);
    }
	
	@RequestMapping("/logentry")
	public List<LogEntry> getAllLogeEntry() {
		
		return logentryServices.getAllLogEntry();
	}

}
