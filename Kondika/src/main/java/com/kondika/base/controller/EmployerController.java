package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kondika.base.model.Employer;
import com.kondika.base.services.EmployerServices;

@RestController
@RequestMapping("/teachers")
public class EmployerController {
	 @Autowired
	    private EmployerServices employerServices;
	 private BCryptPasswordEncoder bCryptPasswordEncoder;
	 
	 public EmployerController( BCryptPasswordEncoder bCryptPasswordEncoder) {
		 this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	 }
	
	 @GetMapping(value ="/getEmployer/{employerId}")
		public Employer getEmployer(@PathVariable("employerId") Integer employerId) {
			return employerServices.getEmployer(employerId);
		}
	 
	 
	 @GetMapping
		public List<Employer> getAllEmployer() {
			return employerServices.getAllEmployer();
		}
	
	@PostMapping("/new")
	    public  Employer addEmployer(@RequestBody Employer employer) {
		employer.getEmployeUser().setPassword(bCryptPasswordEncoder.encode(employer.getEmployeUser().getPassword()));
	    	return employerServices.addEmployer(employer);
	    }
	
	 @PostMapping("/updateEmployer")
		public Employer updateEmployer(@RequestBody Employer employer) {
			return employerServices.updateEmployer(employer);
		}
	 
	@GetMapping(value = "/deleteEmployer/{employerId}")
		public void deleteEmployer(@PathVariable("employerId") Integer employerId) {
			employerServices.deleteEmployer(employerId);
		}
		
}
