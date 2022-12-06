<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>
    <!-- 링크 주소 상대주소로 변경한거니까 다시 바꾸지 말아주세요 -->
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/dm/dm-style.css" />
    <link rel="stylesheet" href="/resources/css/dm/dm-message2.css"/>
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
            <button id="dmOpen">  
              <img
                src="/resources/images/write.png"
                name="dm-message"
                style="width: 24px"
                /></button>

            
          </section>
          <section class="down">
            <ul class="dm-list">
              <c:forEach var="chat" items="${roomList}">
                <li class="dm-item" id="${chat.chattingNo}-${chat.targetNo}">
                  <div class="item-header">
                    <c:if test="${not empty room.targetProfile}">
                      <img class="target-profile" src="${room.targetProfile}">
                    </c:if>
                    <c:if test="${empty room.targetProfile}">
                      <img class="target-profile" src="/resources/images/user.jpg">
                    </c:if>
                  </div>
                  <div class="item-body">
                    <p>
                      <span class="target-name">${room.targetNickName}</span>
                      <span class="recent-send-time">${room.sendTime}</span>
                    </p>
                  </div>  
                  <div>
                      <p class="recent-message">${room.lastMessage}</p>
      
                      <c:if test="${room.notReadCount > 0}">
                        <p class="not-read-count">${room.notReadCount}</p>
                      </c:if>
                  </div>
                </li>
              </c:forEach>
            </ul>
          </section>
        </div>  
        <div class="right" id="right">
          <div id="no-click">
            <img src="/resources/images/dm-icon.png" style="width: 96px" />
            <h1>내 메시지</h1>
            <div class="message-info">
              친구나 그룹에 비공개 사진과 메세지를 보내보세요.
            </div>
            <button class="send" type="button" id="sendMessageBtn">
            메시지 보내기</a>
            </button>
          </div>  
          
           <%-- 클릭되었을때  --%>
          <div id="click">
            <div id="clickUp">
              <button id="proImg"><img src="/resources/images/user.jpg" style="width: 50px;"></button>
              <div class="messageName" id="messageName"> test</div>
              <button id="info"><img src="/resources/images/info.png" style="width:24px;"></button>
            </div>
            <div id="chattingRoom">
              <ul class="dm-area">

              </ul>
            </div>
            <div id="input">
            <input type="text" size="50" id="chattingInput">
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- 푸터 -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
    <jsp:include page="/WEB-INF/views/dm/dm-message.jsp"/>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
    <script>
      // 로그인한 회원 번호
      const loginMemberNo = "${loginMember.memberNo}";

      const RecipientMemberNick = "${Recipeint.innerText}";
      // 모달에서 닉네임 얻어오기



  
      // 게시판에서 사용자 닉네임을 눌러서 채팅 화면으로 넘어온 경우
      // 그 때 전달된 채팅방 번호를 저장하는 변수
      const tempNo = "${chattingNo}"; 
    </script>
    <script src="/resources/js/dm/dm.js"></script>
  </body>
</html>
