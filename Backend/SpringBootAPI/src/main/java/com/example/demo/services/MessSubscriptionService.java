package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.MenuSubscription;
import com.example.demo.entities.Mess;
import com.example.demo.entities.MessSubscription;
import com.example.demo.repositories.MessSubscriptionRepository;
import com.example.demo.repositories.SubscriptionTableRepository;

@Service
public class MessSubscriptionService {

	@Autowired
	MessSubscriptionRepository msrepo;

	public List<MessSubscription> getAllMess() {
		return msrepo.findAll();
	}

	public MessSubscription saveMessSub(MessSubscription m) {
		return msrepo.save(m);
	}
	
	public MessSubscription getMessSubid(int messSubid)
	{
		return msrepo.findById(messSubid).get();
	}
	public List<MessSubscription> getPerticularMess(int messid,int subid) {
		return msrepo.getPerticularMess(messid,subid);
	}

	public List<MessSubscription> getPerticularMessByMid(Mess mess) {
		// TODO Auto-generated method stub
		System.out.println("hi");
		return msrepo.getPerticularMessById(mess);
	}
}
