package edu.kh.fiesta.follow.model.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.kh.fiesta.follow.model.dao.FollowDAO;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class FollowServiceImpl implements FollowService{

	@Autowired
	private FollowDAO dao;

	// 해시태그 팔로우 여부 조회
	@Override
	public int selectFollowHashtag(Map<String, Integer> paramMap) {
		return dao.selectFollowHashtag(paramMap);
	}

	
	// 해시태그 팔로우
	@Override
	public int followHashtag(Map<String, Integer> paramMap) {
		return dao.followHashtag(paramMap);
	}


	// 해시태그 언팔로우
	@Override
	public int unfollowHashtag(Map<String, Integer> paramMap) {
		return dao.unfollowHashtag(paramMap);
	}
	

}
