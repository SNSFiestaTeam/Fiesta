package edu.kh.fiesta.main.model.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Report {
	
	private int reportNo;
	private int reportTargetNo;
	private String reportType;
	private String reportReason;
	private String reportContent;
	private String reportDate;

}
