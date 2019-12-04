package com.example.demo.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Payment;

@Repository
public interface PaymentRepo extends CrudRepository<Payment, Integer> {

    Payment findByTxnId(String txnId);
}
