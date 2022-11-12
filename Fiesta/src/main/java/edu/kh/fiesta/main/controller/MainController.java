package edu.kh.fiesta.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import edu.kh.fiesta.main.model.service.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	

}
