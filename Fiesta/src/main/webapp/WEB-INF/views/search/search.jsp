<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"  %>

<c:set var="accountTotal" value="${searchResultMap.accountTotal}"/>
<c:set var="boardTotal" value="${searchResultMap.boardTotal}"/>
<c:set var="accountList" value="${searchResultMap.accountList}"/>
<c:set var="hotBoardList" value="${searchResultMap.hotBoardList}"/>
<c:set var="recentBoardList" value="${searchResultMap.recentBoardList}"/>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>검색</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(web).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(tablet).css" />
    <link rel="stylesheet" href="/resources/css/search/search-style(mobile).css" />
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
            <div class="keywordPicture">
                <img src="../../resources/images/square/cat1.jpg">
            </div>

            <div class="keyword-area">
                <div>
                    <div class="searchKeyword">
                        <script>searchInput.value</script>
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

                <div class="follow-button">
                    <a href="/main/search/followHashtag">팔로우</a>
                </div>
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
                  <span class="follow-button-small">
                    <a href="" id="aFollow">팔로우</a>
                  </span>
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

          <c:if test="${fn:length(hotBoardList) >= 0}"> 
            <div class="boardResult">
            <c:if test="${fn:length(hotBoardList) > 0}">
              <div class="boardImage">
                <c:forEach var="hotItem" items="${hotBoardList}" begin="0" end="2">
                <a href="#"><img src="${hotItem.imgPath}" alt=""></a> 
                </c:forEach>
              </div>
            </c:if>
            <c:if test="${fn:length(hotBoardList) > 3}">
              <div class="boardImage">
                <c:forEach var="hotItem" items="${hotBoardList}" begin="3" end="5">
                <a href="#"><img src="${hotItem.imgPath}" alt=""></a> 
                </c:forEach>
              </div>
            </c:if>
            <c:if test="${fn:length(hotBoardList) > 6}">
              <div class="boardImage">
                <c:forEach var="hotItem" items="${hotBoardList}" begin="6" end="8">
                <a href="#"><img src="${hotItem.imgPath}" alt=""></a> 
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

          <%-- <c:if test="${not empty recentBoardList}}"> --%>
            <c:if test="${fn:length(recentBoardList) >= 3}">
              <div class="boardResult">
                <c:if test="${fn:length(recentBoardList) > 0}">
                  <div class="boardImage">
                    <c:forEach var="recentItem" items="${recentBoardList}" begin="0" end="2">
                      <a href="#"><img src="${recentItem.imgPath}" alt=""></a> 
                    </c:forEach>
                  </div>
                </c:if>
               
                <c:if test="${fn:length(recentBoardList) > 3}">
                  <div class="boardImage">
                    <c:forEach var="recentItem" items="${recentBoardList}" begin="3" end="5">
                      <a href="#"><img src="${recentItem.imgPath}" alt=""></a> 
                    </c:forEach>
                  </div>
                </c:if>
                
                <c:if test="${fn:length(recentBoardList) > 6}">
                  <div class="boardImage">
                    <c:forEach var="recentItem" items="${recentBoardList}" begin="6" end="8">
                      <a href="#"><img src="${recentItem.imgPath}" alt=""></a> 
                    </c:forEach>
                  </div>
                </c:if>
              </div>
            </c:if>
          <%-- </c:if> --%>

          <c:if test="${empty recentBoardList}">
            <div class="emptyResultMessage">
                검색 결과가 없습니다.
            </div>
          </c:if>
        </section>

    </main>



    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

    <script src="/resources/js/search/search.js"></script>
    </body>
  </html>