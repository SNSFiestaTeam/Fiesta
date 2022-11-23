// ! 무한 스크롤 용 객체 생성
const listEnd = document.getElementById("endList");
const option = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
};

// * 무한 스크롤
const observer = new IntersectionObserver(selectBoardList, option);
observer.observe(listEnd);

// * 현재 페이지 번호 변수 선언
let cp = 2;

// TODO: 게시글 상세 조회 후 화면 출력
function selectBoardList() {
  // TODO: 로그인 멤버가 팔로우한 회원의 게시글 목록 조회
  $.ajax({
    url: "/selectBoardList",
    type: "GET",
    data: { memberNo: memberNo, cp: cp },
    dataType: "json",
    success: (map) => {
      const boardList = map.boardList;
      const pagination = map.pagination;
      cp++;
      for (let board of boardList) {
        createBoard(board);
      }
    },
    error: () => {
      console.log("게시글 조회 중 오류 발생");
    },
  });
}

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

  // 멤버 프로필 이미지가 있으면 그 이미지로, 없으면 기본 이미지 출력
  if (board.memberProfileImg == undefined) {
    profileImage.setAttribute("src", "/resources/images/profile/profile.jpg");
  } else {
    profileImage.setAttribute("src", board.memberProfileImg);
  }

  memberIdA.innerText = board.memberNickname;

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

  const imageListDiv = document.createElement("div");
  imageListDiv.classList.add("image-list", "swiper", "mySwiper");

  const imageUl = document.createElement("ul");
  imageUl.classList.add("swiper-wrapper");

  if (board.imageList.length > 0) {
    for (let i = 0; i < board.imageList.length; i++) {
      const imageLi = document.createElement("li");
      imageLi.classList.add("swiper-slide");

      const uploadedImage = document.createElement("img");
      // img태그에 src 속성, alt 속성 추가
      uploadedImage.setAttribute("src", board.imageList[i].imgAddress);
      uploadedImage.setAttribute("alt", board.imageList[i].imgAccessibility);
      uploadedImage.classList.add("uploaded-image");
      imageLi.append(uploadedImage);
      imageUl.append(imageLi);
    }
  } else {
    const imageLi = document.createElement("li");
    imageLi.classList.add("swiper-slide");

    const uploadedImage = document.createElement("img");
    // img태그에 src 속성, alt 속성 추가
    uploadedImage.setAttribute(
      "src",
      "/resources/images/board/202211190013.jpg"
    );
    uploadedImage.classList.add("uploaded-image");
    imageLi.append(uploadedImage);
    imageUl.append(imageLi);
  }

  // 스와이퍼 슬라이드 navigation 버튼, pageination 버튼 생성

  const nextBtn = document.createElement("div");
  nextBtn.classList.add("swiper-button-next", "swiper-btn");

  const prevBtn = document.createElement("div");
  prevBtn.classList.add("swiper-button-prev", "swiper-btn");

  const pagerBtn = document.createElement("div");
  pagerBtn.classList.add("swiper-pagination", "swiper-btn");

  imageListDiv.append(imageUl, nextBtn, prevBtn, pagerBtn);

  profileImageDiv.append(imageListDiv);

  // ! ----------------------------------------------------------------------------------------------
  // ! swiper 슬라이드 초기화!!!!
  var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    // cssMode: true,

    // 반복
    loop: false,
    // 반복 시 이미지 계속 넘어갈 수 있게
    // loopAdditionalSlides: 1,

    // 해당 슬라이드 클릭 시 슬라이드 위치로 이동
    slideToClickedSlide: true,

    // 슬라이드 터치에 대한 저항 여부
    resistance: false,

    // 슬라이드가 1개일 때 pager, button 숨김 여부
    watchOverflow: true,

    grabCursor: false,

    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
  // ! 스와이퍼 슬라이드 초기화 끝
  // ! ----------------------------------------------------------------------------------------------

  // TODO: 본문 요소 생성 및 클래스, 속성 추가

  // * 본문 컨테이너 요소
  const mainContentDiv = document.createElement("div");
  mainContentDiv.classList.add("main-content-section");

  // TODO: 좋아요, 말풍선, DM, 북마크 버튼 생성
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

  likeBtn.append(heartIcon);
  commentBtn.append(commentIcon);
  dmBtn.append(dmIcon);

  bookmarkBtn.append(bookmarkIcon);

  div2.append(likeBtn, commentBtn, dmBtn);
  div3.append(bookmarkBtn);

  commentIconDiv.append(div2, div3);
  mainContentDiv.append(commentIconDiv);

  // 본문 컨테이너 생성
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.classList.add("main-container");

  // TODO: 좋아요 수 표시
  const likeCount = document.createElement("div");
  likeCount.classList.add("like-count");
  likeCount.innerText = "좋아요" + board.likeCount + "개";

  mainContainerDiv.append(likeCount);

  // * 본문 내용
  const feedMainContentDiv = document.createElement("div");
  feedMainContentDiv.classList.add("feed-main-content");

  const feedContentDiv = document.createElement("div");
  feedContentDiv.classList.add("feed-content", "one-line");

  const a = document.createElement("a");
  a.setAttribute("href", "#");

  const memberIdSpan = document.createElement("span");
  memberIdSpan.classList.add("member-id");
  memberIdSpan.innerText = board.memberNickname;

  // 해시태그 및 더보기 버튼
  // 해시태그
  const regEx = /(#[^\s#]+)/gm;
  const boardContent = board.boardContent.replace(
    regEx,
    // FIXME: 해시태그 검색 요청 주소 달기
    "<a href='#' class='hashtag'>$&</a>"
  );

  // TODO: 해시태그 클릭 이벤트 생성

  const span2 = document.createElement("span");
  span2.innerHTML = boardContent;

  a.append(memberIdSpan);
  feedContentDiv.append(a);
  feedContentDiv.append(span2);

  // 더보기 버튼
  // TODO: 더보기 버튼 클릭 이벤트 생성
  // FIXME: 본문 내용 2줄 이상일때만 더보기 버튼 생성
  const moreBtn = document.createElement("button");
  moreBtn.classList.add("more-btn");

  const moreSpan = document.createElement("span");
  moreSpan.id = "textMore";
  moreSpan.innerText = "더 보기";

  moreBtn.append(moreSpan);

  feedMainContentDiv.append(feedContentDiv, moreBtn);

  // 댓글 리스트
  const commentList = board.commentList;

  // 댓글 컨테이너 생성

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  // FIXME: 댓글 2개 초과일 시 댓글 더보기 출력
  if (board.commentList.length > 2) {
    const allCommentBtn = document.createElement("button");
    allCommentBtn.classList.add("all-comment-btn");
    allCommentBtn.innerText = "댓글 모두 보기";
    commentContainer.append(allCommentBtn);
  }

  const commentArea = document.createElement("div");
  commentArea.classList.add("comment-area");

  commentContainer.append(commentArea);

  const commentUl = document.createElement("ul");
  commentUl.classList.add("comment-list", "two-line");

  // TODO: 댓글 출력
  // TODO: 댓글 2개 이하일 시 2개만 출럭 더보기 버튼X
  // TODO: 댓글 3개 이상일 시 2개만 출력 더보기 버튼 O
  // TODO: 더보기 버튼 클릭 시 모든 댓글 조회하는 모달창 출력

  // ! 댓글, 대댓글 나눠서 출력하기

  // TODO: 대댓글 Default 숨기기
  // TODO: 대댓글 모두보기 버튼 클릭하면 모두 보기

  for (let comment of board.commentList) {
    if (comment.upperCommentNo != undefined) {
      const commentLi = document.createElement("li");
      commentLi.classList.add("comment");

      commentUl.append(commentLi);

      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment-firstChild");

      commentLi.append(commentDiv);

      const commentProfileA = document.createElement("a");
      commentProfileA.classList.add("comment-profile");

      const commentProfileImg = document.createElement("img");
      commentProfileImg.classList.add("comment-profile-image");

      commentProfileA.append(commentProfileImg);

      if (comment.memberProfileImg != undefined) {
        commentProfileImg.setAttribute("src", comment.memberProfileImg);
      } else {
        commentProfileImg.setAttribute(
          "src",
          "/resources/images/profile/profile.jpg"
        );
      }

      const commentDiv2 = document.createElement("div");
      commentDiv.classList.add("comment-firstLine");

      commentDiv.append(commentProfileA, commentDiv2);

      const commentDiv3 = document.createElement("div");

      const commentMemberIdA = document.createElement("a");
      commentMemberIdA.classList.add("comment-memberId");
      commentMemberIdA.innerText = comment.commentMemberId;

      const commentSpan = document.createElement("span");
      commentSpan.classList.add("comment-content");
      commentSpan.innerText = comment.commentContent;

      commentDiv3.append(commentMemberIdA, commentSpan);

      const commentDiv4 = document.createElement("div");

      const commentLikeBtn = document.createElement("button");
      commentLikeBtn.classList.add("comment-like-btn");

      const commentHeartIcon = document.createElement("i");
      commentHeartIcon.classList.add("fa-regular", "fa-heart");

      commentLikeBtn.append(commentHeartIcon);

      commentDiv4.append(commentLikeBtn);
      commentDiv2.append(commentDiv3, commentDiv4);

      const commentDiv5 = document.createElement("div");
      commentDiv5.classList.add("create-reply");

      const commentCreateDate = document.createElement("span");
      commentCreateDate.innerText = comment.commentCreateDate;

      const replyBtn = document.createElement("button");
      replyBtn.setAttribute("type", "button");
      replyBtn.classList.add("reply-btn");
      replyBtn.innerText = "답글 달기";

      const hoverBtn = document.createElement("button");
      hoverBtn.setAttribute("type", "button");
      hoverBtn.classList.add("fa-solid", "fa-ellipsis", "hover-btn");

      commentDiv5.append(commentCreateDate, replyBtn, hoverBtn);
    }
  }

  mainContainerDiv.append(feedMainContentDiv);
  mainContainerDiv.append(commentContainer);

  mainContentDiv.append(mainContainerDiv);

  feedDiv.append(mainContentDiv);

  const feedSection = document.getElementById("feedSection");
  feedSection.append(feedDiv);

  // ---------------------------------------------------
}
