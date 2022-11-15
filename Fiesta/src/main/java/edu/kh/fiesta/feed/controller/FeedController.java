package edu.kh.fiesta.feed.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FeedController {
	
	@GetMapping("/feed/myFeed")
	public String myfeed(){
		return "profile/myfeed";
	}
	
	@GetMapping("/feed/popularFeed")
	public String popularFeed() {
		return "feed/popularfeed";
	}
}
