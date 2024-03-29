package com.example.demo.entities;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "roles")

public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int role_id;

	@Column
	String role_name;
	
	@JsonIgnoreProperties("logins") 												// cross krne ka object 
	@OneToMany(mappedBy = "role" , cascade = CascadeType.ALL)
	Set<Login> logins = new HashSet<Login>();
	
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int role_id, String role_name) {
		super();
		this.role_id = role_id;
		this.role_name = role_name;
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

	public String getRole_name() {
		return role_name;
	}

	public void setRole_name(String role_name) {
		this.role_name = role_name;
	}
}
