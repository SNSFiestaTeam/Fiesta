package edu.kh.fiesta.member.model.service;

import edu.kh.fiesta.member.model.vo.Member;

public interface MemberService {

	/** 로그인 서비스
	 * @param inputMember
	 * @return loginMember
	 */
	Member login(Member inputMember);

	/** 회원가입 서비스
	 * @param inputMember
	 * @return result
	 */
	int signUp(Member inputMember);
	

	/** 회원가입_이메일 중복 체크 서비스
	 * @param memberEmail
	 * @return result
	 */
	int emailDupCheck(String memberEmail);
	

}
