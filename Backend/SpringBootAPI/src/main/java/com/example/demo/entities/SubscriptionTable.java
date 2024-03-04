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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "subscription_table")

public class SubscriptionTable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int subscription_id;

	@Column
	String subscription_name;

	@Column
	int period;
	
	/*@JsonIgnoreProperties("submess")
	@OneToMany(mappedBy="subtable" , cascade = CascadeType.ALL)
	Set<MessSubscription> submess = new HashSet<MessSubscription>();
*/
	public SubscriptionTable(String subscription_name, int period) {
		super();
		this.subscription_name = subscription_name;
		this.period = period;
	}

	public int getSubscription_id() {
		return subscription_id;
	}

	public void setSubscription_id(int subscription_id) {
		this.subscription_id = subscription_id;
	}

	public SubscriptionTable() {
		super();
	}

	public String getSubscription_name() {
		return subscription_name;
	}

	public void setSubscription_name(String subscription_name) {
		this.subscription_name = subscription_name;
	}

	public int getPeriod() {
		return period;
	}

	public void setPeriod(int period) {
		this.period = period;
	}

	@Override
	public String toString() {
		return "SubscriptionTable [subscription_id=" + subscription_id + ", subscription_name=" + subscription_name
				+ ", period=" + period + "]";
	}

}
