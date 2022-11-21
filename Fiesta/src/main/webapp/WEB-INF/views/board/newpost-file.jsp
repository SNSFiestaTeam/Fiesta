<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- 모달 배경 -->
    <div class="modal_background" id="modalBackgroundText">
      <!-- 닫기 버튼 -->
      <button id="new-post-close" class="new-post-close">
        <i class="fa-solid fa-x"></i>
      </button>

      <!-- 모달 흰창 -->
      <section class="modal_post_section" id="modal_post_section">
        <!-- <div class="new-post-background"> -->

        <!-- 게시물 작성 top -->
        <div class="new-post-top">
          <p>새 게시물 만들기</p>
        </div>

        <!-- 게시물 작성 bottom -->
        <div class="new-post-bottom" id="newPostBottom">
          <form action="#" method="post">
            <div class="new-post-file-input-box">
              <div class="new-post-file-img"><i class="fa-solid fa-photo-film fa-4x"></i></div>
              <p class="input-message">사진과 동영상을 여기에 끌어다 놓으세요</p>
              <div class="file-select-btn">
                <label for="file-input"> 컴퓨터에서 선택</label>
                <button><input type="file" name="new-post-file" id="file-input"></button>
                
              </div>
              <div class="file-select-btn">
                <label id="basicImage">기본 이미지</label>
                
              </div>
              
            </div>
          </form>
        </div>

      </section>
    </div>
