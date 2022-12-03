package edu.kh.fiesta.main.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Comment;

@Repository
public class BoardSettingDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	
	/**
	 * 댓글 기능 차단 N으로 수정
	 * @param boardNo
	 * @return board
	 */
	public Board updateCommentBlockN(Map<String, Object> map) {
		
		int result = sqlSession.update("boardSettingMapper.updateCommentBlockN", map);

		Board board = null;
		
		if(result > 0) {
			
			board = sqlSession.selectOne("mainMapper.selectBoard", map);
			
		}
		
		
		return board;
	}

	/**
	 * 댓글 기능 차단 Y으로 수정
	 * @param boardNo
	 * @return board
	 */
	public Board updateCommentBlockY(Map<String, Object> map) {
		
		int result = sqlSession.update("boardSettingMapper.updateCommentBlockY", map);
		
		Board board = null;
		
		if(result > 0) {
			
			board = sqlSession.selectOne("mainMapper.selectBoard", map);
			
		}
		
		return board;
	}
	

	

}
