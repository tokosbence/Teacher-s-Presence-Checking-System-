package com.kondika.base.repository;

import org.springframework.data.repository.CrudRepository;

import com.kondika.base.model.Room;

public interface RoomRepository extends CrudRepository<Room, Integer> {
	Room findByName(String name);
	Room findByReader( String reader);
}
