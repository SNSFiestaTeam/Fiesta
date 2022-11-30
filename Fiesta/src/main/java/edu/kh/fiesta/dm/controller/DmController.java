package edu.kh.fiesta.dm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.kh.fiesta.dm.model.service.DmService;

@RequestMapping("dm/dm")
@Controller
public class DmController {
	
	@Autowired
	private DmService service;

	
}
