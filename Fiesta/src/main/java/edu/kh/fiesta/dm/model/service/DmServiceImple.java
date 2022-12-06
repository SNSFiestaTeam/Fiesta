package edu.kh.fiesta.dm.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.dm.model.dao.DmDAO;
import edu.kh.fiesta.dm.model.vo.ChattingRoom;
import edu.kh.fiesta.dm.model.vo.Message;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class DmServiceImple implements DmService{
	
	@Autowired
	private DmDAO dao;

	// 모달 받는 사람 회원 목록 비동기 조회
	@Override
	public List<Member> selectMember(String memberNickname) {
		return dao.selectMember(memberNickname);
	}

	@Override
	public int checkChattingNo(Map<String, Object> map) {
		return dao.checkChattingNo(map);
	}

	@Override
	public int createChattingRoom(Map<String, Object> map) {
		return dao.createChattingRoom(map);
	}

	@Override
	public List<ChattingRoom> selectRoomList(int memberNo) {
		return dao.selectRoomList(memberNo);
	}

	@Override
	public int insertMessage(Message msg) {
		return dao.insertMessage(msg);
	}

	@Override
	public List<Message> selectMessageList(Map<String, Object> paramMap) {
		return dao.selectMessageList(paramMap);
	}

	@Override
	public int updateReadFlag(Map<String, Object> paramMap) {
		return dao.updateReadFlag(paramMap);
	}

	@Override
	public int selectNumber(String memberNickname) {
		return dao.selectNumber(memberNickname);
	}

	
}
