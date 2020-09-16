package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.OnlineBooking;
import com.example.demo.model.BookingQuery;
import com.example.demo.service.ServiceImpl;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	@Autowired
	private ServiceImpl serviceImpl;
	@GetMapping("/getOnlineBooking/{agency}")
	public List<OnlineBooking> getOnlineBooking(@PathVariable String agency) {
	
		return serviceImpl.getOnlineBooking(agency);
		
	}
	@GetMapping("/getOnlineBooking/accepted/{sid}")
	public void accepted(@PathVariable String sid) {
		
		serviceImpl.accepted(sid);
		
	}
	@GetMapping("/getCustomerQueries/{agency}")
	public List<BookingQuery> getCustomerQueries(@PathVariable String agency){
		return serviceImpl.getCustomerQueries(agency);
	}
	@GetMapping("/getRepliedrQueries/{agency}")
	public List<BookingQuery> getRepliedQueries(@PathVariable String agency){
		return serviceImpl.getRepliedQueries(agency);
	}
	
	@PostMapping("/updateQueries")
	public String updateQueries(@RequestBody BookingQuery query) {
		System.out.println("zxxcc");
		return serviceImpl.updateQuery(query);
	}
}
