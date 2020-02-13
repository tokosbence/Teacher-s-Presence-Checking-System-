package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.kondika.base.model.Employer;
import com.kondika.base.repository.EmployerRepository;


@Service
public class EmployerServices {
	
	@Autowired
	private EmployerRepository employerRepository;
	
	public List<Employer> getAllEmployer(){
		List<Employer> employers = new ArrayList<Employer>();
		Iterator<Employer> iterator = employerRepository.findAll().iterator();
		while (iterator.hasNext()) {
			employers.add(iterator.next());
		}
		
		return employers;
	}
	
	public Employer getEmployer(Integer employerId) {
		return employerRepository.findOne(employerId);
	}
	
	public Employer getEmployer(String cardId) {
		return employerRepository.findByCard(cardId);
	}
	
	public Employer addEmployer(Employer employer) {
		return employerRepository.save(employer);
	}
	
	public Employer updateEmployer(Employer employer) {
		return employerRepository.save(employer);
	}
	
	public void deleteEmployer(Integer employerId) {
		employerRepository.delete(employerId);
	}
	
	public void deleteAllEmployer() {
		employerRepository.deleteAll();
	}
}
