package edu.kh.fiesta.search;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class SearchController {
	
	@Autowired
	private SearchService service;
	
	// 검색 결과 페이지로 이동
//	@GetMapping("/main/search")
//	public String search(String searchInput) {
//		return "search/search";
//	}
	
	
	// 검색
	@GetMapping("/main/search")
	public String searchAccounTotal(String searchInput, Model model) {
		
		// 검색_관련 계정 수(accountTotal) / 게시글 수(boardTotal)
		int accountTotal = service.selectAccountTotal(searchInput);
		int boardTotal = service.selectBoardTotal(searchInput);
		
		if(accountTotal > 0) {
			model.addAttribute("accountTotal", accountTotal);
			model.addAttribute("boardTotal", boardTotal);
		} else {
			model.addAttribute("accountTotal", 0);
			model.addAttribute("boardTotal", 0);
		}
		
		
		// 검색_관련 계정 조회
		List<Member> accountList = service.selectAccount(searchInput);
		
		if(accountList != null) {
			model.addAttribute("accountList", accountList);
		
		} 
		
		return "search/search";
	}
	
	
	// 검색_해시태그 팔로우  -> 데이터베이스 다시 확인 (F_TO_TARGET_NO)
//	@GetMapping("/main/search/followHashtag")
//	public int followHashtag(@SessionAttribute("loginMember") Member loginMember) {
//		
//	}
//	
	
	
	

}
