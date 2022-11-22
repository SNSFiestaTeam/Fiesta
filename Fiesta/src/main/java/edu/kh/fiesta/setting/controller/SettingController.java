
package edu.kh.fiesta.setting.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
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
		
		int result = service.updateSetting(inputMember);
		
		String message = null;
		
		if(result > 0) {
			message = "회원 정보 수정";
		
		loginMember.setMemberNickname(inputMember.getMemberNickname());
		loginMember.setMemberName(inputMember.getMemberName());
		} else {
			message = "실패";		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:setting";
	}
	
	
	
	@GetMapping("/Pw")
	public String Pw() {
		return "setting/settingPw";
	}
	
	@PostMapping("/Pw")
	public String Pw(@SessionAttribute("loginMember") Member loginMember,
			@RequestParam Map<String, Object> paramMap, 
			RedirectAttributes ra) { 
		
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
	
	@PostMapping("3")
	public String memberDelete(
			@SessionAttribute("loginMember") Member loginMember,
			SessionStatus status, RedirectAttributes ra) {
		
		int result = service.memberDelete(loginMember.getMemberNo());
		
		
		if(result > 0 ) {
			return "redirect:/";
		} else {
			return "redirect:/3";
		}
		
	}
	

	@GetMapping("/nicknameDupCheck")
	@ResponseBody // 반환되는 값을 JSP 경로가 아닌 값 자체로 인식
	public int nicknameDupCheck(String memberNickname) {
		
		int result = service.nicknameDupCheck(memberNickname);
		
		return result;
	}
	
		
	@PostMapping("/updateImg")
	public String updateImg(
			@RequestParam(value="memberProfileImg") MultipartFile memberProfileImg,
			@SessionAttribute("loginMember") Member loginMember,
			RedirectAttributes ra, 
			HttpServletRequest req) throws Exception{
		
		// 인터넷 주소로 접근할 수 있는 경로
		String webPath = "/resources/images/profile/";
		
		// 실제 파일이 저장된 컴퓨터상의 절대 경로
		String filePath = req.getSession().getServletContext().getRealPath(webPath);
		//req.getSession().getServletContext() -> application scope 객체 얻어옴
		
		int result = service.updateImg(webPath, filePath, memberProfileImg, loginMember);
		
		String message = null;
		if(result > 0) message = "프로필 이미지가 변경되었습니다.";
		else           message = "프로필 이미지 변경 실패";
		
		ra.addFlashAttribute("message", message);
	
		return "redirect:";
	}
}
