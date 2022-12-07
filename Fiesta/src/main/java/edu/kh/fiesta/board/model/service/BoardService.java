package edu.kh.fiesta.board.model.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;

public interface BoardService {

	/** 게시글 삽입
	 * @param board
	 * @param fileList
	 * @param webPath
	 * @param folderPath
	 * @param imgAccessibilityList 
	 * @return boardNo
	 * @throws IOException 
	 */
	int boardWrite(Board board, List<MultipartFile> fileList, String webPath,
			String folderPath) throws IOException;

	Board selectOneBoard(int boardNo);

	int boardUpdate(Board board);



}
