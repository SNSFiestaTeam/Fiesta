const feedHeaderIcon = document.querySelector("#feed-header-menu");
const feedMenu = document.querySelector("#feedMenu");
const feedMenuCancel = document.querySelector("#feedMenuCancel");
const likeBtn = document.querySelector("a#likeBtn");
const commentBtn = document.querySelector("a#commentBtn");
const bookmarkBtn = document.querySelector("#bookmarkBtn");
const commentInput = document.querySelector("input#commentInput");
const commentPostingBtn = document.querySelector("#commentInput+button");
const commentLikeBtn = document.querySelectorAll("a.comment-like-btn");
const moreBtn = document.querySelector("#moreBtn");
const feedContent = document.querySelector("#feed-content");

// 피드 헤더 ...아이콘 클릭 시 메뉴창
function feedHeaderIconClicked() {
  feedMenu.style.display = "flex";
  console.log(likeBtn.style.color);
}

// 피트 헤더 메뉴창 취소 클릭시 닫힘
function feedMenuCancelClicked() {
  feedMenu.style.display = "none";
}

// 좋아요 버튼 클릭시 색상 변경
function likeBtnClicked() {
  const emptyHeart = '<i class="fa-regular fa-heart"></i>';
  const solidHeart = '<i class="fa-solid fa-heart"></i>';

  if (likeBtn.innerHTML === emptyHeart) {
    likeBtn.innerHTML = solidHeart;
    likeBtn.style.color = "red";
  } else {
    likeBtn.innerHTML = emptyHeart;
    likeBtn.style.color = "black";
  }
}

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

feedHeaderIcon.addEventListener("click", feedHeaderIconClicked);
feedMenuCancel.addEventListener("click", feedMenuCancelClicked);
likeBtn.addEventListener("click", likeBtnClicked);
commentBtn.addEventListener("click", commentBtnClicked);
commentInput.addEventListener("keyup", commentInputChanged);
bookmarkBtn.addEventListener("click", bookmarkBtnClicked);
commentLikeBtn.addEventListener("click", commentLikeBtnClicked);
moreBtn.addEventListener("click", moreBtnClicked);
