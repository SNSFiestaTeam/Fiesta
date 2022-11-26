package edu.kh.fiesta.feed.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import edu.kh.fiesta.feed.model.sevice.FeedService;
import edu.kh.fiesta.main.model.vo.Follow;
import edu.kh.fiesta.member.model.vo.Member;
import oracle.jdbc.proxy.annotation.Post;

@Controller
public class FeedController {
	
	@GetMapping("/feed/{memberNickname}")
	public String myfeed(){
				
		return "profile/myfeed";
	}
	
	@GetMapping("/feed/popularFeed")
	public String popularFeed() {
		return "feed/popularfeed";
	}
	
	@Autowired
	private FeedService service;
	
	@PostMapping("/feed/{memberNickname}/followingList")
	@ResponseBody
	public String selectFollowingList(int memberNo) {
		
		List<Member> followingList = service.selectFollowingList(memberNo);
		
		return new Gson().toJson(followingList);
		
	}
	
	@PostMapping("/feed/{memberNickname}/followList")
	@ResponseBody
	public String selectFollowList(int memberNo) {
		
		List<Member> followList = service.selectFollowList(memberNo);
		
		return new Gson().toJson(followList);
	}
	
}
