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

}
