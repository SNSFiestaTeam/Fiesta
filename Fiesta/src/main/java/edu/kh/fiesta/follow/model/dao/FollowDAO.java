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
		
		// 해시태그 테이블에 존재하는지 확인하기
		int result = sqlSession.selectOne("followMapper.hashtagInsertCheck", map);
		
		if(result > 0) { // 해시태그 테이블에 이미 존재 -> 해시태그 테이블에 삽입x -> 팔로우테이블에 바로 삽입
			
			// 팔로우 테이블에 삽입
			result = sqlSession.insert("followMapper.followHashtag", map);
			
			
		} else { // 해시태그 테이블에 존재하지 않음 -> 해시태그 테이블에 삽입 o -> 팔로우 테이블에 삽입 o
			
			// 해시태그 테이블에 삽입
			result = sqlSession.insert("followMapper.insertHashtag", map);
			
			if(result > 0) { //해시태그 테이블에 삽입 성공 시, 팔로우 테이블에 삽입
				
				// 팔로우 테이블에 삽입
				result = sqlSession.insert("followMapper.followHashtag", map);
			
			} else {  // 삽입 실패 시
				result = -1;
				System.out.println("해시태그 테이블 삽입 실패");
			}
		}
		
		return result;
	}


	
	
	/** 해시태그 언팔로우 DAO
	 * @param map
	 * @return result
	 */
	public int unfollowHashtag(Map<String, Object> map) {
		return sqlSession.delete("followMapper.unfollowHashtag", map);
	}




	



}
