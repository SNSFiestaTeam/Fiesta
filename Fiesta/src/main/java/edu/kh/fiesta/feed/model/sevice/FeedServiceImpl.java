package edu.kh.fiesta.feed.model.sevice;

import java.util.ArrayList;
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




}
