package edu.kh.fiesta.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import edu.kh.fiesta.member.model.service.FindAccountEmailService;
import edu.kh.fiesta.member.model.service.SignUpEmailService;

@Controller
@RequestMapping("/accountSendEmail")
@SessionAttributes("authKey")
public class FindAccountEmailController {
	
	@Autowired
	private FindAccountEmailService service;
	
	// 이메일 보내기
	@GetMapping("/findAccount")
	@ResponseBody
	public int findAccount(String email, Model model) {
		
		String authKey = service.findAccount(email);
		
		if(authKey != null) {
			model.addAttribute("authKey", authKey);
			return 1;
		} else {
			return 0;
		}
	}
	
	
	// 인증번호 일치 확인
	@GetMapping("/checkAuthKey")
	@ResponseBody
	public int checkAuthKey(String inputKey, @SessionAttribute("authKey") String authKey,
							SessionStatus status) {
		if(inputKey.equals(authKey)) {
			status.setComplete();
			return 1;
		} 
		return 0;
	}
	
	
}
