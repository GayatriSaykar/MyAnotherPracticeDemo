package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event.ID;

import com.example.demo.entities.SubscriptionTable;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface SubscriptionTableRepository extends JpaRepository<SubscriptionTable, Integer> {
	
	@Query("select s from SubscriptionTable s")
	public List<SubscriptionTable> getSubscriptionTable(); 
		
	}
