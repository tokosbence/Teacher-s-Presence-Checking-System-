package com.kondika.base.repository;



import org.springframework.data.repository.CrudRepository;

import com.kondika.base.model.EmployeUser;



public interface EmployerUserRepository extends CrudRepository<EmployeUser, Long> {
    public EmployeUser findByUsername(String name);
}
