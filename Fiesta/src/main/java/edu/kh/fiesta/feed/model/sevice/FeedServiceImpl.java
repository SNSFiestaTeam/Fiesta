package edu.kh.fiesta.feed.model.sevice;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.feed.model.dao.FeedDAO;
import edu.kh.fiesta.main.model.vo.Follow;
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

}
