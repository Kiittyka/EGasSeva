package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.model.OnlineBooking;
import com.example.demo.model.Queries;

@Repository
@Transactional
public class ServiceImpl {
	
	EntityManager entityManager;
	
	public ServiceImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}


@SuppressWarnings("unchecked")

	public List<OnlineBooking> getOnlineBooking(String agency) {
		List<OnlineBooking> data=entityManager.createQuery("from OnlineBooking where agency=:agency AND accept=:accept")
				.setParameter("agency", agency)
				.setParameter("accept", false)
				.getResultList();
		return data;
	}
	public void accepted(String sid) {
		Query query=entityManager.createQuery("update OnlineBooking set accept=:accept where sid=:sid").setParameter("accept", true)
				.setParameter("sid", sid);
		query.executeUpdate();
	}


	@SuppressWarnings("unchecked")
	public List<Queries> getCustomerQueries(String agency) {
		List<Queries> data=entityManager.createQuery("from Queries where agency=:agency and reply=:reply")
				.setParameter("agency", agency)
				.setParameter("reply", null)
				.getResultList();
		return data;
	}


	
	
	
}
