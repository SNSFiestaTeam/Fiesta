package edu.kh.fiesta.main.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Comment {

	private int commentNo;
	private int commentMemberNo;
	private String commentContent;
	private String commentCreateDate;
	private int boardNo;
	private int upperCommentNo;
	
}
