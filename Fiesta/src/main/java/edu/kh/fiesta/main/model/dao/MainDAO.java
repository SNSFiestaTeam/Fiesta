package edu.kh.fiesta.main.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Pagination;


@Repository
public class MainDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;


	/**
	 * 팔로잉 멤버 게시글 수 조회
	 * @param memberNo
	 * @return listCount
	 */
	public int getListCount(int memberNo) {
		
		return sqlSession.selectOne("mainMapper.getListCount", memberNo);
	}
	
	
	/** 팔로잉 멤버 게시글 조회 DAO
	 * @param selectBoardSql
	 * @return
	 */
	public List<Board> selectBoardList(Pagination pagination, int memberNo) {
		
		int offset = (pagination.getCurrentPage() - 1) * pagination.getLimit();
		
		RowBounds rowBounds = new RowBounds(offset, pagination.getLimit());
	

		
		return sqlSession.selectList("mainMapper.selectBoardList", memberNo, rowBounds);
	}


	/** 게시글 좋아요 증가
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardLikeUp(int boardNo, int memberNo) {
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.insert("mainMapper.boardLikeUp", map);
	}


	/** 게시글 좋아요 감소
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardLikeDown(int boardNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		return sqlSession.delete("mainMapper.boardLikeDown", map);
	}


	/** 게시글 북마크 추가
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardBookmarkOn(int boardNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.insert("mainMapper.boardBookmarkOn", map);
	}
	
	/** 게시글 북마크 해제
	 * @param boardNo
	 * @param memberNo
	 * @return result
	 */
	public int boardBookmarkOff(int boardNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.insert("mainMapper.boardBookmarkOff", map);
	}


	/** 댓글 좋아요 증가
	 * @param commentNo
	 * @param memberNo
	 * @return result
	 */
	public int commentLikeUp(int commentNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("commentNo", commentNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.insert("mainMapper.commentLikeUp", map);
	}


	/** 댓글 좋아요 취소
	 * @param commentNo
	 * @param memberNo
	 * @return result
	 */
	public int commentLikeDown(int commentNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("commentNo", commentNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.delete("mainMapper.commentLikeDown", map);
	}


	/** 댓글 등록
	 * @param boardNo
	 * @param memberNo
	 * @return commentNo
	 */
	public int commentInsert(Map<String, Object> map) {
		
		
		return sqlSession.insert("mainMapper.commentInsert", map);
	}

}
