package edu.kh.fiesta.member.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.member.model.service.MemberService;
import edu.kh.fiesta.member.model.vo.Member;

@SessionAttributes("loginMember")
@Controller
public class MemberController {
	
	@Autowired
	private MemberService service;
	
	@PostMapping("/member/login")
	public String login(Member inputMember, Model model, RedirectAttributes ra, 
						HttpServletResponse resp, @RequestHeader(value="referer")String referer) {
		
		Member loginMember = service.login(inputMember);
		
		String path = null;
		
		if(loginMember != null) {
			path = "feed/main";
			model.addAttribute("loginMember", loginMember);
			
			System.out.println("로그인 성공!");
			
			// 쿠키 생성
			
			// 쿠키 유지 시간 지정
			
			// 1년 동안 쿠키 유지
			return path;
			
		}else {
			path = referer;
			
			ra.addFlashAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
		}
		
		return "redirect:" + path;
	}
	
	
	@GetMapping("/member/signUp")
	public String signUp(){
		return "member/signUp";
	}



	// 회원가입
	@PostMapping("/member/signUp")
	public String signUp(Member inputMember, @RequestHeader("referer") String referer, RedirectAttributes ra) {
		
		int result = service.signUp(inputMember);

		String path = null;
		String message = null;
		
		if(result > 0) {
			path = "/main";
			message = "Welcome to Fiesta!";
			
		} else {
			path = referer;
			message = "Please try again..";
		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:" + path;
		
	}
	

	

}




