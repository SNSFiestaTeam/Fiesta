package edu.kh.fiesta.main.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class MainDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 팔로잉 멤버 조회 DAO
	 * @param memberNo
	 * @return
	 */
	public List<Follow> selectFollowing (int memberNo) {
		return sqlSession.selectList("mainMapper.selectFollowing", memberNo);
	}

	/** 팔로잉 멤버 게시글 조회 DAO
	 * @param selectBoardSql
	 * @return
	 */
	public List<Board> selectBoardList(String selectBoardSql) {
		return sqlSession.selectList("mainMapper.selectBoardList", selectBoardSql);
	}

}
