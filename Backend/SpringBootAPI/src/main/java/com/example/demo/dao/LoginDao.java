package com.example.demo.dao;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class LoginDao {

	String username ;
	String password;
	Boolean status ;
	@Override
	public String toString() {
		return "LoginDao [username=" + username + ", password=" + password + ", status=" + status + "]";
	}
}
