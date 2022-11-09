<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>가입하기</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/signUp-style.css" />
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <!-- 메인 섹션 -->
    <main>

      <section class="signUp-section">
        <!-- 로고 -->
        <div class="logo-area">
          <a href="#">Fiesta</a>
          <p id="logo-sentence">
            친구들의 사진과 동영상을 보려면<br />
            가입하세요.
          </p>
        </div>

        <!-- 회원가입 -->
        <!-- 나중에 value값 작성하기 -->
        <!-- 회원가입에 사용되는 아이콘 목록
            
            체크     : <i class="fa-regular fa-circle-check"></i>
             X       : <i class="fa-regular fa-circle-xmark">
            새로고침(사용자이름 자동생성) : <i class="fa-solid fa-arrow-rotate-right"></i>
            

            (눈모양으로 대체)
            비밀번호 보이기 : <i class="fa-regular fa-eye"></i>
            비밀번호 숨기기 : <i class="fa-regular fa-eye-slash"></i>
          -->

          <form action="/member/signUp" method="post" id="signUp-frm">
            <div class="signUp-area"> <!-- 이메일 -->
              <input type="text" name="memberEmail" id="memberEmail" value="" 
                    maxlength="50" autocomplete="off" required>
              <!-- placeholder="이메일 주소"  -->
              <label for="memberEmail" id="memberEmailLabel">이메일</label>

              <!-- 중복검사 + 형태 맞는지 확인하는 아이콘 : 체크, X -->
              <span class="icon-id-check">
                <i class="fa-regular fa-circle-check" id="emailCheck"></i>
                <i class="fa-regular fa-circle-xmark" id="emailXmark"></i>
              </span>
            </div>
  

            <div class="signUp-area"> <!-- 성명 -->
              <input type="text" name="memberName" id="memberName" value="" 
                    maxlength="50" autocomplete="off" required>
              <!-- placeholder="성명"  -->
              <label for="memberName">성명</label>
             
              <!-- 검사 안함 : 필수작성 확인 /체크-->
              <span class="icon-name-check">
                <i class="fa-regular fa-circle-check" id="nameCheck"></i>
                <!-- <i class="fa-regular fa-circle-xmark" id="nameXmark"></i> -->
              </span>
            </div>
  

            <div class="signUp-area"> <!-- 사용자 이름 -->
              <input type="text" name="memberNickname" id="memberNickname" value="" 
                    maxlength="50" autocomplete="off" required>
              <!-- placeholder="사용자 이름"  -->
              <label for="memberNickname">사용자 이름</label>
              
              <!-- 자동생성 / 중복검사 : 새로고침 / 체크 / X-->
              <span class="icon-nickname-refresh">
                <i class="fa-solid fa-arrow-rotate-right" id="nickRefresh"></i>
              </span>
              <span class="icon-nickname-check">
                 <i class="fa-regular fa-circle-check" id="nickCheck"></i>
                 <i class="fa-regular fa-circle-xmark" id="nickXmark"></i>
              </span>
            </div>
  
            <div class="signUp-area"> <!-- 비밀번호 -->
              <input type="password" name="memberPw" id="memberPw" value="" 
                    max-length="30" required>
              <!-- placeholder="비밀번호"  -->
              <label for="memberPw">비밀번호</label>
              
              <!-- 비밀번호 보이기숨기기 -->
              <!-- 비밀번호에 특별한 조건 넣을지 물어보기 -->
              <span class="icon-pw-showHide">
                <!-- <i class="fa-regular fa-eye" id="pwEye"></i> -->
                <i class="fa-regular fa-eye-slash" id="pwEyeSlash"></i>
              </span>
            </div>
              

            <div class="signUp-area"> <!-- 비밀번호 확인 -->
              <input type="password" name="memberPwConfirm" id="memberPwConfirm"
                     max-length="30" value="" required>
              <!-- placeholder="비밀번호 확인"  -->
              <label for="memberPwConfirm">비밀번호 확인</label>
              
              <!-- 비밀번호 일치 확인 : 체크 / X -->
              <span class=icon-pwConfirm-check>
                <!-- <i class="fa-regular fa-circle-check" id="pwConfirmCheck"></i> -->
                <i class="fa-regular fa-circle-xmark" id="pwConfirmXmark"></i>
              </span>
            </div> 
  
            <button class="signUp-button" id="signUpButton">가입</button>
          </form>
        </section>
  
      <!-- 로그인으로 -->
      <section class="toLogin">
        <div>
          계정이 있으신가요?
          <a href="/member/login">로그인</a>
        </div>
      </section>
    </main>

    <!-- 푸터 -->
    <footer>
      <p>
        Copyright &copy; KH Information Educational Institute A-Class SNS Team
      </p>
      <article>
        <a href="#">프로젝트 소개</a>
        <span>|</span>
        <a href="#">이용약관</a>
        <span>|</span>
        <a href="#">개인정보처리방침</a>
        <span>|</span>
        <a href="#">고객센터</a>
      </article>
    </footer>

    <script src="/resources/js/signUp.js"></script>

  </body>
</html>
