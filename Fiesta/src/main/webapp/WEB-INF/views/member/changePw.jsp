<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>비밀번호를 잊으셨나요?</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/member/changePw-style.css" />
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 헤더 -->
    <header>
      <section id="header-section">
        <!-- 로고 -->
        <section class="logo-section">
          <a href="#">Fiesta</a>
        </section>
      </section>
    </header>

    <!-- 메인 섹션 -->
    <main>
      <section class="changePw-section">
        <!-- 로고 -->
        <div class="changePw-logo-area">
          <div class="i-lock-area">
            <i class="fa-solid fa-user-lock"></i>
          </div>

          <div class="logo-sentence-area">
            <p id="logo-sentence1">비밀번호를 재설정합니다.</p>
            <p id="logo-sentence2">
              새로운 비밀번호를 입력하세요.<br />
            </p>
          </div>
        </div>

        <section class="formSection">
          <form action="/findAccount/changePwPage/updatePw" method="POST" id="changePw-frm">
              <div class="changePw-input-area">
                <input type="password" name="memberPw" id="memberPw" value="" 
                     maxlength="30" autocomplete="off" required >
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
                

              <div class="changePw-input-area"> <!-- 비밀번호 확인 -->
                <input type="password" name="memberPwConfirm" id="memberPwConfirm" value="" 
                      maxlength="30" autocomplete="off" required >
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
              <button class="changePw-button" id="changePwBtn">비밀번호 변경하기</button>
            </form>
        </section>

        <div class="toAdmin">
          <a href="#" id="toAdmin"> 비밀번호를 재설정할 수 없나요? </a>
        </div>
        </section>
        
        <!-- 로그인으로 -->
        <section class="toLogin">
          <a href="/login">로그인으로 돌아가기</a>
        </section>
          
      </main>
      
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    

    <script src="/resources/js/member/changePw.js"></script>
  </body>
</html>
