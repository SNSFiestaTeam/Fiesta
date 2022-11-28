package edu.kh.fiesta.board.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.board.model.dao.BoardDAO;
import edu.kh.fiesta.common.Util;
import edu.kh.fiesta.main.model.vo.Board;


@Service
public class BoardServicepImple implements BoardService{

	@Autowired
	private BoardDAO dao;

	// 게시글 삽입
	@Override
	public int boardWrite(Board board) {
		
		board.setBoardContent(Util.XSSHandling(board.getBoardContent()));

		board.setBoardContent(Util.newLineHandling(board.getBoardContent()));
		
		int boardNo = dao.boardWrite(board);
		
		return boardNo;
	}
}
