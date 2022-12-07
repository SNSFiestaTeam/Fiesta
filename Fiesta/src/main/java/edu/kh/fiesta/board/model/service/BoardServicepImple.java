package edu.kh.fiesta.board.model.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import edu.kh.fiesta.board.model.dao.BoardDAO;
import edu.kh.fiesta.common.Util;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;


@Service
public class BoardServicepImple implements BoardService{

	@Autowired
	private BoardDAO dao;

	// 게시글 삽입
	@Transactional(rollbackFor = Exception.class) // 모든 예외 발생 시 롤백
	@Override
	public int boardWrite(Board board, List<MultipartFile> fileList, String webPath, String folderPath) throws IOException {
		
		// 게시글 삽입
		board.setBoardContent(Util.XSSHandling(board.getBoardContent())); // XSS 방지 처리
		
//		board.getBoardContent().replaceAll("(#[^\\s#]+)", 
//				"<a href='/search?searchInput=\"+tagName+\"' class='hashtag'>\"+match+\"</a>");
//		
//		Pattern pattern = Pattern.compile("(#[^\\s#]+)");
//		
//		Matcher matcher = pattern.matcher(board.getBoardContent());
//		
//		while(matcher.find()) {
//			String str = matcher.group(1);
//			
//			String tagName = str.replaceAll("#", ""); 
//			
//			board.setBoardContent(board.getBoardContent().replace(str,
//					"<a href='/search?searchInput="+tagName+"' class='hashtag'>"+str+"</a>"));
//		}
//		
		board.setBoardContent(Util.newLineHandling(board.getBoardContent())); // 개행문자 처리
		
		int boardNo = dao.boardWrite(board);
		
		// 이미지 삽입
		if(boardNo > 0) {
			List<BoardImg> boardImgList = new ArrayList<BoardImg>();
			List<String> imgChangeNameList = new ArrayList<String>();
			// 업로드된 파일 분류 작업
			for(int i=0; i < fileList.size(); i++) {
				if(fileList.get(i).getSize() > 0) { // 파일이 있는지 확인
					BoardImg img = new BoardImg(); // boardImg 객체 생성
					img.setImgAddress(webPath);
					
//					 String reName = Util.fileRename(원본파일명);
					String reName = Util.fileRename(fileList.get(i).getOriginalFilename());
					img.setImgChangeName(reName);
					imgChangeNameList.add(reName); // 변경 파일명 리스트 추가
					
					img.setImgOriginalName(fileList.get(i).getOriginalFilename()); // 원본 파일명
					img.setBoardNo(boardNo); // 첨부 게시글 번호
					img.setImgOrder(i); // 이미지 순서
					
					boardImgList.add(img);
				}
			}
			if(!boardImgList.isEmpty()) { // 업로드 
				int result = dao.insertBoardImageList(boardImgList);
				
				if(result == boardImgList.size()){
					for(int i=0; i < boardImgList.size(); i++) {
						int index = boardImgList.get(i).getImgOrder(); // 순서 얻어옴
						
						fileList.get(index).transferTo(new File(folderPath + imgChangeNameList.get(i)));
					}
				}
				
			}
		}
		return boardNo;
	}

	
	@Override
	public Board selectOneBoard(int boardNo) {
		return dao.selectOneBoard(boardNo);
	}
	
	
	@Override
	public int boardUpdate(Board board) {
		return dao.boardUpdate(board);
	}

}
