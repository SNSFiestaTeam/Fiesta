package edu.kh.fiesta.board.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.kh.fiesta.board.model.service.BoardService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	@PostMapping("/write")
	public String boardWrite(
			@SessionAttribute(value="loginMember") Member loginMember, // 로그인 멤버 번호 받아올거
			RedirectAttributes ra,
			HttpSession session, // 파일 어느위치 저장할지 경로 지정때 필요
			@RequestParam(value="newPostFile") List<MultipartFile> fileList,// 이미지 n개 받아오기
			Board board// 이미지 n개 받아오기
			) throws IOException {
				
		
		// 로그인한 회원 번호 board 객체에 세팅
		board.setMemberNo(loginMember.getMemberNo());
		
		if(board.getBoardPubPriFlag().equals("on")) {
			board.setBoardPubPriFlag("N");
		} 
		
		if(board.getBoardPubPriFlag() == null) {
			board.setBoardPubPriFlag("Y");
		}
		
		
		if(board.getCommentBlockFlag().equals("on")) {
			board.setCommentBlockFlag("Y");
		} 
		
		if(board.getCommentBlockFlag() == null) {
			board.setCommentBlockFlag("N");
		}
		
		
		
		// 업로드된 파일 웹접근경로, 서버내부 경로
		String webPath = "/resources/images/board/"; // 웹 접근 경로
		String folderPath = session.getServletContext().getRealPath(webPath); // 서버 접근 경로
		
		// 게시글 삽입
		int boardNo = service.boardWrite(board, fileList, webPath, folderPath);
		

		
		return "redirect:/main";
	}
	
	// 게시글 수정
	
	
}
