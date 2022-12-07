package edu.kh.fiesta.dm.model.service;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.dm.model.vo.ChattingRoom;
import edu.kh.fiesta.dm.model.vo.Message;
import edu.kh.fiesta.member.model.vo.Member;

public interface DmService {

	/** 모달 받는 사람 회원 목록 비동기 조회
	 * @param memberNickname
	 * @return memberList
	 */
	List<Member> selectMember(String memberNickname);

	int checkChattingNo(Map<String, Object> map);

	int createChattingRoom(Map<String, Object> map);

	List<ChattingRoom> selectRoomList(int memberNo);

	int insertMessage(Message msg);

	List<Message> selectMessageList(int chattingNo);

	int updateReadFlag(Map<String, Object> paramMap);

	int selectNumber(String memberNickname);


	
}
