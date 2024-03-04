package com.example.demo.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerSubscriptionDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerSubscription;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessSubscription;
import com.example.demo.entities.SubscriptionTable;
import com.example.demo.services.CustomerService;
import com.example.demo.services.CustomerSubscriptionService;

import com.example.demo.services.MessSubscriptionService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CustomerSubscriptionController {

	@Autowired
	CustomerSubscriptionService cservice;
	
	@Autowired
	CustomerService cs ;
	
	@Autowired
	MessSubscriptionService msbservice ;
	
	@PostMapping("/saveCustomerSub")
	public CustomerSubscription saveCust(@RequestBody CustomerSubscriptionDao csd )
	{
		Customer c = cs.getCustomer(csd.getCustid());
		
		MessSubscription msb = msbservice.getMessSubid(csd.getSubmessid());
		
		CustomerSubscription csb = new CustomerSubscription(c , msb , csd.getStart_date(),csd.getEnd_date() , csd.getRate());
	
	    return cservice.saveMessSub(csb);
	}
	 
	

}
