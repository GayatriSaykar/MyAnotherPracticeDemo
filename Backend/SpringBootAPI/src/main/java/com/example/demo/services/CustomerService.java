package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.LoginRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository custrepo;

	@Autowired
	RoleService rs;

	@Autowired
	LoginService logservice;
	
	@Autowired
	LoginRepository lr ;

	public Customer custRegister(CustomerRegDao cd)
	{
		Role ro = rs.getRole(2);
        
		
		Login lg = new Login(cd.getUsername(), cd.getPassword(), ro , true);
		lr.save(lg);

		Customer custom = new Customer(cd.getCust_name(), cd.getCust_address(), cd.getContactno(), cd.getEmail(),
				cd.getGender(), lg);

		return custrepo.save(custom);
	}
	
	public Customer getCustomer(int log) {
		Optional<Customer> c = custrepo.findById(log);
		return c.get();
	}
	
	public Customer getCustomer(Login l )
	{
		return custrepo.getCustomer(l);
	}
	
	
	public List<Customer> getAllCustomers() {
        return custrepo.findAll();
    }
}
