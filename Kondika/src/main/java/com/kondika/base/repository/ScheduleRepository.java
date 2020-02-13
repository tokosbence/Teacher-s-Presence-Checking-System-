package com.kondika.base.repository;


import org.springframework.data.repository.CrudRepository;

import com.kondika.base.model.*;

public interface ScheduleRepository extends CrudRepository<Schedule, Integer> {
	Schedule findById(Integer id);
}
