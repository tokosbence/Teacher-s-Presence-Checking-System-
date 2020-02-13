package com.kondika.base.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.EmployeUser;
import com.kondika.base.repository.EmployerUserRepository;

@Service
public class EmployerUserServices {
	
	@Autowired
	private EmployerUserRepository userRepository;
	
	public List<EmployeUser> getAllUser(){
		List<EmployeUser> users = new ArrayList<>();
		userRepository.findAll().forEach(users::add);
		
		return users;
	}
	
	public EmployeUser getUser(String username) {
		return userRepository.findByUsername(username);
	}
	
	public void addUser(EmployeUser user) {
		userRepository.save(user);
	}
		
	public void deleteAllUser() {
		userRepository.deleteAll();
	}
	
}
