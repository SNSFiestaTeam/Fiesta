package edu.kh.fiesta.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.board.model.service.BoardService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	@PostMapping("/main/write")
	public String boardWrite(
			Board board, // 내용 받아 올거
			@SessionAttribute("loginMember") Member loginMember, // 로그인 멤버 번호 받아올거
			RedirectAttributes ra
			
			) {
		// 로그인한 회원 번호 board 객체에 세팅
		board.setMemberNo(loginMember.getMemberNo());
		
		// 게시글 삽입
		int boardNo = service.boardWrite(board);
		
		String message = null;
		String path = null;
		
		if(boardNo > 0) {
			message = "게시글 등록(text만)";
			path = "/main";
		}else {
			message = "게시글 작성 실패";
			path ="/main";
		}
		ra.addFlashAttribute("message", message);
		return "redirect:"+path;
	}
	
}
