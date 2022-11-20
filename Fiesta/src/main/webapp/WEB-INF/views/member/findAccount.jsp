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
    <link rel="stylesheet" href="/resources/css/member/findAccount-style.css" />
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
      <section class="findAccount-section">
        <!-- 로고 -->
        <div class="findAccount-logo-area">
          <div class="i-lock-area">
            <i class="fa-solid fa-user-lock"></i>
          </div>

          <div class="logo-sentence-area">
            <p id="logo-sentence1">로그인에 문제가 있나요?</p>
            <p id="logo-sentence2">
              가입한 이메일을 입력하여<br />
              본인 인증을 먼저 진행하세요.
            </p>
          </div>
        </div>

        <form action="/findAccount/changePw" method="get" id="findAccount-frm">
            <div class="findAccount-input-area">
              <input type="text" name="memberEmail" id="memberEmail" value=""  maxlength="50" autocomplete="off" required />
              <label for="memberEmail">이메일</label>

            </div>
            <div class="findAccount-input-area" id="inputAuthArea">
              <input type="text" name="authKey" id="authKey" autocomplete="off" maslength="6" required/>
              <label for="authKey">인증번호</label>
              <span id="authTimerArea"></span>
              <button class="findAccount-button" id="checkAuthKeyBtn" type="button">인증하기</button>
            </div>
            
            <button class="findAccount-button" id="sendAuthKeyBtn" type="button">이메일로 인증하기</button>
            <button class="findAccount-button" id="changPwBtn" type="submit">비밀번호 재설정하기</button>
          </form>
            

        <div class="toAdmin">
          <!-- FIXME: 관리자페이지로 수정 -->
          <a href="/member/changePw"> 비밀번호를 재설정할 수 없나요? </a>
        </div>

        <div class="line">또는</div>

        <!-- 회원가입으로 -->
        <section class="toSignUp">
          <a href="/member/signUp">새 계정 만들기</a>
          <div></div>
        </section>
      </section>

      <!-- 로그인으로 -->
      <section class="toLogin">
        <a href="/login">로그인으로 돌아가기</a>
      </section>
    </main>

    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    

    <script src="/resources/js/member/findAccount.js"></script>
  </body>
</html>
