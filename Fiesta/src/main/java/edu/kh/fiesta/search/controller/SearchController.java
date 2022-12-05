package edu.kh.fiesta.search.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.vo.Board;
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
		
		// 검색_관련 계정, 인기게시글, 최근게시글 조회
		
		// 검색에 필요한 매개변수
		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("searchInput", searchInput);
		paramMap.put("memberNickname", loginMember.getMemberNickname());
		
		// 관련계정, 인기게시글, 최근게시글 조회 서비스 호출
		Map<String, Object> searchResultMap = service.selectSearchResult(paramMap);
		
		searchResultMap.put("accountTotal", accountTotal);
		searchResultMap.put("boardTotal", boardTotal);
	
	
		model.addAttribute("searchResultMap", searchResultMap);
		model.addAttribute("searchInput", searchInput);
		
		return "search/search";
	}
	
	
	// 검색 게시글 1개 상세조회
	@GetMapping("/search/boardDetail")
	@ResponseBody
	public String searchBoardDetail(@SessionAttribute(value="loginMember") Member loginMember, int boardNo) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("memberNo", loginMember.getMemberNo());
		map.put("boardNo", boardNo);
		
		Board board = service.searchBoardDetail(map);
		
		return new Gson().toJson(board);
	}
	
	
	
	
	
	// 최근게시글 조회_pagination
 	@GetMapping("/selectRecentList")
 	@ResponseBody
 	public String selectRecentList(String searchInput, int cp, Model model) {
 		
 		// 서비스 호출에 필요한 매개변수
 		Map<String, Object> recentMap = new HashMap<String, Object>();
 		recentMap.put("searchInput", searchInput);
 		recentMap.put("cp", cp);
 		
 		// 최근게시글 조회 서비스 호출
 		Map<String, Object> recentResultMap = service.selectRecentList(recentMap);
 		
 		model.addAttribute("recentResultMap", recentResultMap);
 		
 		return new Gson().toJson(recentResultMap);
 	}

	
	

}
