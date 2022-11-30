package edu.kh.fiesta.search.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
	public List<Member> selectAccountList(String searchInput) {
		return sqlSession.selectList("searchMapper.selectAccountList", searchInput);
	}


	/** 인기게시글 조회
	 * @param searchInput
	 * @return hotBoardList
	 */
	public List<Board> selectHotBoardList(String searchInput) {
		return sqlSession.selectList("searchMapper.selectHotBoardList", searchInput);
	}


	/** 최근 게시글 조회
	 * @param searchInput
	 * @return recentBoardList
	 */
	public List<Board> selectRecentBoardList(String searchInput) {
		return sqlSession.selectList("searchMapper.selectRecentBoardList", searchInput);
	}


}
