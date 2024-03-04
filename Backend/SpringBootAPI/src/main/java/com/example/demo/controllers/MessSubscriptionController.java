package com.example.demo.controllers;


import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.MessSubscriptionDao;
import com.example.demo.entities.CustomerSubscription;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessSubscription;
import com.example.demo.entities.SubscriptionTable;
import com.example.demo.services.CustomerSubscriptionService;
import com.example.demo.services.MessService;
import com.example.demo.services.MessSubscriptionService;
import com.example.demo.services.SubscriptionTableService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MessSubscriptionController {

	@Autowired
	MessSubscriptionService mservice;

	@Autowired
	MessService ms;

	@Autowired
	SubscriptionTableService stservice;
	
	@Autowired
	CustomerSubscriptionService css;

	@GetMapping("/getAllMessSubscription")
	public List<MessSubscription> getMessSubscription() {
		return mservice.getAllMess();
	}
	
	@GetMapping("/getPerticularMessSubscription")
	public List<MessSubscription> getPerticularmess(@RequestParam("messid") int messid,@RequestParam("subId") int subid) {
		return mservice.getPerticularMess(messid, subid);
	}
	

	@GetMapping("/getPerticularMessSubscriptionTwo")
	public List<MessSubscription> getPerticularmess(@RequestParam("mess_id") int mess_id) {
		
		System.out.println(mess_id);
		Mess mess = ms.getMessById(mess_id);
	  return mservice.getPerticularMessByMid(mess);
	    
//	    if (subscriptions.isEmpty()) {
//	        return ResponseEntity.notFound().build(); // Return 404 if no subscriptions are found
//	    } else {
//	        return ResponseEntity.ok(subscriptions);
//	    }
	}



	@PostMapping("/saveMessSubscription")
	public MessSubscription saveMS(@RequestBody MessSubscriptionDao msd) {
		System.out.println("hellooo");
		System.out.println(msd);
		Mess m = ms.getMess(msd.getMess_id());

		SubscriptionTable s = stservice.getSubid(msd.getSubscription_id());

		// System.out.println(m.getMess_id());

		MessSubscription ms = new MessSubscription(m, s, msd.getRate());


		return mservice.saveMessSub(ms);

	}
	
	@PostMapping("/hello")
	public String saveshubh(@RequestBody MessSubscriptionDao md) {
		System.out.println("#################################################");
		return "success";
	}
	
	
}
