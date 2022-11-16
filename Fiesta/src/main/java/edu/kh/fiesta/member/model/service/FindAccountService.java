package edu.kh.fiesta.member.model.service;

public interface FindAccountService {

	String createAuthKey();
	String findAccount(String memberEmail);

}
