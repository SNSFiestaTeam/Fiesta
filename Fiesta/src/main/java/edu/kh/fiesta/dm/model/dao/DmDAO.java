package edu.kh.fiesta.dm.model.dao;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.dm.model.vo.ChattingRoom;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class DmDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	
	/** 모달 받는 사람 회원 목록 비동기 조회
	 * @param memberNickname
	 * @return memberList
	 */
	public List<Member> selectMember(String memberNickname) {
		return sqlSession.selectList("dmMapper.selectMember", memberNickname);
	}


	public int checkChattingNo(Map<String, Integer> map) {
		return sqlSession.selectOne("dmMapper.checkChattingNo", map);
	}


	public int createChattingRoom(Map<String, Integer> map) {
		return sqlSession.insert("dmMapper.createChattingRoom", map);
	}


	public List<ChattingRoom> selectRoomList(int memberNo) {
		return sqlSession.selectList("dmMapper.selectRoomList", memberNo);
	}

	

}
