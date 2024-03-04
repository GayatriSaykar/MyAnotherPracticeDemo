package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Mess;
import com.example.demo.entities.MessSubscription;
import com.example.demo.entities.SubscriptionTable;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface MessSubscriptionRepository extends JpaRepository<MessSubscription, Integer>{
	
	@Query("select s from MessSubscription s")
	public List<MessSubscription> getMessSubscription();
	
	
	@Query("select s from MessSubscription s where s.mess_id.mess_id=:messid and s.subid.subscription_id=:subid")
	public List<MessSubscription> getPerticularMess(@Param("messid") int messid,@Param("subid") int subid);
	
	@Query("select s from MessSubscription s where s.mess_id=:mess_id")
	public List<MessSubscription> getPerticularMessById(@Param("mess_id")Mess mess_id);
	
	
	
}
