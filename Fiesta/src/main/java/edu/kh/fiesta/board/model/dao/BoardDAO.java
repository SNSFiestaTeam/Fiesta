package edu.kh.fiesta.board.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;

@Repository
public class BoardDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 게시글 삽입
	 * @param board
	 * @return boardNo
	 */
	public int boardWrite(Board board) {
		int result = sqlSession.insert("boardMapper.boardWrite", board);
		
		if(result > 0) result = board.getBoardNo();
		return result;
	}
}
