package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kondika.base.model.EmployeUser;
import com.kondika.base.repository.EmployerUserRepository;
import com.kondika.base.services.EmployerUserServices;

@RestController
@RequestMapping("/users")
public class EmployerUserController {
	private EmployerUserRepository employerUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @Autowired
    private EmployerUserServices userServices;
    
    
    public EmployerUserController(EmployerUserRepository employerUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.employerUserRepository = employerUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody EmployeUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        employerUserRepository.save(user);
    }
    
    @GetMapping("/current")
    public ResponseEntity<EmployeUser> GetCurrentUser()
    {
    	SecurityContext securityContext = SecurityContextHolder.getContext();
    	if(securityContext != null) {
    		Authentication authentication = securityContext.getAuthentication();
    		String userName = (String) authentication.getPrincipal();
    		
    		EmployeUser user = employerUserRepository.findByUsername(userName);
    		return ResponseEntity.ok(user);
    	}
    	
    	
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
    
    
   @GetMapping("/allusers")
   public List<EmployeUser> getAllUser(){
	   return userServices.getAllUser();
   }
    
    @PostMapping("/adduser")
    public void addUser(@RequestBody EmployeUser user) {
    	userServices.addUser(user);
    }
    
   
    
    
}
