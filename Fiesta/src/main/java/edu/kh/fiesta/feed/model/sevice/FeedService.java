package edu.kh.fiesta.feed.model.sevice;

import java.util.List;
import java.util.Map;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.main.model.vo.Hashtag;
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


	
	/** 회원 정보 조회
	 * @param memberNo
	 * @return
	 */
	Map<String, Object> selectFeedAll(int memberNo, String memberNickname);


	/** 게시글 AJAX 조회
	 * @param paramMap
	 * @return
	 */
	Map<String, Object> selectBoardList(Map<String, Object> paramMap);

 	/** 북마크 조회
	 * @param memberNo
	 * @param memberNickname
	 * @return
	 */
	Map<String, Object> selectBookmark(int memberNo, String memberNickname);

	/** 북마크 AJAX 조회
	 * @param paramMap
	 * @return
	 */
	Map<String, Object> selectBookmarkList(Map<String, Object> paramMap);

	/** 해시태그 목록 조회
	 * @param memberNo
	 * @return
	 */
	List<Hashtag> selectHashtagList(int memberNo);

	Board selectFeedDetail(Map<String, Object> map);

}
	
