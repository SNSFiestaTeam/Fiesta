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
		int result = sqlSession.update("settingMapper.updateSetting", inputMember);
		
		if(result > 0) {
			result = sqlSession.update("settingMapper.updateIntro", inputMember);
			
		}
		return result;
	}

	
	public int nicknameDupCheck(String memberNickname) {

		return sqlSession.selectOne("settingMapper.nicknameDupCheck", memberNickname);
	}

	public int updateImage(Member loginMember) {
		return sqlSession.update("settingMapper.updateImage", loginMember);
	}

	public int memberDelete(int memberNo) {
		int result = sqlSession.update("settingMapper.memberDelete", memberNo);
		
		if(result > 0) {
			
			result = sqlSession.update("settingMapper.boardDelete", memberNo);
			
		}
		
		return result;
		
	}


	public int changeOpen(Member loginMember) {

		return sqlSession.update("settingMapper.changeOpen", loginMember);
	}

	public int updateLikeProtected(Member loginMember) {
		return sqlSession.update("settingMapper.updateLikeProtected", loginMember);
	}

	public int updateLikePublic(Member loginMember) {
		return sqlSession.update("settingMapper.updateLikePublic", loginMember);
	}


	public Member selectSetting(int memberNo) {
		return sqlSession.selectOne("settingMapper.selectSetting", memberNo);
	}

	public Member selectIntro(int memberNo) {
		return sqlSession.selectOne("settingMapper.selectIntro", memberNo);
	}




}
