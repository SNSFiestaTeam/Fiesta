package edu.kh.fiesta.feed.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.support.SessionStatus;

import com.google.gson.Gson;

import edu.kh.fiesta.feed.model.sevice.FeedService;
import edu.kh.fiesta.main.model.vo.Board;
import edu.kh.fiesta.main.model.vo.BoardImg;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;
import oracle.jdbc.proxy.annotation.Post;

@Controller
public class FeedController {

	@Autowired
	private FeedService service;
	
	// 프로필 이동
	@GetMapping("/feed/{memberNickname}")
	public String myfeed(@SessionAttribute("loginMember") Member loginMember, Model model,
						@PathVariable("memberNickname") String memberNickname){
		
		int memberNo = loginMember.getMemberNo();
	
		Map<String, Object> feedMap = service.selectFeedAll(memberNo, memberNickname);
		
		model.addAttribute("feedMap", feedMap);
		
		return "profile/myfeed";
	}

	// 북마크 이동
	@GetMapping("/feed/{memberNickname}/bookmark")
	public String myfeedBookmark(@SessionAttribute("loginMember") Member loginMember, Model model,
			@PathVariable("memberNickname") String memberNickname){

		int memberNo = loginMember.getMemberNo();
		
		Map<String, Object> feedMap = service.selectFeedAll(memberNo, memberNickname);
		
		model.addAttribute("feedMap", feedMap);
		
		return "profile/myfeedBookmark";
	}
	
	// 태그됨 이동
	@GetMapping("/feed/{memberNickname}/taged")
	public String myfeedTaged(@SessionAttribute("loginMember") Member loginMember, Model model,
			@PathVariable("memberNickname") String memberNickname){

		int memberNo = loginMember.getMemberNo();
		
		Map<String, Object> feedMap = service.selectFeedAll(memberNo, memberNickname);
		
		model.addAttribute("feedMap", feedMap);
		
		return "profile/myfeedTaged";
	}
	
	/** 게시글 이미지 조회
	 * @param memberNickname
	 * @param model
	 * @param cp
	 * @return
	 */
//	@GetMapping("/feed/{memberNickname}/selectBoardImgList")
//	@ResponseBody
//	public String selectBoardImgList(@PathVariable("memberNickname") String memberNickname, Model model, int cp) {
//		
//		Map<String, Object> map = service.selectBoardImgList(memberNickname, cp);
//		
//		return new Gson().toJson(map);
//	}
	
	
	/** 인기피드
	 * @return
	 */
	@GetMapping("/feed/popularFeed")
	public String popularFeed() {
		
		return "feed/popularfeed";
	}
	
	
	/** 팔로잉 목록
	 * @param memberNo
	 * @return
	 */
	@PostMapping("/feed/{memberNickname}/followingList")
	@ResponseBody
	public String selectFollowingList(int memberNo) {
		
		List<Member> followingList = service.selectFollowingList(memberNo);
		
		return new Gson().toJson(followingList);
		
	}
	
	/**	팔로우 목록
	 * @param memberNo
	 * @return
	 */
	@PostMapping("/feed/{memberNickname}/followList")
	@ResponseBody
	public String selectFollowList(int memberNo) {
		
		List<Member> followList = service.selectFollowList(memberNo);
		
		return new Gson().toJson(followList);
	}
	
	
	/** 로그아웃
	 * @param status
	 * @return
	 */
	@GetMapping("/logout")

	public String logout(SessionStatus status) {
		
		status.setComplete();
		
		return "redirect:/";
	}
	
	
}
