<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>비밀번호를 잊으셨나요?</title>
    <link rel="stylesheet" href="../../resources/css/common-style.css" />
    <link rel="stylesheet" href="../../resources/css/findAccount-style.css" />
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

        <form action="/findAccount" method="post" id="findAccount-frm">
            <div class="findAccount-input-area">
              <input type="text" name="memberEmail" id="memberEmail" value="" required />
              <label for="memberEmail">이메일</label>
            </div>
            <div class="findAccount-input-area" id="emailAuth-area">
              <input type="text" name="emailAuth" id="emailAuth" value="" required />
              <label for="emailAuth">인증번호</label>
              <span id="emailAuthTimer"></span>
            </div>

          <button class="findAccount-button" id="findAccountBtn">이메일로 인증하기</button>
        </form>

        <div class="notFoundAccount">
          <a href="#"> 비밀번호를 재설정할 수 없나요? </a>
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
