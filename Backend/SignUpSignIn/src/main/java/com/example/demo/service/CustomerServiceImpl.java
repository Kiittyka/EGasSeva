package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;

import lombok.AllArgsConstructor;
@AllArgsConstructor
@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	@Override
	
	public void add(Customer customer) {
		// TODO Auto-generated method stub
		customerRepository.save(customer);
	}

}
