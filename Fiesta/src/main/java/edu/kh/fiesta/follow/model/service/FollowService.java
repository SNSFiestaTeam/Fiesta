package edu.kh.fiesta.follow.model.service;

import java.util.Map;

import edu.kh.fiesta.member.model.vo.Member;

public interface FollowService {


	
	/** 해시태그 팔로우 여부 조회
	 * @param memberNo
	 * @return followResult
	 */
	int selectFollowHashtag(Map<String, Integer> paramMap);
	
	
	/** 해시태그 팔로우
	 * @param loginMember
	 * @param searchInput
	 * @return result
	 */
	int followHashtag(Map<String, Integer> paramMap);


	/** 해시태그 언팔로우
	 * @param paramMap
	 * @return
	 */
	int unfollowHashtag(Map<String, Integer> paramMap);


}
