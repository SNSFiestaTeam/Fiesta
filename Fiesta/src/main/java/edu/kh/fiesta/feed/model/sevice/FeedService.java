package edu.kh.fiesta.feed.model.sevice;

import java.util.List;

import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

public interface FeedService {

	/** 팔로일 목록 조회
	 * @param memberNo
	 * @return
	 */
	List<Member> selectFollowingList(int memberNo);

	/** 팔로우 목록 조회
	 * @param memberNo
	 * @return
	 */
	List<Member> selectFollowList(int memberNo);

}
