package edu.kh.fiesta.dm;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("dm/dm")
@Controller
public class DmController {

	@GetMapping()
	public String dm() {
		return "dm/dm";
	}
}
