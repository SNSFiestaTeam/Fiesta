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


	public int boardLikeUp(int boardNo, int memberNo) {
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.insert("mainMapper.boardLikeUp", map);
	}


	public int boardLikeDown(int boardNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("boardNo", boardNo);
		map.put("memberNo", memberNo);
		return sqlSession.delete("mainMapper.boardLikeDown", map);
	}

}
