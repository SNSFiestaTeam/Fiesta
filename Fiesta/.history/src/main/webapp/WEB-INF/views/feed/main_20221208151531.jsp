<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<c:set var="boardList" value="${map.boardList}" />
<c:set var="pagination" value="${map.pagination}" />
<c:set var="accountList" value="${map.accountList}" />

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>

    <!-- CSS 링크 -->
        <link rel="stylesheet" href="/resources/css/search/search-style(web).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(tablet).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(mobile).css" />
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/main/main-style.css" />
    <link rel="stylesheet" href="/resources/css/action/feed-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/action/feed-menu-login-style.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/action/login-comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/action/share-style.css" />
    <link rel="stylesheet" href="/resources/css/action/report-style.css" />
    <link rel="stylesheet" href="/resources/css/dm/dm-message.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-style.css" />
    <link rel="stylesheet" href="/resources/css/action/confirm-style.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-auto-complete-style.css" />
    <link rel="stylesheet" href="/resources/css/action/boardDeteil-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-file-style.css" />
    <%-- <link rel="stylesheet" href="/resources/css/board/newpost-eidt-style.css" /> --%>
    <link rel="stylesheet" href="/resources/css/board/newpost-text-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-finish-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-close-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-complete-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-complete-style2.css" />

    <link rel="stylesheet" href="/resources/css/swiper-bundle.css" />


    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/591746f9e8.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <jsp:include page="/WEB-INF/views/common/header.jsp" />

    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
      <!-- 최대 6개 -->
      <div style="display:flex; justify-content:center; border:1px solid #ccc;
        padding: 10px 0; width:90%; border-radius:10px; ">
        <section class="accountResult-section" style="display:flex; flex-direction:column;">
            <span class="accountTitle">
                <span style="margin-left:10px; font-size:13px;">추천 멤버</span>
                <!-- <span>모두 보기</span> -->
            </span>
            
            <c:if test="${not empty accountList}">
            <article class="account-container" style="overflow-x:scroll">
              <c:forEach var="account" items="${accountList}">

              <c:if test="${account.memberNickname != loginMember.memberNickname}">
                <div class="account-Group">
                  <a href="/feed/${account.memberNickname}" class="profileImages" >
                    <c:if test="${not empty acoount.memberProfileImg}">
                      <img src="${account.memberProfileImg}">
                    </c:if>
                    <c:if test="${empty acoount.memberProfileImg}">
                      <img src="/resources/images/profile/profile.jpg">
                    </c:if>
                  </a>
                  <a href="/feed/${account.memberNickname}" style="font-size:8px" class="profileNickname">
                    ${account.memberNickname}
                  </a>
                </div>
              </c:if>
              <!-- 로그인멤버가 검색될때 -->
              <c:if test="${account.memberNickname == loginMember.memberNickname}">
                  <div class="account-Group">
                  <a href="/feed/${loginMember.memberNickname}" class="profileImages">
                    <c:if test="${not empty memberProfileImg}">
                      <img src="${memberProfileImg}">
                    </c:if>
                    <c:if test="${empty memberProfileImg}">
                      <img src="/resources/images/profile/profile.jpg">
                    </c:if>
                  </a>
                  <a href="/feed/${loginMember.memberNickname}" class="profileNickname" style="font-size:8px">
                    ${loginMember.memberNickname}
                  </a>
                </div>
              </c:if>

              </c:forEach>
            </article>
            </c:if>
        </section>
      </div>


      <section>
        <!-- 인스타 피드 -->
        <section class="feed-section" id="feedSection">
          <!-- 피드 리스트 -->
		  <c:if test="${empty boardList}">
          <div id="emptyBoardList">
            <span class="empty-board-logo">Fiesta</span>
            <sapn>멤버/해시태그를 검색하여 팔로우 하면 팔로우한 멤버/해시태그의 게시글이 보여요!</span>
          </div>
          </c:if>
          <c:if test="${not empty boardList}">
            <c:forEach var="board" items="${boardList}">
              <div class="feed">
                <div class="profile-image-area">
                  <!-- 작성자 프로필 -->
                  <div class="feed-header">
                    <div class="writer-info">
                      <a href="" class="profile-photo">
                        <c:if test="${empty board.memberProfileImg}">
                          <img class="feed-profile-image" src="/resources/images/profile/profile.jpg" />
                        </c:if>
                        <c:if test="${not empty board.memberProfileImg}">
                          <img class="feed-profile-image" src="${board.memberProfileImg}" />
                        </c:if>
                      </a>
                      <a href="#" class="feed-memberId">${board.memberNickname}</a>
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
                          <img class="uploaded-image" src="/resources/images/default/defaultImg.png" />
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
                      <button id="likeBtn" class="like-btn red"><i class="fa-solid fa-heart"></i></button>
                    </c:if>
                    <c:if test="${board.likeCheck == 0}">
                      <button id="likeBtn" class="like-btn"><i class="fa-regular fa-heart"></i></button>
                    </c:if>
                      <button id="commentBtn" class="comment-btn"><i class="fa-regular fa-comment"></i></button>
                      <button id="dmBtn" class="dm-btn"><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                    <div>
                      <c:if test="${board.bookmarkCheck == 1}">
                      <button id="bookmarkBtn" class="bookmark-btn"><i class="fa-solid fa-bookmark"></i></button>
                      </c:if>
                      <c:if test="${board.bookmarkCheck == 0}">
                      <button id="bookmarkBtn" class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
                      </c:if>
                    </div>
                  </div>

                  <div class="main-container">
                    <!-- 좋야요 수 표시 -->
                    <c:if test="${board.boardPubPriFlag == 'Y'}">
                    <div class="like-count">좋아요 <span class="board-like-count">${board.likeCount}</span>개</div>
                    </c:if>
                    <c:if test="${board.boardPubPriFlag == 'N'}">
                      <c:if test="${board.likeCount == 0}">
                      <div class="like-count">좋아요를 눌러주세요</div>
                      </c:if>
                      <c:if test="${board.likeCount == 1}">
                      <div class="like-count">한 명이 좋아합니다</div>
                      </c:if>
                      <c:if test="${board.likeCount > 1}">
                      <div class="like-count">여러명이 좋아합니다</div>
                      </c:if>
                    </c:if>


                    <!-- 본문 내용 -->
                    <div class="feed-main-content">
                      <div class="feed-content one-line">
                        <a href="#"><span class="member-id">${board.memberNickname}</span></a>
                        <span class = "board-content">
                          ${board.boardContent}
                        </span>
                      </div>

                      <c:if test="${fn:length(board.boardContent) > 20}">
                      <button type="button" class="more-btn">
                        <span id="textMore"> 더 보기</span>
                      </button>
                      </c:if>

                    </div>

                      <!-- 댓글 리스트 -->
                      <div class="comment-container">
                      <c:if test="${board.commentBlockFlag == 'N'}">
                        <c:if test="${fn:length(board.commentList) > 2}">
                        <button class="all-comment-btn">댓글 모두 보기(${fn:length(board.commentList)})</button>
                        </c:if>

                        <div class="comment-area">
                          <ul class="comment-list two-line">
                          <c:if test="${not empty board.commentList}">
                            <c:forEach var="comment" items="${board.commentList}">
                              <c:if test="${comment.upperCommentNo == 0 }">
                                <li class="comment">
                                  <input type="hidden" value="${comment.commentNo}" class="comment-no">
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
                                        <div class= "comment-id-content">
                                          <a href="#" class="comment-memberId">${comment.memberNickname}</a>
                                          <span class="comment-content">${comment.commentContent}</span>
                                        </div>
                                        <div>
                                          <c:if test="${comment.commentLikeCheck == 1}">
                                          <button class="comment-like-btn red"><i class="fa-solid fa-heart"></i></button>
                                          </c:if>
                                          <c:if test="${comment.commentLikeCheck == 0}">
                                          <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                                          </c:if>
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
                                  <button class="more-reply">모든 답글 보기(<span class ="reply-count">${comment.replyCount}</span>)</button>
                                  </c:if>
                                </li>
                              </c:if>

                                  <%-- <!-- 답글 리스트 -->
                                  <c:if test="${comment.upperCommentNo > 0}">
              
                                    <li class="comment" id="reply">
                                      <input type="hidden" value="${comment.commentNo}" class="comment-no">
                                      <div class="reply-firstchild">
                                        <a href="#" class="comment-profile">
                                          <c:if test="${empty comment.memberProfileImg}">
                                          <img class="comment-profile-image" src="/resources/images/profile/profile.jpg" />
                                          </c:if>
                                          <c:if test="${not empty comment.memberProfileImg}">
                                            <img class="comment-profile-image" src="${comment.memberProfileImg}" />
                                          </c:if>
                                        </a>
                                        <div>
                                          <div class="reply-firstline">
                                            <div>
                                              <a href="#" class="comment-memberId">${comment.memberNickname}</a>
                                              <a href="#" class="mention">@${comment.mentionNickname}</a>
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
                                    </li>
                                    <!-- 답글 li 종료 -->
                                  </c:if> --%>
                              <!-- 댓글 li 종료 -->
                            </c:forEach>
                          </c:if>
                          </ul>
                        </div>
                      </c:if>
                      </div>
                    <span class="create-date">${board.boardCreateDate}</span>
                  </div>
                  <div class="comment-input-area">
                  <c:if test="${board.commentBlockFlag == 'N'}">
                    <div>
                      <textarea name="comment" id="commentInput" class="comment-input" placeholder="댓글 달기..." autocomplete="off"></textarea>
                      <button class="posting-btn" disabled>게시</button>
                    </div>
                  </c:if>
                  </div>
                </div>
              <input type="hidden" class="board-no" value="${board.boardNo}">
              <input type="hidden" class="comment-block-fl" value="${board.commentBlockFlag}">
              <input type="hidden" class="board-pub-pri-fl" value="${board.boardPubPriFlag}">
              </div>
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
    <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-close.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-finish.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-update.jsp" />



    <jsp:include page="/WEB-INF/views/action/reportShareMenu.jsp" />
    <jsp:include page="/WEB-INF/views/action/dm-message.jsp" />
    <jsp:include page="/WEB-INF/views/action/comment.jsp" />
    <jsp:include page="/WEB-INF/views/action/confirm.jsp" />

    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

    <c:if test="${ not empty loginMember }">
      <script>
        var loginMember = "${loginMember}";
        var memberNo = "${loginMember.memberNo}";
        var memberNickname = "${loginMember.memberNickname}";
        var memberProfileImg = "${loginMember.memberProfileImg}";
        var upperCommentNo = 0;
        var boardNo;

        var deleteBoardNo;
        var deleteCommentNo;
        var deleteCommentUl;
        var deleteReplyCount;

        var modalOn = 0;
        var boardMemberNickname;
        var boardMemberProfileImg;

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


    <script type="text/javascript" defer src="/resources/js/main/main.js"></script>
    <script type="text/javascript" defer src="/resources/js/main/mainBoard.js"></script>
    <script type="text/javascript" defer src="/resources/js/main/comment.js"></script>
    <script type="text/javascript" defer src="/resources/js/common/common.js"></script>

    <script src="/resources/js/newpost.js"></script>
    <script src="/resources/js/boardWriteUpdate.js"></script>

  </body>
</html>
