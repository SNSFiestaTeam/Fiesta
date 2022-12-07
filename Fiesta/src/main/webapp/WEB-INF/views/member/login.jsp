<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>
    <link rel="stylesheet" href="resources/css/common-style.css" />
    <link rel="stylesheet" href="resources/css/member/login-style.css">
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>

 <%-- 위치 변경 --%>
  <!-- 로그인 페이지 -->
  <body>

    <!-- 메인 섹션 -->
    <main>
      <section class="login-section">
    ${loginMember}
        <!-- 로고 -->
        <div class="logo-area">
          <a href="#">Fiesta</a>
        </div>

        <!-- 로그인 -->
        <form action="/login" method="post" id="login-frm">
         
          <!-- 이메일 -->
          <div class="login-area">
            <input type="text" name="memberEmail"  id="memberEmail" value="" 
                maxlength="50" autocomplete="off" required readonly> 
            <label for="memberEmail" class="loginLabel">이메일</label>
          </div>

          <!-- 패스워드 -->
          <div class="login-area">
            <input type="password" name="memberPw" id="memberPw" value="" 
                maxlength="30" required readonly>
            <label for="memberPw">비밀번호</label>
          </div>

          <button class="login-button" id="loginBtn">로그인</button>
        </form>

        <!-- 아이디, 비밀번호 찾기 -->
        <div class="line">또는</div>

        <div class="findAccount">
          <a href="/findAccount">아이디, 비밀번호를 잊으셨나요?</a>
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
    
     <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

     <script src="/resources/js/member/login.js"></script>

  </body>
</html>

