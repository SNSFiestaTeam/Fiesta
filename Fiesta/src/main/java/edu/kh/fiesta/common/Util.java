package edu.kh.fiesta.common;

import java.text.SimpleDateFormat;

//유요한 기능을 모아둔 클래스
public class Util {
	// 파일명 변경 메소드
	public static String fileRename(String originFileName) {
		SimpleDateFormat sdf = new SimpleDateFormat("Fiesta_yyyyMMdd_HHmmss");
		String date = sdf.format(new java.util.Date(System.currentTimeMillis()));

		int ranNum = (int) (Math.random() * 100000); // 5자리 랜덤 숫자 생성

		String str = "_" + String.format("%05d", ranNum);

		String ext = originFileName.substring(originFileName.lastIndexOf("."));

		return date + str + ext;
	}
//	Util.fileRename()으로 사용

	// XSS 방지 처리 : HTML에서 해석되는 문자를 단순 글자로 변경
	public static String XSSHandling(String content) {

		if (content != null) {
			content = content.replaceAll("&", "&amp;");
			content = content.replaceAll("<", "&lt;");
			content = content.replaceAll(">", "&gt;");
			content = content.replaceAll("\"", "&quot;");
		}
		return content;
	}

	// 개행문자 처리 : \r\n, \n, \r, \n\r -> <br>로 변경
	public static String newLineHandling(String content) {

		return content.replaceAll("(\r\n|\n|\r|\n\r)", "<br>");
	}

	// 개행문자 처리 해제
	public static String newLineClear(String content) {
		return content.replaceAll("<br>", "\n");
	}
}