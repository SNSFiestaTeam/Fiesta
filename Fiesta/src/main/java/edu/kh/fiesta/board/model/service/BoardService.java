package edu.kh.fiesta.board.model.service;

import edu.kh.fiesta.main.model.vo.Board;

public interface BoardService {

	/** 게시글 삽입
	 * @param board
	 * @return
	 */
	int boardWrite(Board board);

}
