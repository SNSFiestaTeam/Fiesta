package edu.kh.fiesta.setting.model.service;

import java.io.File;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MultipartFile;

import edu.kh.fiesta.member.model.vo.Member;
import edu.kh.fiesta.setting.model.dao.SettingDAO;
import edu.kh.fiesta.setting.Util;



@Service
public class SettingServiceImpl implements SettingService{

	@Autowired
	private SettingDAO dao;

	@Autowired
	private BCryptPasswordEncoder bcrypt;
	

	@ExceptionHandler
	@Transactional
	@Override
	public int changePw(Map<String, Object> paramMap) {

		String encPw = dao.selectEncPw( (int)paramMap.get("memberNo"));
		
		if(bcrypt.matches((String)paramMap.get("currentPw"), encPw)) {
			
			String newPw = bcrypt.encode((String)paramMap.get("newPw"));
			
			paramMap.put("newPw", newPw);
			
		
		
			int result = dao.changePw(paramMap);
			
			return result;
			
		} return 0;
		
	}

	@Transactional
	@Override
	public int updateSetting(Member inputMember) {

		int result = dao.updateSetting(inputMember);
		return result;
	}

	@Override
	public int nicknameDupCheck(String memberNickname) {
		 return dao.nicknameDupCheck(memberNickname);
		
	}

	// 프로필 이미지 수정
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int updateImage(String webPath, String filePath, MultipartFile memberProfileImg, Member loginMember) 
			throws Exception {
		
		// 실패를 대비해서 이전 이미지 경로 저장
		String temp = loginMember.getMemberProfileImg();
		
		// 중복 파일명 업로드를 대비하기 위해서 파일명 변경
		String rename = null;
		
		if(memberProfileImg.getSize() == 0) { // 업로드된 파일이 없는 경우
			loginMember.setMemberProfileImg(null);
		} else { // 업로드된 파일이 있을 경우 
		
			// 원본 파일명을 이용해서 새로운 파일명 생성
			rename = Util.fileRename(memberProfileImg.getOriginalFilename());
		
			loginMember.setMemberProfileImg(webPath + rename);
			// /resources/images/memberProfile/변경된 파일명
		}

		
		int result = dao.updateImage(loginMember); // 0 또는 1
		
		
		if( result > 0) { // DB 수정 성공 시 -> 실제로 서버에 파일 저장
			
			if(rename != null) {
				// 변경된 이미지명이 있다 == 새로운 파일이 업로드 되었다
				
				memberProfileImg.transferTo(new File(filePath + rename));
				// 메모리에 임시 저장된 파일을 지정된 경로에 파일 형태로 변환 == 서버 파일 업로드
			}
			
		} else {
			// 실패 시 다시 이전 이미지를 세팅
			loginMember.setMemberProfileImg(temp);
			throw new Exception("파일 업로드 실패"); //예외 강제 발생
		}
		return result; // 결과 반환
	}

	@Transactional
	@Override
	public int memberDelete(int memberNo) {
		return dao.memberDelete(memberNo);
	}

	@Override
	public int updateLike(int memberNo) {
		return dao.updateLike(memberNo);
	}

	@Override
	public int updateLike2(int memberNo) {
		return dao.updateLike2(memberNo);
	}


	}



