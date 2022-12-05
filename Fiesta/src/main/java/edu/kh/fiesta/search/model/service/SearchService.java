package edu.kh.fiesta.search.model.service;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.member.model.vo.Member;

public interface SearchService {

	/** 검색_관련 계정 수
	 * @param searchInput
	 * @return accountTotal
	 */
	int selectAccountTotal(String searchInput);

	/** 검색_ 게시글 수
	 * @param searchInput
	 * @return boardTotal
	 */
	int selectBoardTotal(String searchInput);


	/** 검색 결과 조회
	 * @param searchInput
	 * @return searchResultMap
	 */
	Map<String, Object> selectSearchResult(Map<String, Object> paramMap);

	
	/** 검색 게시글 1개 상세조회
	 * @param map
	 * @return
	 */
	Board searchBoardDetail(Map<String, Object> map);
	
	
	/** 최근 게시글 조회(pagination)
	 * @param searchInput
	 * @param cp
	 * @return result
	 */
	Map<String, Object> selectRecentList(Map<String, Object> recentMap);



	


}
