-- 시퀀스 생성
CREATE SEQUENCE SEQ_MEMBER_NO NOCACHE START WITH 16; -- 회원 번호

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
'유저일', '유저일', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT );

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user02@naver.com', 'pass02!',
'유저이', '유저이', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT );

INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'user03@naver.com', 'pass03!','유저삼', '유저삼', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'user04@naver.com', 'pass04!','유저사', '유저사', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user05@naver.com', 'pass05!', '유저오', '유저오', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user06@naver.com', 'pass06!', '유저육', '유저육', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user07@naver.com', 'pass07!', '유저칠', '유저칠', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER"
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user08@naver.com', 'pass08!', '유저팔', '유저팔', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER" 
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user09@naver.com', 'pass09!', '유저구', '유저구', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);

INSERT INTO "MEMBER" 
VALUES(SEQ_MEMBER_NO.NEXTVAL, 'user10@naver.com', 'pass10!', '유저십', '유저십', NULL, DEFAULT, DEFAULT, DEFAULT, DEFAULT);


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
VALUES(SEQ_COMMENT_NO.NEXTVAL, 3, '댓글 테스트입니다', DEFAULT, 13, 0); -- 은지언니

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


SELECT * FROM BOARD_IMG;



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

SELECT * FROM "MEMBER" 


-- 댓글 랜덤 삽입
BEGIN
   FOR I IN 1..1000 LOOP
      INSERT INTO "COMMENT" 
      VALUES(SEQ_COMMENT_NO.NEXTVAL, CEIL(DBMS_RANDOM.VALUE(0,26)),  
            SEQ_COMMENT_NO.CURRVAL || '번째 댓글 #FIESTA #피에스타 너무 좋아요:)',
            DEFAULT, CEIL(DBMS_RANDOM.VALUE(20,2000)), DEFAULT);
   END LOOP;
END;
/


BEGIN
   FOR I IN 1..1000 LOOP
      INSERT INTO "COMMENT" 
      VALUES(SEQ_COMMENT_NO.NEXTVAL, CEIL(DBMS_RANDOM.VALUE(0,26)),  
            SEQ_COMMENT_NO.CURRVAL || '번째 댓글 #FIESTA #피에스타 너무 좋아요:) 1. 동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전하세

2. 남산 위에 저 소나무 철갑을 두른 듯
바람 서리 불변함은 우리 기상일세
무궁화 삼천리 화려 강산
대한 사람 대한으로 길이 보전하세
',
            DEFAULT, CEIL(DBMS_RANDOM.VALUE(0,2000)), DEFAULT);
   END LOOP;
END;
/


INSERT INTO "COMMENT" VALUES()



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





SELECT COUNT(*)
FROM "MEMBER" 
WHERE MEMBER_EMAIL = #{loginMember.getMemberEmail}
AND BOARD_PUB_PRI_FL = 'Y';

SELECT BOARD_PUB_PRI_FL
FROM BOARD 
WHERE MEMBER_EMAIL = #{loginMember.getMemberNo}


-- 은지) 검색창

-- 사진 조회(인기게시글 첫 번째)
SELECT * FROM "MEMBER"; 

-- 관련 계정 수
SELECT COUNT(*)
FROM "MEMBER" 
WHERE (MEMBER_NICKNAME LIKE '%피에스타%'
OR MEMBER_NAME LIKE '%피에스타%')
AND SECESSION_FL = 'N';


-- 해시태그 포함한 게시글 수
SELECT COUNT(*)
FROM "BOARD" 
JOIN "MEMBER" USING(MEMBER_NO)
WHERE BOARD_CONTENT LIKE '%#샘플%'
AND BOARD_DEL_FL = 'N'
AND SECESSION_FL = 'N';



-- 관련 있는 계정 조회(정확도 순)
SELECT MEMBER_PROFILE_IMG, SUBSTR(MEMBER_NICKNAME, 1, 6) MEMBER_NICKNAME 
FROM "MEMBER" 
WHERE SECESSION_FL = 'N'
AND (MEMBER_NICKNAME LIKE '%닉네임%'
OR MEMBER_NAME LIKE '%닉네임%')
AND ROWNUM <= 6;

SELECT*FROM MEMBER;


SELECT* FROM FOLLOW;  -- F_FROM_MEMBER_NO, F_TO_TARGET_NO, FOLLOW_TYPE, FOLLOW_ACCEPT_FL
SELECT* FROM HASHTAG; --HASHTAG_NO, HASHTAG_CONTENT


-- 관련 해시태그 팔로우 _ 해시태그에 넣고, 해시태그 번호를 팔로우 목록에 넣어야 함.
-- 1) 해시태그에 넣고
INSERT INTO HASHTAG VALUES(SEQ_HASHTAG_NO, #{searchInput})

INSERT INTO FOLLOW VALUES
(로그인한회원번호, 관련 해시태그, H, DEFAULT);


-- 관련 있는 계정 팔로우
INSERT INTO FOLLOW VALUES
(로그인한 회원번호, 관련계정 회원번호, M, DEFAULT);

-- 팔로우 되어 있는지 확인(계정 팔로우) -> 0,1 (버튼색 변경)
SELECT COUNT(*)
FROM FOLLOW
WHERE F_FROM_MEMBER_NO = '${loginMember.memberNo}'
AND FOLLOW_TYPE = 'M'
AND F_TO_TARGET_NO = '계정의 memberNo';

-- *** 팔로우되어 있는지 확인(계정 팔로우) -> 결과값을 팔로우당한 닉네임으로.
SELECT MEMBER_NICKNAME
FROM FOLLOW
JOIN "MEMBER" M ON(M.MEMBER_NO = FOLLOW.F_TO_TARGET_NO)
WHERE F_FROM_MEMBER_NO = 3
AND FOLLOW_TYPE = 'M'
AND F_TO_TARGET_NO = (SELECT MEMBER_NO 
						FROM "MEMBER" 
						WHERE MEMBER_NICKNAME = 'user001');


ROLLBACK;

					
;
					
					
SELECT * FROM FOLLOW; 

SELECT * FROM MEMBER;

-- 상대방 계정이 모두공개/비공개/팔로워공개인지 확인(MEMBER_OPEN_FL = Y, F, N)
SELECT MEMBER_OPEN_FL
FROM "MEMBER"


-- 계정 팔로우
INSERT INTO FOLLOW VALUES('로그인한 회원 번호', '상대계정의 회원번호', 'M', '팔로우승인여부')


INSERT INTO FOLLOW VALUES
('로그인한 회원번호', (SELECT MEMBER_NO FROM "MEMBER" WHERE MEMBER_NICKNAME='상대계정닉네임'), 'M', 
(SELECT 
	CASE
		WHEN MEMBER_OPEN_FL = 'Y' THEN 'Y'
		ELSE 'N'
	END "FOLLOW_ACCEPT_FL"
FROM "MEMBER"
WHERE MEMBER_NICKNAME='상대계정닉네임'));
		
ROLLBACK;

DELETE FROM FOLLOW 
WHERE F_FROM_MEMBER_NO = 2
AND F_TO_TARGET_NO = (SELECT MEMBER_NO FROM "MEMBER" WHERE MEMBER_NICKNAME='닉네임');


SELECT * FROM FOLLOW;
SELECT * FROM MEMBER;

-- 팔로우 승인 여부
-- 회원설정에서 공개여부(Y,N,F)가 Y면 모두 공개 / F/N 비공개
SELECT 
	CASE
		WHEN MEMBER_OPEN_FL = 'Y' THEN 'Y'
		ELSE 'N'
	END "FOLLOW_ACCEPT_FL"
FROM "MEMBER"
WHERE MEMBER_NICKNAME = 'user02';


---------------
SELECT MEMBER_NO, MEMBER_OPEN_FL
FROM MEMBER;

UPDATE MEMBER SET
MEMBER_OPEN_FL = 'F'
WHERE MEMBER_NO = 11;

SELECT*FROM MEMBER;
---------------------------






ROLLBACK;
SELECT MEMBER_NO FROM "MEMBER" WHERE MEMBER_NICKNAME='user02';
SELECT * FROM FOLLOW; 
SELECT * FROM MEMBER;

-- 닉네임 가진 회원번호 조회
SELECT MEMBER_NO FROM MEMBER WHERE MEMBER_NICKNAME ='' 

-- 계정 언팔로우
DELETE FROM FOLLOW 
WHERE F_FROM_MEMBER_NO = '로그인한 회원 번호'
AND F_TO_TARGET_NO = '상대계정의 회원 번호'







-- 팔로우 되어 있는지 확인(해시태그 팔로우) -> 0,1
SELECT COUNT(*)
FROM FOLLOW
WHERE F_FROM_MEMBER_NO = 57 --'${loginMember.memberNo}'
AND FOLLOW_TYPE = 'H'
AND F_TO_TARGET_NO = (SELECT HASHTAG_NO
						FROM HASHTAG 
						WHERE HASHTAG_CONTENT LIKE '%유저%');

'searchInput의 해시태그번호'

					
SELECT * FROM FOLLOW;			
					
-- 해시태그 팔로우
INSERT INTO HASHTAG 
VALUES()



-- 해시태그 언팔로우
DELETE FROM FOLLOW 
WHERE F_FROM_MEMBER_NO = 57
AND F_TO_TARGET_NO = (SELECT HASHTAG_NO
						FROM HASHTAG 
						WHERE HASHTAG_CONTENT = '피에스타');

DELETE FROM HASHTAG 
WHERE HASHTAG_NO = 

SELECT HASHTAG_NO
FROM HASHTAG 
WHERE HASHTAG_CONTENT = '피에스타'
					
					
SELECT * FROM HASHTAG; -- HASHTAG_NO, HASHTAG_CONTENT
SELECT * FROM FOLLOW; -- F_FROM_MEMBER_NO, F_TO_TARGET_NO, FOLLOW_TYPE, FOLLOW_ACCEPT_FL

INSERT INTO HASHTAG 
VALUES(SEQ_HASHTAG_NO.NEXTVAL, '피에스타');

INSERT INTO FOLLOW 
VALUES (57, 2, 'H', 'Y');

UPDATE FOLLOW SET
F_TO_TARGET_NO = 2
WHERE F_TO_TARGET_NO = 1
AND FOLLOW_TYPE = 'H';

SELECT HASHTAG_NO
FROM HASHTAG 
WHERE HASHTAG_CONTENT = '검색어';


SELECT * FROM MEMBER;

SELECT * FROM BOARD;


SELECT* FROM FOLLOW;  
SELECT * FROM "COMMENT"
WHERE BOARD_NO = 1; 

SELECT * FROM BOARD_IMG; 


-- 인기 게시글 (좋아요 많은 순) - (모달)좋아요 개수, 댓글 수 + 게시글 사진
-- (기간 내에) 좋아요가 많은 게시글 각각의 첫번째 사진을 가져오기

-- 인기게시글 // 추가!!! 모두 공개인 사람의 글만 나오도록! + 삭제되지 않았을 것
-- 1, 17, 19
SELECT * 
FROM (SELECT DISTINCT B.BOARD_NO, BOARD_CREATE_DATE, MEMBER_NO,
				(SELECT COUNT(*) 
				FROM BOARD_LIKE BL 
				WHERE BL.BOARD_NO = B.BOARD_NO) LIKE_COUNT,
				(SELECT (IMG_ADDRESS || IMG_CHANGE_NAME) 
				FROM BOARD_IMG BI 
				WHERE BI.BOARD_NO = B.BOARD_NO 
				AND IMG_ORDER = '0') IMG_PATH,
				(SELECT COUNT(*) FROM "COMMENT" C
				 WHERE C.BOARD_NO = B.BOARD_NO) COMMENT_COUNT
		FROM BOARD B
		JOIN "MEMBER" USING(MEMBER_NO)
		JOIN "COMMENT" ON ("COMMENT".BOARD_NO = B.BOARD_NO)
		JOIN BOARD_IMG BI ON (B.BOARD_NO = BI.BOARD_NO)
		WHERE BOARD_CREATE_DATE > (SYSDATE - 30)  
		AND (BOARD_CONTENT LIKE '%#해시태그%' OR COMMENT_CONTENT LIKE '%#해시태그%')
		AND BOARD_DEL_FL = 'N'
		AND MEMBER_OPEN_FL = 'Y'
		AND IMG_ORDER = 0
		ORDER BY LIKE_COUNT DESC)
WHERE ROWNUM <= 9;


-- SYSDATE - 1 = 1일 전  (일주일 전)
SELECT * FROM BOARD_IMG WHERE BOARD_NO=1; 

SELECT * FROM BOARD
JOIN BOARD_IMG USING(BOARD_NO)
WHERE BOARD_NO = 12;


SELECT * FROM "MEMBER" 
WHERE MEMBER_NO = 8;

SELECT * FROM "BOARD"
WHERE BOARD_NO=17;

SELECT * FROM "COMMENT" 
WHERE BOARD_NO = 17;

WHERE BOARD_CONTENT LIKE '%해시태그%';

WHERE IMG_ORDER = 0;

SELECT * FROM BOARD
WHERE BOARD_CONTENT LIKE '%#해시태그%'; -- BOARD_NO = 1, 19, 20

SELECT * FROM "COMMENT" 
WHERE COMMENT_CONTENT LIKE '%#해시태그%';  -- BOARD_NO =  20

SELECT * FROM BOARD 
WHERE BOARD_NO = 12;


SELECT * FROM BOARD;

(SELECT MEMBER_OPEN_FL
				FROM "MEMBER" M
				WHERE M.MEMBER_NO = B.MEMBER_NO ) MEMBER_OPEN_FL

--AND MEMBER_OPEN_FL = 'Y';

SELECT * FROM MEMBER;
-- 11 13 14 17 2 19 18 10 8
SELECT * FROM BOARD;



--최신게시글 // 추가!!! 모두 공개인 사람의 글만 나오도록! + 삭제되지 않았을 것
SELECT DISTINCT B.BOARD_NO, BOARD_CREATE_DATE, MEMBER_NO,
				(SELECT COUNT(*) FROM BOARD_LIKE BL 
				WHERE BL.BOARD_NO = B.BOARD_NO) LIKE_COUNT,
				(SELECT (IMG_ADDRESS || IMG_CHANGE_NAME) 
				FROM BOARD_IMG BI WHERE BI.BOARD_NO = B.BOARD_NO 
				AND IMG_ORDER = 0) IMG_PATH,
				(SELECT COUNT(*) FROM "COMMENT" C
				WHERE C.BOARD_NO = B.BOARD_NO) COMMENT_COUNT	
FROM BOARD B
JOIN MEMBER USING(MEMBER_NO)
JOIN "COMMENT" ON ("COMMENT".BOARD_NO = B.BOARD_NO)
WHERE (BOARD_CONTENT LIKE '%#해시태그%' OR COMMENT_CONTENT LIKE '%#해시태그%')
AND BOARD_DEL_FL = 'N'
AND MEMBER_OPEN_FL = 'Y'
AND ROWNUM <= 9
ORDER BY BOARD_CREATE_DATE DESC 

--  
SELECT * FROM BOARD_IMG;  
WHERE BOARD_NO = 2

-- BOARD_NO 21 22 23 24 25 26에 BOARD_IMG 사진 샘플 추가
INSERT INTO BOARD_IMG 
VALUES(SEQ_IMG_NO.NEXTVAL, 1, '/resources/images/default/', '기본 이미지', 'defaultImg.png', '202211290006.jpg', 26);

UPDATE BOARD_IMG SET
IMG_CHANGE_NAME = 'defaultImg.png'
WHERE BOARD_NO = 23;

SELECT (SYSDATE - TO_DATE('20221101','YYYYMMDD')) FROM DUAL; 

SELECT * FROM BOARD_IMG;


-- ***** (모달) 좋아요 개수, 댓글 개수
SELECT BOARD_NO, COUNT(*) LIKE_COUNT, 
	(SELECT COUNT(*) FROM "COMMENT" WHERE BOARD_NO='13')COMMENT_COUNT
FROM BOARD_LIKE
JOIN "COMMENT" USING(BOARD_NO)
GROUP BY BOARD_NO
HAVING BOARD_NO = '13'
ORDER BY LIKE_COUNT DESC;





-- 멤버 탈퇴하면 게시글도 같이 삭제 처리/ 댓글도?

SELECT * FROM "BOARD";      -- BOARD_NO / MEMBER_NO
SELECT * FROM "BOARD_IMG";
SELECT * FROM "BOARD_LIKE";  --BOARD_NO / MEMBER_NO
SELECT * FROM "COMMENT";     -- BOARD_NO
SELECT * FROM "HASHTAG";

SELECT * FROM "MEMBER"; 

-- 좋아요 샘플 추가
INSERT INTO BOARD_LIKE VALUES(17, 27);
INSERT INTO BOARD_LIKE VALUES(14, 2);
INSERT INTO BOARD_LIKE VALUES(11, 3);
INSERT INTO BOARD_LIKE VALUES(11, 4);
INSERT INTO BOARD_LIKE VALUES(10, 5);
INSERT INTO BOARD_LIKE VALUES(10, 7);
INSERT INTO BOARD_LIKE VALUES(8, 8);
INSERT INTO BOARD_LIKE VALUES(2, 9);
INSERT INTO BOARD_LIKE VALUES(2, 10);

SELECT * FROM BOARD_IMG;





DELETE FROM BOARD_IMG WHERE IMG_NO = 21;

COMMIT;

SELECT * FROM "COMMENT"; 



UPDATE BOARD SET
BOARD_DEL_FL = 'Y'
WHERE MEMBER_NO = 1;


SELECT COUNT(*), BOARD_NO 
FROM BOARD_LIKE 
GROUP BY BOARD_NO
ORDER BY COUNT(*) DESC;

WHERE MEMBER_PROFILE_IMG IS NOT NULL;


-- 11,13,14,17,8,10,19,2,18,3  --/resources/images/profile/profile.jpg

ROLLBACK;


-- 검색어 '피에스타'로 검색될 계정 생성 샘플
INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'fiest02@naver.com', 'pass02!','피에스타fiesta02', 'fiesta02', '/resources/images/profile/profile.jpg', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'fiest03@naver.com', 'pass03!','피에스타fiesta03', 'fiesta03', '/resources/images/profile/profile.jpg', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'fiest04@naver.com', 'pass04!','피에스타fiesta04', 'fiesta04', '/resources/images/profile/profile.jpg', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'fiest05@naver.com', 'pass05!','피에스타fiesta05', 'fiesta05', '/resources/images/profile/profile.jpg', DEFAULT, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO "MEMBER"
VALUES (SEQ_MEMBER_NO.NEXTVAL, 'fiest06@naver.com', 'pass06!','피에스타fiesta06', 'fiesta06', '/resources/images/profile/profile.jpg', DEFAULT, DEFAULT, DEFAULT, DEFAULT);


UPDATE "MEMBER" SET
MEMBER_NICKNAME='fiesta06',
MEMBER_NAME='피에스타fiesta06'
WHERE MEMBER_NO = 43


SELECT * FROM MEMBER
WHERE MEMBER_NAME LIKE '%fiesta%'


UPDATE "MEMBER" 
SET MEMBER_NICKNAME = 'fiesta01'
WHERE MEMBER_NO=38;


COMMIT;


SELECT * FROM "MEMBER" WHERE MEMBER_EMAIL ='lyz000@daum.net';

SELECT * FROM SETTING;

SELECT * FROM MEMBER;



-- 컬럼 수정
-- ALTER TABLE 테이블명 MODIFY 컬럼명 데이터타입; -> 데이터 타입 변경
-- ALTER TABLE 테이블명 MODIFY 컬럼명 DEFAULT '값'; -> DEFAULT 값 변경
-- ALTER TABLE 테이블명 MODIFY 컬럼명 NULL/NOT NULL; -> NULL 여부 변경

ALTER TABLE MEMBER MODIFY MEMBER_PROFILE_IMAGE DEFAULT '/resources/images/profile/profile.jpg';
-- 내일 물어보고 넣기



SELECT * FROM "MEMBER"; 
WHERE MEMBER_EMAIL ='lyz000@daum.net'; 



SELECT * FROM FOLLOW
WHERE F_FROM_MEMBER_NO = 57;

SELECT * FROM MEMBER;

SELECT *
FROM "INTRODUCE" 

SELECT * FROM FOLLOW;




SELECT * 
FROM (SELECT B.BOARD_NO, BOARD_CREATE_DATE, MEMBER_NO,
				(SELECT COUNT(*) 
				FROM BOARD_LIKE BL 
				WHERE BL.BOARD_NO = B.BOARD_NO) LIKE_COUNT,
				(SELECT (IMG_ADDRESS || IMG_CHANGE_NAME) 
				FROM BOARD_IMG BI 
				WHERE BI.BOARD_NO = B.BOARD_NO 
				AND IMG_ORDER = 1) IMG_PATH,
				(SELECT COUNT(*) FROM "COMMENT" C
				 WHERE C.BOARD_NO = B.BOARD_NO) COMMENT_COUNT												
		FROM BOARD B
		JOIN "MEMBER" USING(MEMBER_NO)
		JOIN "COMMENT" ON ("COMMENT".BOARD_NO = B.BOARD_NO)
		WHERE BOARD_CREATE_DATE > (SYSDATE - 30)
		AND (BOARD_CONTENT LIKE '%#피에스타%' OR COMMENT_CONTENT LIKE '%#피에스타%')
		AND BOARD_DEL_FL = 'N'
		AND MEMBER_OPEN_FL = 'Y'
	ORDER BY LIKE_COUNT DESC);


SELECT * FROM BOARD_IMG ;

SELECT * FROM BOARD_LIKE;

SELECT * FROM HASHTAG;
SELECT * FROM FOLLOW;

INSERT INTO BOARD_LIKE VALUES(2, 11);

DELETE FROM FOLLOW 
WHERE F_TO_TARGET_NO IS NULL;


DELETE FROM FOLLOW 
WHERE F_TO_TARGET_NO = (SELECT HASHTAG_NO FROM  HASHTAG WHERE HASHTAG_CONTENT = '피에스타')
AND F_FROM_MEMBER_NO = 12
AND FOLLOW_TYPE = 'H';

SELECT NVL(SUM(HASHTAG_NO),0) HASHTAG_NO  
FROM HASHTAG 
WHERE HASHTAG_CONTENT = '안녕'

SELECT HASHTAG_NO
FROM HASHTAG 
WHERE HASHTAG_CONTENT = '텀블러';

DELETE FROM FOLLOW 
			WHERE F_FROM_MEMBER_NO = 6
			AND F_TO_TARGET_NO = 
			(SELECT HASHTAG_NO FROM HASHTAG WHERE HASHTAG_CONTENT = '텀블러');

SELECT HASHTAG_NO
FROM HASHTAG 
WHERE HASHTAG_CONTENT = '피에스타';

SELECT * FROM "MEMBER" 
COMMIT;


SELECT * FROM MEMBER;
SELECT * FROM FOLLOW;
SELECT * FROM HASHTAG;



SELECT COUNT(*)
FROM FOLLOW
WHERE F_FROM_MEMBER_NO = 3
AND FOLLOW_TYPE = 'M'
AND F_TO_TARGET_NO = (SELECT MEMBER_NO FROM MEMBER WHERE MEMBER_NICKNAME = 'user02');




SELECT *
FROM "MEMBER" 
WHERE (MEMBER_NICKNAME LIKE UPPER('%user%') OR MEMBER_NICKNAME LIKE LOWER ('%user%'))
AND SECESSION_FL = 'N'


SELECT *
FROM "MEMBER" 
WHERE (MEMBER_NICKNAME LIKE UPPER('%user%') OR MEMBER_NICKNAME LIKE LOWER('%user%')
OR MEMBER_NAME LIKE UPPER('%user%') OR MEMBER_NAME LIKE LOWER('%user%'))
AND SECESSION_FL = 'N'

SELECT * FROM BOARD;


SELECT COUNT(*)
FROM (
SELECT DISTINCT BOARD_NO
FROM "BOARD" 
JOIN "MEMBER" USING(MEMBER_NO)
JOIN "COMMENT" USING(BOARD_NO)
WHERE (BOARD_CONTENT LIKE UPPER('%GD%') OR BOARD_CONTENT LIKE LOWER('%GD%')
		OR COMMENT_CONTENT LIKE UPPER('%GD%') OR COMMENT_CONTENT LIKE LOWER('%GD%'))
AND BOARD_DEL_FL = 'N'
AND SECESSION_FL = 'N'	
)
