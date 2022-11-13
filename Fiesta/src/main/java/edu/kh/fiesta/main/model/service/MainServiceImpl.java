package edu.kh.fiesta.main.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.main.model.dao.MainDAO;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class MainServiceImpl implements MainService {
	
	@Autowired
	private MainDAO dao;
	
	@Override
	public List<Follow> selectFollowing(int memberNo) {
		return dao.selectFollowing(memberNo);
	}
	
	@Override
	public List<Board> selectBoardList(String selectBoardSql) {
		return dao.selectBoardList(selectBoardSql);
	}

}
