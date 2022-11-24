
package edu.kh.fiesta.setting.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.member.model.vo.Member;
import edu.kh.fiesta.setting.model.service.SettingService;

@RequestMapping("/setting")
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
		
		return "redirect:setting/setting";
	}
	
	
	
	
	@GetMapping("/changePw")
	public String changePw() {
		return "setting/settingPw";
	}
	
	@PostMapping("/changePw")
	public String changePw(@SessionAttribute("loginMember") Member loginMember,
			@RequestParam Map<String, Object> paramMap, RedirectAttributes ra) { 
		
		paramMap.put("memberNo", loginMember.getMemberNo());
		
		
		
		int result = service.changePw(paramMap);
		
		String message = null;
		
		if(result > 0) {
			message = "성공";
		} else {
			message = "이전 비밀번호가 일치하지 않습니다.";
		}
		
		ra.addFlashAttribute("message", message);
		
		
		return "redirect:setting/changePw";
		
	}


	
	@GetMapping("/changeEtc")
	public String setting3() {
		return "setting/setting3";
	}
	
	@PostMapping("/delete")
	public String memberDelete(
			@SessionAttribute("loginMember") Member loginMember,
			SessionStatus status, RedirectAttributes ra,
			@RequestHeader("referer") String referer
			) {
		
		int result = service.memberDelete(loginMember.getMemberNo());
		
		String message = null;
		String path = null;
		
		if(result > 0 ) {
			message = "성공";
			path = "/";
			status.setComplete();

		} else {
			message = "실패";
			path = referer;
		}
		
		ra.addFlashAttribute("message", message);
	
		return "redirect:" + path;
	}
	

	@GetMapping("/nicknameDupCheck")
	@ResponseBody // 반환되는 값을 JSP 경로가 아닌 값 자체로 인식
	public int nicknameDupCheck(String memberNickname) {
		
		int result = service.nicknameDupCheck(memberNickname);
		
		return result;
	}
	
		
	@PostMapping("/updateImage")
	public String updateImage(
			@RequestParam(value="memberProfileImg", required=false) MultipartFile memberProfileImg,
			@SessionAttribute("loginMember") Member loginMember,  
			RedirectAttributes ra, 
			HttpServletRequest req) throws Exception{
		
		// 인터넷 주소로 접근할 수 있는 경로
		String webPath = "/resources/images/profile/";
		
		// 실제 파일이 저장된 컴퓨터상의 절대 경로
		String filePath = req.getSession().getServletContext().getRealPath(webPath);
		//req.getSession().getServletContext() -> application scope 객체 얻어옴
		
		int result = service.updateImage(webPath, filePath, memberProfileImg, loginMember);
		
		String message = null;
		if(result > 0) message = "프로필 이미지가 변경되었습니다.";
		else           message = "프로필 이미지 변경 실패";
		
		ra.addFlashAttribute("message", message);
	
		return "redirect:";
	}
	
	@PostMapping("/changeEtc")
	public String updateLike(
			@RequestParam(value="chk1", required=false) String chk1,
			@SessionAttribute("loginMember") Member loginMember,
			RedirectAttributes ra,
			@RequestHeader("referer") String referer) {
		
		String message = null;
		int memberNo = loginMember.getMemberNo();
		
		System.out.println(chk1);
		
		if(chk1 != null) {
			
			int result = service.updateLike(memberNo);
		
			if(result > 0) {
				message = "성공";
			}
		
		} else {
			
			int result = service.updateLike2(memberNo);
			
			if(result > 0) {
				message = "성공";
			}
		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:" + referer;
		
	}
	
	
	
	

}