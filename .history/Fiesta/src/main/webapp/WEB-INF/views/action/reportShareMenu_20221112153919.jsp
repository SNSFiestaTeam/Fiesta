<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="feed-menu-container" id="feedMenu">
  <div class="feed-menu">
    <div class="feed-menu-btn btn1"><button id="feedReportBtn">신고</button></div>
    <div class="feed-menu-btn btn2"><button id="feedShareBtn">공유하기</button></div>
    <div class="feed-menu-btn btn3" ><button id="feedMenuCancel">취소</button></div>
  </div>
</div>

<div class="report-menu-container" id="commentMenu">
  <div class="report-menu">
    <div class="report-menu-btn btn1"><button id="commentReportBtn">신고</button></div>
    <div class="report-menu-btn btn3" ><button id="feedMenuCancel">취소</button></div>
  </div>
</div>

<div class="share-container" id="share">
  <div class="share-menu">
    <div class="share-title"><span>공유하기</span></div>
    <div class="share-content">
        <button>
          <span class="icon-area"><i class="fa-solid fa-link"></i></span>
          <span class="text-area">링크 복사</span>
        </button>
        <button>
          <span class="icon-area"><i class="fa-regular fa-comment"></i></span>
          <span class="text-area">카카오톡 공유</span>
        </button>
        <button>
          <span class="icon-area"><i class="fa-regular fa-envelope"></i></span>
          <span class="text-area">이메일 공유</span>
        </button>
        <button>
          <span class="icon-area"><i class="fa-solid fa-arrow-rotate-left"></i></span>
          <span class="text-area" id="shareCancleBtn">취소</span>
        </button>
      </div>
    </div>
  </div>
</div>

<div class="declaration-container" id="report">
  <div class="report-menu">
    <div class="report-menu-title btn1"><span>신고하기</span></div>
    <div class="declaration-content">
      <form action="#">
        <select name="declarationOption" id="declarationOption" required>
          <option value="none">신고 사유 선택</option>
          <option value="spam">광고 또는 스팸</option>
          <option value="sexual">성적인 게시물</option>
          <option value="Disgust">혐오 조장</option>
          <option value="violence">폭력적인 게시물</option>
          <option value="illegal">불법적인 게시물</option>
          <option value="etc">기타</option>
        </select>
        <textarea
          name="declaration-content"
          id="declaration-textarea"
          placeholder="신고 내용 입력"
        ></textarea>
      </form>
    </div>
    <div class="report-menu-btn btn2"><button>제출</button></div>
    <div class="report-menu-btn btn3"><button id="reportCancle">취소</button></div>
  </div>
</div>
