package edu.kh.fiesta.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.service.MainService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Report;
import edu.kh.fiesta.member.model.vo.Member;


@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@GetMapping("/main")
	public String main(@SessionAttribute("loginMember") Member loginMember, Model model) {
		
		
		int memberNo= loginMember.getMemberNo();
		
		Map<String, Object> map = service.selectBoardList(memberNo);
				
		model.addAttribute("map", map);
		
		return "feed/main";
	} 
	
	
	@GetMapping("/selectBoardList")
	@ResponseBody
	public String selectBoardList(int memberNo, Model model, int cp) {
		
		Map<String, Object> map = service.selectBoardList(memberNo, cp);
		
		
	
		return new Gson().toJson(map);
	}
	
	
	@GetMapping("/boardLikeUp")
	@ResponseBody
	public int boardLikeUp(int boardNo, int memberNo) {
		
		int result = service.boardLikeUp(boardNo, memberNo);
		
		return result;
	}
	
	@GetMapping("/boardLikeDown")
	@ResponseBody
	public int boardLikeDown(int boardNo, int memberNo) {
		
		int result = service.boardLikeDown(boardNo, memberNo);
		
		return result;
	}
	
	
	@GetMapping("/boardBookmarkOn")
	@ResponseBody
	public int boardBookmarkOn(int boardNo, int memberNo) {
		
		int result = service.boardBookmarkOn(boardNo, memberNo);
		
		return result;
	}
	
	@GetMapping("/boardBookmarkOff")
	@ResponseBody
	public int boardBookmarkOff(int boardNo, int memberNo) {
		
		int result = service.boardBookmarkOff(boardNo, memberNo);
		
		return result;
	}
	
	@GetMapping("/deleteBoard")
	@ResponseBody
	public int deleteBoard(int boardNo) {	

		return service.deleteBoard(boardNo);
	}
	
	@GetMapping("/report")
	public String insertReport(Report report, HttpServletRequest req,
			@RequestHeader("referer") String referer, RedirectAttributes ra ) {
		
		
		int result = service.insertReport(report);
		
		
		String path = "/main";
		
		if(result > 0) {
			
			path = referer;
			
			ra.addFlashAttribute("message", "신고되었습니다.");
			
		}
	

		return "redirect:" + path;
	}


}
