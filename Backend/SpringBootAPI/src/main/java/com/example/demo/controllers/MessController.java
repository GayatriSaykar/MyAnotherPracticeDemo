package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.MessRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Mess;

import com.example.demo.services.MessService;

@RestController 
@CrossOrigin(origins = "http://localhost:3000")
public class MessController {
	

	@Autowired
	MessService mservice;

	@PostMapping("/messregister")
	public Mess messRegister(@RequestBody MessRegDao md) {
		return mservice.messRegister(md);
	}

	@GetMapping("/all")
    public List<Mess> getAllMess() {
        return mservice.getAllMess();
    }
	
	@GetMapping("/getOnemess")
	public Mess getMessByuid(@RequestParam("uid") int uid) {
		return mservice.getMessByuid(uid);
	}

	@GetMapping("/byCity/{city}")
    public List<Mess> getMessByCity(@PathVariable("city")String city) {
        try {
            return mservice.getMessByCity(city);
        } catch (Exception e) {
            e.printStackTrace(); // Log the exception
            throw new RuntimeException("Error processing request");
        }
    }
	
	
	@PutMapping("/MessDelete/{mess_id}")
	public ResponseEntity<String> deleteMess(@PathVariable("mess_id") int mess_id) {
	    try {
	        mservice.deleteMess(mess_id);
	        return ResponseEntity.ok("Mess deleted successfully");
	    } catch (Exception e) {
	        e.printStackTrace(); // Log the exception
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Error deleting Mess: " + e.getMessage());
	    }
	}

	
	@GetMapping("/byArea/{area}")
	public List<Mess> getMessByArea(@PathVariable("area") String area) {
	    try {
	        return mservice.getMessByArea(area);
	    } catch (Exception e) {
	        e.printStackTrace(); // Log the exception
	        throw new RuntimeException("Error processing request");
	    }
	}

}



