package edu.kh.fiesta.member.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SettingDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	
	public String selectEncPw(int memberNo) {
		return sqlSession.selectOne("settingMapper.selectEncPw", memberNo);
		
	}

	public int changePw(Map<String, Object> paramMap) {

		
		return sqlSession.update("settingMapper.changePw", paramMap);
	}

}
