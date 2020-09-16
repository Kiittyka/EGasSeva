package com.example.demo.service;

import com.example.demo.model.PaymentCallback;
import com.example.demo.model.PaymentDetail;

public interface PaymentService {
    public PaymentDetail proceedPayment(PaymentDetail paymentDetail);
    public String payuCallback(PaymentCallback paymentResponse);
    
}
