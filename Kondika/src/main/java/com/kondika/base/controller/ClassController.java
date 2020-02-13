package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kondika.base.model.Class;
import com.kondika.base.services.ClassServices;


@RestController
@RequestMapping("/classes")
public class ClassController {
	 @Autowired
	 private ClassServices classServices;
	 
	 @GetMapping(value ="/{classId}")
		public Class getClass(@PathVariable("classId") Integer classId) {
			return classServices.getClass(classId);
		}
	 
	 
	 @GetMapping
		public List<Class> getAllClass() {
			return classServices.getAllClass();
		}
	
	@PostMapping("/new")
	    public Class addClass(@RequestBody Class clas) {
	    	return classServices.addClass(clas);
	    }
	
	 @PostMapping("/updateClass")
		public Class updateClass(@RequestBody  Class clas) {
			return classServices.updateClass(clas);
		}
	 
	@DeleteMapping(value = "/{classId}")
		public void deleteClass(@PathVariable("classId") Integer classId) {
			classServices.deleteClass(classId);
		}
		
	 
}
