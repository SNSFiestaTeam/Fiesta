<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="modal_background" id="modalBackground">
    <!-- 닫기 버튼 -->
    <div class="new-post-close" id="newPostClose">&times;</div>

    <!-- 모달 흰창 -->
    <section class="modal_post_section" id="modal_post_section">

      <!-- 게시물 작성 top -->
      <div class="new-post-top-file"><p>새 게시물 만들기</p></div>

      <!-- 게시물 작성 bottom -->
      <div class="new-post-bottom" id="newPostBottom">
        <form action="#" method="post">
          <div class="new-post-file-input-box">
            <div class="new-post-file-img"><i class="fa-solid fa-photo-film fa-4x"></i></div>
            <p class="input-message">사진과 동영상을 여기에 끌어다 놓으세요</p>
            <button class="file-select-btn" id="fileSelect" >
              <label for="file-input" > 컴퓨터에서 선택</label>
              <input type="file" name="new-post-file" id="fileInput" none>
            </button>
            <button class="file-select-btn" id="fileSelectBasic">
              <label for="baceImage" > 기본 이미지</label>
              <input name="new-post-file" id="basicImage" none>
            </button>
            
          </div>
        </form>
      </div>

    </section>
  </div>