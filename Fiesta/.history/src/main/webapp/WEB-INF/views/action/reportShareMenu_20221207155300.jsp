<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="feed-menu-container-login" id="feedMenuLogin">
  <div class="feed-menu-login">
    <div class="feed-menu-btn-login btn1"><button id="feedDeleteBtnLogin">삭제</button></div>
    <div class="feed-menu-btn-login btn2"><button id="feedUpdateBtnLogin">수정</button></div>
    <div class="feed-menu-btn-login btn2"><button id="feedShareBtnLogin">링크 복사</button></div>
    <div class="feed-menu-btn-login btn2"><button id="feedLikeBtnLogin">좋아요 수 숨기기</button></div>
    <div class="feed-menu-btn-login btn2"><button id="feedCommentBtnLogin">댓글 기능 해제</button></div>
    <div class="feed-menu-btn-login btn2"><button id="feedSelectBtnLogin">게시물로 이동</button></div>
    <div class="feed-menu-btn-login btn3" ><button id="feedMenuCancelLogin">취소</button></div>
  </div>
</div>

<div class="feed-menu-container" id="feedMenu">
  <div class="feed-menu">
    <div class="feed-menu-btn btn1"><button id="feedReportBtn">신고</button></div>
    <div class="feed-menu-btn btn2"><button id="feedShareBtn">링크 복사</button></div>
    <div class="feed-menu-btn btn3" ><button id="feedMenuCancel">취소</button></div>
  </div>
</div>

<div class="comment-menu-container" id="commentMenu">
  <div class="comment-menu">
    <div class="comment-menu-btn btn1"><button id="commentReportBtn">신고</button></div>
    <div class="comment-menu-btn btn3" ><button id="commentMenuCancel">취소</button></div>
  </div>
</div>

<div class="comment-menu-container-l" id="commentMenuL">
  <div class="comment-menu-l">
    <div class="comment-menu-btn-l btn2-l"><button id="commentDeleteBtnL">삭제</button></div>
    <div class="comment-menu-btn-l btn3-l" ><button id="commentMenuCancelL">취소</button></div>
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
      <form action="/report" method="get" name="report" id="reportForm">
        <input type="hidden" name="reportTargetNo" id="reportTargetNo">
        <input type="hidden" name="reportType" id="reportType">
        <select name="reportReason" id="declarationOption" required>
          <option value="선택 안함">신고 사유 선택</option>
          <option value="광고 또는 스팸">광고 또는 스팸</option>
          <option value="성적인 게시물">성적인 게시물</option>
          <option value="혐오 조장">혐오 조장</option>
          <option value="폭력적인 게시물">폭력적인 게시물</option>
          <option value="불법적인 게시물">불법적인 게시물</option>
          <option value="기타">기타</option>
        </select>
        <textarea
          name="reportContent"
          id="declaration-textarea"
          placeholder="신고 내용 입력"
        ></textarea>
        <div class="report-menu-btn btn2 report-submit-btn"><button>제출</button></div>
        <div class="report-menu-btn btn3"><button type="button" id="reportCancle">취소</button></div>
      </form>
    </div>
  </div>
</div>
