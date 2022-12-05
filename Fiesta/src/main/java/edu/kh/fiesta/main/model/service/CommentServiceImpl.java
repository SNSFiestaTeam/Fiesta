package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.common.Util;
import edu.kh.fiesta.main.model.dao.CommentDAO;
import edu.kh.fiesta.main.model.vo.Comment;
import edu.kh.fiesta.main.model.vo.Hashtag;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class CommentServiceImpl implements CommentService{
	
	@Autowired
	private CommentDAO dao;
	
	/** 댓글 좋아요 증가
	 *
	 */
	@Override
	public int commentLikeUp(int commentNo, int memberNo) {
		return dao.commentLikeUp(commentNo, memberNo);
	}

	/** 댓글 좋아요 취소
	 *
	 */
	@Override
	public int commentLikeDown(int commentNo, int memberNo) {
		return dao.commentLikeDown(commentNo, memberNo);
	}
	
	/** 댓글 등록
	 *
	 */
	@Override
	public int commentInsert(Comment comment) {
		
		// 댓글 삽입
		comment.setCommentContent(Util.XSSHandling(comment.getCommentContent())); // XSS 방지 처리
		
		comment.setCommentContent(Util.hashTagHandling(comment.getCommentContent())); //해시태그 A태그로 감싸기
		
		comment.setCommentContent(Util.mentionHandling(comment.getCommentContent())); //언급 A태그로 감싸기
		
		comment.setCommentContent(Util.newLineHandling(comment.getCommentContent())); // 개행문자 처리
		
		
		return dao.commentInsert(comment);
	}
	
	 
	/** 댓글목록 조회
	 *
	 */
	@Override
	public List<Comment> selectCommentList(Map<String , Object> comment) {
		return dao.selectCommentList(comment);
	}

	
	/** 답글 목록 조회
	 *
	 */
	@Override
	public List<Comment> selectReplyList(Map<String, Integer> map) {
		return dao.selectReplyList(map);
	}
	

	
	/** 댓글 삭제
	 *
	 */
	@Override
	public int deleteComment(int commentNo) {
		
		int result = dao.selectReplyCount(commentNo);
		
		if(result > 0) {
			result = dao.deleteCommentContent(commentNo);
		}
		
		if(result == 0) {
		  result = dao.deleteComment(commentNo);
		}
		
		return result;
	}
	
	/**
	 * 언급 자동완성
	 */
	public List<Member> mentionAutoComplete(String[] searchWord) {
		
		String searchName = searchWord[searchWord.length-1];
			
		return dao.mentionAutoComplete(searchName);
	}
	
	
	/*
	 * 해시태그 자동완성
	 */
	public List<Hashtag> hashtagAutoComplete(String[] searchWord){
		
		String searchName = searchWord[searchWord.length-1];
		
		return dao.hashtagAutoComplete(searchName);
	}
	
}
