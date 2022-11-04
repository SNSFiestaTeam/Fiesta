package edu.kh.fiesta.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.kh.fiesta.member.model.dao.MemberDAO;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberDAO dao;
	
	// spring-security.xml에서 등록한 bean을 의존성 주입(DI)
	@Autowired
	private BCryptPasswordEncoder bcrypt;
	
	
	
	@Override
	public Member login(Member inputMember) {
		
		System.out.println("입력한 비밀번호 : " + inputMember.getMemberPw());
		System.out.println("암호화 비밀번호 : " + bcrypt.encode(inputMember.getMemberPw()));
		
		Member loginMember = dao.login(inputMember.getMemberEmail());
		
		if(loginMember != null) {
			
			if(bcrypt.matches(inputMember.getMemberPw(), loginMember.getMemberPw())) {
				loginMember.setMemberPw(null);
			} else {
				loginMember = null;
			}
		}
		return loginMember;
	}


	@Transactional(rollbackFor = Exception.class)
	@Override
	public int signUp(Member inputMember) {
		
		String encPw = bcrypt.encode(inputMember.getMemberPw());
		inputMember.setMemberPw(encPw);
		
		int result = dao.signUp(inputMember);
		
		return result;
	}

	


}
