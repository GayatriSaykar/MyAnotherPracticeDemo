package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CustomerRegDao;
import com.example.demo.dao.MessRegDao;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Mess;
import com.example.demo.entities.Role;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.MessRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class MessService {
	@Autowired
	MessRepository messrepo;

	@Autowired
	RoleService rs;

	@Autowired
	LoginService logservice;
	
	@Autowired
	LoginRepository lr   ;

	public Mess messRegister(MessRegDao md) {
		Role ro = rs.getRole(3);

		Login lg = new Login(md.getUsername(), md.getPassword(), ro , false);

		lr.save(lg);

		Mess mess = new Mess(md.getMess_name(), md.getOwner_name(), md.getMess_address(),md.getArea(), md.getCity(),
				md.getContactno(), md.getEmail() ,lg );

		return messrepo.save(mess);
	}
	
	public List<Mess> getAllMess() {
        return messrepo.findAll();
    }

    public List<Mess> getMessByCity(String city) {
        return messrepo.findByCity(city);
    }
    
    public Mess getMessByMid(int mid) {
    	return messrepo.getMessByMid(mid);
    }
    
    public Mess getMess(int log) {
		Optional<Mess> m = messrepo.findById(log);
		return m.get();
	}

//	public Mess getMess(Login log) {
//		return messrepo.getMess(log);
//  }
	
	public Mess getMessById(int messId) {
        return messrepo.findById(messId).orElse(null);
    }
	
	public Mess getMessByuid(int uid) {
		return messrepo.getMessByuid(uid);
	}
	
	 
	 public void deleteMess(int mess_id) {
	        try {
	            messrepo.deleteById(mess_id);
	        } catch (EmptyResultDataAccessException e) {
	            // Handle the case where the entity with mess_id is not found
	            throw new EntityNotFoundException("Mess with id " + mess_id + " not found");
	        } catch (Exception e) {
	            // Handle other exceptions
	            e.printStackTrace(); // Log the exception
	            throw new RuntimeException("Error deleting Mess");
	        }
	    }

	    public List<Mess> getMessByArea(String area) {
	        return messrepo.findByArea(area);
	    }

}