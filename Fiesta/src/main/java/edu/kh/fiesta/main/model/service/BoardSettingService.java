package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Comment;
import edu.kh.fiesta.main.model.vo.Board;

public interface BoardSettingService {

	/**
	 * 댓글 사용 유무 수정
	 * @param commentBlockFlag
	 * @param boardNo
	 * @return board
	 */
	Board updateCommentBlock(String commentBlockFlag, Map<String, Object> map);

	/**
	 * 좋아요 수 숨기기 수정
	 * @param boardPubPriFlag
	 * @param boardNo
	 * @return result
	 */
	int updateBoardPubPri(String boardPubPriFlag, int boardNo);
	


}
