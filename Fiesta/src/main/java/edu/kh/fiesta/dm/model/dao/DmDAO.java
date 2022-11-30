package edu.kh.fiesta.dm.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DmDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
}
