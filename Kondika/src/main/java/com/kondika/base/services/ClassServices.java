package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.Class;
import com.kondika.base.repository.ClassRepository;

@Service
public class ClassServices {
	@Autowired
	private ClassRepository classRepository;
	
	public List<Class> getAllClass(){
		List<Class> classes = new ArrayList<Class>();
		Iterator<Class> iterator = classRepository.findAll().iterator();
		while (iterator.hasNext()) {
			classes.add(iterator.next());
		}
		
		return classes;
	}
	
	public Class getClass(Integer classId) {
		return classRepository.findOne(classId);
	}
	
	public Class getClass(String name) {
		return classRepository.findByName(name);
	}
	
	public Class addClass(Class clas) {
		return classRepository.save(clas);
	}
	
	public Class updateClass(Class clas) {
		return classRepository.save(clas);
	}
	
	public void deleteClass(Integer classId) {
		classRepository.delete(classId);
	}
	
	public void deleteAll() {
		classRepository.deleteAll();
	}
}
