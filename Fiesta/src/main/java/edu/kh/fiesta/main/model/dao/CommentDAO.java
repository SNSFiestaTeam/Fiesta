package edu.kh.fiesta.main.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Comment;
import edu.kh.fiesta.main.model.vo.Hashtag;
import edu.kh.fiesta.member.model.vo.Member;

@Repository
public class CommentDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	

	/** 댓글 좋아요 증가
	 * @param commentNo
	 * @param memberNo
	 * @return result
	 */
	public int commentLikeUp(int commentNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("commentNo", commentNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.insert("commentMapper.commentLikeUp", map);
	}


	/** 댓글 좋아요 취소
	 * @param commentNo
	 * @param memberNo
	 * @return result
	 */
	public int commentLikeDown(int commentNo, int memberNo) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("commentNo", commentNo);
		map.put("memberNo", memberNo);
		
		return sqlSession.delete("commentMapper.commentLikeDown", map);
	}


	/** 댓글 등록
	 * @param boardNo
	 * @param memberNo
	 * @return commentNo
	 */
	public int commentInsert(Comment comment) {
		
		
		int result =  sqlSession.insert("commentMapper.commentInsert", comment);
		

		if(result > 0) {
			result = (int)comment.getCommentNo();
		}
		
		return result;
	}


	/** 댓글 목록 조회
	 * @param comment
	 * @return
	 */
	public List<Comment> selectCommentList(Map<String , Object> comment) {
		return sqlSession.selectList("mainMapper.selectCommentList", comment);
	}


	/** 답글 목록 조회
	 * @param commentNo
	 * @return replyList
	 */
	public List<Comment> selectReplyList(Map<String, Integer> map) {
		return sqlSession.selectList("mainMapper.selectReplyList", map);
	}


	/** 댓글 내용 삭제
	 * @param commentNo
	 * @return result
	 */
	public int deleteCommentContent(int commentNo) {
		return sqlSession.update("commentMapper.deleteCommentContent", commentNo);
	}


	/** 댓글 삭제
	 * @param commentNo
	 * @return
	 */
	public int deleteComment(int commentNo) {
		return sqlSession.delete("commentMapper.deleteComment", commentNo);
	}

	/**
	 * 답글 수 조회
	 * @param commentNo
	 * @return result
	 */
	public int selectReplyCount(int commentNo) {
		return sqlSession.selectOne("commentMapper.selectReplyCount", commentNo);
	}


	/**
	 * 언급 자동완성
	 * @param searchName
	 * @return
	 */
	public List<Member> mentionAutoComplete(String searchName) {
		return sqlSession.selectList("commentMapper.selectMemberList", searchName);
	}


	/**
	 * 해시태그 자동완성
	 * @param searchName
	 * @return
	 */
	public List<Hashtag> hashtagAutoComplete(String searchName) {
		return sqlSession.selectList("commentMapper.selectHashtagList", searchName);
	}


	/** 해시태그 존재 유무 확인
	 * @param pathName
	 * @return
	 */
	public int hashtagCheck(String keyword) {
		return sqlSession.selectOne("followMapper.hashtagInsertCheck", keyword);
	}


	/** 해시태그 등록
	 * @param pathName
	 * @return 
	 */
	public int insertHashtag(String keyword) {
		
		return sqlSession.insert("followMapper.insertHashtag2", keyword);
	}
	
	

}
