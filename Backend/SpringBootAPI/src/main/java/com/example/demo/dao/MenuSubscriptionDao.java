package com.example.demo.dao;

public class MenuSubscriptionDao {

	int mess_subscription_id;

	int menu_id;

	int quantity;

	public MenuSubscriptionDao() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MenuSubscriptionDao(int mess_subscription_id, int menu_id, int quantity) {
		super();
		this.mess_subscription_id = mess_subscription_id;
		this.menu_id = menu_id;
		this.quantity = quantity;
	}

	public int getMess_subscription_id() {
		return mess_subscription_id;
	}

	public void setMess_subscription_id(int mess_subscription_id) {
		this.mess_subscription_id = mess_subscription_id;
	}

	public int getMenu_id() {
		return menu_id;
	}

	public void setMenu_id(int menu_id) {
		this.menu_id = menu_id;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "MenuSubscriptionDao [mess_subscription_id=" + mess_subscription_id + ", menu_id=" + menu_id
				+ ", quantity=" + quantity + "]";
	}

}
