package edu.kh.fiesta.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.service.MainService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	@GetMapping("/selectFollowing")
	@ResponseBody
	public String selectFollowing(int memberNo) {
		
		System.out.println(memberNo);
		
		List<Follow> followingList = service.selectFollowing(memberNo); 
		
		return new Gson().toJson(followingList);
	}
	
	
	@GetMapping("/selectBoardList")
	@ResponseBody
	public String selectBoardList(String selectBoardSql) {
		
		List<Board> boardList = service.selectBoardList(selectBoardSql);
	
		return new Gson().toJson(boardList);
	}
	
	

}
