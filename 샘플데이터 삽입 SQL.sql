-- 시퀀스 생성
CREATE SEQUENCE SEQ_MEMBER_NO NOCACHE; -- 회원 번호
CREATE SEQUENCE SEQ_BOARD_NO NOCACHE; -- 게시글 번호
CREATE SEQUENCE SEQ_COMMENT_NO NOCACHE; -- 댓글 번호
CREATE SEQUENCE SEQ_IMG_NO NOCACHE; -- 게시글 이미지 번호
CREATE SEQUENCE SEQ_HASHTAG_NO NOCACHE; -- 해시태그 번호
CREATE SEQUENCE SEQ_CHAT_NO NOCACHE; -- 채팅 번호
CREATE SEQUENCE SEQ_CHAT_ROOM_NO NOCACHE; -- 채팅방 번호
CREATE SEQUENCE SEQ_NOTICE_NO NOCACHE; -- 알림 번호
CREATE SEQUENCE SEQ_REPORT_NO NOCACHE; --신고 번호
CREATE SEQUENCE SEQ_BOARDLIKE_NO NOCACHE; -- 신고 번호
CREATE SEQUENCE SEQ_COMMENTLIKE_NO NOCACHE; -- 신고 번호


-- 회원 샘플 데이터 생성
INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user01@naver.com', 'pass01!',
'유저일', 'user01', '/resources/images/profile/profile.png', DEFAULT, DEFAULT, DEFAULT, DEFAULT );

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user02@naver.com', 'pass02!',
'유저이', 'user02', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT );

INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'user03@naver.com', 'pass03!','유저삼', 'user03', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'user04@naver.com', 'pass04!','유저사', 'user04', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user05@naver.com', 'pass05!', '유저오', 'llongguser05', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user06@naver.com', 'pass06!', '유저육', 'user06long', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user07@naver.com', 'pass07!', '유저칠', 'user07', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user08@naver.com', 'pass08!', '유저팔', 'user08', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER" 
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user09@naver.com', 'pass09!', '유저구', 'user09', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER" 
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user10@naver.com', 'pass10!', '유저십', 'user10', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);


-- 게시글 샘플 데이터 생성

INSERT INTO BOARD 
VALUES(SEQ_BOARD_NO.NEXTVAL, '게시글 샘플 내용, 안녕하세요 반갑습니다~~~', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 5 );

INSERT INTO BOARD 
VALUES(SEQ_BOARD_NO.NEXTVAL, '유저육의 게시글입니다, 샘플 데이터 내용입니다~~~', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 6 );

INSERT INTO "BOARD"
VALUES(SEQ_BOARD_NO.NEXTVAL, '샘플 이에요, 완벽한 우리팀', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 7);

INSERT INTO "BOARD"
VALUES(SEQ_BOARD_NO.NEXTVAL, '샘플 두번째 입니다, 화이팅입니다. 우리팀', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 8);

INSERT INTO BOARD VALUES(SEQ_BOARD_NO.NEXTVAL, '월요일', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 9);

INSERT INTO BOARD VALUES(SEQ_BOARD_NO.NEXTVAL, '11시 47분', DEFAULT, DEFAULT, DEFAULT, DEFAULT, 10);

INSERT INTO "BOARD"
VALUES (SEQ_BOARD_NO.NEXTVAL, '데이터베이스를 만들고 있다. 오늘 시험도 봤다. 집에 가고 싶다..', DEFAULT, DEFAULT, DEFAULT, DEFAULT, '3');

INSERT INTO "BOARD"
VALUES (SEQ_BOARD_NO.NEXTVAL, '유저사의 게시글입니다. 길게 작성해보겠습니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세. 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.', DEFAULT, DEFAULT, DEFAULT, DEFAULT, '4');

INSERT INTO BOARD
VALUES(SEQ_BOARD_NO.NEXTVAL, '유저일 샘플데이터 내용 작성중입니다.', DEFAULT,
DEFAULT, DEFAULT, DEFAULT,1);

INSERT INTO BOARD
VALUES(SEQ_BOARD_NO.NEXTVAL, '유저이 샘플데이터 내용 작성중입니다.', DEFAULT,
DEFAULT, DEFAULT, DEFAULT,2);

SELECT * FROM "COMMENT" c 

-- 댓글 샘플 데이터 생성
INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 5, '월요일은 월요병', DEFAULT, 2, 192); -- 환재

INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 6, '우리팀 최고! 우리 팀원들도 최고!', DEFAULT, 2, 192); -- 아민

INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 5, '저도 집에 가고싶어요...', DEFAULT, 2, 192); -- 은지언니

INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 6, '주영이 빠따 한 대 추가', DEFAULT, 2, 192); -- 주영이

INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 6, '나도 짜증나', DEFAULT, 2, 893); -- 너무 짜증나

INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 6, '미쳤나?', DEFAULT, 2, 893); -- 너무 짜증나

COMMIT;

-- 게시글 SELECT문 작성

-- 전체 게시글 조회
SELECT MEMBER_NO, MEMBER_NICKNAME, BOARD_NO, BOARD_CONTENT, BOARD_CREATE_DATE,
BOARD_PUB_PRI_FL, COMMENT_BLOCK_FL
FROM "MEMBER"
JOIN "BOARD" USING(MEMBER_NO)
WHERE SECESSION_FL = 'N'
AND BOARD_DEL_FL = 'N'
ORDER BY BOARD_CREATE_DATE DESC;

SELECT BOARD_NO, COUNT(COMMENT_NO)
FROM "MEMBER"
JOIN "BOARD" USING(MEMBER_NO)
JOIN "COMMENT" USING(BOARD_NO)
WHERE BOARD_DEL_FL = 'N'
GROUP BY BOARD_NO;

SELECT COMMENT_NO, COMMENT_MEMBER_NO, COMMENT_CONTENT , COMMENT_CREATE_DATE, UPPER_COMMENT_NO, BOARD_NO
FROM "COMMENT"
ORDER BY BOARD_NO DESC;


-- 내 게시글 조회
SELECT MEMBER_NO, MEMBER_NICKNAME, BOARD_NO, BOARD_CONTENT, BOARD_CREATE_DATE,
BOARD_PUB_PRI_FL, COMMENT_BLOCK_FL
FROM "MEMBER"
JOIN "BOARD" USING(MEMBER_NO)
WHERE SECESSION_FL = 'N'
AND BOARD_DEL_FL = 'N'
AND MEMBER_NO = 5
ORDER BY BOARD_CREATE_DATE DESC;
--에서 보드 넘버 얻어 와서

SELECT BOARD_NO, COUNT(COMMENT_NO)
FROM "MEMBER"
JOIN "BOARD" USING(MEMBER_NO)
JOIN "COMMENT" USING(BOARD_NO)
WHERE BOARD_DEL_FL = 'N'
AND MEMBER_NO = 5
GROUP BY BOARD_NO;
-- 댓글 몇개인지 표시하고

SELECT COMMENT_NO, COMMENT_MEMBER_NO, COMMENT_CONTENT , COMMENT_CREATE_DATE, UPPER_COMMENT_NO, BOARD_NO
FROM "COMMENT"
WHERE BOARD_NO = 1
ORDER BY COMMENT_CREATE_DATE;
-- 보드 넘버로 댓글 전체 조회


-- ~~을 포함한 게시글 조회

SELECT MEMBER_NO, MEMBER_NICKNAME, BOARD_NO, BOARD_CONTENT, BOARD_CREATE_DATE,
BOARD_PUB_PRI_FL, COMMENT_BLOCK_FL
FROM "MEMBER"
JOIN "BOARD" USING(MEMBER_NO)
WHERE SECESSION_FL = 'N'
AND BOARD_DEL_FL = 'N'
AND BOARD_CONTENT LIKE '%샘플%'
ORDER BY BOARD_CREATE_DATE DESC;
-- 본문에 샘플이라는 단어를 포함하고 있는 게시글 조회




-- 로그인 비밀번호 암호화 bcyrpt
-- user03, user04
UPDATE "MEMBER" SET
MEMBER_PW = '$2a$10$32o6kC9ooqzyOfPX.vIlQebZOOVxkHrY8rG8LStMtdqDmbppfNr.e'
WHERE MEMBER_EMAIL='user03@naver.com';

COMMIT;

-- 로그인 비밀번호 암호화 bcyrpt
-- user04, user01
UPDATE "MEMBER" SET
MEMBER_PW = '$2a$10$XIL0ILVBvzqlaMT1Kn839u7uPFXM2iepjHsUqgYVQO9CnlQ0FxWLm'
WHERE MEMBER_EMAIL='user08@naver.com';

COMMIT;




SELECT *
FROM BOARD_IMG
WHERE BOARD_NO = 1
ORDER BY IMG_ORDER;

SELECT *
FROM MEMBER
WHERE MEMBER_NO = 2
AND SECESSION_FL = 'N'
AND MEMBER_HIDE_FL = 'Y'



SELECT * FROM "MEMBER";
COMMIT;


-- 게시글 댓글 리스트 조회 
	SELECT LEVEL, C.* FROM
	(SELECT COMMENT_NO , COMMENT_MEMBER_NO , COMMENT_CONTENT, 
	CASE 
		WHEN SYSDATE - COMMENT_CREATE_DATE   < 1/24/60
		THEN FLOOR( (SYSDATE - COMMENT_CREATE_DATE  ) * 24 * 60 * 60 ) || '초 전'
		WHEN SYSDATE - COMMENT_CREATE_DATE   < 1/24
		THEN FLOOR( (SYSDATE - COMMENT_CREATE_DATE  ) * 24 * 60) || '분 전'
		WHEN SYSDATE - COMMENT_CREATE_DATE   < 1
		THEN FLOOR( (SYSDATE - COMMENT_CREATE_DATE  ) * 24) || '시간 전'
		ELSE TO_CHAR(COMMENT_CREATE_DATE  , 'MM"월" DD"일", YYYY') 
	END COMMENT_CREATE_DATE ,
	 UPPER_COMMENT_NO , BOARD_NO, MEMBER_NICKNAME, MEMBER_PROFILE_IMG,
	 	(SELECT COUNT(*) 
		FROM "COMMENT" c2 
		WHERE c2.UPPER_COMMENT_NO = c.COMMENT_NO  
		AND c.BOARD_NO = c2.BOARD_NO) REPLY_COUNT,
	 	(SELECT MEMBER_NICKNAME
		FROM "COMMENT" c2 
		JOIN "MEMBER" m2 ON (COMMENT_MEMBER_NO = MEMBER_NO)
		WHERE c.UPPER_COMMENT_NO = c2.COMMENT_NO  
		AND c.BOARD_NO = c2.BOARD_NO) MENTION_NICKNAME
	FROM "COMMENT" c
	JOIN "MEMBER" m ON (COMMENT_MEMBER_NO = MEMBER_NO)
	WHERE BOARD_NO = 2) C
	START WITH UPPER_COMMENT_NO IS NULL
	CONNECT BY PRIOR COMMENT_NO = UPPER_COMMENT_NO
	ORDER SIBLINGS BY COMMENT_NO;

	SELECT *
	FROM "COMMENT" c
	JOIN "MEMBER" m ON (COMMENT_MEMBER_NO = MEMBER_NO)
	WHERE BOARD_NO = 12
	

-- 게시글 수 조회
SELECT COUNT(*)
FROM BOARD b
WHERE BOARD_DEL_FL = 'N'
AND b.MEMBER_NO IN (SELECT F_T0_TARGET_NO FROM FOLLOW WHERE F_FROM_MEMBER_NO = 1)
ORDER BY b.BOARD_NO DESC;


SELECT * FROM BOARD_IMG; 

-- 이미지 샘플 데이터 삽입
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '1.jgp', '202211190001.jpg', 20);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '1.jgp', '202211190002.jpg', 19);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '2.jgp', '202211190003.jpg', 18);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '3.jgp', '202211190004.jpg', 17);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '4.jgp', '202211190005.jpg', 16);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '1.jgp', '202211190006.jpg', 15);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '1.jgp', '202211190007.jpg', 14);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '2.jgp', '202211190008.jpg', 13);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '3.jgp', '202211190009.jpg', 12);
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/board/', '샘플 이미지', '4.jgp', '202211190010.jpg', 11);





-- BOARD 테이블 샘플데이터 삽입(PL/SQL)
BEGIN 
	FOR I IN 1..2000 LOOP
		INSERT INTO BOARD 
		VALUES(SEQ_BOARD_NO.NEXTVAL, 
			   SEQ_BOARD_NO.CURRVAL || '번째 게시글입니다.<br>안녕하세요 <br> #피에스타 #fiesta 만드는 중인데 집에 너무 가고 싶다. <br> 언제 다해... <br>
				하지만 오늘은 금요일이니까 긍정왕이 되어 볼게. 얼음생맥주 george러 간다. 오늘 그리고 뻗는다.. 이렇게 2000개.. 코딩은 내일부터. 다이어트도 내일부터. 공부도 내일부터.BLOCK
				<br> 되게 창피하다.. 내 일기장.. ㅎㅎ 그래 나야. 죽기전에 지워줘',
			   DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1);
	END LOOP;
END;
/

SELECT * FROM BOARD;

INSERT INTO BOARD VALUES(11, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(12, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(13, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(14, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(15, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(16, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(17, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(18, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(19, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);
INSERT INTO BOARD VALUES(20, '피에스타 샘플데이터 내용 작성중입니다.', DEFAULT, DEFAULT, DEFAULT, DEFAULT,2);



-- 댓글 랜덤 삽입
BEGIN
   FOR I IN 1..2000 LOOP
      INSERT INTO "COMMENT" 
      VALUES(SEQ_COMMENT_NO.NEXTVAL, CEIL(DBMS_RANDOM.VALUE(0,11)),  
            SEQ_COMMENT_NO.CURRVAL || '번째 댓글 #FIESTA #피에스타 너무 좋아요:)',
            DEFAULT, CEIL(DBMS_RANDOM.VALUE(0,2000)), NULL);
   END LOOP;
END;
/

-- 답글 랜덤 삽입
BEGIN
   FOR I IN 1..2000 LOOP
      INSERT INTO "COMMENT" 
      VALUES(SEQ_COMMENT_NO.NEXTVAL, CEIL(DBMS_RANDOM.VALUE(0,11)),  
            SEQ_COMMENT_NO.CURRVAL || '번째 댓글 #FIESTA #피에스타 너무 좋아요:)',
            DEFAULT, CEIL(DBMS_RANDOM.VALUE(0,2000)), CEIL(DBMS_RANDOM.VALUE(0,2000)));
   END LOOP;
END;
/

SELECT * FROM "COMMENT"; 


INSERT INTO "COMMENT" 
VALUES(SEQ_COMMENT_NO.NEXTVAL, 5, '월요일은 월요병', DEFAULT, 5, NULL); -- 환재



SELECT * FROM "BOARD_LIKE";


-- 좋아요
BEGIN
   FOR I IN 1..2000 LOOP
      INSERT INTO "BOARD_LIKE" 
      VALUES(SEQ_BOARDLIKE_NO.NEXTVAL, CEIL(DBMS_RANDOM.VALUE(0,11))); 
   END LOOP;
END;
/


-- 댓글 좋아요
BEGIN
   FOR I IN 1..4000 LOOP
      INSERT INTO "COMMENT_LIKE" 
      VALUES(SEQ_COMMENTLIKE_NO.NEXTVAL, CEIL(DBMS_RANDOM.VALUE(0,11))); 
   END LOOP;
END;
/


SELECT * FROM "COMMENT_LIKE";


SELECT * FROM MEMBER;


-- 샘플데이터 삭제
DELETE FROM "COMMENT_LIKE";

DELETE FROM "COMMENT"
WHERE UPPER_COMMENT_NO IS NOT NULL;

SELECT * FROM "COMMENT" WHERE UPPER_COMMENT_NO IS NOT NULL;

DELETE FROM "BOARD_LIKE";

DELETE FROM "BOARD" WHERE BOARD_NO BETWEEN 1000 AND 2000;

SELECT * FROM "MEMBER";


DELETE FROM "FOLLOW" WHERE F_FROM_MEMBER_NO = 37;
DELETE FROM "MEMBER" WHERE MEMBER_EMAIL = 'luejenie@gmail.com';

COMMIT;




	SELECT b.BOARD_NO , BOARD_CONTENT , BOARD_PUB_PRI_FL , COMMENT_BLOCK_FL , 
	b.MEMBER_NO, M.MEMBER_NICKNAME, MEMBER_PROFILE_IMG,
	CASE 
		WHEN SYSDATE - BOARD_CREATE_DATE  < 1/24/60
		THEN FLOOR( (SYSDATE - BOARD_CREATE_DATE ) * 24 * 60 * 60 ) || '초 전'
		WHEN SYSDATE - BOARD_CREATE_DATE  < 1/24
		THEN FLOOR( (SYSDATE - BOARD_CREATE_DATE ) * 24 * 60) || '분 전'
		WHEN SYSDATE - BOARD_CREATE_DATE  < 1
		THEN FLOOR( (SYSDATE - BOARD_CREATE_DATE ) * 24) || '시간 전'
		ELSE TO_CHAR(BOARD_CREATE_DATE , 'MM"월" DD"일", YYYY')
	END BOARD_CREATE_DATE,
	(SELECT COUNT(BOARD_NO)
	FROM BOARD_LIKE L
	WHERE L.BOARD_NO = b.BOARD_NO) LIKE_COUNT,
	(SELECT COUNT(*) 
	FROM "COMMENT" C
	WHERE C.BOARD_NO = b.BOARD_NO) COMMENT_COUNT,
	(SELECT COUNT(*) FROM "COMMENT" C WHERE C.BOARD_NO = b.BOARD_NO
	AND UPPER_COMMENT_NO IS NOT NULL) AS REPLY_COUNT
	FROM BOARD b
	JOIN "MEMBER" M ON(b.MEMBER_NO = M.MEMBER_NO)
	WHERE BOARD_NO = 1
	
	
	
	SELECT COUNT(*)
		FROM BOARD_LIKE
		WHERE BOARD_NO =1
		
		
		
-- 언급 자동완성 조회
SELECT MEMBER_NICKNAME, MEMBER_NAME, MEMBER_PROFILE_IMG
FROM "MEMBER"
WHERE (MEMBER_NICKNAME LIKE '%u%' 
	OR MEMBER_NICKNAME LIKE '%UPPER(u)%'  
	OR MEMBER_NICKNAME LIKE '%LOWER(언급)%')
OR (MEMBER_NAME LIKE '%언급%' 
	OR MEMBER_NAME LIKE '%UPPER(u)%' 
	OR MEMBER_NAME LIKE '%LOWER(언급)%');



-- 해시태그 자동 완성용
SELECT HASHTAG_CONTENT, 
	(SELECT COUNT(*) FROM BOARD WHERE BOARD_CONTENT LIKE '%#안%') BOARD_COUNT
FROM HASHTAG
WHERE HASHTAG_CONTENT LIKE '%안%'


-- 팔로잉 멤버 + 팔로잉 해시태그 게시물 조회

	SELECT b.BOARD_NO , BOARD_CONTENT , BOARD_PUB_PRI_FL , COMMENT_BLOCK_FL , 
	b.MEMBER_NO, M.MEMBER_NICKNAME, MEMBER_PROFILE_IMG, 2 MY_NO,
	CASE 
		WHEN SYSDATE - BOARD_CREATE_DATE  < 1/24/60
		THEN FLOOR( (SYSDATE - BOARD_CREATE_DATE ) * 24 * 60 * 60 ) || '초 전'
		WHEN SYSDATE - BOARD_CREATE_DATE  < 1/24
		THEN FLOOR( (SYSDATE - BOARD_CREATE_DATE ) * 24 * 60) || '분 전'
		WHEN SYSDATE - BOARD_CREATE_DATE  < 1
		THEN FLOOR( (SYSDATE - BOARD_CREATE_DATE ) * 24) || '시간 전'
		ELSE TO_CHAR(BOARD_CREATE_DATE , 'MM"월" DD"일", YYYY')
	END BOARD_CREATE_DATE, 
	(SELECT COUNT(BOARD_NO)
	FROM BOARD_LIKE L
	WHERE L.BOARD_NO = b.BOARD_NO) LIKE_COUNT,
	(SELECT COUNT(*) 
	FROM "COMMENT" C
	WHERE C.BOARD_NO = b.BOARD_NO) COMMENT_COUNT,
	(SELECT COUNT(*) FROM "COMMENT" C WHERE C.BOARD_NO = b.BOARD_NO
	AND UPPER_COMMENT_NO IS NOT NULL) AS REPLY_COUNT,
	(SELECT COUNT(*) FROM BOARD_LIKE bl
	WHERE MEMBER_NO = 2 AND bl.BOARD_NO = b.BOARD_NO) LIKE_CHECK,
	(SELECT COUNT(*) FROM BOOKMARK bm
	WHERE MEMBER_NO = 2 AND bm.BOARD_NO = b.BOARD_NO) BOOKMARK_CHECK
	FROM BOARD b
	JOIN "MEMBER" M ON(b.MEMBER_NO = M.MEMBER_NO)
	WHERE BOARD_DEL_FL = 'N'
	AND b.MEMBER_NO IN (SELECT F_TO_TARGET_NO FROM FOLLOW WHERE F_FROM_MEMBER_NO = 2 AND FOLLOW_TYPE = 'M')
	ORDER BY b.BOARD_NO DESC


SELECT * FROM BOARD b 
WHERE BOARD_CONTENT LIKE '%#해시태그%';

(SELECT HASHTAG_CONTENT 
FROM (SELECT * 
	FROM HASHTAG h
	JOIN "FOLLOW" f ON(h.HASHTAG_NO = f.F_TO_TARGET_NO)
	WHERE f.F_FROM_MEMBER_NO = 2))