package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.CustomerSubscription;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.SubscriptionTable;

@Repository
public interface CustomerSubscriptionRepository extends JpaRepository< CustomerSubscription, Integer> {

	@Query("select s from CustomerSubscription s")
	public List<SubscriptionTable> getCustomerSubscription(); 
	
	
     
	
}
