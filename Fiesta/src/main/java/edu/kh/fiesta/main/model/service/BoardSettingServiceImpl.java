package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.dao.BoardSettingDAO;
import edu.kh.fiesta.main.model.dao.CommentDAO;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Comment;

@Service
public class BoardSettingServiceImpl implements BoardSettingService{
	
	@Autowired
	private BoardSettingDAO dao;
	
	
	//댓글 사용 유무 수정
	@Override
	public Board updateCommentBlock(String commentBlockFlag, Map<String, Object> map) {
		
		Board board = null;
		
//		댓글 기능 차단상태일 때
		if(commentBlockFlag.equals("Y")) {
			
			board = dao.updateCommentBlockN(map);
			

		} else { // 댓글 기능 사용 중일 때
			
			board = dao.updateCommentBlockY(map);
			
		}
		
		
		return board;
	}
	
	
}
