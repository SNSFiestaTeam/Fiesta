package edu.kh.fiesta.setting.model.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import edu.kh.fiesta.member.model.vo.Member;

public interface SettingService {

	int Pw(Map<String, Object> paramMap);

	int updateSetting(Member inputMember);

	

	int nicknameDupCheck(String memberNickname);

	int updateImg(String webPath, String filePath, MultipartFile memberProfileImg, Member loginMember) throws Exception;

	
}
