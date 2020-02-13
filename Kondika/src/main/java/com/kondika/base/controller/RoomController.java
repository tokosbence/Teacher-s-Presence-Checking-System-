package com.kondika.base.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kondika.base.model.Room;
import com.kondika.base.services.RoomServices;

@RestController
@RequestMapping("/room")
public class RoomController {

	 @Autowired
	    private RoomServices roomServices;
	
	
	 @GetMapping(value ="/getRoom/{roomId}")
		public Room getRoom(@PathVariable("roomId") Integer roomId) {
			return roomServices.getRoom(roomId);
		}
	 
	 
	 @GetMapping
		public List<Room> getAllRoom() {
			return roomServices.getAllRoom();
		}
	
	@PostMapping("/new")
	    public  Room addRoom(@RequestBody Room room) {
	    	return roomServices.addRoom(room);
	    }
	
	 @PostMapping("/updateRoom")
		public Room updateRoom(@RequestBody Room room) {
			return roomServices.updateRoom(room);
		}
	 
	@GetMapping(value = "/deleteRoom/{roomId}")
		public void deleteRoom(@PathVariable("roomId") Integer roomId) {
		roomServices.deleteRoom(roomId);
		}
		
}
