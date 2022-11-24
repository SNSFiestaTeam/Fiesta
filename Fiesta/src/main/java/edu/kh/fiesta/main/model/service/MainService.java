package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Board;

public interface MainService {



	/** AJAX 팔로잉한 멤버 게시글 조회 서비스
	 * @param selectBoardSql
	 * @return
	 */
	public Map<String, Object> selectBoardList(int memberNo, int cp);

	
	
	/**
	 * 팔로잉 멤버 게시글 조회 서비스
	 * @param memberNo
	 * @return
	 */
	public Map<String, Object> selectBoardList(int memberNo);



 	/** 게시글 좋아요 증가
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardLikeUp(int boardNo, int memberNo);



	/** 게시글 좋아요 감소
	 * @param boardNo
	 * @param memberNo
	 * @return
	 */
	public int boardLikeDown(int boardNo, int memberNo);



	/** 게시글 북마크 추가
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardBookmarkOn(int boardNo, int memberNo);

	
	/** 게시글 북마크 해제
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardBookmarkOff(int boardNo, int memberNo);



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
	



}
