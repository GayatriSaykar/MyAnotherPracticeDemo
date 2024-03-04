package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cust_id;

	@Column
	String cust_name;

	@Column
	String cust_address;

	@Column
	String contactno;

	@Column
	String email;

	@Column
	String gender;
	
	@JsonIgnoreProperties("logins") // object 
	@OneToOne
	@JoinColumn(name = "login_id")
	Login logins ;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(int cust_id, String cust_name, String cust_address, String contactno, String email, String gender, Login logins) {
		super();
		this.cust_id = cust_id;
		this.cust_name = cust_name;
		this.cust_address = cust_address;
		this.contactno = contactno;
		this.email = email;
		this.gender = gender;
		this.logins = logins ;
	}
	


	

	public Customer(String cust_name2, String cust_address2, String contactno2, String email2, String gender2,
			Login login_id) {
		// TODO Auto-generated constructor stub
		cust_name = cust_name2 ;
		cust_address = cust_address2 ;
		contactno = contactno2 ;
		email = email2 ;
		gender = gender2 ;
		logins = login_id ;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public String getCust_name() {
		return cust_name;
	}

	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}

	public String getCust_address() {
		return cust_address;
	}

	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

  public Login getLogin_id() {
		return logins ;
	}

	public void setLogin_id(Login login_id) {
		this.logins = logins ;
	}

}
