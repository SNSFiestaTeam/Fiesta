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
              이메일 또는 사용자 이름을 입력하시면<br />
              계정에 다시 액세스할 수 있는 링크를 보내드립니다.
            </p>
          </div>
        </div>

        <form action="#" method="post" id="findAccount-frm">
          <div class="email-input-area">
            <input
              type="text"
              name="memberEmail"
              id="memberEmail"
              value=""
              required
            />
            <!-- placeholder="이메일" -->
            <label for="memberEmail">이메일</label>
          </div>

          <button class="login-button">로그인 링크 보내기</button>
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
        <a href="/">로그인으로 돌아가기</a>
      </section>
    </main>

     <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
  </body>
</html>
