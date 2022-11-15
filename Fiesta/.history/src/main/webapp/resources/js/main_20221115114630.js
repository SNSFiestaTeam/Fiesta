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

// FIXME: 댓글이 있을 시
// 초기 화면에서 최대 2개까지 표시, 3개 이상일 시 댓글 더보기 버튼 생성
// 댓글 더보기 버튼 클릭 시 댓글 10개 표시 10개 초과일 경우 모두보기 버튼 생성
// 모두보기 클릭 시 댓글 모달창으로 댓글 전체 표시
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
    const input =
      commentId[i].parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.parentNode.parentNode.parentNode.nextSibling.nextSibling
        .firstChild.nextSibling.firstChild.nextSibling;

    console.log(input);
    input.value = "@" + commentId[i].innerText;
  });
}

// 피드 헤더 ...아이콘 클릭 시 메뉴창
const hoverBtn = document.getElementsByClassName("hover-btn");
const commentMenu = document.getElementById("commentMenu");
for (let item of hoverBtn) {
  item.addEventListener("click", function () {
    commentMenu.style.display = "flex";

    body.classList.add("scrollLock");
  });
}

// 피트 헤더 메뉴창 취소 클릭시 닫힘

document
  .getElementById("commentMenuCancel")
  .addEventListener("click", function () {
    commentMenu.style.display = "none";

    body.classList.remove("scrollLock");
  });

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

// 이미지 슬라이더
// flexslider2 라이브러리 실행용
// 삭제 X
$(".flexslider").flexslider({
  animation: "slide",
});

// TODO: 게시글 상세 조회 후 화면 출력
function selectBoardList() {
  // TODO: 로그인 멤버가 팔로우한 회원번호 조회
  $.ajax({
    url: "/main/selectFollowing",
    data: { memberNo: memberNo },
    type: "GET",
    dataType: "JSON",
    success: (followingList) => {
      console.log(followingList);
      // 팔로우 리스트가 null이 아닐때
      if (followingList != null) {
        let selectBoardSql;

        // TODO: 팔로우한 멤버 번호로 작성된 게시글 불러오기
        // 팔로우 멤버 번호로 sql문 생성
        if (followingList.length == 1) {
          selectBoardSql = " = " + followingList[0].toTargetNo;
        } else {
          selectBoardSql =
            " BETWEEN " +
            followingList[0].toTargetNo +
            " AND " +
            followingList[followingList.length - 1].toTargetNo;
        }
        // setInterval(
        // 위에서 생성한 sql문으로 db에서 게시글 가져오기
        $.ajax(
          {
            url: "/main/selectBoardList",
            type: "GET",
            data: { selectBoardSql: selectBoardSql },
            dataType: "json",
            success: (boardList) => {
              console.log(boardList);

              for (let board of boardList) {
                createBoard(board);
              }
            },
            error: () => {
              console.log("게시글 조회 중 오류 발생");
            },
          }
          // ),
          // 1000
        );
      }
    },
    error: () => {
      console.log("서버 통신 실패");
    },
    complete: () => {},
  });
}

selectBoardList();
// TODO: 댓글 상세 조회 후 화면 출력

function createBoard(board) {
  // 피드 생성
  // 필요한 요소 생성 및 클래스, 속성 추가
  const feedDiv = document.createElement("div");
  feedDiv.classList.add("feed");

  // -------------------------------------------------
  // 작성자 프로필
  const profileImageDiv = document.createElement("div");
  profileImageDiv.classList.add("profile-image-area");

  const feedHeaderDiv = document.createElement("div");
  feedHeaderDiv.classList.add("feed-header");

  const writerInfoDiv = document.createElement("div");
  writerInfoDiv.classList.add("writer-info");

  const profilePhotoA = document.createElement("a");
  profilePhotoA.classList.add("profile-photo");

  // FIXME: 멤버 프로필 주소로 이동하는 GetMapping 만들기
  profilePhotoA.setAttribute("href", "#");

  const profileImage = document.createElement("img");
  profileImage.classList.add("feed-profile-image");

  const memberIdA = document.createElement("a");
  memberIdA.classList.add("feed-memberId");
  memberIdA.setAttribute("href", "#");

  // 게시글 작성자 정보가 담긴 객체 가져오기
  $.ajax({
    url: "/main/selectWriter",
    type: "GET",
    data: { memberNo: board.memberNo },
    dataType: "JSON",
    success: (writer) => {
      console.log(writer);
      // 멤버 프로필 이미지가 있으면 그 이미지로, 없으면 기본 이미지 출력
      if (writer.memberProfileImg == "") {
        profileImage.setAttribute("src", "/resources/images/profile.jpg");
      } else {
        profileImage.setAttribute("src", writer.memberProfileImg);
      }

      memberIdA.innerText = writer.memberNickname;
    },
  });

  const div1 = document.createElement("div");

  // FIXME: 버튼에 click 이벤트 추가
  const feedMenuBtn = document.createElement("button");
  feedMenuBtn.setAttribute("type", "button");
  feedMenuBtn.classList.add("fa-solid", "fa-ellipsis", "feed-header-menu");

  // 프로필 append
  profilePhotoA.append(profileImage);
  writerInfoDiv.append(profilePhotoA, memberIdA);

  div1.append(feedMenuBtn);

  feedHeaderDiv.append(writerInfoDiv, div1);
  profileImageDiv.append(feedHeaderDiv);
  feedDiv.append(profileImageDiv);

  // --------------------------------------------------------

  // 사진 목록

  $.ajax({
    url: "/main/selectImageList",
    data: { boardNo: board.boardNo },
    dataType: "JSON",
    success: (imageList) => {
      const imageListDiv = document.createElement("div");
      imageListDiv.classList.add("image-list", "flexslider");

      const imageUl = document.createElement("ul");
      imageUl.classList.add("slides");

      if (imageList.length > 0) {
        for (let i = 0; i < imageList.length; i++) {
          const imageLi = document.createElement("li");
          const uploadedImage = document.createElement("img");
          // img태그에 src 속성, alt 속성 추가
          uploadedImage.setAttribute("src", imageList[i].imgAddress);
          uploadedImage.setAttribute("alt", imageList[i].imgAccessibility);
          uploadedImage.classList.add("uploaded-image");
          imageLi.append(uploadedImage);
          imageUl.append(imageLi);
        }

        imageListDiv.append(imageUl);

        profileImageDiv.append(imageListDiv);
      }
    },
    error: (error) => {
      console.log(error);
    },
  });

  // TODO: 본문 요소 생성 및 클래스, 속성 추가

  // * 본문 컨테이너 요소
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content-section");

  const commentIconDiv = document.createElement("div");
  commentIconDiv.classList.add("comment-icon-menu");

  const div2 = document.createElement("div");

  const likeBtn = document.createElement("button");
  likeBtn.id = "likeBtn";
  likeBtn.classList.add("like-btn");

  const commentBtn = document.createElement("button");
  commentBtn.id = "commentBtn";
  commentBtn.classList.add("comment-btn");

  const dmBtn = document.createElement("button");
  dmBtn.id = "dmBtn";
  dmBtn.classList.add("dm-btn");

  const heartIcon = document.createElement("i");
  heartIcon.classList.add("fa-regular", "fa-heart");

  const commentIcon = document.createElement("i");
  commentIcon.classList.add("fa-regular", "fa-comment");

  const dmIcon = document.createElement("i");
  dmIcon.classList.add("fa-regular", "fa-paper-plane");

  const div3 = document.createElement("div");
  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.id = "bookmarkBtn";
  bookmarkBtn.classList.add("bookmark-btn");

  const bookmarkIcon = document.createElement("i");
  bookmarkIcon.classList.add("fa-regular", "fa-bookmark");

  div2.append(likeBtn, commentBtn, dmBtn);
  div3.append(bookmarkBtn);

  commentIconDiv.append(div2, div3);
  mainContentDiv.append(commentIconDiv);

  // TODO: 좋아요, 말풍선, DM, 북마크 버튼 생성

  const feedSection = document.getElementById("feedSection");
  feedSection.append(feedDiv, mainContentDiv);

  // ----------------------------------------------
}
