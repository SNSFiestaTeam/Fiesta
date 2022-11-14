package edu.kh.fiesta.main.model.service;

import java.util.List;

import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;

public interface MainService {

	/** 팔로잉 목록 조회 서비스
	 * @param memberNo
	 * @return followingList
	 */
	public List<Follow> selectFollowing(int memberNo);

	/** 팔로잉한 멤버 게시글 조회 서비스
	 * @param selectBoardSql
	 * @return
	 */
	public List<Board> selectBoardList(String selectBoardSql);

}
