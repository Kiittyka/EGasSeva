package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="transferconnection")
@Data
public class TransferConnection {
	@Id
	@Column(name="email")
	private String email;
	
	@Column(name="name")
	private String name;
	
	@Column(name="agency")
	private String agency;
	
	@Column(name="adhaar")
	private String adhaar;
	
	@Column(name="date")
	private String date;
	
	@Column(name="country")
	private String country;
	
	@Column(name="State")
	private String state;
	
	@Column(name="city")
	private String city;
	
	@Column(name="zip")
	private String zip;
	
	@Column(name="accept")
	private boolean accept;
	
}
