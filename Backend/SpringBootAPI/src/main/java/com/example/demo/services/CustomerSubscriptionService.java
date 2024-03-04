package com.example.demo.services;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CustomerSubscription;

import com.example.demo.entities.MessSubscription;
import com.example.demo.entities.SubscriptionTable;
import com.example.demo.repositories.CustomerSubscriptionRepository;


@Service
public class CustomerSubscriptionService {

	@Autowired
	CustomerSubscriptionRepository mtrepo;

	public List<SubscriptionTable> getall() {
		return mtrepo.getCustomerSubscription();
	}

	public List<CustomerSubscription> getallCustSub() {
		return mtrepo.findAll();
	}

	public CustomerSubscription getCustSubid(int custsubid) {
		return mtrepo.findById(custsubid).get();
	}
 
	public CustomerSubscription saveMessSub(CustomerSubscription cst) {
		System.out.println(cst);
		return mtrepo.save(cst);
	}
}
