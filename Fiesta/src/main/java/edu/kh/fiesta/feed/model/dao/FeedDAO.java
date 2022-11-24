package edu.kh.fiesta.feed.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class FeedDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	public List<Member> selectFollowingList(int memberNo) {

		return sqlSession.selectList("feedMapper.selectFollowingList", memberNo);
	}


}
