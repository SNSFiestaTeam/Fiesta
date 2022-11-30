package edu.kh.fiesta.main.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.fiesta.main.model.vo.Comment;

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
	public int commentInsert(Map<String, Object> map) {
		
		
		int result =  sqlSession.insert("commentMapper.commentInsert", map);
		

		if(result > 0) {
			result = (int)map.get("commentNo");
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

}
