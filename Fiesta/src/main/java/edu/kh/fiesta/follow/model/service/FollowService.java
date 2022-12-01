package edu.kh.fiesta.follow.model.service;

import java.util.Map;

import edu.kh.fiesta.member.model.vo.Member;

public interface FollowService {

	
	/** 해시태그 팔로우 여부 조회 
	 * @param map
	 * @return result
	 */
	int followHashtagCheck(Map<String, Object> map); 
	
	
	/** 해시태그 팔로우
	 * @param map
	 * @return result
	 */
	int followHashtag(Map<String, Object> map);


	/** 해시태그 언팔로우
	 * @param map
	 * @return result
	 */
	int unfollowHashtag(Map<String, Object> map);



}
