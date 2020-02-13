package com.kondika.base.repository;

import org.springframework.data.repository.CrudRepository;

import com.kondika.base.model.LogEntry;

public interface LogEntryRepository extends CrudRepository<LogEntry, Integer> {
	LogEntry findById(Integer id);
}
