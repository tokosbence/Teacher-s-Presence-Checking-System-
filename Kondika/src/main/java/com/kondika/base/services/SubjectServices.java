package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.Subject;
import com.kondika.base.repository.SubjectRepository;

@Service
public class SubjectServices {
	@Autowired
	private SubjectRepository subjectRepository;

	public List<Subject> getAllSubject(){
		List<Subject> subjects = new ArrayList<Subject>();
		Iterator<Subject> iterator = subjectRepository.findAll().iterator();
		while (iterator.hasNext()) {
			subjects.add(iterator.next());
		}
		
		return subjects;
	}
	
	public Subject getSubject(Integer subjectId) {
		return subjectRepository.findOne(subjectId);
	}
	
	public Subject getSubject(String name) {
		return subjectRepository.findByName(name);
	}
	
	public Subject addSubject(Subject subject) {
		return subjectRepository.save(subject);
	}
	
	public Subject updateSubject(Subject subject) {
		return subjectRepository.save(subject);
	}
	
	public void deleteSubject(Integer subjectId) {
		subjectRepository.delete(subjectId);
	}
	
	public void deleteAllSubject() {
		subjectRepository.deleteAll();
	}
}
