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
    <link rel="stylesheet" href="/resources/css/main/main-style.css" />
    <link rel="stylesheet" href="/resources/css/action/boardDetail-style.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-style.css" />
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/action/comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(web).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(tablet).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(mobile).css" />

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
                    <button class="aBoardImage">
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
                    <button class="aBoardImage">
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
                    <button class="aBoardImage">
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
            <div class="boardResult">
              <c:if test="${fn:length(recentBoardList) > 0}">
                <div class="boardImage">
                  <c:forEach var="recentItem" items="${recentBoardList}" begin="0" end="2">
                    <button class="aBoardImage">
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
                    <button class="aBoardImage">
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
                    <button class="aBoardImage">
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
            </div>
          

            <!-- 새로 나타나는 페이지 -->
            <!-- <c:if test="${fn:length(recentBoardList) > 9}">
              <div class="boardImage">
                <c:forEach var="recentItem" items="${recentBoardList}" begin="9" end="11">
                  <button class="aBoardImage">
                    <img class="b-img" src="${recentItem.imgPath}" alt="">
                    <div class="hover-icon-container">
                      <i class="fa-regular fa-heart iHover"></i><span class="spanHover">${recentItem.likeCount}</span>
                      <i class="fa-regular fa-comment iHover"></i><span class="spanHover">${recentItem.commentCount}</span>
                    </div>
                  </button> 
                </c:forEach>
              </div>              
            </c:if>
          </div>
            <div class="boardImage">
                글을 써보자
            </div>
            <div class="boardImage">
                출력되는지 확인하기
            </div>
            <div class="boardImage">
                무한 스크롤 어떻게 하는거야
            </div>
            <div class="boardImage">
                어후
            </div> -->
            
          
          
          
          
          
          
          </c:if>




          <c:if test="${empty recentBoardList}">
            <div class="emptyResultMessage">
                검색 결과가 없습니다.
            </div>
          </c:if>
        </section>




    </main>

    <jsp:include page="/WEB-INF/views/action/boardDetail.jsp"/>
    <jsp:include page="/WEB-INF/views/action/reportShareMenu.jsp"/>
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>


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

    <script>
      var memberNo = "${loginMember.memberNo}";
      var memberNickname = "${loginMember.memberNickname}";
      var upperCommentNo = 0;
    </script>


    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        
    <script src="/resources/js/search/search.js"></script>
    <script src="/resources/js/follow/follow.js"></script>
    <script src="/resources/js/common/common.js"></script>

    </body>
  </html>
