package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.LoginDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class CustomerController {
	@Autowired
	CustomerService custservice;
	
	@Autowired
	LoginService logservice ;

	@PostMapping("/custregister")
	public Customer register(@RequestBody CustomerRegDao cd)
	{
		return custservice.custRegister(cd);
	}
	
	
	@GetMapping("/getcustomer")
	public Customer getCustomer(@RequestParam("login_id") int login_id)
	{
		Login log = logservice.getById(login_id);
		return custservice.getCustomer(log);
	}
}
