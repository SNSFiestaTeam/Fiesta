package edu.kh.fiesta.setting.model.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import edu.kh.fiesta.member.model.vo.Member;

public interface SettingService {

	int changePw(Map<String, Object> paramMap);

	int updateSetting(Member inputMember);

	

	int nicknameDupCheck(String memberNickname);

	int updateImage(String webPath, String filePath, MultipartFile memberProfileImg, Member loginMember) throws Exception;

	int memberDelete(int memberNo);


	int changeOpen(Member loginMember);


	
}
