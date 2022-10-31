package edu.kh.fiesta.member.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Member {
	private int memberNo;
	private String memberEmail;
	private String memberPw;
	private String memberNickname;
	private String memberProfileImg;
	private String enrollDate;
	private String memberOpenFl;
	private String secessionFl;
	private int authority;

}
