package edu.kh.fiesta.member.model.service;

public interface SignUpEmailService {

	String createAuthKey();
	String signUp(String email);

}
