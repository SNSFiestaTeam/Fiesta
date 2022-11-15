package edu.kh.fiesta.board.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.board.model.dao.BoardDAO;


@Service
public class BoardServicepImple implements BoardService{

	// 객
	@Autowired
	private BoardDAO dao;
}
