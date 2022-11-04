const feedMenu = document.getElementById("feedMenu");
const feedHeaderMenu = document.getElementsByClassName("feed-header-menu");
const body = document.getElementsByTagName("body")[0];
const feedMenuCancel = document.getElementById("feedMenuCancel");

// 피드 헤더 ...아이콘 클릭 시 메뉴창
for (let i = 0; i < feedHeaderMenu.length; i++) {
  feedHeaderMenu[i].addEventListener("click", function () {
    feedMenu.style.display = "flex";

    body.classList.add("scrollLock");
  });
}

// 피트 헤더 메뉴창 취소 클릭시 닫힘
function feedMenuCancelClicked() {
  feedMenu.style.display = "none";

  body.classList.remove("scrollLock");
}

const feedReportBtn = document.getElementById("feedReportBtn");
const report = document.getElementById("report");

// 피드 신고 버튼 클릭시 신고 창 열림
feedReportBtn.addEventListener("click", function () {
  feedMenu.style.display = "none";
  report.style.display = "flex";

  body.classList.add("scrollLock");
});

const reportCancle = document.getElementById("reportCancle");
reportCancle.addEventListener("click", function () {
  report.style.display = "none";

  body.classList.remove("scrollLock");
});

const share = document.getElementById("share");
const feedShareBtn = document.getElementById("feedShareBtn");

// 피드 공유하기 버튼 클릭시 공유하기 창 열림
feedShareBtn.addEventListener("click", function () {
  feedMenu.style.display = "none";
  share.style.display = "flex";

  body.classList.add("scrollLock");
});

// 공유하기 모달창에서 클릭버튼 클릭 시
const shareCancleBtn = document.getElementById("shareCancleBtn");
shareCancleBtn.addEventListener("click", function () {
  share.style.display = "none";
  body.classList.remove("scrollLock");
});

const likeBtn = document.getElementsByClassName("like-btn");

// 좋아요 버튼 클릭 시
//  -> 버튼 색상 변경
//  -> 좋아요 카운트 상승
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    if (!likeBtn[i].classList.contains("red")) {
      likeBtn[i].innerHTML = "";
      likeBtn[i].innerHTML = solidHeart;
      likeBtn[i].classList.add("red");
    } else {
      likeBtn[i].innerHTML = emptyHeart;
      likeBtn[i].classList.remove("red");
    }
  });
}

// 북마크 버튼 클릭 시
//  -> 북마크 버튼 색상 검정
//  -> 북마크에 추가
const bookmarkBtn = document.getElementsByClassName("bookmark-btn");
// for(let i=0)

const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentPostingBtn = document.getElementById("commentInput+button");
const commentLikeBtn = document.querySelectorAll("a.comment-like-btn");
const moreBtn = document.getElementById("moreBtn");
const feedContent = document.getElementById("feed-content");

// 댓글(말풍선) 버튼 클릭시 댓글 입력창 포커스
function commentBtnClicked() {
  document.commentForm.comment.focus();
}

// 댓글 입력창에 문자 입력시 게시 버튼 활성화
function commentInputChanged() {
  if (commentInput.value) {
    commentPostingBtn.disabled = false;
  } else {
    commentPostingBtn.disabled = true;
  }
}

// 북마크 버튼 클릭시 색상 변경
function bookmarkBtnClicked() {
  if (bookmarkBtn.innerHTML === '<i class="fa-regular fa-bookmark"></i>') {
    bookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
  } else {
    bookmarkBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
  }
}

// 댓글 좋아요 버튼 클릭시 색상 변경(미완)
function commentLikeBtnClicked() {
  if (commentLikeBtn.innerHTML === '<i class="fa-regular fa-heart"></i>') {
    commentLikeBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    commentLikeBtn.style.color = "red";
  } else {
    commentLikeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    commentLikeBtn.style.color = "black";
  }
}

// #feed-content {
//   margin-top: 10px;

//   overflow: hidden;
//   line-height: 1.6;
//   text-align: left;
//   word-wrap: break-word;
//   display: -webkit-box;
//   -webkit-line-clamp: 1;
//   -webkit-box-orient: vertical;
// }
// 더보기 버튼 (미완)
function moreBtnClicked() {
  moreBtn.style.display = "none";
}

feedMenuCancel.addEventListener("click", feedMenuCancelClicked);
likeBtn.addEventListener("click", likeBtnClicked);
commentBtn.addEventListener("click", commentBtnClicked);
commentInput.addEventListener("keyup", commentInputChanged);
bookmarkBtn.addEventListener("click", bookmarkBtnClicked);
commentLikeBtn.addEventListener("click", commentLikeBtnClicked);
moreBtn.addEventListener("click", moreBtnClicked);
