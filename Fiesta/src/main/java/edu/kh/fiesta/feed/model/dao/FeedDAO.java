package edu.kh.fiesta.feed.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.main.model.vo.Pagination;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class FeedDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	public List<Member> selectFollowingList(int memberNo) {

		return sqlSession.selectList("feedMapper.selectFollowingList", memberNo);
	}

	public List<Member> selectFollowList(int memberNo) {
		
		return sqlSession.selectList("feedMapper.selectFollowList", memberNo);
	}
	
	
	

	/** 게시글 수 조회
	 * @param memberNickname
	 * @return
	 */
	public int getListCount(String memberNickname) {

		return sqlSession.selectOne("feedMapper.getListCount", memberNickname);
	}

	/** 게시글 이미지 조회
	 * @param pagination
	 * @param memberNickname
	 * @return
	 */
	public List<BoardImg> selectBoardImgList(Pagination pagination, String memberNickname) {
		
		int offset = (pagination.getCurrentPage()-1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
		
		return sqlSession.selectList("feedMapper.selectBoardImgList", memberNickname, rowBounds);
	}

	public List<Board> selectFeedAllList(int memberNo) {

		return sqlSession.selectList("feedMapper.selectFeedAllList", memberNo);
	}



}
