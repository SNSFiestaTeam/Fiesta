package edu.kh.fiesta.main.model.vo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Board {
	
	private int boardNo;
	private String boardContent;
	private String boardCreateDate;
	private String boardDeleteFlag;
	private String boardPubPriFlag;
	private String commentBlockFlag;
	private int commentCount;
	private int likeCount;
	private int memberNo;


}
