<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


  
    
    
    <!-- 인스타 피드 -->
        <section class="feed-background" id="feedBackground">
          <!-- 피드 리스트 -->
              <%-- <div class="feed">
                <div class="profile-image-area">
                  <!-- 작성자 프로필 -->
                  <div class="feed-header">
                    <div class="writer-info" id="writerInfoDiv">
                      <%-- <a href="" class="profile-photo" id="profilePhotoA"> --%>
                        <%-- <c:if test="${empty board.memberProfileImg}"> --%>
                            <!--<img class="feed-profile-image" id="feedProfileImage" src="/resources/images/profile/profile.jpg" /> --%>
                        <%-- </c:if> --%>
                       <%--  <c:if test="${not empty board.memberProfileImg}"> --%>
                          <%-- <img class="feed-profile-image" src="${board.memberProfileImg}" /> --%>
                    <%--     </c:if> --%>
                      <%-- </a> --%>
                      <%-- <a  class="feed-memberId" id="feedMemberIdA">user001</a> --%>
                    </div>
                    <div>
                      <button type="button" class="fa-solid fa-ellipsis feed-header-menu"></button>
                    </div>
                  </div>

                  <%-- 사진 목록
                   <div class="image-list swiper mySwiper" id="imageList">
                    <ul class="swiper-wrapper" id="imageUl">  --%>
                      <%-- <c:if test="${empty board.imageList}"> --%>
                        <%-- <li class="swiper-slide" id="imageLi">
                          <img class="uploaded-image" id="uploadedImage" src="/resources/images/이영지.jpg" />
                        </li> --%>
                      <%-- </c:if> --%>
                      <%-- <c:if test="${not empty board.imageList}">
                        <c:forEach var="img" items="${board.imageList}"> --%>
                          <%-- <li class="swiper-slide">
                            <img class="uploaded-image" src="<%-- ${img.imgAddress}${img.imgChangeName} " />
                          </li>  --%>
                   <%--      </c:forEach>
                      </c:if> --%>
                    </ul>
                    <div class="swiper-button-next swiper-btn"></div>
                    <div class="swiper-button-prev swiper-btn"></div>
                    <div class="swiper-pagination swiper-btn"></div>
                  </div>
                </div>

                <%-- 본문 --%>
                <div class="main-content-section">
                  <div class="comment-icon-menu">
                    <div id="buttonArea">
                    <%-- <c:if test="${board.likeCheck == 1}"> --%>
                   <%--    <button id="likeBtn" class="like-btn red"><i class="fa-solid fa-heart"></i></button>
                    </c:if> --%>
              <%--       <c:if test="${board.likeCheck == 0}"> --%>
                      <%-- <button id="likeBtn" class="like-btn"><i class="fa-regular fa-heart"></i></button> --%>
                   <%--  </c:if> --%>
                      <button id="commentBtn" class="comment-btn"><i class="fa-regular fa-comment"></i></button>
                      <button id="dmBtn" class="dm-btn"><i class="fa-regular fa-paper-plane"></i></button>
                    </div>
                    <div>
                      <%-- <c:if test="${board.bookmarkCheck == 1}"> --%>
                     <%--  <button id="bookmarkBtn" class="bookmark-btn"><i class="fa-solid fa-bookmark"></i></button> --%>
                      <%-- </c:if> 
                      <c:if test="${board.bookmarkCheck == 0}"> --%>
                      <%-- <button id="bookmarkBtn" class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button> --%>
                      <%-- </c:if>  --%>
                    </div>
                  </div>

                  <div class="main-container" id="mainContainer">
                    <%-- 좋야요 수 표시 --%>
                    <%-- <c:if test="${board.boardPubPriFlag == 'Y'}"> --%>
                    <div class="like-count" id="likeCount">좋아요 <span class="board-like-count" id=boardLikeCount>1</span>개</div>
                   <%--  </c:if>
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
                    </c:if> --%>


                    <%-- 본문 내용 --%> 
                    <div class="feed-main-content" id="feedMainContentDiv">
                      <div class="feed-content one-line" id="feedContentDiv">
                        <a href="" id="aMemberNickname"><span class="member-id" id="spanMemberId"></span></a>
                        <span class = "board-content" id="boardContent">
                          <%-- ${board.boardContent} --%>
                          
                          
                        </span>
                      </div>

                     <%--  <c:if test="${fn:length(board.boardContent) > 20}"> --%>
                      <%-- <button type="button" class="more-btn">
                        <span id="textMore"> 더 보기</span>
                      </button> --%>
                      <%-- </c:if> --%>

                    </div>

                     <%--  댓글 리스트 --%>
                      <div class="comment-container" id="commentContainer">
                      <%-- <c:if test="${board.commentBlockFlag == 'N'}">
                        <c:if test="${fn:length(board.commentList) > 2}">
                        <button class="all-comment-btn">댓글 모두 보기(${fn:length(board.commentList)})</button>
                        </c:if> --%>

                        <%-- <div class="comment-area">
                          <ul class="comment-list two-line"> --%>
                        <%--   <c:if test="${not empty board.commentList}">
                            <c:forEach var="comment" items="${board.commentList}">
                              <c:if test="${comment.upperCommentNo == 0 }"> --%>
                                <%-- <li class="comment">
                                  <input type="hidden" value="${comment.commentNo}" class="comment-no">
                                  <div class="comment-firstchild">
                                    <a href="/feed/${comment.memberNickname}" class="comment-profile">
                                      <%-- <c:if test="${empty comment.memberProfileImg}"> --%>
                                        <%-- <img class="comment-profile-image" src="/resources/images/profile/profile.jpg" />  --%>
                                     <%--  </c:if>
                                      <c:if test="${not empty comment.memberProfileImg}">
                                        <img class="comment-profile-image" src="${comment.memberProfileImg}" />
                                      </c:if> --%>
                                    <%-- </a>
                                    <div>
                                      <div class="comment-firstline">
                                        <div class= "comment-id-content">
                                          <a href="/feed/${comment.memberNickname}" class="comment-memberId">${comment.memberNickname}user001
                                        </div>
                                        <div> --%>
                                         <%--  <c:if test="${comment.commentLikeCheck == 1}"> --%>
                                          <%-- <button class="comment-like-btn red"><i class="fa-solid fa-heart"></i></button> --%>
                                          <%-- </c:if>
                                          <c:if test="${comment.commentLikeCheck == 0}">
                                          <button class="comment-like-btn"><i class="fa-regular fa-heart"></i></button>
                                          </c:if> --%>
                                        <%-- </div>
                                      </div>
                                      <div class="create-reply">
                                        <span>${comment.commentCreateDate}2시간 전</span>
                                        <button class="reply-btn">답글 달기</button>
                                        <button type="button" class="fa-solid fa-ellipsis hover-btn">게시</button>
                                      </div>
                                    </div>
                                  </div> --%>
                                  <%-- <c:if test="${comment.replyCount > 0}">
                                  <button class="more-reply">모든 답글 보기(<span class ="reply-count">${comment.replyCount}</span>)</button>
                                  </c:if> --%>
                                <%-- </li> --%>
                          <%--     </c:if> --%>

                                  <%-- 답글 리스트 --%>
                                  <c:if test="${comment.upperCommentNo > 0}">
              
                                    <li class="comment" id="reply">
                                      <input type="hidden" value="${comment.commentNo}" class="comment-no">
                                      <div class="reply-firstchild">
                                        <a href="/feed/${comment.memberNickname}" class="comment-profile">
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
                                              <a href="/feed/${comment.memberNickname}" class="comment-memberId">${comment.memberNickname}</a>
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
                                   <%-- 답글 li 종료 --%>
                                  </c:if> --%>
                              <%-- 댓글 li 종료 --%>
                          <%--   </c:forEach>
                          </c:if> --%>
                          <%-- </ul>
                        </div> --%>
                      <%-- </c:if> --%>
                      </div> 
                    <span class="create-date"></span>
                  </div>
                  <div class="comment-input-area">
                  <%-- <c:if test="${board.commentBlockFlag == 'N'}"> --%>
                    <div>
                      <textarea name="comment" id="commentInput" class="comment-input" placeholder="댓글 달기..." autocomplete="off"></textarea>
                      <button class="posting-btn" id="postingBtn" disabled>게시</button>
                    </div>
                  <%-- </c:if> --%>
                  </div>
                </div>
              <input type="hidden" class="board-no" value="">
              <input type="hidden" class="comment-block-fl" value="">
              <input type="hidden" class="board-pub-pri-fl" value="">
              </div> -->

        </section>