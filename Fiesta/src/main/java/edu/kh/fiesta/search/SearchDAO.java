package edu.kh.fiesta.search;

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


	/** 검색 결과 해시태그 팔로우하기
	 * @param loginMember
	 * @param searchInput
	 * @return result
	 */
	public int insertHashtag(Member loginMember, String searchInput) {
		
		int result = sqlSession.insert("followMapper.insertHashtag", searchInput);
		
		if(result > 0) {
			result = sqlSession.insert("followMapper.followHashtag", searchInput);
		}
		
		
		
		return 0;
	}


	/** 검색 결과 해시태그 팔로우하기
	 * @param memberNo
	 * @param searchInput
	 * @return result
	 */
	public int followHashtag(int memberNo, String searchInput) {
		
		int insertResult = sqlSession.insert("followMapper.insertHashtag", searchInput);
		int result = 0;
		
		if(insertResult > 0) {
			result = sqlSession.insert("followMapper.followHashtag", searchInput);
		}
		
		return result;
	}

}
