package edu.kh.fiesta.feed.model.vo;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Bookmark {
	
	private int boardNo;
	private int memberNo;
	private String boardCreateDate;
	private int commentCount;
	private int likeCount;
	private String memberNickname;
	private String imgPath;
	
}
