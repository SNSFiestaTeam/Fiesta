package edu.kh.fiesta.search;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.member.model.vo.Member;

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
	public Map<String, Object> selectSearchResult(String searchInput) {
		
		// 결과 저장할 Map 생성  _ List에 넣어서 Map에 모두 넣어놓고, Map 자체를 model로 보내서 jsp에서 꺼내서 쓰자! //상세페이지 조회는 아민이꺼
		Map<String, Object> searchResultMap = new HashMap<String, Object>();
		
		// 관련 계정 조회 DAO 호출
		List<Member> accountList = dao.selectAccountList(searchInput);
		
		// 인기 게시글 조회
		List<Board> hotBoardList = dao.selectHotBoardList(searchInput);
		
		// 최근 게시글 조회 _페이지네이션 처리(보경이꺼 참고)
		List<Board> recentBoardList = dao.selectRecentBoardList(searchInput);
		
		searchResultMap.put("accountList", accountList);
		searchResultMap.put("hotBoardList", hotBoardList);
		searchResultMap.put("recentBoardList", recentBoardList);
		
		return searchResultMap;
	}

	
	// 해시태그 팔로우
	@Override
	public int followHashtag(int memberNo, String searchInput) {
		return dao.followHashtag(memberNo, searchInput);
	}

}
