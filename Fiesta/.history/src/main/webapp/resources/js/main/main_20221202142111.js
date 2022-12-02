const feedMenu = document.getElementById("feedMenu");
const loginFeedMenu = document.getElementById("feedMenuLogin");
const feedHeaderMenu = document.getElementsByClassName("feed-header-menu");
const body = document.getElementsByTagName("body")[0];
const feedMenuCancel = document.getElementById("feedMenuCancel");



// 피드 헤더 ...아이콘 클릭 시 메뉴창
for (let i = 0; i < feedHeaderMenu.length; i++) {
  feedHeaderMenu[i].addEventListener("click", function () {

    const boardMemberNickname = feedHeaderMenu[i].parentElement.previousElementSibling.
    firstElementChild.nextElementSibling.innerText;

    console.log(boardMemberNickname);

    if(memberNickname == boardMemberNickname) {
      loginFeedMenu.display = "flex";
    } else {
      feedMenu.style.display = "flex";
    }

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
  likeBtn[i].addEventListener("click", (e) => {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';
    const boardLikeCount = likeBtn[i].parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild;
    const likeCount = document.getElementsByClassName("like-count");
    const boardNo = document.getElementsByClassName("board-no");
    const commentBlockFlag = document.getElementsByClassName("comment-block-fl");
    const boardPubPriFlag = document.getElementsByClassName("board-pub-pri-fl");


    if (!likeBtn[i].classList.contains("red")) {
      $.ajax({
        url: "/boardLikeUp",
        data: { "boardNo": boardNo[i].value, "memberNo": memberNo },
        success: (result) => {
          if (result > 0) {
            likeBtn[i].innerHTML = "";
            likeBtn[i].innerHTML = solidHeart;
            likeBtn[i].classList.add("red");

            if(boardPubPriFlag[i].value == 'Y') {
              boardLikeCount.innerHTML = result;
            } 

            if(boardPubPriFlag[i].value == 'N') {
              if(result == 0) {
                likeCount[i].innerText = "좋아요를 눌러주세요";
              } else if(result == 1) {
                likeCount[i].innerText = "한 명이 좋아합니다";     
              } else {
                
                likeCount[i].innerText = "여러 명이 좋아합니다";     
              }
            }
          } else {
            console.log("증가 실패");
          }
        }
      });
    } else {
      $.ajax({
        url: "/boardLikeDown",
        data: { "boardNo": boardNo[i].value, "memberNo": memberNo },
        success: (result) => {
          console.log(result);
          likeBtn[i].innerHTML = emptyHeart;
          likeBtn[i].classList.remove("red");

          
          if(boardPubPriFlag[i].value == 'Y') {
            boardLikeCount.innerHTML = result;
          } 

          if(boardPubPriFlag[i].value == 'N') {
            if(result == 0) {
              likeCount[i].innerText = "좋아요를 눌러주세요";
            } else if(result == 1) {
              likeCount[i].innerText = "한 명이 좋아합니다";     
            } else {
              likeCount[i].innerText = "여러 명이 좋아합니다";     
            }
          }
        }
      });
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




// 북마크 버튼 클릭 시
//  -> 북마크 버튼 색상 검정
//  -> TODO: 북마크에 추가
const bookmarkBtn = document.getElementsByClassName("bookmark-btn");
for (let i = 0; i < bookmarkBtn.length; i++) {
  const boardNo = document.getElementsByClassName("board-no");

  bookmarkBtn[i].addEventListener("click", () => {
    const emptyIcon = '<i class="fa-regular fa-bookmark"></i>';
    const solidIcon = '<i class="fa-solid fa-bookmark"></i>';

    if (bookmarkBtn[i].firstElementChild.classList.contains("fa-regular")) {

      $.ajax({
        url: "/boardBookmarkOn",
        data: {"boardNo":boardNo[i].value, "memberNo":memberNo},
        success: (result) => {

          if(result > 0) {
            bookmarkBtn[i].innerHTML = solidIcon;
          } else {
            console.log("북마크 실패");
          }
        },
        error: () => {
          console.log("북마크 추가 중 오류 발생");
        }

      })

    } else {
      $.ajax({
        url: "/boardBookmarkOff",
        data: {"boardNo":boardNo[i].value, "memberNo":memberNo},
        success: (result) => {

          if(result > 0) {
            bookmarkBtn[i].innerHTML = emptyIcon;
          } else {
            console.log("북마크 취소 실패");
          }
        },
        error: () => {
          console.log("북마크 취소 중 오류 발생");
        }

      })
    }
  });
}





// 본문 더보기 버튼 클릭 시
//  -> 본문 전체 보이고 더보기 버튼 사라짐
const moreBtn = document.getElementsByClassName("more-btn");
for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener("click", function () {
    const feedContent = moreBtn[i].parentElement.firstElementChild;

    if (feedContent.classList.contains("one-line")) {
      feedContent.classList.remove("one-line");
      moreBtn[i].classList.add("hide");
    }
  });
}






// 피드 신고 버튼 클릭시 신고 창 열림
const commentReportBtn = document.getElementById("commentReportBtn");

commentReportBtn.addEventListener("click", function () {
  commentMenu.style.display = "none";
  report.style.display = "flex";

  body.classList.add("scrollLock");
});





// 신고창 취소 버튼 클릭 시 닫힘
reportCancle.addEventListener("click", function () {
  report.style.display = "none";

  body.classList.remove("scrollLock");
});
