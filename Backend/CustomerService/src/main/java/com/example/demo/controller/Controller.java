package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.entity.OnlineBooking;
import com.example.demo.entity.Query;

import com.example.demo.service.QueryService;
import com.example.demo.entity.TransferConnection;
import com.example.demo.service.OnlineBookingService;
import com.example.demo.service.TransferConnectionService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class Controller {
	@Autowired
	private OnlineBookingService onlineBookingService;
	
	@Autowired
	private QueryService queryService;
	@Autowired
	private TransferConnectionService transferConnectionService;
	
	@PostMapping("/onlineBookings")
	public void saveOnlineBooking(@RequestBody OnlineBooking data) {
<<<<<<< HEAD
		System.out.println(data);
=======
		System.out.println("data"+data.getSid());
>>>>>>> 6f1f83372c8b85a64409194d5adabd921da7a2b7
		onlineBookingService.save(data);
		
	}
	@GetMapping("/getCustomerData/{email}")
	public Customer getCustomerData(@PathVariable String email) {
		return onlineBookingService.getCustomerData(email);
		
	}
	@PostMapping("/save")
	public void saveQueryForm(@RequestBody Query queryForm) {
		//System.out.println("hi");
		System.out.println("name"+queryForm.getFullName());
		System.out.println("email"+ queryForm.getEmail());
		System.out.println( "contact"+queryForm.getContact());
		System.out.println( "others"+queryForm.getOthers());
		System.out.println("quest"+ queryForm.getQuestion());
		queryService.saveForm(queryForm);
		
	@PostMapping("/transferLocation")
	public void saveTransferLocation(@RequestBody TransferConnection data) {
		transferConnectionService.save(data);
	}
}
