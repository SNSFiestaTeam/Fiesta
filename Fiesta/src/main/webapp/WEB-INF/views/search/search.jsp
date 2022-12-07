<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"  %>

<c:set var="accountTotal" value="${searchResultMap.accountTotal}"/>
<c:set var="boardTotal" value="${searchResultMap.boardTotal}"/>
<c:set var="accountList" value="${searchResultMap.accountList}"/>
<c:set var="hotBoardList" value="${searchResultMap.hotBoardList}"/>
<c:set var="recentBoardList" value="${searchResultMap.recentBoardList}"/>

<c:set var="rBoardList" value="${recentResultMap.recentBoardList}" />
<c:set var="pagination" value="${recentResultMap.pagination}" />

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>검색</title>
    
    <!-- CSS  링크 -->
    <link rel="stylesheet" href="/resources/css/dm/dm-message.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-file-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-eidt-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-text-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-finish-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-close-style.css" />


    <link rel="stylesheet" href="/resources/css/common-style.css" />
    
    <link rel="stylesheet" href="/resources/css/action/comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/action/share-style.css" />
    <link rel="stylesheet" href="/resources/css/action/report-style.css" />
    <link rel="stylesheet" href="/resources/css/action/confirm-style.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-auto-complete-style.css" />
    <link rel="stylesheet" href="/resources/css/action/feed-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/action/feed-menu-login-style.css" />
    <link rel="stylesheet" href="/resources/css/action/login-comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/action/boardDetail-style.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-style.css" />

    <link rel="stylesheet" href="/resources/css/swiper-bundle.css" />

    <link rel="stylesheet" href="/resources/css/search/board-detail-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(web).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(tablet).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(mobile).css" />
    <link rel="stylesheet" href="/resources/css/search/search-complete-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-complete-style2.css" />

    <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    
    <jsp:include page="/WEB-INF/views/common/header.jsp" />


    <!-- 검색결과 -->
    <main>

         <!-- 검색하면,
            맨위 : 검색어, 검색결과 통계, 팔로우
            중반 : 계정 검색결과 (프로필, 아이디, 소개글(이름/comment), 팔로우버튼)
            아래 : 사진 검색결과 (3*3)
        -->

        <section class="keywordResult-section">
            <%-- 검색 결과 대표 이미지 (인기게시글로) --%>
            <div class="keywordPicture">
                <c:if test="${not empty hotBoardList}">  <%-- 있으면 인기글 첫번째 이미지 --%>
                  <c:forEach var="hotItem" items="${hotBoardList}" begin="0" end="0">
                    <button><img src="${hotItem.imgPath}" alt="" class="keywordPic"></button> 
                  </c:forEach>
                </c:if>

                <c:if test="${empty hotBoardList}"> <%-- 없으면 기본이미지 --%>
                    <button><img src="/resources/images/default/defaultImg.png" alt="" class="keywordPic"></button> 
                </c:if>
            </div>

            <div class="keyword-area">
                <div>
                    <div class="searchKeyword">
                        #${searchInput}
                    </div>
                </div>    
                <div class="total">
                    <span class="total-name">
                        <span>관련 계정</span> 
                        <span>게시글</span> 
                    </span>
                    <span class="total-number">
                        <span>${accountTotal}</span> <!--계정 결과값 -->
                        <span>${boardTotal}</span> <!-- 게시글 결과값 -->
                    </span>
                </div>
                <!-- 팔로우 버튼 -->
                <div class="follow-button" id="followHashtagBtn"></div>
            </div>
        </section>


       

        <!-- 최대 6개 -->
        <section class="accountResult-section">
            <span class="accountTitle">
                <span>관련 있는 계정</span>
                <!-- <span>모두 보기</span> -->
            </span>
            
            <c:if test="${not empty accountList}">
              <article class="account-container">
                <c:forEach var="account" items="${accountList}">

                <c:if test="${account.memberNickname != loginMember.memberNickname}">
                  <div class="account-Group">
                    <a href="/feed/${account.memberNickname}" class="profileImages">
                      <c:if test="${not empty acoount.memberProfileImg}">
                        <img src="${account.memberProfileImg}">
                      </c:if>
                      <c:if test="${empty acoount.memberProfileImg}">
                        <img src="/resources/images/profile/profile.jpg">
                      </c:if>
                    </a>
                    <a href="/feed/${account.memberNickname}" class="profileNickname">
                      ${account.memberNickname}
                    </a>
                    <!-- 팔로우 버튼 -->
                    <div class="follow-button-small"></div>
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
                    <a href="/feed/${loginMember.memberNickname}" class="profileNickname">
                      ${loginMember.memberNickname}
                    </a>
                    <!-- 팔로우 버튼 -->
                    <div class="myAccount">내계정</div>
                  </div>
                </c:if>

                </c:forEach>
              </article>
            </c:if>

            <c:if test="${empty accountList}">
              <article class="emptyResultMessage">
                검색 결과가 없습니다.
              </article>
            </c:if>
        </section>


        <section class="boardResult-section">
          <div>
            인기 게시글
          </div>

          <c:if test="${not empty hotBoardList}"> 
            <div class="boardResult">
              <c:if test="${fn:length(hotBoardList) > 0}">
                <div class="boardImage">
                  <c:forEach var="hotItem" items="${hotBoardList}" begin="0" end="2">
                    <button class="buttonBoardImage">
                      <img class="b-img" src="${hotItem.imgPath}" alt=""> 
                      <div class="hover-icon-container">
                        <i class="fa-regular fa-heart iHover"></i><span class="spanHover">${hotItem.likeCount}</span>
                        <i class="fa-regular fa-comment iHover"></i><span class="spanHover">${hotItem.commentCount}</span>
                      </div>
                      <input type="hidden" class="inputBoardNo"  value="${hotItem.boardNo}">
                    </button>
                  </c:forEach>
                </div>
              </c:if>

              <c:if test="${fn:length(hotBoardList) > 3}">
                <div class="boardImage">
                  <c:forEach var="hotItem" items="${hotBoardList}" begin="3" end="5">
                    <button class="buttonBoardImage">
                      <img class="b-img" src="${hotItem.imgPath}" alt=""> 
                      <div class="hover-icon-container">
                        <i class="fa-regular fa-heart iHover"></i><span class="spanHover">${hotItem.likeCount}</span>
                        <i class="fa-regular fa-comment iHover"></i><span class="spanHover">${hotItem.commentCount}</span>
                      </div>
                      <input type="hidden" class="inputBoardNo"  value="${hotItem.boardNo}">
                    </button>
                  </c:forEach>
                </div>
              </c:if> 

              <c:if test="${fn:length(hotBoardList) > 6}">
                <div class="boardImage">
                  <c:forEach var="hotItem" items="${hotBoardList}" begin="6" end="8">
                    <button class="buttonBoardImage">
                      <img class="b-img" src="${hotItem.imgPath}" alt="">
                      <div class="hover-icon-container">
                        <i class="fa-regular fa-heart iHover"></i><span class="spanHover">${hotItem.likeCount}</span>
                        <i class="fa-regular fa-comment iHover"></i><span class="spanHover">${hotItem.commentCount}</span>
                      </div>
                      <input type="hidden" class="inputBoardNo"  value="${hotItem.boardNo}">
                    </button> 
                  </c:forEach>
                </div>              
              </c:if>
            </div>
          </c:if>
      
          <c:if test="${empty hotBoardList}">
            <div class="emptyResultMessage">
                검색 결과가 없습니다.
            </div>
          </c:if>
        </section>


        <section class="recentBoardResult-section">
          <div>
              최근 게시글
          </div>

          <c:if test="${not empty recentBoardList}"> 
            <div class="boardResult" id="boardResult">

              <c:if test="${fn:length(recentBoardList) > 0}">
                <div class="boardImage">
                  <c:forEach var="recentItem" items="${recentBoardList}" begin="0" end="2">
                    <button class="buttonBoardImage">
                      <img class="b-img" src="${recentItem.imgPath}" alt="" >
                      <div class="hover-icon-container">
                        <i class="fa-regular fa-heart iHover"></i>
                        <span class="spanHover">${recentItem.likeCount}</span>
                        <i class="fa-regular fa-comment iHover"></i>
                        <span class="spanHover">${recentItem.commentCount}</span>
                      </div>
                      <input type="hidden" class="inputBoardNo"  value="${recentItem.boardNo}">
                    </button> 
                  </c:forEach>
                </div>
              </c:if>



              <c:if test="${fn:length(recentBoardList) > 3}">
                <div class="boardImage">
                  <c:forEach var="recentItem" items="${recentBoardList}" begin="3" end="5">
                    <button class="buttonBoardImage">
                      <img class="b-img" src="${recentItem.imgPath}" alt="">
                      <div class="hover-icon-container">
                        <i class="fa-regular fa-heart iHover"></i><span class="spanHover">${recentItem.likeCount}</span>
                        <i class="fa-regular fa-comment iHover"></i><span class="spanHover">${recentItem.commentCount}</span>
                      </div>
                      <input type="hidden" class="inputBoardNo"  value="${recentItem.boardNo}">
                    </button> 
                  </c:forEach>
                </div>
              </c:if> 




              <c:if test="${fn:length(recentBoardList) > 6}">
                <div class="boardImage">
                  <c:forEach var="recentItem" items="${recentBoardList}" begin="6" end="8">
                    <button class="buttonBoardImage">
                      <img class="b-img" src="${recentItem.imgPath}" alt="">
                      <div class="hover-icon-container">
                        <i class="fa-regular fa-heart iHover"></i><span class="spanHover">${recentItem.likeCount}</span>
                        <i class="fa-regular fa-comment iHover"></i><span class="spanHover">${recentItem.commentCount}</span>
                      </div>
                      <input type="hidden" class="inputBoardNo"  value="${recentItem.boardNo}">
                    </button> 
                  </c:forEach>
                </div>              
              </c:if>



            </div> <%-- boardResult 끝 --%>
          
          </c:if>


          <c:if test="${empty recentBoardList}">
            <div class="emptyResultMessage">
                검색 결과가 없습니다.
            </div>
          </c:if>
        </section>

    </main>

    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>


    <jsp:include page="/WEB-INF/views/action/reportShareMenu.jsp" />
    <jsp:include page="/WEB-INF/views/action/dm-message.jsp" />
    <jsp:include page="/WEB-INF/views/action/confirm.jsp" />
    <jsp:include page="/WEB-INF/views/action/comment.jsp" />

    <!-- 모달창 include -->
    <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-close.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-finish.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-update.jsp" />


    <%-- 검색 게시글 상세조회 --%>
    <jsp:include page="/WEB-INF/views/action/boardDetail.jsp"/>
    

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

        var commentBlockFlag;
        var boardPubPriFlag;

        var tags;

        var mentionSet = null;
      </script>
    </c:if>

    <script>
      var swiper = new Swiper(".searchSwiper", {
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



    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        
    <script src="/resources/js/newpost.js"></script>
    <script src="/resources/js/boardWriteUpdate.js"></script>

    <script src="/resources/js/search/search.js"></script> <%-- mainBoard.js와 거의 동일 --%>
    <script src="/resources/js/follow/follow.js"></script>
    <script src="/resources/js/common/common.js"></script>

    </body>
  </html>
 
