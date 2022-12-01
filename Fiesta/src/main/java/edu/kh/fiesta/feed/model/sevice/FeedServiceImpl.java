package edu.kh.fiesta.feed.model.sevice;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.feed.model.dao.FeedDAO;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.main.model.vo.Pagination;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class FeedServiceImpl implements FeedService{
	
	@Autowired
	private FeedDAO dao;

	@Override
	public List<Member> selectFollowingList(int memberNo) {

		return dao.selectFollowingList(memberNo);
	}

	@Override
	public List<Member> selectFollowList(int memberNo) {
		
		return dao.selectFollowList(memberNo);
	}

//	// 게시글 수 조회
//	@Override
//	public Map<String, Object> selectBoardImgList(String memberNickname) {
//		
//		int listCount = dao.getListCount(memberNickname);		
//		
//		Pagination pagination = new Pagination(listCount, 1);
//		
//		List<BoardImg> boardImgList = dao.selectBoardImgList(pagination, memberNickname);
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		
//		map.put("pagination", pagination);
//		map.put("boardImgList", boardImgList);
//		
//		return map;
//	}
//
//	// 게시글 이미지 조회
//	@Override
//	public Map<String, Object> selectBoardImgList(String memberNickname, int cp) {
//		
//		int listCount = dao.getListCount(memberNickname);
//		
//		Pagination pagination = new Pagination(listCount, cp);
//		
//		List<BoardImg> boardImgList = dao.selectBoardImgList(pagination, memberNickname);
//		
//		Map<String, Object> map = new HashMap<String, Object>();
//		
//		map.put("pagination", pagination);
//		map.put("boardImgList", boardImgList);
//		
//		return map;
//	}

	@Override
	public Map<String, Object> selectFeedAll(int memberNo) {
		
		Map<String, Object> feedMap = new HashMap<String, Object>();
		
		List<Board> feedAllList = dao.selectFeedAllList(memberNo);
		
		feedMap.put("feedAllList", feedAllList);
		
		return feedMap;
	}

}
