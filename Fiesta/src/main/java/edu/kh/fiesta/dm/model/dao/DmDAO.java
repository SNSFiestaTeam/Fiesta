package edu.kh.fiesta.dm.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;

public class DmDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
}
