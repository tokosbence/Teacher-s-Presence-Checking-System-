package com.kondika.base.repository;

import org.springframework.data.repository.CrudRepository;

import com.kondika.base.model.Class;

public interface ClassRepository extends CrudRepository<Class, Integer> {
	Class findByName(String name);
}
