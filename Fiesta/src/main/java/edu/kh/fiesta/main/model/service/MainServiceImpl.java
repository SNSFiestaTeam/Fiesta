package edu.kh.fiesta.main.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.dao.MainDAO;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainDAO dao;

}
