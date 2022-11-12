
package edu.kh.fiesta.member.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.member.model.service.SettingService;
import edu.kh.fiesta.member.model.vo.Member;

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
	public String updateSetting(Member inputMember, Member loginMember,
				RedirectAttributes ra) {
		
		inputMember.setMemberNo(loginMember.getMemberNo());
		
		
		
		return null;
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
		
		
		return "redirect:settingPw";
		
	}
	

	
	@GetMapping("/3")
	public String settingec() {
		return "setting/setting3";
	}
	
	
	
}
