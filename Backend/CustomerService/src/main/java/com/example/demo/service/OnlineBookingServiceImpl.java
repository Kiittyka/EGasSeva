package com.example.demo.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.UUID;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.entity.OnlineBooking;
import com.example.demo.repository.OnlineBookingRepository;

@Service
public class OnlineBookingServiceImpl implements OnlineBookingService {
	EntityManager entityManager;

	public OnlineBookingServiceImpl(EntityManager entityManager) {

		this.entityManager = entityManager;
	}

	@Autowired
	private OnlineBookingRepository onlineBookingRepository;

	public boolean save(OnlineBooking data) {
		
		String id=UUID.randomUUID().toString().substring(0, 8);
		String timeStamp = new SimpleDateFormat("dd/MM/yyyy hh:MM:ss").format(Calendar.getInstance().getTime());
		id = UUID.randomUUID().toString().substring(0, 8);
		data.setSid(id);
		data.setDate(timeStamp);
		
		onlineBookingRepository.save(data);
		return true;
	}

	@Override
	public Customer getCustomerData(String email) {
		Customer cust= entityManager.find(Customer.class,email);
		System.out.println(cust.toString());
		return cust ;
	}
}
