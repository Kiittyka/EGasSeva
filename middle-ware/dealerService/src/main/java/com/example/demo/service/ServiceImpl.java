package com.example.demo.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.model.OnlineBooking;
import com.example.demo.model.BookingQuery;

@Repository
@Transactional
public class ServiceImpl {

	EntityManager entityManager;

	public ServiceImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@SuppressWarnings("unchecked")

	public List<OnlineBooking> getOnlineBooking(String agency) {
		List<OnlineBooking> data = entityManager
				.createQuery("from OnlineBooking where agency=:agency AND accept=:accept")
				.setParameter("agency", agency).setParameter("accept", false).getResultList();
		System.out.println(data);
		return data;
	}

	public void accepted(String sid) {
		Query query = entityManager.createQuery("update OnlineBooking set accept=:accept where sid=:sid")
				.setParameter("accept", true).setParameter("sid", sid);
		query.executeUpdate();
	}

	@SuppressWarnings("unchecked")
	public List<BookingQuery> getCustomerQueries(String agency) {
		List<BookingQuery> data = entityManager.createQuery("from BookingQuery where agency=:agency and reply IS NULL")
				.setParameter("agency", agency)

				.getResultList();
		return data;
	}

	@SuppressWarnings("unchecked")
	public List<BookingQuery> getRepliedQueries(String agency) {
		List<BookingQuery> data = entityManager.createQuery("from BookingQuery where agency=:agency and reply IS NOT NULL")
				.setParameter("agency", agency).getResultList();
		return data;
	}

	public String updateQuery(BookingQuery query) {
		Query sqlQuery = entityManager.createQuery("update BookingQuery set reply=:reply where queryId=:id")
				.setParameter("reply", query.getReply()).setParameter("id", query.getQueryId());
		int result = sqlQuery.executeUpdate();
		System.out.println("-------------------"+query.getReply());
		return query.getReply();
		
	}

}
