package edu.kh.fiesta.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.service.MainService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

@RequestMapping("/main")
@Controller
public class MainController {
	
	@Autowired
	private MainService service;
	
	
	@GetMapping("/selectBoardList")
	@ResponseBody
	public String selectBoardList(int memberNo) {
		
		List<Board> boardList = service.selectBoardList(memberNo);
	
		return new Gson().toJson(boardList);
	}
	
	@GetMapping("/selectWriter")
	@ResponseBody
	public String selectWriter(int memberNo) {
		
		Member writer = service.selectWriter(memberNo);
		
		if(writer.getMemberProfileImg() == null) {
			writer.setMemberProfileImg("");
		}
		
		return new Gson().toJson(writer);
	}
	
	@GetMapping("/selectImageList")
	@ResponseBody
	public String selectImageList(int boardNo) {
		
		List<BoardImg> imageList = service.selectImageList(boardNo); 
		
		
		return new Gson().toJson(imageList);
	}
	
	

}
