<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>
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
          <a href="/login">Fiesta</a>
          <p id="logo-sentence">
            친구들의 사진과 동영상을 보려면<br>
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
              <label for="memberEmail" id="memberEmailLabel">이메일</label>


              <!-- 중복검사 + 형태 맞는지 확인하는 아이콘 : 체크, X -->
              <span class="icon-id-check">
                <i class="fa-regular fa-circle-check icon" id="emailCheck"></i>
                <i class="fa-regular fa-circle-xmark icon" id="emailXmark"></i>
              </span>
            </div>
  

            <div class="signUp-area"> <!-- 성명 -->
              <input type="text" name="memberName" id="memberName" value="" 
                    maxlength="50" autocomplete="off" required readonly>
              <label for="memberName">성명</label>
             
              <!-- 검사 안함 : 필수작성 확인 /체크-->
              <span class="icon-name-check">
                <i class="fa-regular fa-circle-check icon" id="nameCheck"></i>
              </span>
            </div>
  

            <div class="signUp-area"> <!-- 사용자 이름 -->
              <input type="text" name="memberNickname" id="memberNickname" value="" 
                    maxlength="50" autocomplete="off" required readonly>
              <label for="memberNickname">사용자 이름</label>
              
              <!-- 자동생성(새로고침) / 필수입력(체크) / 중복검사(체크,X) -->
              <span class="icon-nickname-refresh">
                <i class="fa-solid fa-arrow-rotate-right icon" id="nickRefresh"></i>
              </span>
              <span class="icon-nickname-check">
                 <i class="fa-regular fa-circle-check icon" id="nickCheck"></i>
                 <i class="fa-regular fa-circle-xmark icon" id="nickXmark"></i>
              </span>
            </div>
  
            <div class="signUp-area"> <!-- 비밀번호 -->
              <input type="password" name="memberPw" id="memberPw" value="" 
                    maxlength="30" autocomplete="off" required readonly>
              <label for="memberPw">비밀번호</label>
              
              <!-- 비밀번호 유효성 검사 / 보이기숨기기 -->
              <!-- 비밀번호 정규표현식 사용 -->
              <span class="icon-pw-check">
                <i class="fa-regular fa-circle-check icon" id="pwCheck"></i>
              </span>
              <span class="icon-pw-showHide">
                <i class="fa-regular fa-eye icon" id="pwEye"></i>
                <i class="fa-regular fa-eye-slash icon" id="pwEyeSlash"></i>
              </span>
            </div>
              

            <div class="signUp-area"> <!-- 비밀번호 확인 -->
              <input type="password" name="memberPwConfirm" id="memberPwConfirm" value="" 
                    maxlength="30" autocomplete="off" required readonly>
              <label for="memberPwConfirm">비밀번호 확인</label>
              
              <!-- 비밀번호 일치 확인 : 체크,X / 보이기숨기기-->
              <span class=icon-pwConfirm-check>
                <i class="fa-regular fa-circle-check icon" id="pwConfirmCheck"></i>
                <i class="fa-regular fa-circle-xmark icon" id="pwConfirmXmark"></i>
              </span>
              <span class="icon-pw-showHide">
                <i class="fa-regular fa-eye icon" id="pwConfirmEye"></i>
                <i class="fa-regular fa-eye-slash icon" id="pwConfirmEyeSlash"></i>
              </span>
            </div> 
  
            <button class="signUp-button" id="signUpButton" disabled>가입</button>
          </form>
          <form action="/emailAuth" method="POST">
            <button class="sendAuthKeyBtn" id="sendAuthKeyBtn" type="button" disabled>이메일로 인증번호 보내기</button>
          </form>
        </section>
  
      <!-- 로그인으로 -->
      <section>
        <div class="toLogin" id="toLogin">
          계정이 있으신가요?
          <a href="/login">로그인</a>
        </div>
      </section>
      <section>
        <div class="inputAuth-area" id="inputAuth">
          <span id="authTimerArea"></span>
          <input type="text" name="authKey" id="authKey" autocomplete="off" maslength="6" required/>
           <!-- placeholder="클릭하여 인증번호 입력" -->
          <!--onfocus="this.placeholder = ''" onblur="this.placeholder = '클릭하여 인증번호 입력'" -->
          <button id="checkAuthKeyBtn" type="button">인증하기</button>
        </div>
      </section>
    </main>
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
    
    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    
    <script src="/resources/js/member/signUp.js"></script>


  </body>
</html>
