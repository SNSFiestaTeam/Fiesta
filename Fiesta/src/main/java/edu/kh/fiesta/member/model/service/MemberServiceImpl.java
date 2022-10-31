package edu.kh.fiesta.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.member.model.dao.MemberDAO;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class MemberServiceImpl implements MemberService{
	
	@Autowired
	private MemberDAO dao;
	
	@Override
	public Member login(Member inputMember) {
		
		return dao.login(inputMember);
	}

}
