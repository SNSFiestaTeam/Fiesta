<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> <%@ taglib prefix="fn"
uri="http://java.sun.com/jsp/jstl/functions"%>

<c:set var="boardList" value="${map.boardList}" />
<c:set var="pagination" value="${map.pagination}" />

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>

    <!-- CSS 링크 -->
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/main-style.css" />
    <link rel="stylesheet" href="/resources/css/feed-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/share-style.css" />
    <link rel="stylesheet" href="/resources/css/report-style.css" />
    <link rel="stylesheet" href="/resources/css/comment-style.css" />
    <link rel="stylesheet" href="/resources/css/dm-message.css" />
    <link rel="stylesheet" href="/resources/css/flexslider.css" />

    <link rel="stylesheet" href="/resources/css/newpost-file-style.css" />
    <link rel="stylesheet" href="/resources/css/newpost-eidt-style.css" />
    <link rel="stylesheet" href="/resources/css/newpost-text-style.css" />

    <link rel="stylesheet" href="/resources/css/swiper-bundle.css" />

    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/591746f9e8.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <jsp:include page="/WEB-INF/views/common/header.jsp" />

    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
      <section>
        <!-- 인스타 피드 -->
        <section class="feed-section" id="feedSection">
          <!-- 피드 리스트 -->

          <c:if test="${not empty boardList}">
            <c:forEach var="board" items="${boardList}">
              <div class="feed">
                <div class="profile-image-area">
                  <!-- 작성자 프로필 -->
                  <div class="feed-header">
                    <div class="writer-info">
                      <a href="" class="profile-photo">
                        <c:if test="${empty board.memberProfileImg}">
                          <img class="feed-profile-image" src="/resources/images/profile.jpg" />
                        </c:if>
                        <c:if test="${not empty board.memberProfileImg}">
                          <img class="feed-profile-image" src="${board.memberProfileImg}" />
                        </c:if>
                      </a>
                      <a href="#" class="feed-memberId">${board.memberNickname}${board.boardNo}</a>
                    </div>
                    <div>
                      <button type="button" class="fa-solid fa-ellipsis feed-header-menu"></button>
                    </div>
                  </div>

                  <!-- 사진 목록 -->
                  <div class="image-list swiper mySwiper">
                    <ul class="swiper-wrapper">
                      <c:if test="${empty board.imageList}">
                        <li class="swiper-slide">
                          <img class="uploaded-image" src="/resources/images/이영지.jpg" />
                        </li>
                      </c:if>
                      <c:if test="${not empty board.imageList}">
                        <c:forEach var="img" items="${board.imageList}">
                          <li class="swiper-slide">
                            <img class="uploaded-image" src="${img.imgAddress}${img.imgChangeName}" />
                          </li>
                        </c:forEach>
                      </c:if>
                    </ul>
                    <div class="swiper-button-next swiper-btn"></div>
                    <div class="swiper-button-prev swiper-btn"></div>
                    <div class="swiper-pagination swiper-btn"></div>
                  </div>
                </div>

                <!-- 본문 -->
                <div class="main-content-section">
                  <div class="comment-icon-menu">
                    <div>
                    <c:if test="${board.likeCheck == 1}">
                      <button id="likeBtn" class="like-btn"><i class="fa-regular fa-heart"></i></button>
                    </c:if>
                    <c:if test="${board.likeCheck == 0}">
                      <button id="likeBtn" class="like-btn"><i class="fa-regular fa-heart"></i></button>
                    </c:if>
                      <button id="commentBtn" class="comment-btn"><i class="fa-regular fa-comment"></i></button>
                      <button id="dmBtn" class="dm-btn"><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                    <div>
                      <button id="bookmarkBtn" class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
                    </div>
                  </div>

                  <div class="main-container">
                    <!-- 좋야요 수 표시 -->
                    <div class="like-count">좋아요 <span class="board-like-count">${board.likeCount}</span>개</div>

                    <!-- 본문 내용 -->
                    <div class="feed-main-content">
                      <div class="feed-content one-line">
                        <a href="#"><span class="member-id">${board.memberNickname}</span></a>
                        <span>
                          ${board.boardContent}
                          <a href="#" class="hashtag">#aespa</a><a href="#" class="hashtag">#에스파</a><a href="#" class="hashtag">#KARINA</a><a href="#" class="hashtag">#카리나</a>
                        </span>
                      </div>

                      <button type="button" class="more-btn">
                        <span id="textMore"> 더 보기</span>
                      </button>
                    </div>

                    <c:if test="${not empty board.commentList}">
                      <!-- 댓글 리스트 -->
                      <div class="comment-container">
                        <c:if test="${fn:length(board.commentList) > 2}">
                        <button class="all-comment-btn">댓글 모두 보기(${fn:length(board.commentList)})</button>
                        </c:if>

                        <div class="comment-area">
                          <ul class="comment-list two-line">
                            <c:forEach var="comment" items="${board.commentList}">
                              <c:if test="${comment.upperCommentNo == 0 }">
                                <li class="comment">
                                  <div class="comment-firstchild">
                                    <a href="#" class="comment-profile">
                                      <c:if test="${empty comment.memberProfileImg}">
                                        <img class="comment-profile-image" src="/resources/images/profile/profile.jpg" />
                                      </c:if>
                                      <c:if test="${not empty comment.memberProfileImg}">
                                        <img class="comment-profile-image" src="${comment.memberProfileImg}" />
                                      </c:if>
                                    </a>
                                    <div>
                                      <div class="comment-firstline">
                                        <div>
                                          <a href="#" class="comment-memberId">${comment.memberNickname}</a>
                                          <span class="comment-content">${comment.commentContent}</span>
                                        </div>
                                        <div>
                                          <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                                        </div>
                                      </div>
                                      <div class="create-reply">
                                        <span>${comment.commentCreateDate}</span>
                                        <button class="reply-btn">답글 달기</button>
                                        <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                                      </div>
                                    </div>
                                  </div>
                                  <c:if test="${comment.replyCount > 0}">
                                  <a href="#" class="more-reply">모든 답글 보기(${comment.replyCount})</a>
                                  </c:if>

                                  <!-- 답글 리스트 -->

                                  <ul>
                                    <!-- 두번째 댓글의 답글 -->
                                    <!--<li class="comment" id="reply">
                                      <div class="reply-firstchild">
                                        <a href="#" class="comment-profile">
                                          <img class="comment-profile-image" src="/resources/images/karina.jpeg" />
                                        </a>
                                        <div>
                                          <div class="reply-firstline">
                                            <div>
                                              <a href="#" class="reply-memberId">karina_aespas_</a>
                                              <a href="#" class="mention">@for_everyoung10</a>
                                              <span class="comment-content">나두 사랑해</span>
                                            </div>
                                            <div>
                                              <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                                            </div>
                                          </div>
                                          <div class="create-reply">
                                            <span>${comment.commentCreateDate}<span>
                                            <button class="reply-btn">답글 달기</button>
                                            <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                                          </div>
                                        </div>
                                      </div>
                                    </li> -->
                                    <!-- 답글 li 종료 -->
                                  </ul>
                                </li>
                              </c:if>
                              <!-- 댓글 li 종료 -->
                            </c:forEach>
                          </ul>
                        </div>
                      </div>
                    </c:if>
                    <span class="create-date">${board.boardCreateDate}</span>
                  </div>
                  <div class="comment-input-area">
                    <div>
                      <input name="comment" id="commentInput" class="comment-input" type="text" placeholder="댓글 달기..." autocomplete="off" />
                      <button class="posting-btn" disabled>게시</button>
                    </div>
                  </div>
                </div>
              </div>
              <input type="hidden" class="board-no" value="${board.boardNo}">
            </c:forEach>
          </c:if>
        </section>
      </section>
      <div id="endList"></div>
    </main>

    <input type="hidden" value="${loginMember}" name="loginUser" />
    <!-- footer include -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />

    <!-- 모달창 include -->
    <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />

    <jsp:include page="/WEB-INF/views/action/reportShareMenu.jsp" />
    <jsp:include page="/WEB-INF/views/action/dm-message.jsp" />

    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

    <c:if test="${ not empty loginMember }">
      <script>
        var loginMember = "${loginMember}";
        var memberNo = "${loginMember.memberNo}";
        var memberNickname = "${loginMember.memberNickname}";
        var memberProfileImg = "${loginMember.memberProfileImg}";
      </script>
    </c:if>

    <script>
      var swiper = new Swiper(".mySwiper", {
        speed: 1000,
        // cssMode: true,

        // 반복
        loop: false,
        // 반복 시 이미지 계속 넘어갈 수 있게
        // loopAdditionalSlides: 1,

        // 해당 슬라이드 클릭 시 슬라이드 위치로 이동
        slideToClickedSlide: true,

        // 슬라이드 터치에 대한 저항 여부
        resistance: false,

        // 슬라이드가 1개일 때 pager, button 숨김 여부
        watchOverflow: true,

        grabCursor: false,

        spaceBetween: 30,
        hashNavigation: {
          watchState: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });
    </script>

    <script type="text/javascript" defer src="/resources/js/main.js"></script>
    <script type="text/javascript" defer src="/resources/js/mainBoard.js"></script>
    <script src="/resources/js/newpost.js"></script>
  </body>
</html>
