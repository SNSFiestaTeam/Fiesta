package edu.kh.fiesta.index.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String loginPage() {
		return "member/login"; // 로그인 페이지로
	}
	
	
}
