package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.example.demo.dao.LoginDao;
import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

import jakarta.transaction.Transactional;

@Service
public class LoginService {

	@Autowired
	LoginRepository logrepo;

	public Login register(Login log) {
		return logrepo.save(log);
	}

	public Login checkLogin(String username, String password) {
		Optional<Login> log = logrepo.LoginDetail(username, password);

		Login res = null;

		try {
			res = log.get();
		} catch (Exception e) {
			res = null;
		}

		return res;
	}

	@Transactional
	public Login saveLogin(Login login) {
		try {
			return logrepo.save(login);
		} catch (Exception e) {
			e.printStackTrace(); // Log the exception stack trace
			throw new RuntimeException("Error saving login information.", e);
		}
	}

	public Login getById(int loginId) {
		try {
			return logrepo.findById(loginId).get();
		} catch (Exception e) {
			e.printStackTrace(); // Log the exception stack trace
			throw new RuntimeException("Error getting login information by ID.", e);
		}
	}

	// -----------------------------------------------------------------------------------------

	// Rejection
	public void rejectMess(int login_id) {
		// Fetch the login by ID
		Login login = logrepo.findById(login_id).get();

		// Perform any business logic related to rejecting the login
		login.setStatus(false);

		// Save the updated login entity
		logrepo.save(login);
	}

	// ----------------------------------------------------------------------------------------------------

	// Approval
	public void ApproveMess(int login_id) {
		logrepo.findById(login_id).ifPresent(login -> {
			// Perform the approval logic here
			// For example, set an approval status field on the Login entity
			login.setStatus(true);
			logrepo.save(login);
		});
		// If the login is not present, no need to explicitly handle it
	}

}
