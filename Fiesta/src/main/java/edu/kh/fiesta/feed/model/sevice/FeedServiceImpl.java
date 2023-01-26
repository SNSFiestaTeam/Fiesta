package edu.kh.fiesta.feed.model.sevice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.feed.model.dao.FeedDAO;
import edu.kh.fiesta.feed.model.vo.Bookmark;
import edu.kh.fiesta.feed.model.vo.Pagination;
import edu.kh.fiesta.feed.model.vo.PopularPagination;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.main.model.vo.Hashtag;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class FeedServiceImpl implements FeedService{
	
	@Autowired
	private FeedDAO dao;

	// 팔로잉 목록 조회
	@Override
	public List<Member> selectFollowingList(int memberNo) {

		return dao.selectFollowingList(memberNo);
	}

	// 팔로우 목록 조회
	@Override
	public List<Member> selectFollowList(int memberNo) {
		
		return dao.selectFollowList(memberNo);
	}
	
	// 해시태그 목록 조회
	@Override
	public List<Hashtag> selectHashtagList(int memberNo) {
		
		return dao.selectHashtagList(memberNo);
	}

	// 회원 정보 조회
	@Override
	public Map<String, Object> selectFeedAll(int memberNo, String memberNickname) {
		
		Member member = new Member();
		member.setMemberNickname(memberNickname);
		member.setMemberNo(memberNo);
		
//		게시글 개수
		int boardCount = dao.selectBoardCount(memberNickname);
		
//		게시글 리스트(게시글 번호, 댓글 수, 좋아요 수, 첫번째 이미지)	
		Pagination pagination = new Pagination(boardCount, 1);
		
		List<Board> boardList = dao.selectBoardList(pagination, memberNickname);
		
//		회원 정보(번호, 닉네임, 이름, 팔로워수, 팔로잉수, 자기소개, 프로필이미지, 로그인 멤버의 팔로우 여부)
		Member feedMember = dao.selectMember(member);
		
		Map<String, Object> feedMap = new HashMap<String, Object>();
		
		feedMap.put("boardCount", boardCount);
		feedMap.put("pagination", pagination);
		feedMap.put("boardList", boardList);
		feedMap.put("feedMember", feedMember);
		
		
		return feedMap;
	}
	
	// 북마크 조회
	@Override
	public Map<String, Object> selectBookmark(int memberNo, String memberNickname) {
		
		Member member = new Member();
		member.setMemberNickname(memberNickname);
		member.setMemberNo(memberNo);
		
//		게시글 개수
		int bookmarkCount = dao.selectBookmarkCount(memberNickname);
		
		int boardCount = dao.selectBoardCount(memberNickname);
		
		Pagination pagination = new Pagination(bookmarkCount, 1);
		
		List<Board> bookmarkList = dao.selectBookmarkList(pagination, memberNickname);
		
//		회원 정보(번호, 닉네임, 이름, 팔로워수, 팔로잉수, 자기소개, 프로필이미지, 로그인 멤버의 팔로우 여부)
		Member feedMember = dao.selectMember(member);
		
		Map<String, Object> feedMap = new HashMap<String, Object>();
		
		feedMap.put("boardCount", boardCount);
		feedMap.put("bookmarkCount", bookmarkCount);
		feedMap.put("pagination", pagination);
		feedMap.put("bookmarkList", bookmarkList);
		feedMap.put("feedMember", feedMember);
		
		return feedMap;
	}


	// 게시글 AJAX 조회
	@Override
	public Map<String, Object> selectBoardList(Map<String, Object> paramMap) {

//		게시글 개수
		int boardCount = dao.selectBoardCount((String)paramMap.get("memberNickname"));
		
//		게시글 리스트(게시글 번호, 댓글 수, 좋아요 수, 첫번째 이미지)	
		Pagination pagination = new Pagination(boardCount, (int)paramMap.get("cp"));
		
		if((int)paramMap.get("cp") <= pagination.getMaxPage()) {
			
		List<Board> boardList = dao.selectBoardList(pagination, (String)paramMap.get("memberNickname"));
		
//		회원 정보(번호, 닉네임, 이름, 팔로워수, 팔로잉수, 자기소개, 프로필이미지, 로그인 멤버의 팔로우 여부)
		Member feedMember = dao.selectMember(paramMap);
		
		Map<String, Object> feedMap = new HashMap<String, Object>();
		
		feedMap.put("boardCount", boardCount);
		feedMap.put("pagination", pagination);
		feedMap.put("boardList", boardList);
		feedMap.put("feedMember", feedMember);
		
		
		return feedMap;
		
		} else {
			return null;
		}
	}

	// 북마크 AJAX 조회
	@Override
	public Map<String, Object> selectBookmarkList(Map<String, Object> paramMap) {
		
		int bookmarkCount = dao.selectBookmarkCount((String)paramMap.get("memberNickname"));
		
		Pagination pagination = new Pagination(bookmarkCount, (int)paramMap.get("cp"));
		
		if((int)paramMap.get("cp") <= pagination.getMaxPage()) {
			
		List<Board> bookmarkList = dao.selectBookmarkList(pagination, (String)paramMap.get("memberNickname"));
		
		Member feedMember = dao.selectMember(paramMap);
		
		Map<String, Object> feedMap = new HashMap<String, Object>();
		
		feedMap.put("bookmarkCount", bookmarkCount);
		feedMap.put("pagination", pagination);
		feedMap.put("bookmarkList", bookmarkList);
		feedMap.put("feedMember", feedMember);
		
		
		return feedMap;
		
		} else {
			return null;
		}
	}

	@Override
	public Board selectFeedDetail(Map<String, Object> map) {
		return dao.selectFeedDetail(map);
	}
	
	/** 인기 피드 목록 조회
	 *
	 */
	@Override
	public Map<String, Object> selectPopularFeedList(int cp) {
		
//		인기 피드 개수
		int boardCount = dao.selectPopularFeedCount();
		
//		인기 피드 리스트(게시글 번호, 댓글 수, 좋아요 수, 첫번째 이미지)	
		PopularPagination pagination = new PopularPagination(boardCount, cp);
		
		if(cp <= pagination.getMaxPage()) {
			
		List<Board> boardList = dao.selectPopularFeedList(pagination);
		

		Map<String, Object> feedMap = new HashMap<String, Object>();
		
		feedMap.put("boardCount", boardCount);
		feedMap.put("pagination", pagination);
		feedMap.put("boardList", boardList);

		
		return feedMap;
		} else {
			return null;
		}
	}


}
