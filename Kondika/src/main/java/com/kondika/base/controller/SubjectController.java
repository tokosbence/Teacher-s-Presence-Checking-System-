package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.kondika.base.model.Subject;
import com.kondika.base.services.SubjectServices;

@RestController
@RequestMapping("/subjects")
public class SubjectController {
	@Autowired
	private SubjectServices subjectServices;
	
	 @GetMapping(value ="/getSubject/{subjectId}")
		public Subject getSubject(@PathVariable("subjectId") Integer subjectId) {
			return subjectServices.getSubject(subjectId);
		}
	 
	 
	 @GetMapping
		public List<Subject> getAllSubject() {
			return subjectServices.getAllSubject();
		}
	
	@PostMapping("/new")
	    public  Subject addSubject(@RequestBody Subject subject) {
	    	return subjectServices.addSubject(subject);
	    }
	
	 @PostMapping("/updateSubject")
		public Subject updateSubject(@RequestBody Subject subject) {
			return subjectServices.updateSubject(subject);
		}
	 
	@GetMapping(value = "/deleteSubject/{subjectId}")
		public void deleteSubject(@PathVariable("subjectId") Integer subjectId) {
			subjectServices.deleteSubject(subjectId);
		}
		
	
}
