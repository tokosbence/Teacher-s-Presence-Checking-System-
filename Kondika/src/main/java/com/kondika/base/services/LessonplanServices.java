package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.*;
import com.kondika.base.repository.*;

@Service
public class LessonplanServices {
	@Autowired
	private LessonplanRepository lessonplanRepository;
	
	public List<Lessonplan> getAllLessonplan(){
		List<Lessonplan> lessonplans = new ArrayList<Lessonplan>();
		Iterator<Lessonplan> iterator = lessonplanRepository.findAll().iterator();
		while (iterator.hasNext()) {
			lessonplans.add(iterator.next());
		}
		
		return lessonplans;
	}
	
	public Lessonplan getLessonplan(Integer lessonplanId) {
		return lessonplanRepository.findOne(lessonplanId);
	}
	
	public Lessonplan addLessonplan(Lessonplan lessonplan) {
		return lessonplanRepository.save(lessonplan);
	}
	
	public Lessonplan updateLessonplan(Lessonplan lessonplan) {
		return lessonplanRepository.save(lessonplan);
	}
	
	public void deleteLessonplan(Integer lessonplanId) {
		lessonplanRepository.delete(lessonplanId);
	}
	
	public void deleteAllLessonplan() {
		lessonplanRepository.deleteAll();
	}
	
}
