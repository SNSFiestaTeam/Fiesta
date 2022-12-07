package edu.kh.fiesta.board.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.google.gson.Gson;

import edu.kh.fiesta.board.model.service.BoardService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.member.model.vo.Member;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;
	
	@PostMapping("/write")
	@ResponseBody //http 요청 본문에 담기 값들 자바 객체로 변환해 저장
	public int boardWrite(
			@SessionAttribute("loginMember") Member loginMember, // 로그인 멤버 번호 받아올거
			RedirectAttributes ra,
			HttpSession session, // 파일 어느위치 저장할지 경로 지정때 필요
			@RequestParam(value="files") List<MultipartFile> fileList,// 이미지 n개 받아오기
			Board board// 이미지 n개 받아오기
			) throws IOException {
			
		System.out.println(board.getBoardContent());
		System.out.println(fileList);
		
		// 로그인한 회원 번호 board 객체에 세팅
		board.setMemberNo(loginMember.getMemberNo());
		// 업로드된 파일 웹접근경로, 서버내부 경로
		String webPath = "/resources/images/board/"; // 웹 접근 경로
		String folderPath = session.getServletContext().getRealPath(webPath); // 서버 접근 경로
		
		// 게시글 삽입
//		int boardNo = service.boardWrite(board, fileList, webPath, folderPath);
		
		
		
//		String message = null;
//		String path = null;
//		
//		if(boardNo > 0) {
//			message = "게시글 등록(text만)";
//			path = "/main";
//		}else {
//			message = "게시글 작성 실패";
//			path ="/main";
//		}
//		ra.addFlashAttribute("message", message);
		return service.boardWrite(board, fileList, webPath, folderPath);
	}
	
	// 게시글 수정
	@GetMapping("/selectOneBoard")
	@ResponseBody
	public String selectOneBoard(int boardNo) {
		Board board = service.selectOneBoard(boardNo);
		return new Gson().toJson(board);
	}
	
	@PostMapping("/boardUpdate")
	public String boardUpdate(Board board) throws IOException { 
		
		int result = service.boardUpdate(board);
		
		String path;
		
		if(result > 0) {
//			path = 원래 있던 페이지 주소로 리다이렉트
		}
		
		return "redirect:/main";
	}
	
	
	
	
	
}
