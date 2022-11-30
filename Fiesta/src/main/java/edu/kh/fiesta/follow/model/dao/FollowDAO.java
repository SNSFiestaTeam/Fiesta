package edu.kh.fiesta.follow.model.dao;

import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class FollowDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 해시태그 팔로우 여부 조회 DAO
	 * @param memberNo
	 * @param searchInput
	 * @return followResult
	 */
	public int selectFollowHashtag(Map<String, Integer> paramMap) {
		return sqlSession.selectOne("followMapper.selectFollowHashtag", paramMap);
	}
	
	
	/** 해시태그 팔로우 DAO
	 * @param loginMember
	 * @param searchInput
	 * @return result
	 */
	public int followHashtag(Map<String, Integer> paramMap) {
		return sqlSession.insert("followMapper.followHashtag", paramMap);
	}


 	/** 해시태그 언팔로우 DAO
	 * @param paramMap
	 * @return result
	 */
	public int unfollowHashtag(Map<String, Integer> paramMap) {
		return sqlSession.delete("followMapper.unfollowHashtag", paramMap);
	}


	



}
