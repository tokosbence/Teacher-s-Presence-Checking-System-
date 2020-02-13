package com.kondika.base.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kondika.base.model.Room;
import com.kondika.base.repository.RoomRepository;

@Service
public class RoomServices {
	
	@Autowired
	private RoomRepository roomRepository;
	
	public List<Room> getAllRoom(){
		List<Room> rooms = new ArrayList<Room>();
		Iterator<Room> iterator = roomRepository.findAll().iterator();
		while (iterator.hasNext()) {
			rooms.add(iterator.next());
		}
		
		return rooms;
	}
	
	public Room getRoom(Integer roomId) {
		return roomRepository.findOne(roomId);
	}
	
	public Room getRoom(String name) {
		return roomRepository.findByName(name);
	}
	
	public Room addRoom(Room room) {
		return roomRepository.save(room);
	}
	
	public Room updateRoom(Room room) {
		return roomRepository.save(room);
	}
	
	public void deleteRoom(Integer roomId) {
		roomRepository.delete(roomId);
	}
	
	public void deleteAllRoom() {
		roomRepository.deleteAll();
	}
}
