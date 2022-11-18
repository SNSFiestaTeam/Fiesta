package edu.kh.fiesta.main.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.dao.MainDAO;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Comment;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.main.model.vo.Pagination;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainDAO dao;
	
	
	

	
	
	@Override
	public Map<String, Object> selectBoardList(Member loginMember) {
		
		int listCount = dao.getListCount(loginMember.getMemberNo());		
		
		Pagination pagination = new Pagination(offset, limit);
		
		List<Board> boardList = dao.selectBoardList(loginMember.getMemberNo());
				
		
		
		return null;
	}

	@Override
	public List<Board> selectBoardList(int memberNo) {
		return dao.selectBoardList(memberNo);
	}
	
	@Override
	public List<BoardImg> selectImageList(int boardNo){
		return dao.selectImageList(boardNo);
	}
	
	@Override
	public Member selectWriter(int memberNo) {
		return dao.selectWriter(memberNo);
		
	}
	
	@Override
	public List<Comment> selectCommentList(int boardNo) {
		return dao.selectCommentList(boardNo);
	}
	
	

}
