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

import edu.kh.fiesta.main.model.service.CommentService;
import edu.kh.fiesta.main.model.vo.Comment;

@RestController
@RequestMapping("/comment")
public class CommentController {
	
	@Autowired
	private CommentService service;
	
	@GetMapping("/likeUp")
	public int commentLikeUp(int commentNo, int memberNo) {
		
		int result = service.commentLikeUp(commentNo, memberNo);
		
		return result;
	}
	
	@GetMapping("/likeDown")
	public int commentLikeDown(int commentNo, int memberNo) {
		
		int result = service.commentLikeDown(commentNo, memberNo);
		
		return result;
	}
	
	@GetMapping("/list")
	public String selectCommentList(int boardNo, int myNo) {
		
		Map<String, Object> comment = new HashMap<String, Object> ();
		
		comment.put("boardNo", boardNo);
		comment.put("myNo", myNo);
		
		List<Comment> commentList = service.selectCommentList(comment);
		
		return new Gson().toJson(commentList);
	}
	

	@PostMapping("/insert")
	public int commentInsert(int boardNo, int memberNo, String commentContent, int upperCommentNo) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		map.put("commentContent", commentContent);
		map.put("upperCommentNo", upperCommentNo);
	
		
		int commentNo = service.commentInsert(map);
		
		return commentNo;
	}
	
	

}
