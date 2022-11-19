package edu.kh.fiesta.main.model.dao;

import java.util.List;

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

}
