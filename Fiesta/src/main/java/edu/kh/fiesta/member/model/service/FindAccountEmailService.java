package edu.kh.fiesta.member.model.service;

public interface FindAccountEmailService {

	String createAuthKey();
	String findAccount(String email);

}
