package edu.kh.fiesta.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SearchController {
	
	@Autowired
	private SearchService service;
	
	
	@GetMapping("/main/search")
	public String search(String searchInput) {
		return "search/search";
		
	}
	

}
