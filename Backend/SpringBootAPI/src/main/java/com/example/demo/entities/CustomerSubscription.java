package com.example.demo.entities;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer_subscription")

public class CustomerSubscription {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cust_subscription_id;

	@JsonIgnoreProperties("cust_id")
	@OneToOne
	@JoinColumn(name="cust_id")
	Customer custid;

	@JsonIgnoreProperties("submessid")
	@ManyToOne
	@JoinColumn(name="mess_subscription_id")
	MessSubscription submessid;

	@Column
	Date start_date;

	@Column
	Date end_date;

	@JsonIgnoreProperties("submessrate")
	@OneToOne
	@JoinColumn(name = "rate")
	MessSubscription submessrate;

	public CustomerSubscription() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomerSubscription(int cust_subscription_id, Customer custid, MessSubscription submessid, Date start_date,
			Date end_date, MessSubscription submessrate) {
		super();
		this.cust_subscription_id = cust_subscription_id;
		this.custid = custid;
		this.submessid = submessid;
		this.start_date = start_date;
		this.end_date = end_date;
		this.submessrate = submessrate;
	}

	public CustomerSubscription(Customer c, MessSubscription msb, Date start_date2, Date end_date2, int rate) {
		// TODO Auto-generated constructor stub
	
		
	}

	public int getCust_subscription_id() {
		return cust_subscription_id;
	}

	public void setCust_subscription_id(int cust_subscription_id) {
		this.cust_subscription_id = cust_subscription_id;
	}

	public Customer getCustid() {
		return custid;
	}

	public void setCustid(Customer custid) {
		this.custid = custid;
	}

	public MessSubscription getSubmess() {
		return submessid;
	}

	public void setSubmess(MessSubscription submess) {
		this.submessid = submess;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public MessSubscription getSubmessrate() {
		return submessrate;
	}

	public void setSubmessrate(MessSubscription submessrate) {
		this.submessrate = submessrate;
	}

	@Override
	public String toString() {
		return "CustomerSubscription [cust_subscription_id=" + cust_subscription_id + ", custid=" + custid
				+ ", submess=" + submessid + ", start_date=" + start_date + ", end_date=" + end_date + ", submessrate="
				+ submessrate + "]";
	}

//	public List<CustomerSubscription> getall() {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	

}
