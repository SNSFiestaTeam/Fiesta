<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- <form action="/" method="POST" enctype="multipart/from-data" onsubmit="return writeValidate()"> --%>
<div class="modal_background" id="modalBackgroundText">
    <!-- 닫기버튼 -->
    <div class="new-post-close" id="newPostClosePostText">&times;</div>
    <!-- post 배경 -->
    <section class="modal_post_section-text" >
      <!-- post top -->
      <div class="new-post-top-text">
        <div id="backBtnText">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <p>새 게시물 만들기</p>
        <button name="newpostText" id="newPostAll">게시하기</button>
      </div>
      <!-- post-bottom -->
      <div class="new-post-bottom-text">
        <div class="bottom-left-box swiper">
        <div class="swiper-wrapper" id="textFileSwiper">
          <%-- <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div> --%>
          
        </div>
      <div class="swiper-pagination"></div>

          <div class="siltde-btn-area slide-controller">
            <div class="sild-file-btn swiper-button-prev">
              <!-- <div class="material-icons">arrow_back</div> -->
            </div>
            <div class="sild-file-btn swiper-button-next">
              <!-- <div class="material-icons">arrow_forward</div> -->
            </div>
          </div>
        </div>

        <div class="bottom-right-box">
          <div class="new-post-bottom-information">
            <div class="new-post-bottom-member">
              <img id="file" src="../../resources/images/user.jpg" alt="작성자 프로필">
              <div class="member-nikname">${loginMember.memberNickname}</div>
            </div>

            <div class="new-post-bottom-inputtext">
              <textarea name="boardContent" rows="5" placeholder="문구 입력..." id="boardContent"></textarea>
            </div>

            <div class="new-post-bottom-textsize">
              <span>0</span>
              /
              <span>3000</span>
            </div>

            <div class="new-post-bottom-set">
              <input type="checkbox" id="set-btn1">
              <label for="set-btn1">
                접근성<i class="fa-solid fa-angle-down"></i></label>
              <div>
                대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며, 직접 입력할 수도 있습니다.
                <div class="postFileText-area" id="postFileTextArea">
                  <%-- <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div> --%>
                  
                </div>
              </div>
            </div>
            <div class="new-post-bottom-set">
              <input type="checkbox" id="set-btn2">
              <label for="set-btn2">고급설정<i class="fa-solid fa-angle-down"></i></label>
              <div class="like-views-setting">

                <div class="setting-on-off" >
                  <p>이 게시물의 좋아요 수 및 조회수 숨기기</p>
                  <!-- <div class="on-off-btn"id="likeViewsBtn"><i class="fa-solid fa-toggle-on" id="likeViewsBtnStyle"></i></div> -->
                  <label for="toggle" class="toggleSwitch">
                    <span class="toggleButton"></span>
                  </label>
                </div>

                <p>이 게시물의 총 좋아요 및 조회수는 회원님만 볼 수 있습니다. 나중에 게시물 상단에 있는 ··· 메뉴에서 이 설정을 변경할 수 있습니다. 다른 사람의 게시물에서 좋아요 수를 숨기려면 계정 설정으로 이동하세요. </p>
              </div>
              <div class="comment-block-setting">

                <div class="setting-on-off">
                  <p>댓글 기능 해제</p>
                  <!-- <div class="on-off-btn" id="commentBlockBtn"><i class="fa-solid fa-toggle-on"></i></div> -->
                  <label for="toggle" class="toggleSwitch">
                    <span class="toggleButton"></span>
                  </label>
                </div>


                <p>나중에 게시물 상단의 메뉴(···)에서 이 설정을 변경할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</form>
     