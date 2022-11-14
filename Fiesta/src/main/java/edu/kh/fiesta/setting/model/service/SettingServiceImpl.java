package edu.kh.fiesta.setting.model.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ExceptionHandler;

import edu.kh.fiesta.member.model.vo.Member;
import edu.kh.fiesta.setting.model.dao.SettingDAO;



@Service
public class SettingServiceImpl implements SettingService{

	@Autowired
	private SettingDAO dao;

	@Autowired
	private BCryptPasswordEncoder bcrypt;
	

	@Transactional
	@Override
	public int Pw(Map<String, Object> paramMap) {

		String encPw = dao.selectEncPw( (int)paramMap.get("memberNo"));
		
		if(bcrypt.matches((String)paramMap.get("currentPw"), encPw)) {
			
			String newPw = bcrypt.encode((String)paramMap.get("newPw"));
			
			paramMap.put("newPw", newPw);
			
		
		
			int result = dao.Pw(paramMap);
			
			return result;
			
		} return 0;
		
	}

	@Transactional
	@Override
	public int updateSetting(Member inputMember) {

		int result = dao.updateSetting(inputMember);
		return result;
	}

}
