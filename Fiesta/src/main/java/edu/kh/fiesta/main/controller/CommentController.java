package edu.kh.fiesta.main.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import edu.kh.fiesta.main.model.service.CommentService;
import edu.kh.fiesta.main.model.vo.Comment;
import edu.kh.fiesta.main.model.vo.Hashtag;
import edu.kh.fiesta.member.model.vo.Member;

@RestController
@RequestMapping("/comment")
public class CommentController {
	
	@Autowired
	private CommentService service;
	
	/**
	 * 댓글 좋아요
	 * @param commentNo
	 * @param memberNo
	 * @return
	 */
	@GetMapping("/likeUp")
	public int commentLikeUp(int commentNo, int memberNo) {
		
		int result = service.commentLikeUp(commentNo, memberNo);
		
		return result;
	}
	
	
	
	
	/**
	 * 댓글 좋아요 취소
	 * @param commentNo
	 * @param memberNo
	 * @return
	 */
	@GetMapping("/likeDown")
	public int commentLikeDown(int commentNo, int memberNo) {
		
		int result = service.commentLikeDown(commentNo, memberNo);
		
		return result;
	}
	
	
	
	
	/**
	 * 댓글 목록 조회
	 * @param boardNo
	 * @param myNo
	 * @return
	 */
	@GetMapping("/list")
	public String selectCommentList(int boardNo, int myNo) {
		
		Map<String, Object> comment = new HashMap<String, Object> ();
		
		comment.put("boardNo", boardNo);
		comment.put("myNo", myNo);
		
		List<Comment> commentList = service.selectCommentList(comment);
		
		return new Gson().toJson(commentList);
	}
	
	
	
	

	/**
	 * 댓글 삽입
	 * @param boardNo
	 * @param memberNo
	 * @param commentContent
	 * @param upperCommentNo
	 * @return
	 */
	@PostMapping("/insert")
	public int commentInsert(int boardNo, int memberNo, String commentContent, int upperCommentNo) {
		
		Comment comment = new Comment();

		comment.setBoardNo(boardNo);
		comment.setCommentMemberNo(memberNo);
		comment.setCommentContent(commentContent);
		comment.setUpperCommentNo(upperCommentNo);
	
		
		int commentNo = service.commentInsert(comment);
		
		return commentNo;
	}
	
	
	
	
	/**
	 * 답글 목록 조회
	 * @param commentNo
	 * @param myNo
	 * @return
	 */
	@PostMapping("/select/reply")
	public String selectReplyList(int commentNo, int myNo) {
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		
		map.put("commentNo", commentNo);
		map.put("myNo", myNo);
		
		List<Comment> replyList = service.selectReplyList(map);
	
		return new Gson().toJson(replyList);
	}
	
	

	/**
	 * 댓글 삭제
	 * @param commentNo
	 * @return
	 */
	@GetMapping("/delete")
	public int deleteComment(int commentNo) {
		
		return service.deleteComment(commentNo);	
	}
	
	
	
	/**
	 * 언급 자동완성
	 * @param searchWord
	 * @return
	 */
	@GetMapping("/autoComplete/mention")
	@ResponseBody
	public String mentionAutoComplete(String[] searchWord) {
		
		List<Member> mentionList = service.mentionAutoComplete(searchWord);
				
		return new Gson().toJson(mentionList);
	}
	
	
	/**
	 * 해시태그 자동완성
	 * @param searchWord
	 * @return
	 */
	@GetMapping("/autoComplete/hashtag")
	@ResponseBody
	public String hashtagAutoComplete(String[] searchWord) {
		
		List<Hashtag> hashtagList = service.hashtagAutoComplete(searchWord);
				
		return new Gson().toJson(hashtagList);
	}
	

}
