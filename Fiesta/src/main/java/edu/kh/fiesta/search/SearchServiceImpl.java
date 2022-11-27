package edu.kh.fiesta.search;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

	
	// 검색_관련 계정 조회
	@Override
	public List<Member> selectAccount(String searchInput) {
		return dao.selectAccount(searchInput);
	}

}
