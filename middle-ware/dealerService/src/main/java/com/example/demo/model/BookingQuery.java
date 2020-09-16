package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="query")
public class BookingQuery {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="query_id")
	private int queryId;
	@Column(name="full_name")
	private String fullName;
	@Column(name="email")
	private String email;
	@Column(name="question")
	private String question;
	@Column(name="others")
	private String others;
	@Column(name="agency")
	private String agency;
	@Column(name="reply")
	private String reply;
	
	
	
}