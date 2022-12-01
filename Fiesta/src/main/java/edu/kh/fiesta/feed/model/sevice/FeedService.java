package edu.kh.fiesta.feed.model.sevice;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
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

	/** 게시글 수 조회
	 * @param memberNickname
	 * @return
	 */
//	Map<String, Object> selectBoardImgList(String memberNickname);

	/** AJAX 게시글 이미지 조회
	 * @param memberNo
	 * @param cp
	 * @return
	 */
//	Map<String, Object> selectBoardImgList(String memberNickname, int cp);

	Map<String, Object> selectFeedAll(int memberNo);

		
}
	
