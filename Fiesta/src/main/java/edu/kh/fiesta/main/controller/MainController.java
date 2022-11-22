package edu.kh.fiesta.main.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.service.MainService;
import edu.kh.fiesta.main.model.vo.Board;
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


}
