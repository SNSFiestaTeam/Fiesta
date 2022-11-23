<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <form action="#">
      <button name="close" id="close-post">
        <span id="post-x"><i class="fa-solid fa-x"></i></span>
      </button>
    </form>

     <div class="modal_background" id="modalBackgroundText">
    <!-- 닫기버튼 -->
    <button id="new-post-close" class="new-post-close">
      <i class="fa-solid fa-x"></i>
    </button>
    <!-- post 배경 -->
    <section class="modal_post_section-text">
      <!-- post top -->
      <div class="new-post-top">
        <button onclick="" id="backBtnText">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <p>새 게시물 만들기</p>
        <button>공유하기</button>
      </div>
      <!-- post-bottom -->
      <div class="new-post-bottom">
        <div class="bottom-left-box">
          <img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기">

        </div>

        <div class="bottom-right-box">
          <div class="new-post-bottom-information">
            <div class="new-post-bottom-member">
              <img id="file" src="../../resources/images/user.jpg" alt="작성자 프로필">
              <div class="member-nikname">juyeong7063</div>
            </div>

            <div class="new-post-bottom-inputtext">
              <textarea name="content" rows="5" placeholder="문구 입력..."></textarea>
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
                <div class="postFileText-area">
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                </div>
              </div>
            </div>



            <div class="new-post-bottom-set">

              <input type="checkbox" id="set-btn2">
              <label for="set-btn2">고급설정<i class="fa-solid fa-angle-down"></i></label>
              <div class="content">이 게시물의 좋아요 수 및 조회수 숨기기</div>
            </div>




          </div>
        </div>
      </div>
    </section>



  </div>
