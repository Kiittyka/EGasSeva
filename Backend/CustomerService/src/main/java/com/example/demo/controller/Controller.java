package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
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


@CrossOrigin("http://localhost:4200")
@RestController
public class Controller {
	@Autowired
	private OnlineBookingService onlineBookingService;

	@Autowired
	private QueryService queryService;
	@Autowired
	private TransferConnectionService transferConnectionService;

	@PostMapping("/onlineBookings")
	public void saveOnlineBooking(@RequestBody OnlineBooking data) {

		onlineBookingService.save(data);

	}

	@GetMapping("/getCustomerData/{email}")
	public Customer getCustomerData(@PathVariable String email) {
		return onlineBookingService.getCustomerData(email);

	}

	@PostMapping("/save")
	public void saveQueryForm(@RequestBody Query queryForm) {
		queryService.saveForm(queryForm);
	}

	@PostMapping("/transferLocation")
	public void saveTransferLocation(@RequestBody TransferConnection data) {
		System.out.println("controller" + data);
		transferConnectionService.save(data);
	}
}
