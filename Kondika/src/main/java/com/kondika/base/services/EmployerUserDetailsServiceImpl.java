package com.kondika.base.services;

import static java.util.Collections.emptyList;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kondika.base.model.EmployeUser;
import com.kondika.base.repository.EmployerUserRepository;


@Service
public class EmployerUserDetailsServiceImpl implements UserDetailsService  {
	 private EmployerUserRepository employerUserRepository;

	    public EmployerUserDetailsServiceImpl(EmployerUserRepository employerUserRepository) {
	        this.employerUserRepository = employerUserRepository;
	    }

	    @Override
	    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
	        EmployeUser employerUser = employerUserRepository.findByUsername(name);
	        if (employerUser == null) {
	            throw new UsernameNotFoundException(name);
	        }
	        return new User(employerUser.getUsername(), employerUser.getPassword(), emptyList());
	    }
}
