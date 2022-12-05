package edu.kh.fiesta.follow.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import edu.kh.fiesta.follow.model.service.FollowService;
import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class FollowController {

	@Autowired
	private FollowService service;
	
	// ajax에서 키워드 데이터 보내기!! == 쿼리스트링
	
	
	// http://localhost/search?searchInput='피에스타'
	// 해시태그 팔로우 여부 조회(버튼색 변경) -> 팔로우할지 언팔로우할지 결정
	@GetMapping("/followHashtagCheck")
	@ResponseBody
	public int followHashtagCheck(@SessionAttribute(value = "loginMember") Member loginMember, 
								   String keyword) {
		
		int result = 0;
		
		if(loginMember != null) {
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("keyword", keyword);
			map.put("memberNo", loginMember.getMemberNo());
			
			result = service.followHashtagCheck(map);
		}
		
		// 팔로우 상태면 1 / 아니면 0
		return result;
	}
	
	
	
	// 해시태그 팔로우
	@GetMapping("/followHashtag")
	@ResponseBody
	public int followHashtag(@SessionAttribute(value = "loginMember") Member loginMember, String keyword) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyword", keyword);
		map.put("memberNo", loginMember.getMemberNo());
		
		// 성공하면 1 반환 / 실패하면 -1 반환   -> js에서 구분하기
		return service.followHashtag(map);
	}

	
	
	// 해시태그 언팔로우
	@GetMapping("/unfollowHashtag")
	@ResponseBody
	public int unfollowHashtag(@SessionAttribute(value = "loginMember") Member loginMember, String keyword) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("keyword", keyword);
		map.put("memberNo", loginMember.getMemberNo());
		
		// 언팔로우 성공하면 1 반환 / 실패하면 -1
		return service.unfollowHashtag(map);
	}
	
	
	
	// ------------------------------------------------
	
	
	// 계정 팔로우 여부 조회(버튼색 변경) -> 팔로우 당한 닉네임 반환
	@GetMapping("/followAccountCheck")
	@ResponseBody
	public int followAccountCheck(@SessionAttribute(value="loginMember") Member loginMember, 
									String followToNickname, Model model) {
		int result = 0;
		
		if(loginMember != null) {
			Map<String, Object> map = new HashMap<String, Object>();
			
			map.put("memberNo", loginMember.getMemberNo());
			map.put("followToNickname", followToNickname);
			
			result = service.followAccountCheck(map);
		}
		
		return result;
	}
	
	
	// 계정 팔로우
	@GetMapping("/followAccount")
	@ResponseBody
	public int followAccount(@SessionAttribute(value="loginMember") Member loginMember,
							 String followToNickname) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("memberNo", loginMember.getMemberNo());
		map.put("followToNickname", followToNickname);
		
		return service.followAccount(map);
	}
	
	
	// 계정 언팔로우
	@GetMapping("/unfollowAccount")
	@ResponseBody
	public int unfollowAccount(@SessionAttribute(value="loginMember") Member loginMember,
								String followToNickname) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("memberNo", loginMember.getMemberNo());
		map.put("followToNickname", followToNickname);
		
		return service.unfollowAccount(map);
	}
	
	
	
}
