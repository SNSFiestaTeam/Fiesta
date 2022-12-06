package edu.kh.fiesta.board.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;

@Repository
public class BoardDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

//	/** 게시글 삽입
//	 * @param board
//	 * @return boardNo
//	 */
//	public int boardWrite(Board board) {
//		int result = sqlSession.insert("boardMapper.boardWrite", board);
//		
//		if(result > 0) result = board.getBoardNo();
//		return result;
//	}
//
//	/** 게시글 첨부 이미지 삽입(리스트 형식)
//	 * @param boardImgList
//	 * @return result (insert된 행의 개수)
//	 */
//	public int insertBoardImageList(List<BoardImg> boardImgList) {
//		return sqlSession.insert("boardMapper.insertBoardImageList", boardImgList);
//	}
}
