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
feedMenuCancel.addEventListener("click", function () {
  feedMenu.style.display = "none";

  body.classList.remove("scrollLock");
});

// 피드 신고 버튼 클릭시 신고 창 열림
const feedReportBtn = document.getElementById("feedReportBtn");
const report = document.getElementById("report");

feedReportBtn.addEventListener("click", function () {
  feedMenu.style.display = "none";
  report.style.display = "flex";

  body.classList.add("scrollLock");
});

// 신고창 취소 버튼 클릭 시 닫힘
const reportCancle = document.getElementById("reportCancle");
reportCancle.addEventListener("click", function () {
  report.style.display = "none";

  body.classList.remove("scrollLock");
});

// 피드 공유하기 버튼 클릭시 공유하기 창 열림
const share = document.getElementById("share");
const feedShareBtn = document.getElementById("feedShareBtn");

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

// 좋아요 버튼 클릭 시
//  -> 버튼 색상 변경
//  -> TODO: 좋아요 카운트 상승
const likeBtn = document.getElementsByClassName("like-btn");

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

// DM(종이비행기) 버튼 클릭 시
// FIXME: 모달창에서 바로 DM 발송 가능하게

const dmBtn = document.getElementsByClassName("dm-btn");
const dmContainer = document.getElementById("dmContainer");
for (let i = 0; i < dmBtn.length; i++) {
  dmBtn[i].addEventListener("click", () => {
    dmContainer.style.display = "flex";
    dmContainer.classList.add("scrollrock");
  });
}

// DM 모달창 X버튼 클릭 시 닫힘

document.getElementById("dmCloseBtn").addEventListener("click", () => {
  dmContainer.style.display = "none";
  dmContainer.classList.remove("scrollrock");
});

// 말풍선 버튼 클릭 시
//  -> 댓글 입력창에 포커스
const commentBtn = document.getElementsByClassName("comment-btn");
const commentInput = document.getElementsByClassName("comment-input");

for (let i = 0; i < commentBtn.length; i++) {
  commentBtn[i].addEventListener("click", function () {
    commentInput[i].focus();
  });
}

// 댓글 창에 입력 시 게시 버튼 활성화
const postingBtn = document.getElementsByClassName("posting-btn");
for (let i = 0; i < commentInput.length; i++) {
  commentInput[i].addEventListener("input", function () {
    if (commentInput[i].value.trim().length == 0) {
      postingBtn[i].setAttribute("disabled", true);
      return;
    } else {
      postingBtn[i].removeAttribute("disabled");
      return;
    }
  });
}

// TODO: 댓글 입력 후 ENTER 입력 시도 만들 것
// 댓글 등록 버튼 클릭 시
for (let i = 0; i < postingBtn.length; i++) {
  postingBtn[i].addEventListener("click", () => {
    // 댓글 리스트 최상위 부모인 Ul 태그 불러오기
    const commentUl = document.getElementsByClassName("comment-list");

    // ul 태그에 li.comment 추가
    const commentLi = document.createElement("li");
    commentLi.classList.add("comment");

    commentUl[i].append(commentLi);

    // commentLi에 div.comment-firstchild 추가
    const commentFirstChild = document.createElement("div");
    commentFirstChild.classList.add("comment-firstchild");

    commentLi.append(commentFirstChild);

    // div.comment-firstchild에  a.comment-profile 추가
    const commentProfile = document.createElement("a");
    const commentProfileDiv = document.createElement("div");
    commentProfile.classList.add("comment-profile");

    commentFirstChild.append(commentProfile, commentProfileDiv);

    // commentProfile에  commentProfileImg 추가
    const commentProfileImg = document.createElement("img");
    commentProfileImg.classList.add("comment-profile-image");
    commentProfileImg.setAttribute("src", "/resources/images/안유진.jpg");

    commentProfile.append(commentProfileImg);

    // commentProfileDiv에 div.comment-firstline, div.create-reply 추가
    const commentFirstLine = document.createElement("div");
    const createReply = document.createElement("div");
    commentFirstLine.classList.add("comment-firstline");
    createReply.classList.add("create-reply");

    commentProfileDiv.append(commentFirstLine, createReply);

    // commentFirstLine에 div 두 개 추가
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    commentFirstLine.append(div1, div2);

    // div1에 a.comment-memberId, span.comment-content 추가
    const memberIdArea = document.createElement("a");
    memberIdArea.classList.add("comment-memberId");
    const commentContent = document.createElement("span");
    commentContent.classList.add("comment-content");

    var memberId = document.createTextNode("_yujin_an");
    var content = document.createTextNode(commentInput[i].value);

    memberIdArea.appendChild(memberId);
    commentContent.appendChild(content);

    div1.append(memberIdArea, commentContent);

    // div2에 button.comment-like-btn 추가
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("comment-like-btn");
    const heart = document.createElement("i");
    heart.classList.add("fa-regular", "fa-heart");

    // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
    likeBtn.addEventListener("click", () => {
      const emptyHeart = '<i class="fa-regular fa-heart"></i>';
      const solidHeart = '<i class="fa-solid fa-heart"></i>';

      if (!likeBtn.classList.contains("red")) {
        likeBtn.innerHTML = "";
        likeBtn.innerHTML = solidHeart;
        likeBtn.classList.add("red");
      } else {
        likeBtn.innerHTML = emptyHeart;
        likeBtn.classList.remove("red");
      }
    });

    likeBtn.append(heart);
    div2.append(likeBtn);

    // createReply에 span, button, button.hover-btn 추가
    const span = document.createElement("span");
    const replyBtn = document.createElement("button");
    replyBtn.setAttribute("type", "button");
    replyBtn.classList.add("reply-btn");
    const hoverBtn = document.createElement("button");
    hoverBtn.setAttribute("type", "button");
    hoverBtn.classList.add("fa-solid", "fa-ellipsis", "hover-btn");

    span.appendChild(document.createTextNode("2주"));
    replyBtn.appendChild(document.createTextNode("답글 달기"));

    createReply.append(span, replyBtn, hoverBtn);

    console.log(commentLi);

    // 댓글 등록버튼 클릭 시 input에 입력된 값 제거
    commentInput[i].value = "";

    //
    postingBtn[i].disabled = true;

    // 댓글 등록 시 스크롤 등록된 댓글로 이동
    const mainContainer = document.getElementsByClassName("main-container");
    for (let item of mainContainer) {
      item.scrollTop = item.scrollHeight;
    }
  });
}

// TODO: 답글 입력 시도 만들 것

// 북마크 버튼 클릭 시
//  -> 북마크 버튼 색상 검정
//  -> TODO: 북마크에 추가
const bookmarkBtn = document.getElementsByClassName("bookmark-btn");
for (let i = 0; i < bookmarkBtn.length; i++) {
  bookmarkBtn[i].addEventListener("click", function () {
    const emptyIcon = '<i class="fa-regular fa-bookmark"></i>';
    const solidIcon = '<i class="fa-solid fa-bookmark"></i>';

    if (bookmarkBtn[i].innerHTML == emptyIcon) {
      bookmarkBtn[i].innerHTML = solidIcon;
    } else {
      bookmarkBtn[i].innerHTML = emptyIcon;
    }
  });
}

// 본문 더보기 버튼 클릭 시
//  -> 본문 전체 보이고 더보기 버튼 사라짐
const moreBtn = document.getElementsByClassName("more-btn");
for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener("click", function () {
    const feedContent = document.getElementsByClassName("feed-content");

    if (feedContent[i].classList.contains("one-line")) {
      feedContent[i].classList.remove("one-line");
      moreBtn[i].classList.add("hide");
    }
  });
}

// 댓글 더보기 버튼 클릭 시
//  FIXME: 10개 미만일 때는 있는 댓글 수 만큼만 보이고
//  10개 초과일 때는 모달창으로 보기 버튼 생성 후 버튼 클릭 시
//  댓글 모달창 띄우기
const allCommentBtn = document.getElementsByClassName("all-comment-btn");
for (let i = 0; i < allCommentBtn.length; i++) {
  allCommentBtn[i].addEventListener("click", function () {
    const commentList = document.getElementsByClassName("comment-list");

    commentList[i].classList.remove("two-line");
    commentList[i].classList.add("ten-line");

    allCommentBtn[i].classList.add("hide");
  });
}

// 댓글 좋아요 버튼 클릭 시
// TODO: 댓글 좋아요 클릭 시 좋아요 db insert
// 이미 클릭 한 댓글일 시 좋아요 db 삭제
const commentLikeBtn = document.getElementsByClassName("comment-like-btn");

for (let i = 0; i < commentLikeBtn.length; i++) {
  commentLikeBtn[i].addEventListener("click", function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    if (!commentLikeBtn[i].classList.contains("red")) {
      commentLikeBtn[i].innerHTML = "";
      commentLikeBtn[i].innerHTML = solidHeart;
      commentLikeBtn[i].classList.add("red");
    } else {
      commentLikeBtn[i].innerHTML = emptyHeart;
      commentLikeBtn[i].classList.remove("red");
    }
  });
}

// 댓글 답글 달기 버튼 클릭 시 인풋 태그에 @작성자 아이디 추가
const replyBtn = document.getElementsByClassName("reply-btn");

for (let i = 0; i < replyBtn.length; i++) {
  replyBtn[i].addEventListener("click", () => {
    const commentId = document.getElementsByClassName("comment-memberId");
    const input = commentId[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling.firstChild.nextSibling.firstChild.nextSibling;

    console.log(input);
    input.value = "@" + commentId[i].innerText;
  });
}

// TODO: 이미지 슬라이드 쇼 만들기
// const slideShow = document.getElementsByClassName("slide-show");
// // const leftBtn = document.getElementsByClassName('left-btn');
// /* <button type="button" class="left-btn">
//                     <i class="fa-solid fa-chevron-left"></i>
//                   </button> */
// const rightBtn = document.getElementsByClassName("right-btn");
// const uploadedImg = document.getElementsByClassName("uploaded-image");

// for (let i = 0; i < rightBtn.length; i++) {
//   rightBtn[i].addEventListener("click", () => {
//     const slides = document.getElementsByClassName("slides");

//     for (let item of uploadedImg) {
//       slides[i].style.transform = "translateX(-" + item.clientWidth + "px)";
//     }
//   });
// }

// flexslider2 라이브러리 실행용
// 삭제 X
$(".flexslider").flexslider({
  animation: "slide",
});

// TODO:댓글 ... 버튼 클릭 시 신고 모달창

// TODO: 게시글 불러오기 기능
