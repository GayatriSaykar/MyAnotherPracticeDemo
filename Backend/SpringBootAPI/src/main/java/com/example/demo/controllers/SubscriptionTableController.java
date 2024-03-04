package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.SubscriptionTable;
import com.example.demo.services.SubscriptionTableService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SubscriptionTableController {

	@Autowired
	SubscriptionTableService stservice;

	@GetMapping("/SubTablePlans")
	public List<SubscriptionTable> getAll() {
		return stservice.getall();
	}

}
