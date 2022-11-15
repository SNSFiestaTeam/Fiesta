package edu.kh.fiesta.setting.model.service;

import java.util.Map;

import edu.kh.fiesta.member.model.vo.Member;

public interface SettingService {

	int Pw(Map<String, Object> paramMap);

	int updateSetting(Member inputMember);

	
	
}
