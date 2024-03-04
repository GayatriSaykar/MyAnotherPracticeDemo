package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CustomerRegDao {
	String cust_name;
	String cust_address;
	String contactno;
	String email;
	String gender;
	int login_id;
	String username ;
	String password ;
}
