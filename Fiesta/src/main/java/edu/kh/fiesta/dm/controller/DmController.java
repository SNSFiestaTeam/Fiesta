package edu.kh.fiesta.dm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.kh.fiesta.dm.model.service.DmService;

@RequestMapping("/dm")
@Controller
public class DmController {
	
	@Autowired
	private DmService service;

	
	@GetMapping("/dm")
	public String dm() {
		
		return "dm/dm";
	}
	
	

	// 모달 받는 사람 회원 목록 비동기 조회
	@GetMapping("/select")
	public String selectMember() {
		
		return null;
	}
	
	
	// 채팅방 입장
	
	
	// 채팅화면 이동
	
	
	// DM 목록 비동기 조회(왼쪽 받는 사람)
	
	
	// 메세지 화면 비동기 조회
	
	
	// 읽음 여부 비동기 조회
	

	
}
