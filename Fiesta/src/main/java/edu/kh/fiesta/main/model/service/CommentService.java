package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Comment;

public interface CommentService {
	

	/** 댓글 좋아요 증가
	 * @param commentNo
	 * @param memberNo
	 * @return result
	 */
	public int commentLikeUp(int commentNo, int memberNo);
	
	/** 댓글 좋아요 취소
	 * @param commentNo
	 * @param memberNo
	 * @return result
	 */
	public int commentLikeDown(int commentNo, int memberNo);



	/** 댓글 등록
	 * @param boardNo
	 * @param memberNo
	 * @return commentNo
	 */
	public int commentInsert(Map<String, Object> map);

	/** 댓글 목록 조회
	 * @param boardNo
	 * @return commentList
	 */
	public List<Comment> selectCommentList(Map<String , Object> comment);

	/** 답글 목록 조회
	 * @param commentNo
	 * @return replyList
	 */
	public List<Comment> selectReplyList(Map<String, Integer> map);

	
	/** 댓글 삭제
	 * @param commentNo
	 * @return
	 */
	public int deleteComment(int commentNo);
	



}
