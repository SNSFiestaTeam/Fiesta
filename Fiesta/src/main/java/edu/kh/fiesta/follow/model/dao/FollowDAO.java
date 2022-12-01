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
	 * @param map
	 * @return result
	 */
	public int followHashtagCheck(Map<String, Object> map) {
		return sqlSession.selectOne("followMapper.followHashtagCheck", map);
	}
	

	/** 해시태그 팔로우 DAO
	 * @param map
	 * @return result
	 */
	public int followHashtag(Map<String, Object> map) {
		
		// 해시태그 테이블에 삽입
		int result = sqlSession.insert("followMapper.insertHashtag", map);
		
		// 삽입 성공 시 팔로우 테이블에 삽입 (이미 등록되어 있는 경우에도 해시태그번호가 다르게 들어감)
		if(result > 0) {
			result = sqlSession.insert("followMapper.followHashtag", map);
		}
		return result;
	}


	/** 해시태그 언팔로우 DAO
	 * @param map
	 * @return result
	 */
	public int unfollowHashtag(Map<String, Object> map) {
		return 0;
	}




	



}
