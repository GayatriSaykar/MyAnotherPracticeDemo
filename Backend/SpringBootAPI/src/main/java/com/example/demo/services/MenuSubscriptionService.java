package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.MenuSubscription;
import com.example.demo.entities.MessSubscription;
import com.example.demo.repositories.MenuSubscriptionRepository;

@Service
public class MenuSubscriptionService {

	@Autowired
	MenuSubscriptionRepository msbrepo;

	public MenuSubscription saveMenuSub(MenuSubscription ms) {
		return msbrepo.save(ms);
	}

	public List<MenuSubscription> getAllMenuSubs() {
		return msbrepo.findAll();
	}
   
	public MenuSubscription getMenuSubid(int menuSubid)
	{
		return msbrepo.findById(menuSubid).get();
	}

	public List<MenuSubscription> getItems(int messSubId, int menuId) {
		
		return msbrepo.getItemsMessSubIdMenuId(messSubId,menuId);
	}
	
}
