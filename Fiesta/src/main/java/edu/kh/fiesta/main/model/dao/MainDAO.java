package edu.kh.fiesta.main.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class MainDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;


	/** 팔로잉 멤버 게시글 조회 DAO
	 * @param selectBoardSql
	 * @return
	 */
	public List<Board> selectBoardList(int memberNo) {
		return sqlSession.selectList("mainMapper.selectBoardList", memberNo);
	}

	/** 게시글 이미지 리스트 조회 DAO
	 * @param boardNo
	 * @return imageList
	 */
	public List<BoardImg> selectImageList(int boardNo) {
		return sqlSession.selectList("mainMapper.selectImageList", boardNo);
	}

	public Member selectWriter(int memberNo) {
		return sqlSession.selectOne("mainMapper.selectWriter", memberNo);
	}

}
