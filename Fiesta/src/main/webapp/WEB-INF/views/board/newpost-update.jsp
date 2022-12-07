<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- <form action="/" method="POST" enctype="multipart/from-data" onsubmit="return writeValidate()"> --%>
<div class="modal_background" id="modalBackgroundUpdate">
    <!-- 닫기버튼 -->
    <div class="new-post-close" id="newPostClosePostText">&times;</div>
    <!-- post 배경 -->

    <section class="modal_post_section-text" >
      <!-- post top -->


      <form action="/boardUpdate" method="POST" enctype="multipart/form-data" id="postForm" name="postForm">

        <input type="hidden" name="boardNo" id="boardNo">

        <div class="new-post-top-text">
          <div id="backBtnText">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <p id="postName">새 게시물 만들기</p>
          <button name="newpostText" id="newPostAll">게시하기</button>
        </div>
        <!-- post-bottom -->
        <div class="new-post-bottom-text">
        
          <div class="bottom-left-box swiper">
          <div class="swiper-wrapper" id="textFileSwiper">

            <div class=" swiper-slide" id="boardImageOne">
            </div> 
            
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
                <textarea name="boardContent" rows="5" placeholder="문구 입력..." id="updateBoardContent"></textarea>
              </div>

              <div class="new-post-bottom-textsize">
                <span>0</span>
                /
                <span>3000</span>
              </div>

          
      
            </div>
          </div>
        </div>
      
      </form>
      
    </section>
  </div>
</form>
     