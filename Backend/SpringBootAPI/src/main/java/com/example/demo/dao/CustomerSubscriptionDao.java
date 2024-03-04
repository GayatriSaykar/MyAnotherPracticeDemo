package com.example.demo.dao;

import java.sql.Date;

public class CustomerSubscriptionDao {

	int custid;

	int submessid;

	Date start_date;

	Date end_date;

	int rate;

	public CustomerSubscriptionDao() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCustid() {
		return custid;
	}

	public void setCustid(int custid) {
		this.custid = custid;
	}

	public int getSubmessid() {
		return submessid;
	}

	public void setSubmess(int submessid) {
		this.submessid = submessid;
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

	public int getRate() {
		return rate;
	}

	@Override
	public String toString() {
		return "CustomerSubscriptionDao [custid=" + custid + ", submessid=" + submessid + ", start_date=" + start_date
				+ ", end_date=" + end_date + ", rate=" + rate + "]";
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

}
