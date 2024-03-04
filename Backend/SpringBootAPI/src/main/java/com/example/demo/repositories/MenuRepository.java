package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Menu;
import com.example.demo.entities.MenuSubscription;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface MenuRepository extends JpaRepository<Menu, Integer> {

	@Query("select m from Menu m")
	public List<Menu> getmenu();
	
	

}
