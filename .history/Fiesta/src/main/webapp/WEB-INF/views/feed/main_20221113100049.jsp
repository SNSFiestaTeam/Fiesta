<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fiesta</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/main-style.css" />
    <link rel="stylesheet" href="/resources/css/feed-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/comment-menu-style.css" />
    <link rel="stylesheet" href="/resources/css/share-style.css" />
    <link rel="stylesheet" href="/resources/css/report-style.css" />
    <link rel="stylesheet" href="/resources/css/comment-style.css" />
    <link rel="stylesheet" href="/resources/css/newpost-file-style.css" />
    <link rel="stylesheet" href="/resources/css/dm-message.css" />
    <link rel="stylesheet" href="/resources/css/flexslider.css" />
    <script src="https://kit.fontawesome.com/591746f9e8.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <jsp:include page="/WEB-INF/views/common/header.jsp" />

    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
      <section>
        <!-- 인스타 피드 -->
        <section class="feed-section">
          <!-- 피드 리스트 -->
          <p>${sessionScope.loginMember}</p>
          <div class="feed">
            <div class="profile-image-area">
              <!-- 작성자 프로필 -->
              <div class="feed-header">
                <div class="writer-info">
                  <a href="" class="profile-photo">
                    <img class="feed-profile-image" src="/resources/images/은우.jpg" />
                  </a>
                  <a href="#" class="feed-memberId">eunwo.o_c</a>
                </div>
                <div>
                  <button type="button" class="fa-solid fa-ellipsis feed-header-menu"></button>
                </div>
              </div>

              <!-- 사진 목록 -->
              <div class="image-list flexslider">
                <ul class="slides">
                  <li>
                    <img class="uploaded-image" src="/resources/images/은우.jpg" alt="" />
                  </li>
                  <li>
                    <img class="uploaded-image" src="/resources/images/은우2.jpg" alt="" />
                  </li>
                  <li>
                    <img class="uploaded-image" src="/resources/images/은우3.jpg" alt="" />
                  </li>
                </ul>
                <p class="controller">
                  <button type="button" class="left-btn">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <button type="button" class="right-btn">
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </p>
              </div>
            </div>

            <!-- 본문 -->
            <div class="main-content-section">
              <div class="comment-icon-menu">
                <div>
                  <button id="likeBtn" class="like-btn"><i class="fa-regular fa-heart"></i></button>
                  <button id="commentBtn" class="comment-btn"><i class="fa-regular fa-comment"></i></button>
                  <button id="dmBtn"><i class="fa-regular fa-paper-plane dm-btn"></i></button>
                </div>
                <div>
                  <button id="bookmarkBtn" class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
                </div>
              </div>

              <div class="main-container">
                <!-- 좋야요 수 표시 -->
                <div class="like-count">좋아요 27,654개</div>

                <!-- 본문 내용 -->
                <div class="feed-main-content">
                  <div class="feed-content one-line">
                    <a href="#"><span class="member-id">eunwo.o_c</span></a>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate sint corporis officiis quibusdam natus eveniet. Error doloribus itaque voluptatem in neque totam? Ut
                    tenetur omnis unde in, dignissimos nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi tempora placeat ad consectetur eligendi consequuntur facere alias
                    doloribus eveniet vero. Cumque enim ipsa iusto eos voluptatum distinctio inventore rem repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
                    commodi suscipit expedita mollitia officia, veniam dolor quibusdam dolores officiis error similique. Odit, fuga consequuntur! Vel eos cumque veniam et!
                  </div>

                  <div class="hashtag"><a href="#">#aespa</a><a href="#">#에스파</a><a href="#">#KARINA</a><a href="#">#카리나</a></div>
                  <button type="button" class="more-btn">
                    <span id="textMore"> 더 보기</span>
                  </button>
                </div>

                <!-- 댓글 리스트 -->
                <div class="comment-container">
                  <button class="all-comment-btn">댓글 더보기</button>
                  <div class="comment-area">
                    <ul class="comment-list two-line">
                      <!-- 두번째 댓글(답글 보기 O) -->
                      <li class="comment">
                        <div class="comment-firstchild">
                          <a href="#" class="comment-profile">
                            <img class="comment-profile-image" src="/resources/images/장원영.jpg" />
                          </a>
                          <div>
                            <div class="comment-firstline">
                              <div>
                                <a href="#" class="comment-memberId">for_everyoung10</a>
                                <span class="comment-content">사랑해</span>
                              </div>
                              <div>
                                <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                              </div>
                            </div>
                            <div class="create-reply">
                              <span>2주</span>
                              <button class="reply-btn">답글 달기</button>
                              <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="more-reply">답글 숨기기</a>
                        <!-- 답글 리스트 -->
                        <ul>
                          <!-- 두번째 댓글의 답글 -->
                          <li class="comment" id="reply">
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
                                  <a href="#">2주</a>
                                  <a href="#" class="reply-btn2">답글 달기</a>
                                  <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>

                      <!-- 세번째 댓글 -->
                      <li class="comment">
                        <div class="comment-firstchild">
                          <a href="#" class="comment-profile">
                            <img class="comment-profile-image" src="/resources/images/이영지.jpg" />
                          </a>
                          <div>
                            <div class="comment-firstline">
                              <div>
                                <a href="#" class="comment-memberId">youngji_02</a>
                                <span class="comment-content">하트 뿅뿅</span>
                              </div>
                              <div>
                                <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                              </div>
                            </div>
                            <div class="create-reply">
                              <a href="#">2주</a>
                              <a href="#" class="reply-btn">답글 달기</a>
                              <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="more-reply">모든 답글 보기(1개)</a>
                      </li>
                      <!-- 세번째 댓글 -->
                      <li class="comment">
                        <div class="comment-firstchild">
                          <a href="#" class="comment-profile">
                            <img class="comment-profile-image" src="/resources/images/이영지.jpg" />
                          </a>
                          <div>
                            <div class="comment-firstline">
                              <div>
                                <a href="#" class="comment-memberId">youngji_02</a>
                                <span class="comment-content">레전드</span>
                              </div>
                              <div>
                                <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                              </div>
                            </div>
                            <div class="create-reply">
                              <a href="#">2주</a>
                              <a href="#" class="reply-btn">답글 달기</a>
                              <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="more-reply">모든 답글 보기(1개)</a>
                      </li>
                      <!-- 세번째 댓글 -->
                      <li class="comment">
                        <div class="comment-firstchild">
                          <a href="#" class="comment-profile">
                            <img class="comment-profile-image" src="/resources/images/이영지.jpg" />
                          </a>
                          <div>
                            <div class="comment-firstline">
                              <div>
                                <a href="#" class="comment-memberId">youngji_02</a>
                                <span class="comment-content">대박이다 진짜 이쁘다</span>
                              </div>
                              <div>
                                <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                              </div>
                            </div>
                            <div class="create-reply">
                              <a href="#">2주</a>
                              <a href="#" class="reply-btn">답글 달기</a>
                              <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="more-reply">모든 답글 보기(1개)</a>
                      </li>
                      <!-- 세번째 댓글 -->
                      <li class="comment">
                        <div class="comment-firstchild">
                          <a href="#" class="comment-profile">
                            <img class="comment-profile-image" src="/resources/images/이영지.jpg" />
                          </a>
                          <div>
                            <div class="comment-firstline">
                              <div>
                                <a href="#" class="comment-memberId">youngji_02</a>
                                <span class="comment-content">카리나 최고</span>
                              </div>
                              <div>
                                <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                              </div>
                            </div>
                            <div class="create-reply">
                              <a href="#">2주</a>
                              <a href="#" class="reply-btn">답글 달기</a>
                              <button type="button" class="fa-solid fa-ellipsis hover-btn"></button>
                            </div>
                          </div>
                        </div>
                        <a href="#" class="more-reply">모든 답글 보기(1개)</a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" class="create-date">10월 19일</a>
                </div>
              </div>
              <div class="comment-input-area">
                <div>
                  <input name="comment" id="commentInput" class="comment-input" type="text" placeholder="댓글 달기..." autocomplete="off" />
                  <button class="posting-btn" disabled>게시</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>

    <!-- footer include -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp" />

    <!-- 모달창 include -->
    <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
    <jsp:include page="/WEB-INF/views/action/reportShareMenu.jsp" />
    <jsp:include page="/WEB-INF/views/action/dm-message.jsp" />

    <script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI=" crossorigin="anonymous"></script>

    <c:if test="${ not empty loginMember }">
      <script>
        var loginMember = "${loginMember}";
        alert(loginMember);
      </script>
    </c:if>

    <script type="text/javascript" defer src="/resources/js/main.js"></script>
    <script src="/resources/js/newpost.js"></script>
    <script src="/resources/js/jquery.flexslider.js"></script>
  </body>
</html>
