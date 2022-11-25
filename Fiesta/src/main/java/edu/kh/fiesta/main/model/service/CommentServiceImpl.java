package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.dao.CommentDAO;
import edu.kh.fiesta.main.model.vo.Comment;

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
	public int commentInsert(Map<String, Object> map) {
		return dao.commentInsert(map);
	}
	
	
	@Override
	public List<Comment> selectCommentList(Map<String , Object> comment) {
		return dao.selectCommentList(comment);
	}

}
