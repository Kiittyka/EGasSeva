package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Query;
import com.example.demo.repository.QueryRepository;

@Service
public class QueryServiceImpl implements QueryService{
	
	@Autowired
	private QueryRepository queryRepository;

	@Override
	public void saveForm(Query queryForm) {
		// TODO Auto-generated method stub
		queryForm.setReply(null);
		if(queryForm.getOthers()!=null) {
			queryForm.setQuestion(queryForm.getOthers());
		}
		queryRepository.save(queryForm);
	}
}
