package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;
@Repository
@Transactional
public interface LoginRepository extends JpaRepository<Login, Integer> {
	//add login and write query to match username and password
	@Query("Select l from Login l where l.username = :username and l.password= :password")
	public Optional<Login> LoginDetail(@Param("username") String username, @Param("password") String password);
	
	
	@Modifying
	@Query(value = "update mess set status = 1 where login_id = :id ",nativeQuery = true )
	public int approveMess(int id );
	
	
	@Modifying
	@Query(value = "update mess set status = 0 where login_id = :id ",nativeQuery = true )
	public int rejectMess(int id );
	
}
