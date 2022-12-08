package edu.kh.fiesta.dm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.google.gson.Gson;

import edu.kh.fiesta.dm.model.service.DmService;
import edu.kh.fiesta.dm.model.vo.ChattingRoom;
import edu.kh.fiesta.dm.model.vo.Message;
import edu.kh.fiesta.member.model.vo.Member;

@RequestMapping("/dm")
@Controller
public class DmController {
	
	@Autowired
	private DmService service;

	
//	@GetMapping("/dm")
//	public String dm() {
//		
//		return "dm/dm";
//	}
//	
	

	// 모달 받는 사람 회원 목록 비동기 조회
	@GetMapping("/selectMember")
	@ResponseBody
	public String selectMember(String memberNickname) {
		
		List<Member> memberList = service.selectMember(memberNickname);
		
		
		
		return new Gson().toJson(memberList);
	}
	
	
	// 채팅방 입장
	@GetMapping("/enter")
	@ResponseBody
	public String dmEnter (int targetNo, RedirectAttributes ra,
			@SessionAttribute("loginMember") Member loginMember) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("targetNo", targetNo);
		map.put("loginMemberNo", loginMember.getMemberNo());
		
//		채팅방 존재여부 확인
		int chattingNo = service.checkChattingNo(map);
		
		
//		채팅방 존재 x 일 때
        if(chattingNo == 0) { 
        	
        	// 새로운 채팅방 생성 후 채팅방 번호 반환
            chattingNo = service.createChattingRoom(map);

//      채팅방이 존재할 때
        } else {
        	
//        	메세지 내용 가져와서 반환
        	List<Message> messageList = service.selectMessageList(chattingNo);
        	map.put("messageList", messageList);
        }
        
        

        map.put("chattingNo", chattingNo);
        
        
        ra.addFlashAttribute("chattingNo", chattingNo);
        
        return new Gson().toJson(map);	

		
	}
	
	
	// 채팅화면 이동
	@GetMapping("/dm")
	public String dm(@SessionAttribute("loginMember") Member loginMember, Model model) {
		
		List<ChattingRoom> roomList = service.selectRoomList(loginMember.getMemberNo());
		model.addAttribute("roomList", roomList);
		return "dm/dm";
		
	}
	
	// DM 목록 비동기 조회(왼쪽 받는 사람)
	@GetMapping("/roomList")
	@ResponseBody
	public String selectRoomList (int memberNo) {
		List<ChattingRoom> roomList = service.selectRoomList(memberNo);
		
		return new Gson().toJson(roomList);
	}
	
	

	// 메세지 화면 비동기 조회
	@GetMapping("/selectMessage")
	@ResponseBody
	public String selectMessageList(int chattingNo) {
		
		List<Message> messageList = service.selectMessageList(chattingNo);
		
		return new Gson().toJson(messageList);
		
	}
	
	
	
	// 읽음 여부 비동기 조회
	@GetMapping("/updateReadFlag")
	@ResponseBody
	public int updateReadFlag(@RequestParam Map<String, Object> paramMap) {
	
		return service.updateReadFlag(paramMap);
	}
	
	
	// 조회
	@GetMapping("/number")
	@ResponseBody
	public int selectNumber(String memberNickname) {
		 int result = service.selectNumber(memberNickname);
		
		return result;
	}

	
}
