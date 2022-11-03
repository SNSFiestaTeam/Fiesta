package edu.kh.fiesta.member.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class MemberDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	public Member login(String memberEmail) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne("memberMapper.login", memberEmail);
	}

	
}
