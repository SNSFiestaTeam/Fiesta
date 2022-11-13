package edu.kh.fiesta.main.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Follow {
	
	private int fromMemberNo;
	private int toTargetNo;
	private String followType;
	private String followAcceptFlag;
	

}
