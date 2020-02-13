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
import com.kondika.base.services.LessonplanServices;

@RestController
@RequestMapping("/lessonplan")
public class LessonplanController {
	@Autowired
	private LessonplanServices lessonplanServices;
	
	@GetMapping
	public List<Lessonplan> getAllLessonplan() {
		return lessonplanServices.getAllLessonplan();
	}
	
	 @GetMapping(value ="/getLessonplan/{lessonplanId}")
		public Lessonplan getLessonplan(@PathVariable("lessonplanId") Integer lessonplanId) {
			return lessonplanServices.getLessonplan(lessonplanId);
		}
	 
	 @PostMapping("/new")
	    public  Lessonplan addLessonplan(@RequestBody Lessonplan lessonplan) {
	    	return lessonplanServices.addLessonplan(lessonplan);
	    }

	 @PostMapping("/updateLessonplan")
		public Lessonplan updateLessonplan(@RequestBody Lessonplan lessonplan) {
			return lessonplanServices.updateLessonplan(lessonplan);
		}
	 
		@GetMapping(value = "/deleteLessonplan/{lessonplanId}")
		public void deleteLessonplan(@PathVariable("lessonplanId") Integer lessonplanId) {
			lessonplanServices.deleteLessonplan(lessonplanId);
		}
}
