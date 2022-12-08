package edu.kh.fiesta.dm.model.websocket;


import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import edu.kh.fiesta.dm.model.service.DmService;
import edu.kh.fiesta.dm.model.vo.Message;
import edu.kh.fiesta.member.model.vo.Member;

public class ChattingWebsocketHandler extends TextWebSocketHandler{
	
	private Logger logger = LoggerFactory.getLogger(ChattingWebsocketHandler.class);
	
	@Autowired
	private DmService service;
	
	private Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<WebSocketSession>());

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {

		sessions.add(session);
		
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

	logger.info("전달 받은 내용 : " + message.getPayload());
	
	ObjectMapper objectMapper = new ObjectMapper();
	
	Message msg = objectMapper.readValue(message.getPayload(), Message.class); 
	
	int result = service.insertMessage(msg);
	
	if(result > 0) {
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy,MM.dd hh:mm");
		msg.setSendDate(sdf.format(new Date()));
		
		System.out.println(msg);
		
		for(WebSocketSession s : sessions) {
			
			int loginMemberNo = ((Member)s.getAttributes().get("loginMember")).getMemberNo();
			
			if(loginMemberNo == msg.getTargetNo() || loginMemberNo == msg.getSenderNo()) {
				
				s.sendMessage(new TextMessage(new Gson().toJson(message)));
			}
		}
		
	}
	
	
	}
	
	


	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

		sessions.remove(session);
	}
	
	

}
