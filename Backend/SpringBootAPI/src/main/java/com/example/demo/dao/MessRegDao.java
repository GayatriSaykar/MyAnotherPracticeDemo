package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MessRegDao {

	String mess_name;
	String owner_name;
	String mess_address;
	String area ;
	String city;
	String contactno;
	String email;
	int login_id;
	String username;
	String password;
	Boolean status;
}
