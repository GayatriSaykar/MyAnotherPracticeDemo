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
@Table(name="mess")

public class Mess{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int mess_id;
	
	@Column
	String mess_name;
	
	@Column
	String owner_name;
	
	@Column
	String mess_address;
	
	@Column
	String area;
	
	@Column
	String city;
	
	@Column
	String contactno;
	
	@Column
	String email;
	 
	@JsonIgnoreProperties("logins")
	@OneToOne
	@JoinColumn(name = "login_id")
	Login logins  ;

	
	
	

	public Mess() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mess(int mess_id, String mess_name, String owner_name, String mess_address, String area, String city,
			String contactno, String email, Login logins) {
		super();
		this.mess_id = mess_id;
		this.mess_name = mess_name;
		this.owner_name = owner_name;
		this.mess_address = mess_address;
		this.area = area;
		this.city = city;
		this.contactno = contactno;
		this.email = email;
		this.logins = logins;
	}

	public Mess(String mess_name2, String owner_name2, String mess_address2, String area2 , String city2, String contactno2,
			String email2, Login lg) {
		// TODO Auto-generated constructor stub
		mess_name = mess_name2;
		owner_name = owner_name2;
		mess_address = mess_address2;
		area = area2  ;
		city = city2;
		contactno = contactno2;
		email = email2;
		logins = lg;

	}

	

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public String getMess_name() {
		return mess_name;
	}

	public void setMess_name(String mess_name) {
		this.mess_name = mess_name;
	}

	public String getOwner_name() {
		return owner_name;
	}

	public void setOwner_name(String owner_name) {
		this.owner_name = owner_name;
	}

	public String getMess_address() {
		return mess_address;
	}

	public void setMess_address(String mess_address) {
		this.mess_address = mess_address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
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
	
	public Login getLogin_id() {
	return logins ;
    }

    public void setLogin_id(Login login_id) {
	this.logins = logins;
 }
    
    public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}
}
