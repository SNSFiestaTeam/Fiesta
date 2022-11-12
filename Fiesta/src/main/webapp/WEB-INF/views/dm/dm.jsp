<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>instagram</title>
    <!-- 링크 주소 상대주소로 변경한거니까 다시 바꾸지 말아주세요 -->
    <link rel="stylesheet" href="../../resources/css/common-style.css" />
    <link rel="stylesheet" href="../../resources/css/dm-style.css" />
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 헤더 -->
          <jsp:include page="/WEB-INF/views/common/header.jsp"/>

    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
      <section class="container">
        <div class="left">
          <section class="up">
            <div class="id">${loginMember.memberNickname}</div>
            <!-- 로그인 연결 -->
            <a href="#"
              ><img
                id="login"
                src="../../resources/images/arrow-down.png"
                style="width: 16px"
            /></a>
            <a href="../dm/dm-message.html">
              <img
                src="../../resources/images/write.png"
                id="dm-message"
                style="width: 24px"
              />
            </a>
          </section>
          <section class="down">
            <div class="chat">
              <a href="#"><img src="../../resources/images/user.jpg" class="pro-img"></a>
              <div class="chat-content">
                <div class="chat-content-right">
                <span>상대방 아이디</span>
                <div class="chat-content2">내용 일부</div>
                <div class="chat-time"> 몇초전</div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="right">
          <img src="../../resources/images/dm-icon.png" style="width: 96px" />
          <h1>내 메시지</h1>
          <div class="message-info">
            친구나 그룹에 비공개 사진과 메세지를 보내보세요.
          </div>
          <button class="send" type="button">
            <a href="../dm/dm-message.html"> 메시지 보내기</a>
          </button>
        </div>
      </section>
    </main>
    <!-- 푸터 -->
       <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

  </body>
</html>
