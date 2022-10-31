package edu.kh.fiesta.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;

import edu.kh.fiesta.member.model.dao.MemberDAO;
import edu.kh.fiesta.member.model.vo.Member;

public interface MemberService {

	Member login(Member inputMember);
	
	

}
