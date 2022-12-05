package edu.kh.fiesta.member.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.member.model.service.MemberService;
import edu.kh.fiesta.member.model.vo.Member;

@SessionAttributes({"loginMember"})
@Controller
public class MemberController {
	
	@Autowired
	private MemberService service;
	
	// 로그인
	@PostMapping("/login")
	public String login(Member inputMember, Model model, 
						RedirectAttributes ra, 
						@RequestHeader(value="referer")String referer,
						HttpServletResponse resp) {
		
		Member loginMember = service.login(inputMember);
		
		String path = null;
		
		if(loginMember != null) {
			path = "/main";
			model.addAttribute("loginMember", loginMember);
			
			System.out.println("로그인 성공!");
			
			// 쿠키 생성	
			// 쿠키 유지 시간 지정
			// 1년 동안 쿠키 유지
			
		}else {
			path = "/";
			ra.addFlashAttribute("message", "아이디, 비밀번호가 올바르지 않습니다😢");  
			
		}
		return "redirect:"+ path;
	}
	
	

	
	
	@GetMapping("/member/signUp")
	public String signUp(){
		return "member/signUp";
	}



	// 회원가입
	@PostMapping("/member/signUp")
	public String signUp(Member inputMember, @RequestHeader("referer") String referer, RedirectAttributes ra) {
		
		int result = service.signUp(inputMember);

		String message = null;
		String path = null;
		
		if(result > 0) {
			message = "Welcome to Fiesta!";
			path = "/"; // 로그인 페이지로.
			
		} else {
			message = "다시 시도해 주세요..";
			path = referer;
		}
		ra.addFlashAttribute("message", message);
		
		return "redirect:" + path;
	}
	
	
	@GetMapping("/login")
	public String login(){
		return "redirect:/";
	}
	
	
	// 이메일 중복 검사
	@GetMapping("/emailDupCheck")
	@ResponseBody
	public int emailDupCheck(String memberEmail){
		int result = service.emailDupCheck(memberEmail);
		return result;
	}
	
	
	// 닉네임 중복 검사
	@GetMapping("/nicknameDupCheck")
	@ResponseBody
	public int nicknameDupCheck(String memberNickname) {
		int result = service.nicknameDupCheck(memberNickname);
		return result;
	}
	
	
	
	// 계정찾기 페이지로 이동
	@GetMapping("/findAccount")
	public String findAccount() {
		return "member/findAccount";
	}
	
	
	// 계정찾기_이메일 인증 후 비밀번호 재설정 페이지로 이동 전에  => inputEmail을 ra에 저장하는 용도
	@PostMapping("/findAccount/changePwPage")
	public String findAccount(String inputEmail, RedirectAttributes ra) {
	
		ra.addFlashAttribute("inputEmail", inputEmail);
		
		return "redirect:/findAccount/changePwPage";
	}
	
	
	// 계정찾기_ 이메일 인증 후 비밀번호 재설정 페이지로 이동
	@GetMapping("/findAccount/changePwPage")
	public String changePw() {
		return "member/changePw";
	}
	
	
	
	// 계정찾기_비밀번호 재설정하기 
	@PostMapping("/findAccount/changePwPage/updatePw")
	public String updatePw(String memberPw, String inputEmail,
						   RedirectAttributes ra, Model model) {
		
		
		int result = service.updatePw(inputEmail, memberPw);
		
		String message = null;
		String path = null;
		
		if(result > 0) {
			message = "비밀번호가 재설정되었습니다.😊";
			path = "/";
		
		} else {
			message = "비밀번호가 변경되지 않았습니다..";
			path = "/";
		}
		
		ra.addFlashAttribute("message", message);
		return "redirect:" + path ;
	}
	

}




