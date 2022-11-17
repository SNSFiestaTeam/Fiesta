package edu.kh.fiesta.member.model.service;

public interface EmailService {

	String createAuthKey();
	String findAccount(String memberEmail);

}
