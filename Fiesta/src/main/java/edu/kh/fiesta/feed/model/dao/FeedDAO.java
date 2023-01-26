package edu.kh.fiesta.feed.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.feed.model.vo.Bookmark;
import edu.kh.fiesta.feed.model.vo.Pagination;
import edu.kh.fiesta.feed.model.vo.PopularPagination;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.main.model.vo.Hashtag;
import edu.kh.fiesta.member.model.vo.Member;


@Repository
public class FeedDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 팔로잉 목록 조회
	 * @param memberNo
	 * @return
	 */
	public List<Member> selectFollowingList(int memberNo) {

		return sqlSession.selectList("feedMapper.selectFollowingList", memberNo);
	}

	/** 팔로우 목록 조회
	 * @param memberNo
	 * @return
	 */
	public List<Member> selectFollowList(int memberNo) {
		
		return sqlSession.selectList("feedMapper.selectFollowList", memberNo);
	}
	
	/** 해시태그 목록 조회
	 * @param memberNo
	 * @return
	 */
	public List<Hashtag> selectHashtagList(int memberNo) {
		return sqlSession.selectList("feedMapper.selectHashtagList", memberNo);
	}
	
	/** 게시글 수 조회
	 * @param memberNickname
	 * @return
	 */
	public int selectBoardCount(String memberNickname) {
		return sqlSession.selectOne("feedMapper.selectBoardCount", memberNickname);
	}
	
	/** 북마크 수 조회
	 * @param memberNickname
	 * @return
	 */
	public int selectBookmarkCount(String memberNickname) {
		return sqlSession.selectOne("feedMapper.selectBookmarkCount", memberNickname);
	}

	
	/** 특정 회원 게시글 목록 조회
	 * @param pagination
	 * @param memberNickname
	 * @return boardList
	 */
	public List<Board> selectBoardList(Pagination pagination, String memberNickname) {
		
//		불러올 게시글의 시작 번호
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
//		시작 번호부터 몇개의 글을 불러올 것인지 설정
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("feedMapper.selectBoardList", memberNickname, rowBounds);
	}
	
	/** 북마크 조회
	 * @param memberNo 
	 * @param pagination 
	 * @return
	 */
	public List<Board> selectBookmarkList(Pagination pagination, String memberNickname) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("feedMapper.selectBookmarkList", memberNickname, rowBounds);
	}

	/** 회원 정보 조회
	 * @param member
	 * @return
	 */
	public Member selectMember(Member member) {
		return sqlSession.selectOne("feedMapper.selectMember", member);
	}
	
	/** 게시글 AJAX 조회
	 * @param paramMap
	 * @return
	 */
	public Member selectMember(Map<String, Object> paramMap) {
		return sqlSession.selectOne("feedMapper.selectMember", paramMap);
	}

	/** 상세조회
	 * @param map
	 * @return
	 */
	public Board selectFeedDetail(Map<String, Object> map) {
		return sqlSession.selectOne("mainMapper.selectBoard", map);
	}

	/** 인기 피드 수 조회
	 * @return
	 */
	public int selectPopularFeedCount() {
		return sqlSession.selectOne("feedMapper.selectPopularFeedCount");
	}

	/** 인기 피드 목록 조회
	 * @param pagination
	 * @return boardList
	 */
	public List<Board> selectPopularFeedList(PopularPagination pagination) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("feedMapper.selectPopularFeedList", null, rowBounds);
	}


}
