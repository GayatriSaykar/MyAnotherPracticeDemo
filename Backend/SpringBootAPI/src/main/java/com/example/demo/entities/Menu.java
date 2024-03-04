package com.example.demo.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Menu")
public class Menu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int menu_id;

	@Column
	String item;

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(int menu_id, String item) {
		super();
		this.menu_id = menu_id;
		this.item = item;
	}

}
