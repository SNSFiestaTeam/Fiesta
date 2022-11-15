
package edu.kh.fiesta.setting.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.member.model.vo.Member;
import edu.kh.fiesta.setting.model.service.SettingService;

@RequestMapping("setting/setting")
@Controller
public class SettingController {

	@Autowired
	private SettingService service;
	
	@GetMapping()
	public String setting() {
		return "setting/setting";
	}
	
	@PostMapping()
	public String updateSetting(Member inputMember, 
			@SessionAttribute("loginMember") Member loginMember, RedirectAttributes ra) {
		
		inputMember.setMemberNo(loginMember.getMemberNo());
		inputMember.setMemberName(loginMember.getMemberName());
		
		int result = service.updateSetting(inputMember);
		
		String message = null;
		
		if(result > 0) {
			message = "회원 정보 수정";
		
		loginMember.setMemberNickname(inputMember.getMemberNickname());
		} else {
			message = "실패";		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:";
	}
	
	
	
	@GetMapping("/Pw")
	public String Pw() {
		return "setting/settingPw";
	}
	
	@PostMapping("/Pw")
	public String Pw(@SessionAttribute("loginMember") Member loginMember,
			RedirectAttributes ra, @RequestParam Map<String, Object> paramMap) {
		
		paramMap.put("memberNo", loginMember.getMemberNo());
		
		int result = service.Pw(paramMap);
		
		String message = null;
		
		if(result > 0) {
			message = "성공";
		} else {
			message = "실패";
		}
		
		ra.addFlashAttribute("message", message);
		
		
		return "redirect:Pw";
		
	}
	

	
	@GetMapping("/3")
	public String setting3() {
		return "setting/setting3";
	}
	
	
	
}
