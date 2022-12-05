package edu.kh.fiesta.search.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.feed.model.vo.Pagination;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class SearchDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	
	/** 검색_관련 계정 수
	 * @param searchInput
	 * @return accountTotal
	 */
	public int selectAccountTotal(String searchInput) {
		return sqlSession.selectOne("searchMapper.selectAccountTotal", searchInput);
	}


	/** 검색_게시글 수
	 * @param searchInput
	 * @return boardTotal
	 */
	public int selectBoardTotal(String searchInput) {
		return sqlSession.selectOne("searchMapper.selectBoardTotal", searchInput);
	}


	/** 검색_관련 계정 
	 * @param searchInput
	 * @return accountList
	 */
	public List<Member> selectAccountList(Map<String, Object> paramMap) {
		return sqlSession.selectList("searchMapper.selectAccountList", paramMap);
	}


	/** 인기게시글 조회
	 * @param searchInput
	 * @return hotBoardList
	 */
	public List<Board> selectHotBoardList(Map<String, Object> paramMap) {
		return sqlSession.selectList("searchMapper.selectHotBoardList", paramMap);
	}


	/** 최근게시글 조회
	 * @param paramMap
	 * @return recentBoardList
	 */
	public List<Board> selectRecentBoardList(Map<String, Object> paramMap) {
		return sqlSession.selectList("searchMapper.selectRecentBoardList", paramMap);
	}
	
	
	
	
	/** 최근 게시글 조회 _ 게시글 수 조회
	 * @param recentMap
	 * @return recentBoardCount
	 */
	public int getListCount(Map<String, Object> recentMap) {
		return sqlSession.selectOne("searchMapper.getListCount", recentMap);
	}

	
	/** 검색 게시글 1개 상세 조회
	 * @param map
	 * @return boardResult
	 */
	public Board searchBoardDetail(Map<String, Object> map) {
		return sqlSession.selectOne("mainMapper.selectBoard", map);
	}
	
	
	/** 최근 게시글 목록 조회
	 * @param pagination
	 * @param recentMap
	 * @return recentBoardList
	 */
	public List<Board> selectRecentList(Pagination pagination, Map<String, Object> recentMap) {
		
		// Pagination에 limit = 10으로 되어있음. 9로 하기!
		// 몇 개 건너뛸지
		int offset = (pagination.getCurrentPage() -1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("searchMapper.selectRecentBoardList", recentMap, rowBounds);
														// 이미 만들어 놓은 것
	}


	
	

	





}
