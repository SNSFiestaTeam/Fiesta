package edu.kh.fiesta.setting.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class SettingDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	
	public String selectEncPw(int memberNo) {
		return sqlSession.selectOne("settingMapper.selectEncPw", memberNo);
		
	}

	public int Pw(Map<String, Object> paramMap) {

		
		return sqlSession.update("settingMapper.Pw", paramMap);
	}

	public int updateSetting(Member inputMember) {
		return sqlSession.update("settingMapper.updateSetting", inputMember);
	}

	public int nickDupCheck(String memberNickname) {
		return sqlSession.selectOne("settingMapper.nickDupCheck", memberNickname);
	}

}
