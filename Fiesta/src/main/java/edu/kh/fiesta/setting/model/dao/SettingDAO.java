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
	
	public int updateIntro(Member inputMember) {
	
		return sqlSession.update("settingMapper.updateIntro", inputMember);
	
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

	/** 소개테이블 조회
	 * @param memberNo
	 * @return member
	 */
	public Member selectIntro(int memberNo) {
		return sqlSession.selectOne("settingMapper.selectIntro", memberNo);
	}

	/** 소개 테이블에 있는지 조회
	 * @param inputMember
	 * @return result
	 */
	public int introCheck(Member inputMember) {
		return sqlSession.selectOne("settingMapper.introCheck", inputMember);
	}

	/** 소개 테이블에 없을시 소개 작성
	 * @param inputMember
	 * @return result
	 */
	public int insertIntro(Member inputMember) {
		return sqlSession.insert("settingMapper.insertIntro", inputMember);
	}




}
