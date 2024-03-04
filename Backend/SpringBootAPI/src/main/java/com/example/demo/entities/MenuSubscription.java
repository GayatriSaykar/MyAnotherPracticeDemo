package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.NamedEntityGraph;
import jakarta.persistence.Table;

@Entity
@Table(name = "menu_subscription")
public class MenuSubscription {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int menu_subscription_id; // primary key

	@JsonIgnoreProperties("mess_subscription_id")
	@ManyToOne
	@JoinColumn(name = "mess_subscription_id")
	MessSubscription mess_subscription_id; // foreign key

	@JsonIgnoreProperties("menu_id")
	@ManyToOne
	@JoinColumn(name = "menu_id")
	Menu menu_id;

	@Column
	int quantity;

	public MenuSubscription(MessSubscription ms, Menu m, int quantity) {
		super();
		// TODO Auto-generated constructor stub
		this.mess_subscription_id = ms;
		this.menu_id = m;
		this.quantity = quantity;
	}

	public MenuSubscription() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getMenu_subscription_id() {
		return menu_subscription_id;
	}

	public void setMenu_subscription_id(int menu_subscription_id) {
		this.menu_subscription_id = menu_subscription_id;
	}

	public MessSubscription getMess_subscription_id() {
		return mess_subscription_id;
	}

	public void setMess_subscription_id(MessSubscription mess_subscription_id) {
		this.mess_subscription_id = mess_subscription_id;
	}

	public Menu getMenu_id() {
		return menu_id;
	}

	public void setMenu_id(Menu menu_id) {
		this.menu_id = menu_id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
