package edu.kh.fiesta.main.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.dao.MainDAO;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Pagination;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainDAO dao;
	
	
		
	
	@Override
	public Map<String, Object> selectBoardList(int memberNo) {
		
		int listCount = dao.getListCount(memberNo);		
		
		Pagination pagination = new Pagination(listCount, 1);
		
		List<Board> boardList = dao.selectBoardList(pagination, memberNo);
		
//		for(Board board: boardList) {
//			board.getBoardContent().replaceAll("(#[^\\s#]+)", 
//					"<a href='/search?searchInput=\"+tagName+\"' class='hashtag'>\"+match+\"</a>");
//			
//			Pattern pattern = Pattern.compile("(#[^\\s#]+)");
//			
//			Matcher matcher = pattern.matcher(board.getBoardContent());
//			
//			while(matcher.find()) {
//				String str = matcher.group(1);
//				
//				String tagName = str.replaceAll("#", ""); 
//				
//				board.setBoardContent(board.getBoardContent().replace(str,
//						"<a href='/search?searchInput="+tagName+"' class='hashtag'>"+str+"</a>"));
//			}
//			
//			System.out.println();
//		}
				
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("pagination", pagination);
		map.put("boardList", boardList);
		
		
		return map;
	}
	

	@Override
	public Map<String, Object> selectBoardList(int memberNo, int cp) {
		
		int listCount = dao.getListCount(memberNo);		
		
		Pagination pagination = new Pagination(listCount, cp);
		
		List<Board> boardList = dao.selectBoardList(pagination, memberNo);
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("pagination", pagination);
		map.put("boardList", boardList);
		
		return map;
	}
	
	
	@Override
	public int boardLikeUp(int boardNo, int memberNo) {
		return dao.boardLikeUp(boardNo, memberNo);
	}

	@Override
	public int boardLikeDown(int boardNo, int memberNo) {
		return dao.boardLikeDown(boardNo, memberNo);
	}
	
	/** 게시글 북마크 추가
	 *
	 */
	@Override
	public int boardBookmarkOn(int boardNo, int memberNo) {
		return dao.boardBookmarkOn(boardNo, memberNo);
	}
	
	/** 게시글 북마크 해제
	 *
	 */
	@Override
	public int boardBookmarkOff(int boardNo, int memberNo) {
		return dao.boardBookmarkOff(boardNo, memberNo);
	}



}
