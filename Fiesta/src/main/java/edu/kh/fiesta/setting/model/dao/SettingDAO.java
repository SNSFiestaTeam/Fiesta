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

	public int changePw(Map<String, Object> paramMap) {

		
		return sqlSession.update("settingMapper.changePw", paramMap);
	}

	public int updateSetting(Member inputMember) {
		return sqlSession.update("settingMapper.updateSetting", inputMember);
	}

	
	public int nicknameDupCheck(String memberNickname) {

		return sqlSession.selectOne("settingMapper.nicknameDupCheck", memberNickname);
	}

	public int updateImage(Member loginMember) {
		return sqlSession.update("settingMapper.updateImage", loginMember);
	}

	public int memberDelete(int memberNo) {
		return sqlSession.update("settingMapper.memberDelete", memberNo);
	}

	public int updateLike(int memberNo) {
		return sqlSession.update("settingMapper.updateLike", memberNo);
	}

	public int updateLike2(int memberNo) {
		return sqlSession.update("settingMapper.updateLike2", memberNo);
	}

	

}
