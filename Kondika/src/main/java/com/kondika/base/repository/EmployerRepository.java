package com.kondika.base.repository;

import org.springframework.data.repository.CrudRepository;


import com.kondika.base.model.Employer;

public interface EmployerRepository extends CrudRepository<Employer, Integer>{
	Employer findByFirstname(String firstname);
	Employer findByCard(String cardId); 
}
