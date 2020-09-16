package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="onlinebooking")
@Data
@Getter
@Setter
public class OnlineBooking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="uuid")
	private String sid;
	@Column(name="email")
	private String email;
	@Column(name="contact")
	private long contact; 
	@Column(name="adhaar")
	private String adhaar;
	@Column(name="country")
	private String country;
	@Column(name="state")
	private String state;
	@Column(name="city")
	private String city;
	@Column(name="zip")
	private int zip;
	@Column(name="agency")
	private String agency;
	@Column(name="accept")
	private boolean accept;
	@Column(name="date")
	private String date;
	
	public String getSid() {
		return sid;
	}
	public void setSid(String sid) {
		this.sid = sid;
	}
	
}
