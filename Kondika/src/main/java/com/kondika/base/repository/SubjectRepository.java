package com.kondika.base.repository;

import org.springframework.data.repository.CrudRepository;


import com.kondika.base.model.Subject;

public interface SubjectRepository extends CrudRepository<Subject, Integer> {
	Subject findByName(String name);
}
