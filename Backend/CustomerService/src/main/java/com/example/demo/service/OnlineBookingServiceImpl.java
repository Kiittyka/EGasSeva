package com.example.demo.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.UUID;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.entity.OnlineBooking;
import com.example.demo.entity.Query;
import com.example.demo.repository.OnlineBookingRepository;
import com.example.demo.repository.QueryRepository;

@Service
public class OnlineBookingServiceImpl implements OnlineBookingService {
	EntityManager entityManager;

	public OnlineBookingServiceImpl(EntityManager entityManager) {

		this.entityManager = entityManager;
	}

	@Autowired
	private OnlineBookingRepository onlineBookingRepository;

	public void save(OnlineBooking data) {
<<<<<<< HEAD
		
		String id=UUID.randomUUID().toString().substring(0, 8);
		String timeStamp = new SimpleDateFormat("dd/MM/yyyy hh:MM:ss").format(Calendar.getInstance().getTime());

=======

		String id = UUID.randomUUID().toString().substring(0, 8);
>>>>>>> 6f1f83372c8b85a64409194d5adabd921da7a2b7
		data.setSid(id);
		data.setDate(timeStamp);
		onlineBookingRepository.save(data);
	}

	@Override
	public Customer getCustomerData(String email) {
		Customer cust=entityManager.find(Customer.class, email);
		return cust ;
	}
}
