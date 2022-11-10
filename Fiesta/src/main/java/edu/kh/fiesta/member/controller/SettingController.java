
package edu.kh.fiesta.member.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.member.model.service.SettingService;
import edu.kh.fiesta.member.model.vo.Member;

@RequestMapping("setting/setting")
@Controller
public class SettingController {

	@Autowired
	private SettingService service;
	
	@GetMapping("")
	public String setting() {
		return "setting/setting";
	}
	
	@PostMapping("")
	public String updateSetting(Member inputMember, Member loginMember,
				RedirectAttributes ra) {
		
		inputMember.setMemberNo(loginMember.getMemberNo());
		
		
		
		return null;
	}
	
	
	
	@GetMapping("/Pw")
	public String changePw() {
		return "setting/settingPw";
	}
	
	@PostMapping("/pw")
	public String changePw(Member loginMember,
			RedirectAttributes ra, @RequestParam Map<String, Object> paramMap) {
		
		paramMap.put("memberNo", loginMember.getMemberNo());
		
		int result = service.changePw(paramMap);
		
		
		return "redirect:Pw";
		
	}
	
	
	
	
}
