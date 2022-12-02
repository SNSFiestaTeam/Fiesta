<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"  %>

<c:set var="feedAllList" value="${feedMap.feedAllList}"></c:set>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/myfeed.css" />
    <link rel="stylesheet" href="/resources/css/follow-board.css" />
    <link rel="stylesheet" href="/resources/css/following-board.css" />
    <link rel="stylesheet" href="/resources/css/profile-edit-board.css" />
    <link rel="stylesheet" href="/resources/css/newpost-file-style.css" />
    <link rel="stylesheet" href="/resources/css/newpost-post-style.css" />
    <link rel="stylesheet" href="/resources/css/newpost-eidt-style.css" />

    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>

  <style>
   #title-section-board{
    border-top : 1px solid black;
   }
  </style>

  </head>
  <body id="scrollrock">
    <jsp:include page="/WEB-INF/views/common/header.jsp"/>

    <main>
      <div class="main-container">
        <section class="info-section">
          <div id="profile-photo">
            <button id="self">
              <c:if test="${ empty loginMember.memberProfileImg}">
                <img id="selfImg" src="/resources/images/profile/profile.jpg" />
              </c:if>

              <c:if test="${ !empty loginMember.memberProfileImg}">
                <img id="selfImg" src="${loginMember.memberProfileImg}" />
              </c:if>
            </button>
          </div>

          <div id="profile-text">
            <div id="nickname">
              <span>${loginMember.memberNickname}</span>

              <button id="btn">
                <a href="/setting"><i class="fa-solid fa-gear"></i></a>
              </button>

            
            </div>

            <div id="profile-board">
              <span class="board-menu-btn1"><button>게시글 ${pagination.listCount}</button></span>
              <span class="board-menu-btn2"><button id="follow-btn">팔로우 176</button></span>
              <span class="board-menu-btn3"><button id="following-btn">팔로잉 98</button></span>
            </div>

            <div class="profileName">${loginMember.memberName}</div>

            <p class="introduce-text">자기소개 글</p>
          </div>
        </section>

        <section class="title-section">
          <div id="text-area">
          <a href="/feed/${loginMember.memberNickname}" id="title-section-board">
           <span><i class="fa-solid fa-chess-board"></i> 게시물</span>
          </a>
           
           <a href="/feed/${loginMember.memberNickname}/bookmark"  id="title-section-bookmark">
            <span><i class="fa-regular fa-bookmark"></i> 저장됨</span>
           </a> 

            <a href="/feed/${loginMember.memberNickname}/taged" id="title-section-taged">
            <span><i class="fa-solid fa-children"></i> 태그됨</span>
            </a>
          </div>
        </section>

        <c:if test="${not empty feedAllList}"> 
        <section class="feed-section" id="feed-section">

          <c:if test ="${fn:length(feedAllList) > 0}">
          <div class="img-container">
            <c:forEach var="imageItem" items ="${feedAllList}" begin="0" end="2">
            <a href="#">
              <img class="feed-img" src="${imageItem.imgPath}"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>${imageItem.likeCount}</span>
                <i class="fa-regular fa-comment"></i><span>${imageItem.commentCount}</span>
              </div>
            </a>
            </c:forEach>
          </div>
          </c:if>

          <c:if test ="${fn:length(feedAllList) > 3}">
          <div class="img-container2">
            <c:forEach var="imageItem" items ="${feedAllList}" begin="3" end="5">
            <a href="#">
              <img class="feed-img" src="${imageItem.imgPath}"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>${imageItem.likeCount}</span>
                <i class="fa-regular fa-comment"></i><span>${imageItem.commentCount}</span>
              </div>
            </a>
            </c:forEach>
          </div>
          </c:if>

           <c:if test ="${fn:length(feedAllList) > 6}">
          <div class="img-container3">
            <c:forEach var="imageItem" items ="${feedAllList}" begin="6" end="8">
            <a href="#">
              <img class="feed-img" src="${imageItem.imgPath}"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>${imageItem.likeCount}</span>
                <i class="fa-regular fa-comment"></i><span>${imageItem.commentCount}</span>
              </div>
            </a>
            </c:forEach>
          </div>
          </c:if>
        </section>
        </c:if>

        <c:if test="${empty feedAllList}">
          <pre>게시글을 작성해주세요.</pre>
        </c:if>
      

    </main>
        <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
        <jsp:include page="/WEB-INF/views/profile/follow-board.jsp"/>
        <jsp:include page="/WEB-INF/views/profile/following-board.jsp"/>
        <jsp:include page="/WEB-INF/views/profile/profile-edit-board.jsp"/>
        <%-- 새게시물작성 모달jsp --%>
        <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
        <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
        <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />

      <script>
        var memberNickname = "${loginMember.memberNickname}";
        var memberNo = "${loginMember.memberNo}";
      </script>

    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/resources/js/myfeed.js"></script>
    <script src="/resources/js/newpost.js"></script>
  </body>
</html>