package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Menu;
import com.example.demo.entities.MenuSubscription;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface MenuSubscriptionRepository extends JpaRepository<MenuSubscription, Integer>{
	
	
     @Query("select m from MenuSubscription m ")
     public List<MenuSubscription> getMenuSubscription();
     
     
    @Query("select m from MenuSubscription m where m.mess_subscription_id.mess_subscription_id=:messSubId and m.menu_id.menu_id=:menuId")
	public List<MenuSubscription> getItemsMessSubIdMenuId(@Param("messSubId")int messSubId,@Param("menuId") int menuId);
     
     //@Query("select m from MenuSubscription m where m.mess_subscription_id=:mess_subscription_id")
     
     
}
