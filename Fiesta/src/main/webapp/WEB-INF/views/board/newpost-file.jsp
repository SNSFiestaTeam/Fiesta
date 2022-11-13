<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

    <!-- 모달 배경 -->
    <div class="modal_background" id="modalBackground">
      <button name="close" id="new-post-close" class="new-post-close">
        <span id="post-x"><i class="fa-solid fa-x"></i></span>
      </button>
      <!-- <div class="test">test하는중</div> -->
      <!-- 모달 흰창 -->
      <section class="modal_post_section" id="modal_post_section">
        <div class="new-post-background">

          <!-- 게시물 작성 top -->
          <section class="new-post-top-section">
            <div class="new-post-top">
              <div class="new-post-top-title">새 게시물 만들기</div>
            </div>
          </section>

          <!-- 게시물 작성 bottom -->
          <!-- <form action="#"> -->
            <form action="#" method="post" class="new-post-bottom-section">
              <div class="new-post-file-input-box">
                <div class="new-post-file-img">
                  <i class="fa-solid fa-photo-film fa-4x"></i>
                </div>

                <p class="input-message">사진과 동영상을 여기에 끌어다 놓으세요</p>

                <div class="file-select-btn">
                  <label for="file-input"> 컴퓨터에서 선택</label>
                  <button><input type="file" name="new-post-file" id="file-input"></button>
                  
                </div>

                <!-- multiple : 2개 이상의 파일 -->
              </div>
            </form>

          <!-- </form> -->
          
        </div>
      </section>
    </div>
