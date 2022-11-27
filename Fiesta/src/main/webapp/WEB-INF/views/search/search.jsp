<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


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
            
            <article class="account-container">

              <c:forEach var="i" begin="1" end="6">
                <div class="account-Group">
                  <a href="/feed/{loginMember.memberNickname}" class="profileImages">
                    <img src="/resources/images/profile/profile.jpg">
                  </a>
                  <a href="/feed/${loginMember.memberNickname}" class="profileNickname">
                    ${accountList.memberNickname}
                  </a>
                  <span class="follow-button-small">
                    <a href="">팔로우</a>
                  </span>
                </div>
              </c:forEach>
                
                <!-- <div class="account-Group">
                  <a href="#" class="profileImages">
                    <img src="../../resources/images/1973ca8ce1b8dc4bac38683bc39d7fbd.jpg">
                  </a>
                  <a href="#" class="profileNickname">
                    고양이집사2
                  </a>
                  <span class="follow-button-small">
                    <a href="">팔로우</a>
                  </span>
                </div>

                <div class="account-Group">
                  <a href="#" class="profileImages">
                    <img src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg">
                  </a>
                  <a href="#" class="profileNickname">
                    고양이집사3
                  </a>
                  <span class="follow-button-small">
                    <a href="">팔로우</a>
                  </span>
                </div>

                <div class="account-Group">
                  <a href="#" class="profileImages">
                    <img src="../../resources/images/2159c9572a920ef17d26d2d57b76d7a8.jpg">
                  </a>
                  <a href="#" class="profileNickname">
                    강아지엄마
                  </a>
                  <span class="follow-button-small">
                    <a href="">팔로우</a>
                  </span>
                </div>

                <div class="account-Group">
                  <a href="#" class="profileImages">
                    <img src="../../resources/images/3a6f19a15fea55a21cf71a7b3e0f2434.jpg">
                  </a>
                  <a href="#" class="profileNickname">
                    강아지아빠
                  </a>
                  <span class="follow-button-small">
                    <a href="">팔로우</a>
                  </span>
                </div>

                <div class="account-Group">
                  <a href="#" class="profileImages">
                    <img src="../../resources/images/8983e3185d5dc741e425f7c06f907f1b.jpg">
                  </a>
                  <a href="#" class="profileNickname">
                    강아지이모
                  </a>
                  <span class="follow-button-small">
                    <a href="">팔로우</a>
                  </span>
                </div> -->

                <!-- <div id="more">
                    <a href="#">...</a>
                </div> -->
            </article>
        </section>


        <section class="boardResult-section">
            <div>
                인기 게시글
            </div>

            <div class="boardResult">
              <div class="boardImage">
                <a href="#"><img src="../../resources/images/14f5961af72ef1686b2548d7c5c792e6.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/1973ca8ce1b8dc4bac38683bc39d7fbd.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt=""></a> 
              </div>
              <div class="boardImage">
                <a href="#"><img src="../../resources/images/2159c9572a920ef17d26d2d57b76d7a8.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/3a6f19a15fea55a21cf71a7b3e0f2434.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/3bfe8e6e6ee1f835a979cd1baad59d06.jpg" alt=""></a> 
              </div>
              <div class="boardImage">
                <a href="#"><img src="../../resources/images/square/dog2.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/square/cat3.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/square/dog1.jpg" alt=""></a> 
              </div>
            </div>
        </section>

        <section class="recentBoardResult-section">
            <div>
                최근 게시글
            </div>

            <div class="boardResult">
              <div class="boardImage">
                <a href="#"><img src="../../resources/images/14f5961af72ef1686b2548d7c5c792e6.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/1973ca8ce1b8dc4bac38683bc39d7fbd.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt=""></a> 
              </div>
              <div class="boardImage">
                <a href="#"><img src="../../resources/images/2159c9572a920ef17d26d2d57b76d7a8.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/3a6f19a15fea55a21cf71a7b3e0f2434.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/3bfe8e6e6ee1f835a979cd1baad59d06.jpg" alt=""></a> 
              </div>
              <div class="boardImage">
                <a href="#"><img src="../../resources/images/square/dog2.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/square/cat3.jpg" alt=""></a> 
                <a href="#"><img src="../../resources/images/square/dog1.jpg" alt=""></a> 
              </div>
            </div>
        </section>

    </main>



    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

    <%-- jQuery 라이브러리(.js 파일) 추가 (CDN 방식 (Content Delivery Network)) --%>
    <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>

    <script src="/resources/js/search/search.js"></script>
    </body>
  </html>