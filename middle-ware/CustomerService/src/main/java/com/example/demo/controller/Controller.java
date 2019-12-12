package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Customer;
import com.example.demo.entity.OnlineBooking;
import com.example.demo.entity.Query;
import com.example.demo.entity.TransferConnection;
import com.example.demo.service.OnlineBookingService;
import com.example.demo.service.QueryService;
import com.example.demo.service.TransferConnectionService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Controller {
	@Autowired
	private OnlineBookingService onlineBookingService;

	@Autowired
	private QueryService queryService;
	@Autowired
	private TransferConnectionService transferConnectionService;

	@PostMapping("/onlineBookings")
	@LoadBalanced
	public boolean saveOnlineBooking(@RequestBody OnlineBooking data) {

		return onlineBookingService.save(data);

	}

	@GetMapping("/getCustomerData/{email}")
	@LoadBalanced
	public Customer getCustomerData(@PathVariable String email) {
		return onlineBookingService.getCustomerData(email);

	}

	@PostMapping("/save")
	@LoadBalanced
	public void saveQueryForm(@RequestBody Query queryForm) {
		queryService.saveForm(queryForm);
	}

	@PostMapping("/transferLocation")
	@LoadBalanced
	public void saveTransferLocation(@RequestBody TransferConnection data) {
		System.out.println("controller" + data);
		transferConnectionService.save(data);
	}
}
