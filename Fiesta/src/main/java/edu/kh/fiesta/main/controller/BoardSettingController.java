package edu.kh.fiesta.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.service.BoardSettingService;
import edu.kh.fiesta.main.model.service.CommentService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Comment;

@RestController
@RequestMapping("/boardSetting")
public class BoardSettingController {
	
	@Autowired
	private BoardSettingService service;
	
	@GetMapping("/commentBlock")
	public String updateCommentBlock(String commentBlockFlag, int boardNo, int memberNo) {
		
		Map<String, Object> map = new HashMap<String, Object> ();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);

		
		Board board = service.updateCommentBlock(commentBlockFlag, map);
		return new Gson().toJson(board);
	}
	


}
