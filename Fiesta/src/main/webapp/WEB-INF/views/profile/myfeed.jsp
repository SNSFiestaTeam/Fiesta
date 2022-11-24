<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>instagram</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/myfeed.css" />
    <link rel="stylesheet" href="/resources/css/follow-board.css" />
    <link rel="stylesheet" href="/resources/css/following-board.css" />
    <link rel="stylesheet" href="/resources/css/profile-edit-board.css" />
<link rel="stylesheet" href="/resources/css/newpost-file-style.css" />
<%-- <link rel="stylesheet" href="/resources/css/newpost-post-style.css" /> --%>
<%-- <link rel="stylesheet" href="/resources/css/newpost-eidt-style.css" /> --%>




    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body id="scrollrock">
    <jsp:include page="/WEB-INF/views/common/header.jsp"/>

    <main>
      <div class="main-container">
        <section class="info-section">
          <div id="profile-photo">
            <button id="self">
              <c:if test="${ empty loginMember.memberProfileImg}">
                <img id="selfImg" src="/resources/images/profile.jpg" />
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
                <a href="/setting">프로필 편집</a>
              </button>

              <a href="#"><i class="fa-solid fa-gear"></i></a>
            </div>

            <div id="profile-board">
              <span class="board-menu-btn1"><button>게시글 9</button></span>
              <span class="board-menu-btn2"><button id="follow-btn">팔로우 176</button></span>
              <span class="board-menu-btn3"><button id="following-btn">팔로잉 98</button></span>
            </div>

            <p class="introduce-text">자기소개 글</p>
          </div>
        </section>

        <section class="title-section">
          <div id="text-area">
            <span id="a"><i class="fa-solid fa-chess-board"></i> 게시물</span>

            <span class=""><i class="fa-regular fa-bookmark"></i> 저장됨</span>

            <span class=""><i class="fa-solid fa-children"></i> 태그됨</span>
          </div>
        </section>

        <section class="feed-section">
          <div class="img-container">
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/3bfe8e6e6ee1f835a979cd1baad59d06.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>20</span>
                <i class="fa-regular fa-comment"></i><span>333</span>
              </div>
            </a>
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>159</span>
                <i class="fa-regular fa-comment"></i><span>21</span>
              </div>
            </a>
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/14f5961af72ef1686b2548d7c5c792e6.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>97</span>
                <i class="fa-regular fa-comment"></i><span>81</span>
              </div>
            </a>
          </div>

          <div class="img-container2">
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/1973ca8ce1b8dc4bac38683bc39d7fbd.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>1</span>
                <i class="fa-regular fa-comment"></i><span>1</span>
              </div>
            </a>
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/2159c9572a920ef17d26d2d57b76d7a8.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>658</span>
                <i class="fa-regular fa-comment"></i><span>12</span>
              </div>
            </a>
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/37769e3106c8f99048ba73c124844dec.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>334</span>
                <i class="fa-regular fa-comment"></i><span>12</span>
              </div>
            </a>
          </div>

          <div class="img-container3">
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/3a6f19a15fea55a21cf71a7b3e0f2434.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>784</span>
                <i class="fa-regular fa-comment"></i><span>2356</span>
              </div>
            </a>
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/7500f8049b8275ee14fd49e0a253a129.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>7654</span>
                <i class="fa-regular fa-comment"></i><span>5556</span>
              </div>
            </a>
            <a href="#">
              <img
                class="feed-img"
                src="/resources/images/8983e3185d5dc741e425f7c06f907f1b.jpg"
              />
              <div class="hover-icon-container">
                <i class="fa-regular fa-heart"></i><span>17906</span>
                <i class="fa-regular fa-comment"></i><span>7445</span>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
        <jsp:include page="/WEB-INF/views/common/footer.jsp"/>
        <jsp:include page="/WEB-INF/views/profile/follow-board.jsp"/>
        <jsp:include page="/WEB-INF/views/profile/following-board.jsp"/>
        <jsp:include page="/WEB-INF/views/profile/profile-edit-board.jsp"/>
        <%-- 새게시물작성 모달jsp --%>
        <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
      <%-- <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" /> --%>
      <%-- <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" /> --%>
     <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>
    <script src="/resources/js/myfeed.js"></script>
    <script src="/resources/js/newpost.js"></script>
  </body>
</html>