package edu.kh.fiesta.dm.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.dm.model.dao.DmDAO;

@Service
public class DmServiceImple implements DmService{
	
	@Autowired
	private DmDAO dao;

}
