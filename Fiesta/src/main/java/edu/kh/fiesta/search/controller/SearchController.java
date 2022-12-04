package edu.kh.fiesta.search.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;


import edu.kh.fiesta.member.model.vo.Member;
import edu.kh.fiesta.search.model.service.SearchService;

@Controller
public class SearchController {
	
	@Autowired
	private SearchService service;
	
	
	// 검색
	@GetMapping("/search")
	public String selectSearchResult(String searchInput, Model model,
									@SessionAttribute(value="loginMember") Member loginMember) {
		
		// 검색_관련 계정 수(accountTotal) / 게시글 수(boardTotal)
		int accountTotal = service.selectAccountTotal(searchInput);
		int boardTotal = service.selectBoardTotal(searchInput);
		
		// 검색_관련 계정 조회
		Map<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("searchInput", searchInput);
		paramMap.put("memberNickname", loginMember.getMemberNickname());
		
		Map<String, Object> searchResultMap = service.selectSearchResult(paramMap);
		
		searchResultMap.put("accountTotal", accountTotal);
		searchResultMap.put("boardTotal", boardTotal);
	
	
		model.addAttribute("searchResultMap", searchResultMap);
		model.addAttribute("searchInput", searchInput);
		
		return "search/search";
	}

}
