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
	
	
	// 로그인
	@Override
	public Member login(Member inputMember) {
		
//		System.out.println("입력한 비밀번호 : " + inputMember.getMemberPw());
//		System.out.println("암호화 비밀번호 : " + bcrypt.encode(inputMember.getMemberPw()));
		
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


	
	// 회원가입
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int signUp(Member inputMember) {
		
		String encPw = bcrypt.encode(inputMember.getMemberPw());
		inputMember.setMemberPw(encPw);
		
		int result = dao.signUp(inputMember);
		
		// 회원가입되면 자기자신 팔로우
		if(result > 0) {
			
			// 회원번호 조회
			int memberNo = dao.selectMemberNo(inputMember.getMemberEmail());
			
			// 자기자신 팔로우
			result = dao.followMyself(memberNo);
		}
		return result;
	}


	
	// 회원가입_이메일 중복 체크
	@Override
	public int emailDupCheck(String memberEmail) {
		return dao.emailDupCheck(memberEmail);
	}



	// 회원가입_닉네임 중복 체크 서비스
	@Override
	public int nicknameDupCheck(String memberNickname) {
		return dao.nicknameDupCheck(memberNickname);
	}


	// 계정찾기_비밀번호 재설정
	@Override
	public int updatePw(String inputEmail, String memberPw) {
		
		String encPw = bcrypt.encode(memberPw);
		memberPw = encPw;
		
		Member member = new Member();
		member.setMemberEmail(inputEmail);
		member.setMemberPw(memberPw);
		
		System.out.println(member.getMemberEmail());
		
		return dao.updatePw(member);
	}

}
