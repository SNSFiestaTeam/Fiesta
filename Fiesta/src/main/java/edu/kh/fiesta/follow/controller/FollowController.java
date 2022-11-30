package edu.kh.fiesta.follow.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import edu.kh.fiesta.follow.model.service.FollowService;
import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class FollowController {

	@Autowired
	private FollowService service;
	
	
	/*
		해시태그 팔로우   -> 데이터베이스 다시 확인 (F_TO_TARGET_NO)
		팔로우 되어 있는지 확인 -> 안되어있으면 해시태그 넣고 result >0  -> 팔로우 테이블에 넣기
	                   -> 되어 있으면 -> 팔로우 취소 
	 */
	
	
	// 검색_해시태그 팔로우
	@GetMapping("/followHashtag")
	@ResponseBody
	public int followHashtag(@RequestParam Map<String, Integer> paramMap, Model model,
							 @RequestHeader(value="referer") String referer) {
		
		// 팔로우 타입을 map에 넣어서 가져오기
		// 팔로우 타입 M / H에 따라 다르게 계정팔로우/해시태그 팔로우 -> 각각의 결과를 map에 가져오기
		
		// 팔로우 되어 있는지 확인
		// 팔로우 타입 : M 일 때 => F_TO_TARGET_NO 일치하는지 확인
		// 팔로우 타입 : H 일 때 => F_TO_TARGET_NO 일치하는지 확인
		

		// 팔로우했는지 확인 (팔로우 여부 조회)
		int followResult = service.selectFollowHashtag(paramMap);
		
		int result = 0;

		// 팔로우하지 않았으면
		if(followResult == 0) {
			
			// 해시태그 팔로우
			result = service.followHashtag(paramMap);
		
		} else {
			result = -1; // 팔로우 못하게
		}
		
		return result;
		
	}
	
	
	// 해시태그 언팔로우
	@GetMapping("/unfollowHashtag")
	@ResponseBody
	public int unfollowHashtag(@RequestParam Map<String, Integer> paramMap, Model model,
								@RequestHeader(value="referer") String referer) {
		
		// 팔로우했는지 확인 (팔로우 여부 조회)
		int followResult = service.selectFollowHashtag(paramMap);
		
		int result = 0;
		
		// 팔로우하지 않았으면
		if(followResult > 0) {
			 result = service.unfollowHashtag(paramMap);
			
		} else {
			result = -1; // 언팔로우 못하게
		}
		
		return result;
	}
}
