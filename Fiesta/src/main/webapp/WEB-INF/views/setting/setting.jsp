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
    <link rel="stylesheet" href="/resources/css/setting/setting-style.css" />
    <link rel="stylesheet" href="../../../resources/css/profile-edit-board.css">
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
      <jsp:include page="/WEB-INF/views/common/header.jsp"/>


    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
      <section class="setting-content">
        <section class="left-side">
          <ul class="list-group">
            <li><a href="/setting">프로필 편집</a></li>
            <li><a href="/setting/changePw">비밀번호 변경</a></li>
            <li><a href="/setting/changeEtc">개인정보 및 보안</a></li>
          </ul>
        </section>

        <section class="setting-main">
          <form action="/setting/updateImage" method="POST" id="profilefrm" name="memberProfileImg" enctype="multipart/form-data">
            <div class="di-1">
              <aside>
                <button type="button" id="chg-img">
                  <c:if test="${empty loginMember.memberProfileImg}">   
                  <img id="profile-image" src="/resources/images/user.jpg">
                  </c:if> 
                  <c:if test="${!empty loginMember.memberProfileImg}">   
                  <img id="profile-image" src="${loginMember.memberProfileImg}">
                  </c:if>
                </button><button id=prosubmit></button>
              </aside>
              <div class="main">
                <h1>${loginMember.memberNickname}</h1>
                <button type="button" id="change-img">프로필 사진 바꾸기</button>
              </div>
            </div>
          </form>

          <form action="/setting/setting" name="set" method="POST" id="setting-frm">
            </div>
            <div class="di-2">
                <aside><label>이름</label></aside>
                <div class="main">
                  <input type="text" placeholder="이름" id="memberName" name="memberName" value="${loginMember.memberName}">
                </div>
                <aside></aside><span id="name-message"></span>
            </div>
            <div class="di-4">
                <aside><label>사용자 이름</label></aside>
                <div class="main"><input type="text" id="memberNickname" name="memberNickname" placeholder="사용자 이름" value="${loginMember.memberNickname}"></div>
                <aside></aside><span id="nick-message"></span>
              </div>
            <div class="di-3">
                <aside></aside>
                <div class="main">
                  사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
                  <br><br>
                </div>
            </div>
            <div class="di-5">
                <aside><label>소개</label></aside>
                <div class="main">
                  <textarea id="text" name="set"></textarea>
                </div>
            </div>

          
            <div class="di-10">
                <aside></aside>
                <button class="btn">제출</button>
                


            </div></form>
        </section>
      </section>
    </main>


   <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
   <jsp:include page="/WEB-INF/views/setting/profile-edit-board.jsp"/>
   
   <script>
    const memberNo = "${loginMember.memberNo}";
   </script>
   
   <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
   <script src="/resources/js/setting/setting.js"></script>
  </body>
</html>
