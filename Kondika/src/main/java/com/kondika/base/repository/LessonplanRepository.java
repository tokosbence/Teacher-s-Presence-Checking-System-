package com.kondika.base.repository;

import org.springframework.data.repository.CrudRepository;
import com.kondika.base.model.*;

public interface LessonplanRepository extends CrudRepository<Lessonplan, Integer> {
	Lessonplan findByName(String name);
}
