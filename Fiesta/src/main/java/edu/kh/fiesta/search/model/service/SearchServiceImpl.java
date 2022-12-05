package edu.kh.fiesta.search.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.feed.model.vo.Pagination;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.member.model.vo.Member;
import edu.kh.fiesta.search.model.dao.SearchDAO;

@Service
public class SearchServiceImpl implements SearchService{
	
	@Autowired
	private SearchDAO dao;

	// 검색_관련 계정 수
	@Override
	public int selectAccountTotal(String searchInput) {
		return dao.selectAccountTotal(searchInput);
	}

	// 검색_게시글 수
	@Override
	public int selectBoardTotal(String searchInput) {
		return dao.selectBoardTotal(searchInput);
	}


	
	// 검색 결과 조회 Map
	@Override
	public Map<String, Object> selectSearchResult(Map<String, Object> paramMap) {
		
		// 결과 저장할 Map 생성  _ List에 넣어서 Map에 모두 넣어놓고, Map 자체를 model로 보내서 jsp에서 꺼내서 쓰자! //상세페이지 조회는 아민이꺼
		Map<String, Object> searchResultMap = new HashMap<String, Object>();
		
		// 관련 계정 조회 DAO 호출
		List<Member> accountList = dao.selectAccountList(paramMap);
		
		// 인기 게시글 조회
		List<Board> hotBoardList = dao.selectHotBoardList(paramMap);
		
		// 최근 게시글 조회 _페이지네이션 처리(보경이꺼 참고)
		List<Board> recentBoardList = dao.selectRecentBoardList(paramMap);
		
		searchResultMap.put("accountList", accountList);
		searchResultMap.put("hotBoardList", hotBoardList);
		searchResultMap.put("recentBoardList", recentBoardList);
		
		return searchResultMap;
	}

	// 검색 게시글 1개 상세조회
	@Override
	public Board searchBoardDetail(Map<String, Object> map) {
		return dao.searchBoardDetail(map);
	}
	
	
	
	
	
	// 최근 게시글 조회(pagination)
	@Override
	public Map<String, Object> selectRecentList(Map<String, Object> recentMap) {
		
		// 1. 특정 게시판의 전체 게시글 수 조회(삭제 제외)
		int listCount = dao.getListCount(recentMap);
		
		
		// 2. 전체 게시글 수 + cp(현재 페이지) 이용해서 페이지 처리 객체 생성
		Pagination pagination = new Pagination(listCount, (int)recentMap.get("cp"));
		
		// 3. 페이징 처리 객체를 이용해서 게시글 목록 조회
		List<Board> recentBoardList = dao.selectRecentList(pagination, recentMap);
		
		Map<String, Object> recentResultMap = new HashMap<String, Object>();
		recentResultMap.put("pagination", pagination);
		recentResultMap.put("recentBoardList", recentBoardList);
		
		return recentResultMap;
	}

}
