package edu.kh.fiesta.follow.model.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.kh.fiesta.follow.model.dao.FollowDAO;
import edu.kh.fiesta.member.model.vo.Member;

@Service
public class FollowServiceImpl implements FollowService{

	@Autowired
	private FollowDAO dao;

	// 해시태그 팔로우 여부 조회
	@Override
	public int followHashtagCheck(Map<String, Object> map) {
		return dao.followHashtagCheck(map);
	}
	
	// 해시태그 팔로우
	@Transactional(rollbackFor = Exception.class)
	public int followHashtag(Map<String, Object> map) {
		return dao.followHashtag(map);
	}

	// 해시태그 언팔로우
	@Override
	public int unfollowHashtag(Map<String, Object> map) {
		return dao.unfollowHashtag(map);
	}

	
	
	// 계정 팔로우 여부 조회
	@Override
	public int followAccountCheck(Map<String, Object> map) {
		return dao.followAccountCheck(map);
	}

	


}
