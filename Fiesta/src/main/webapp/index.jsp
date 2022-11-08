<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>로그인</title>
    <link rel="stylesheet" href="resources/css/common-style.css" />
                              <!-- /resources/css/common-style.css -->
    <link rel="stylesheet" href="resources/css/login-style.css" />
                            <!-- /resources/css/login-style.css -->
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <%-- 로그인 페이지 --%>
  <body>
    <!-- 메인 섹션 -->
    <main>

      <section class="login-section">
        <!-- 로고 -->
        <div class="logo-area">
          <a href="#">Fiesta</a>
        </div>

        <!-- 로그인 -->
        <!-- 나중에 링크 바꾸기 -->
        <form action="/member/login" method="post" id="login-frm">
          <div class="login-area">
            <input type="text" name="memberEmail" id="memberEmail" value="" autocomplete="off" required>
            <!-- placeholder="이메일"  -->
            <label for="memberEmail" class="loginLabel">이메일</label>
          </div>

          <div class="login-area">
            <input type="password" name="memberPw" id="memberPw" value="" required>
            <!-- placeholder="비밀번호" -->
            <label for="memberPw" class="loginLabel">비밀번호</label>
          </div>

          <button class="login-button" id="loginBtn">로그인</button>
        </form>

        <!-- 아이디, 비밀번호 찾기 -->
        <div class="line">또는</div>

        <div class="findAccount">
          <a href="../common/findAccount(이은지).html"
            >아이디, 비밀번호를 잊으셨나요?</a
          >
        </div>
      </section>

      <!-- 회원가입으로 -->
      <section class="toSignUp">
        <div>
          계정이 없으신가요?
          <a href="/member/signUp">가입하기</a>
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

     <script src="/resources/js/login.js"></script>
  </body>
</html>
