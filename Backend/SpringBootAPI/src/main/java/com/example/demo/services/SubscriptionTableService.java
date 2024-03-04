package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.SubscriptionTable;
import com.example.demo.repositories.SubscriptionTableRepository;

import jakarta.websocket.server.ServerEndpoint;

@Service
public class SubscriptionTableService {

	@Autowired
	SubscriptionTableRepository strepo;
	
	public List<SubscriptionTable> getall()
	{
		return strepo.getSubscriptionTable();
	}
	
	public List<SubscriptionTable> getallMess()
	{
		return strepo.findAll();
	}
	
	public SubscriptionTable getSubid(int subid )
	{
		return strepo.findById(subid).get();
	}
}
