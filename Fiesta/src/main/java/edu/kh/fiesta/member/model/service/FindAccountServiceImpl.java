package edu.kh.fiesta.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class FindAccountServiceImpl implements FindAccountService{
	
	@Autowired
	private JavaMailSender mailSender; // emailAuth-context.xml에서 생성한 bean
	
	private String fromEmail = "linkedg98@gmail.com";
	private String fromUsername = "Fiesta";
	
	@Override
	public String createAuthKey() {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	@Override
	public String findAccount(String memberEmail) {
		return null;
	}










}
