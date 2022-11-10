package edu.kh.fiesta.member.model.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.kh.fiesta.member.model.dao.SettingDAO;

@Service
public class SettingServiceImpl implements SettingService{

	@Autowired
	private SettingDAO dao;

	@Autowired
	private BCryptPasswordEncoder bcrypt;
	
	
	@Transactional
	@Override
	public int changePw(Map<String, Object> paramMap) {

		String encPw = dao.selectEncPw( (int)paramMap.get("memberNo"));
		
		if(bcrypt.matches((String)paramMap.get("currentPw"), encPw)) {
			
			String newPw = bcrypt.encode((String)paramMap.get("newPw"));
			
			paramMap.put("newPw", newPw);
			
		
		
			int result = dao.changePw(paramMap);
			
			return result;
			
		}
		return 0;
	}

}
