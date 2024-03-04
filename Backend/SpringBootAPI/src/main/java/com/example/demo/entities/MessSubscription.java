package com.example.demo.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "mess_subscription")
public class MessSubscription {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int mess_subscription_id;

	@JsonIgnoreProperties("mess_id")
	@ManyToOne
	@JoinColumn(name = "mess_id")
	Mess mess_id;

	@JsonIgnoreProperties("subid")
	@ManyToOne
	@JoinColumn(name = "subscription_id")
	SubscriptionTable subid;

	//@JsonIgnoreProperties("subcust")
	@OneToMany(mappedBy = "submessid", cascade = CascadeType.ALL)
	Set<CustomerSubscription> subcust = new HashSet<CustomerSubscription>();

	//@Column(name = "rate")
	int rate;

	public MessSubscription() {
		super();
		// TODO Auto-generated constructor stub
	}


	public MessSubscription(Mess messtable, SubscriptionTable subid, Set<CustomerSubscription> subcust, int rate) {
		super();
		this.mess_id = messtable;
		this.subid = subid;
		this.subcust = subcust;
		this.rate = rate;
	}


	public MessSubscription(Mess mess_id, SubscriptionTable subid, int rate) {
		super();
		this.mess_id = mess_id ;
		this.subid = subid;
		this.rate = rate;
	}



	public int getMess_subscription_id() {
		return mess_subscription_id;
	}

	public void setMess_subscription_id(int mess_subscription_id) {
		this.mess_subscription_id = mess_subscription_id;
	}

	public Mess getMesstable() {
		return mess_id;
	}

	public void setMesstable(Mess messtable) {
		this.mess_id = messtable;
	}

	public SubscriptionTable getSubid() {
		return subid;
	}

	public void setSubid(SubscriptionTable subid) {
		this.subid = subid;
	}

	public Set<CustomerSubscription> getSubcust() {
		return subcust;
	}

	public void setSubcust(Set<CustomerSubscription> subcust) {
		this.subcust = subcust;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	@Override
	public String toString() {
		return "MessSubscription [mess_subscription_id=" + mess_subscription_id + ", messtable=" + mess_id
				+ ", subid=" + subid + ", subcust=" + subcust + ", rate=" + rate + "]";
	}



}
