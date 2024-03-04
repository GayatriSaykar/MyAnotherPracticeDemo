package com.example.demo.dao;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MessSubscriptionDao {

	int mess_id;
	
	int subscription_id;
	
	int rate;

//	public MessSubscriptionDao(int mess_id, int subscription_id, int rate) {
//		super();
//		this.mess_id = mess_id;
//		this.subscription_id = subscription_id;
//		this.rate = rate;
//	}

	public MessSubscriptionDao() {
		super();
	}

	public int getMess_id() {
		return mess_id;
	}

	public void setMess_id(int mess_id) {
		this.mess_id = mess_id;
	}

	public int getSubscription_id() {
		return subscription_id;
	}

	public void setSubscription_id(int subscription_id) {
		this.subscription_id = subscription_id;
	}

	public int getRate() {
		return rate;
	}

	public void setRate(int rate) {
		this.rate = rate;
	}

	@Override
	public String toString() {
		return "MessSubscriptionDao [mess_id=" + mess_id + ", subscription_id=" + subscription_id + ", rate=" + rate
				+ "]";
	}


}
