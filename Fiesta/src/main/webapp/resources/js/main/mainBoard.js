// ! 무한 스크롤 용 객체 생성
const feedSection = document.querySelector('.feed-section');
let listEnd = feedSection.lastElementChild;
const option = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
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
    url: '/selectBoardList',
    type: 'GET',
    data: { memberNo: memberNo, cp: cp },
    dataType: 'json',
    success: (map) => {
      const boardList = map.boardList;
      const pagination = map.pagination;
      cp++;
      for (let board of boardList) {
        createBoard(board);
        console.log(cp);
      }
    },
    error: () => {
      console.log('게시글 조회 중 오류 발생');
    },
  });
}




// 게시글 화면 출력용 함수
function createBoard(board) {
  // 피드 생성
  // 필요한 요소 생성 및 클래스, 속성 추가
  const feedDiv = document.createElement('div');
  feedDiv.classList.add('feed');

  // -------------------------------------------------
  // 작성자 프로필
  const profileImageDiv = document.createElement('div');
  profileImageDiv.classList.add('profile-image-area');

  const feedHeaderDiv = document.createElement('div');
  feedHeaderDiv.classList.add('feed-header');

  const writerInfoDiv = document.createElement('div');
  writerInfoDiv.classList.add('writer-info');

  const profilePhotoA = document.createElement('a');
  profilePhotoA.classList.add('profile-photo');

  // FIXME: 멤버 프로필 주소로 이동하는 GetMapping 만들기
  profilePhotoA.setAttribute('href', '#');

  const profileImage = document.createElement('img');
  profileImage.classList.add('feed-profile-image');

  const memberIdA = document.createElement('a');
  memberIdA.classList.add('feed-memberId');
  memberIdA.setAttribute('href', '#');

  // 멤버 프로필 이미지가 있으면 그 이미지로, 없으면 기본 이미지 출력
  if (board.memberProfileImg == undefined) {
    profileImage.setAttribute('src', '/resources/images/profile/profile.jpg');
  } else {
    profileImage.setAttribute('src', board.memberProfileImg);
  }

  memberIdA.innerText = board.memberNickname;

  const div1 = document.createElement('div');

  // FIXME: 버튼에 click 이벤트 추가
  const feedMenuBtn = document.createElement('button');
  feedMenuBtn.setAttribute('type', 'button');
  feedMenuBtn.classList.add('fa-solid', 'fa-ellipsis', 'feed-header-menu');

  const mainContainerDiv = document.createElement('div');

  // * feedMenuBtn 클릭 시 이벤트 추가
  feedMenuBtn.addEventListener('click', () => {

    const feedMenu = document.getElementById('feedMenu');
    const loginFeedMenu = document.getElementById('feedMenuLogin');
    const body = document.getElementsByTagName('body')[0];
    const feedCommentBtnLogin = document.getElementById('feedCommentBtnLogin');
    const feedLikeBtnLogin = document.getElementById('feedLikeBtnLogin');

    commentBlockFlag = commentBlockFlagInput;
    boardPubPriFlag = boardPubPriFlagInput;

    console.log(commentBlockFlag);
    console.log(boardPubPriFlag);

    if (board.memberNickname == memberNickname) {
      // 댓글 기능 사용 유무에 따른 버튼 내용 변경
      if (commentBlockFlag.value == 'N') {
        feedCommentBtnLogin.innerText = '댓글 기능 해제'
      }
      
      if(commentBlockFlag.value == 'Y'){
        feedCommentBtnLogin.innerText = '댓글 기능 설정'
      }
      
      // 좋아요 수 공개 유무에 따른 버튼 내용 변경
      if (boardPubPriFlag.value == 'Y') {
        feedLikeBtnLogin.innerText = '좋아요 수 숨기기'
      } else {
        feedLikeBtnLogin.innerText = '좋아요 수 숨기기 취소'
      }

      loginFeedMenu.style.display = 'flex';

      tags = null;
      tags = {"likeCount": likeCount, "commentContainer": commentContainer,
        "commentInputArea": commentInputArea, "mainContainer": mainContainerDiv
      };
      
      console.log(tags.likeCount);
      console.log(tags.commentContainer);
      console.log(tags.commentInputArea);
      console.log(tags.mainContainer);

    } else {
      feedMenu.style.display = 'flex';
    }

    boardNo = board.boardNo;

    body.classList.add('scrollLock');
  });

  // 프로필 append
  profilePhotoA.append(profileImage);
  writerInfoDiv.append(profilePhotoA, memberIdA);

  div1.append(feedMenuBtn);

  feedHeaderDiv.append(writerInfoDiv, div1);
  profileImageDiv.append(feedHeaderDiv);
  feedDiv.append(profileImageDiv);

  // --------------------------------------------------------

  // 사진 목록

  const imageListDiv = document.createElement('div');
  imageListDiv.classList.add('image-list', 'swiper', 'mySwiper');

  const imageUl = document.createElement('ul');
  imageUl.classList.add('swiper-wrapper');

  if (board.imageList.length > 0) {
    for (let i = 0; i < board.imageList.length; i++) {
      const imageLi = document.createElement('li');
      imageLi.classList.add('swiper-slide');

      const uploadedImage = document.createElement('img');
      // img태그에 src 속성, alt 속성 추가
      uploadedImage.setAttribute(
        'src',
        board.imageList[i].imgAddress + board.imageList[i].imgChangeName
      );
      uploadedImage.setAttribute('alt', board.imageList[i].imgAccessibility);
      uploadedImage.classList.add('uploaded-image');
      imageLi.append(uploadedImage);
      imageUl.append(imageLi);
    }
  } else {
    const imageLi = document.createElement('li');
    imageLi.classList.add('swiper-slide');

    const uploadedImage = document.createElement('img');
    // img태그에 src 속성, alt 속성 추가
    uploadedImage.setAttribute(
      'src',
      '/resources/images/board/202211190013.jpg'
    );
    uploadedImage.classList.add('uploaded-image');
    imageLi.append(uploadedImage);
    imageUl.append(imageLi);
  }

  // 스와이퍼 슬라이드 navigation 버튼, pageination 버튼 생성

  const nextBtn = document.createElement('div');
  nextBtn.classList.add('swiper-button-next', 'swiper-btn');

  const prevBtn = document.createElement('div');
  prevBtn.classList.add('swiper-button-prev', 'swiper-btn');

  const pagerBtn = document.createElement('div');
  pagerBtn.classList.add('swiper-pagination', 'swiper-btn');

  imageListDiv.append(imageUl, nextBtn, prevBtn, pagerBtn);

  profileImageDiv.append(imageListDiv);

  // ! ----------------------------------------------------------------------------------------------
  // ! swiper 슬라이드 초기화!!!!
  var swiper = new Swiper('.mySwiper', {
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
  // ! 스와이퍼 슬라이드 초기화 끝
  // ! ----------------------------------------------------------------------------------------------

  // TODO: 본문 요소 생성 및 클래스, 속성 추가

  // * 본문 컨테이너 요소
  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content-section');

  // TODO: 좋아요, 말풍선, DM, 북마크 버튼 생성
  const commentIconDiv = document.createElement('div');
  commentIconDiv.classList.add('comment-icon-menu');

  const div2 = document.createElement('div');

  // 좋아요 버튼
  const likeBtn = document.createElement('button');
  likeBtn.id = 'likeBtn';
  likeBtn.classList.add('like-btn');

  // 댓글 버튼
  const commentBtn = document.createElement('button');
  commentBtn.id = 'commentBtn';
  commentBtn.classList.add('comment-btn');

  // 댓글 버튼 클릭 시 댓글 입력창 포커스
  commentBtn.addEventListener('click', () => {
    commentInput.focus();
  });

  // DM 버튼
  const dmBtn = document.createElement('button');
  dmBtn.id = 'dmBtn';
  dmBtn.classList.add('dm-btn');

  // DM 버튼 클릭 시 DM 모달창 열림
  dmBtn.addEventListener('click', () => {
    const dmContainer = document.getElementById('dmContainer');
    dmContainer.style.display = 'flex';
    dmContainer.classList.add('scrollrock');
  });

  const heartIcon = document.createElement('i');

  if (board.likeCheck == 1) {
    heartIcon.classList.add('fa-solid', 'fa-heart');
    likeBtn.classList.add("red");
  }

  if (board.likeCheck == 0) {
    heartIcon.classList.add('fa-regular', 'fa-heart');
  }

  const commentIcon = document.createElement('i');
  commentIcon.classList.add('fa-regular', 'fa-comment');

  const dmIcon = document.createElement('i');
  dmIcon.classList.add('fa-regular', 'fa-paper-plane');

  const div3 = document.createElement('div');
  const bookmarkBtn = document.createElement('button');
  bookmarkBtn.id = 'bookmarkBtn';
  bookmarkBtn.classList.add('bookmark-btn');

  // 북마크 버튼 클릭 시 이벤트 추가
  bookmarkBtn.addEventListener('click', () => {
    const emptyIcon = '<i class="fa-regular fa-bookmark"></i>';
    const solidIcon = '<i class="fa-solid fa-bookmark"></i>';

    if (bookmarkBtn.innerHTML == emptyIcon) {
      $.ajax({
        url: '/boardBookmarkOn',
        data: { "boardNo": board.boardNo, "memberNo": memberNo },
        success: (result) => {
          if (result > 0) {
            bookmarkBtn.innerHTML = solidIcon;
          } else {
            console.log('북마크 실패');
          }
        },
        error: () => {
          console.log('북마크 추가 중 오류 발생');
        },
      });
    } else {
      $.ajax({
        url: '/boardBookmarkOff',
        data: { "boardNo": board.boardNo, memberNo: memberNo },
        success: (result) => {
          if (result > 0) {
            bookmarkBtn.innerHTML = emptyIcon;
          } else {
            console.log('북마크 취소 실패');
          }
        },
        error: () => {
          console.log('북마크 취소 중 오류 발생');
        },
      });
    }
  });

  const bookmarkIcon = document.createElement('i');

  if (board.bookmarkCheck == 0) {
    bookmarkIcon.classList.add('fa-regular', 'fa-bookmark');
  }

  if (board.bookmarkCheck == 1) {
    bookmarkIcon.classList.add('fa-solid', 'fa-bookmark');
  }

  likeBtn.append(heartIcon);
  commentBtn.append(commentIcon);
  dmBtn.append(dmIcon);

  bookmarkBtn.append(bookmarkIcon);

  div2.append(likeBtn, commentBtn, dmBtn);
  div3.append(bookmarkBtn);

  commentIconDiv.append(div2, div3);
  mainContentDiv.append(commentIconDiv);

  // 본문 컨테이너 생성
  
  mainContainerDiv.classList.add('main-container');

  // TODO: 좋아요 수 표시
  const likeCount = document.createElement('div');
  likeCount.classList.add('like-count');

  if(board.boardPubPriFlag == 'Y') {
    // likeCount의 자식 요소 boardLikeCount
    const boardLikeCount = document.createElement('span');
    boardLikeCount.classList.add('board-like-count');
    boardLikeCount.innerText = board.likeCount;
    
    likeCount.innerHTML = '좋아요 ' + boardLikeCount.innerText + '개';
  }

  if(board.boardPubPriFlag == 'N') {
    if(board.likeCount == 0) {
      likeCount.innerText = "좋아요를 눌러주세요";
    } else if (board.likeCount == 1) {
      likeCount.innerText = "한 명이 좋아합니다";
    } else {
      likeCount.innerText = "여러명이 좋아합니다";
    }
  }


  // 좋아요 버튼에 이벤트리스너 생성
  likeBtn.addEventListener('click', function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    if (!likeBtn.classList.contains('red')) {
      $.ajax({
        url: '/boardLikeUp',
        data: { "boardNo": board.boardNo, "memberNo": memberNo },
        success: (result) => {

            likeBtn.innerHTML = '';
            likeBtn.innerHTML = solidHeart;
            likeBtn.classList.add('red');


            
            if(board.boardPubPriFlag == 'Y') {
              likeCount.innerHTML = '좋아요 ' + result + '개';

            } 
  
            if(board.boardPubPriFlag == 'N') {
              if(result == 0) {
                likeCount.innerText = "좋아요를 눌러주세요";
              } else if(result == 1) {
                likeCount.innerText = "한 명이 좋아합니다";     
              } else {
                likeCount.innerText = "여러 명이 좋아합니다";     
              }
            }

        },
      });
    } else {
      $.ajax({
        url: '/boardLikeDown',
        data: { "boardNo": board.boardNo, "memberNo": memberNo },
        success: (result) => {

          likeBtn.innerHTML = emptyHeart;
          likeBtn.classList.remove('red');

          if(board.boardPubPriFlag == 'Y') {
            likeCount.innerHTML = '좋아요 ' + result + '개';

          } 

          if(board.boardPubPriFlag == 'N') {
            if(result == 0) {
              likeCount.innerText = "좋아요를 눌러주세요";
            } else if(result == 1) {
              likeCount.innerText = "한 명이 좋아합니다";     
            } else {
              likeCount.innerText = "여러 명이 좋아합니다";     
            }
          }
          
        },
      });
    }
  });

  // * 본문 내용
  const feedMainContentDiv = document.createElement('div');
  feedMainContentDiv.classList.add('feed-main-content');

  mainContainerDiv.append(likeCount, feedMainContentDiv);

  const feedContentDiv = document.createElement('div');
  feedContentDiv.classList.add('feed-content', 'one-line');

  const a = document.createElement('a');
  a.setAttribute('href', '#');

  const memberIdSpan = document.createElement('span');
  memberIdSpan.classList.add('member-id');
  memberIdSpan.innerText = board.memberNickname;

  // // 해시태그 및 더보기 버튼
  // // 해시태그
  // const regEx = /(#[^\s#]+)/gm;

  // const boardContent = board.boardContent.replace(regEx, (match) => {
  //   const tagName = match.replace("#", '');
  //   return "<a href='/search?searchInput="+tagName+"' class='hashtag'>"+match+"</a>"
  // });



  const span2 = document.createElement('span');
  span2.classList.add('board-content');
  span2.innerHTML = board.boardContent;

  a.append(memberIdSpan);
  feedContentDiv.append(a);
  feedContentDiv.append(span2);

  // 더보기 버튼
  // TODO: 더보기 버튼 클릭 이벤트 생성
  // FIXME: 본문 내용 2줄 이상일때만 더보기 버튼 생성
  const moreBtn = document.createElement('button');
  moreBtn.classList.add('more-btn');

  moreBtn.addEventListener('click', function () {

    if (feedContentDiv.classList.contains('one-line')) {
      feedContentDiv.classList.remove('one-line');
      moreBtn.classList.add('hide');
    }
  });

  const moreSpan = document.createElement('span');
  moreSpan.id = 'textMore';
  moreSpan.innerText = '더 보기';

  moreBtn.append(moreSpan);

  feedMainContentDiv.append(feedContentDiv);

  if (board.boardContent.trim().length > 50) {
    feedMainContentDiv.append(moreBtn);
  }

  // 댓글 리스트
  
  
  // 댓글 컨테이너 생성
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment-container');

  const commentInputArea = document.createElement('div');

  const createDate = document.createElement('span');
  createDate.classList.add('create-date');
  createDate.innerHTML = board.boardCreateDate;
  

  if(board.commentBlockFlag == 'N') {

  // 댓글 2개 초과일 시 댓글 더보기 출력
  if(board.commentList.length > 2) {
    const allCommentBtn = document.createElement('button');
    allCommentBtn.classList.add('all-comment-btn');
    allCommentBtn.innerHTML = '댓글 모두 보기(' + board.commentCount + ')';
    
    commentContainer.append(allCommentBtn);



    // allCommentBtn에 클릭 이벤트 추가
    allCommentBtn.addEventListener('click', () => {
      modalOn = 1;
      const commentList = document.getElementById('commentContainerM');
  
      console.log('댓글 모두 보기 실행');
  
      allCommentBtn.classList.add('hide');
  
      // 게시글 번호 얻어오기
      boardNo = board.boardNo;
      boardMemberNickname = board.memberNickname;
      boardMemberProfileImg = board.memberProfileImg;
      
      console.log("boardNo: " + boardNo) ;
      console.log("boardMemberNickname: " + boardMemberNickname) ;
      console.log("boardMemberProfileImg: " + boardMemberProfileImg) ;

      console.log("boardNo: " + boardNo) ;

      const commentListUlM = document.getElementById('commentListUl');

      // 모달창 프로필, 닉네임 설정
      const profilePhotoM = document.getElementById('profilePhotoM');
      const feedProfileImageM = document.getElementById('feedProfileImageM');
      const feedMemberIdM = document.getElementById('feedMemberIdM');
      profilePhotoM.href = '/feed/' + boardMemberNickname;
      feedProfileImageM.setAttribute('src', boardMemberProfileImg);

      feedMemberIdM.innerText = boardMemberNickname;
      feedMemberIdM.href = '/feed/' + boardMemberNickname;

  
      // 댓글 리스트 불러오기
      selectCommentListM(boardNo, commentListUlM);
  
      commentList.style.display = 'flex';
      document.getElementsByTagName('body')[0].classList.add('scrollLock');




      

      // 댓글 더보기 리스트 X 버튼 클릭 시
      document.getElementById('commentListXBtn').addEventListener('click', () => {
        commentList.style.display = 'none';
        allCommentBtn.classList.remove('hide');
        document.getElementsByTagName('body')[0].classList.remove('scrollLock');
        document.getElementById('commentInputM').value = "";
        modalOn=0;
      });
  
    });



  }

  // commentContainer의 자식 요소 commentArea
  const commentArea = document.createElement('div');
  commentArea.classList.add('comment-area');

  commentContainer.append(commentArea);

  // commentArea의 자식 요소 commentUl
  const commentUl = document.createElement('ul');
  commentUl.classList.add('comment-list', 'two-line');

  commentArea.append(commentUl);

  // TODO: 댓글 출력
  // TODO: 댓글 2개 이하일 시 2개만 출럭 더보기 버튼X
  // TODO: 댓글 3개 이상일 시 2개만 출력 더보기 버튼 O
  // TODO: 더보기 버튼 클릭 시 모든 댓글 조회하는 모달창 출력

  // ! 댓글, 대댓글 나눠서 출력하기

  // TODO: 대댓글 Default 숨기기
  // TODO: 대댓글 모두보기 버튼 클릭하면 모두 보기
  for (let comment of board.commentList) {
    if (comment.upperCommentNo == 0) {

      // commentUl의 자식 요소 commentLi
      const commentLi = document.createElement('li');
      commentLi.classList.add('comment');
      commentUl.append(commentLi);

      // commentNo input hidden 태그 생성
      const commentNoInput = document.createElement("input");
      commentNoInput.setAttribute("type", 'hidden');
      commentNoInput.value=comment.commentNo;
      commentNoInput.classList.add("comment-no");


      // commentLi의 자식요소 commentFirstChild, moreReply
      const commentFirstChild = document.createElement('div');
      commentFirstChild.classList.add('comment-firstchild');

      commentLi.append(commentNoInput, commentFirstChild);

      // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
      const commentProfileA = document.createElement('a');
      commentProfileA.classList.add('comment-profile');

      const commentDiv1 = document.createElement('div');

      commentFirstChild.append(commentProfileA, commentDiv1);

      // commentProfileA의 자식 요소 commentProfileImg
      const commentProfileImg = document.createElement('img');
      commentProfileImg.classList.add('comment-profile-image');

      commentProfileA.append(commentProfileImg);

      if (comment.memberProfileImg != undefined) {
        commentProfileImg.setAttribute('src', comment.memberProfileImg);
      } else {
        commentProfileImg.setAttribute(
          'src',
          '/resources/images/profile/profile.jpg'
        );
      }

      // commentDiv1의 자식 요소 commentFirstLine
      const commentFirstLine = document.createElement('div');
      commentFirstLine.classList.add('comment-firstline');

      // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
      const commentDiv2 = document.createElement('div');
      commentDiv2.classList.add('comment-id-content');
      const commentDiv3 = document.createElement('div');

      commentFirstLine.append(commentDiv2, commentDiv3);

      // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
      const commentMemberIdA = document.createElement('a');
      commentMemberIdA.classList.add('comment-memberId');
      commentMemberIdA.innerText = comment.memberNickname;

      const commentSpan = document.createElement('span');
      commentSpan.classList.add('comment-content');
      commentSpan.innerText = comment.commentContent;

      commentDiv2.append(commentMemberIdA, commentSpan);

      // commentDiv3의 자식 요소 commentLikeBtn
      const commentLikeBtn = document.createElement('button');
      commentLikeBtn.classList.add('comment-like-btn');

      // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
      commentLikeBtn.addEventListener('click', function () {
        const emptyHeart = '<i class="fa-regular fa-heart"></i>';
        const solidHeart = '<i class="fa-solid fa-heart"></i>';

        // 댓글 좋아요 안한 상태일 때
        if (!commentLikeBtn.classList.contains('red')) {
          // 좋아요 DB에 추가
          $.ajax({
            url: '/comment/likeUp',
            data: { commentNo: comment.commentNo, memberNo: memberNo },
            success: (result) => {
              if (result > 0) {
                commentLikeBtn.innerHTML = '';
                commentLikeBtn.innerHTML = solidHeart;
                commentLikeBtn.classList.add('red');
              } else {
                console.log('댓글 좋아요 증가 안됨');
              }
            },
            error: () => {
              console.log('댓글 좋아요 증가 실패');
            },
          });
        } else {
          // 댓글에 좋아요 돼있을 때

          // 댓글 좋아요 DB에서 삭제
          $.ajax({
            url: '/comment/likeDown',
            data: { commentNo: comment.commentNo, memberNo: memberNo },
            success: (result) => {
              if (result > 0) {
                commentLikeBtn.innerHTML = emptyHeart;
                commentLikeBtn.classList.remove('red');
              } else {
                console.log('댓글 좋아요 취소 안됨');
              }
            },
            error: () => {
              console.log('댓글 좋아요 취소 실패');
            },
          });
        }
      });

      // commentLikeBtn의 자식 요소 commentHeartIcon
      const commentHeartIcon = document.createElement('i');
      if (comment.commentLikeCheck == 0) {
        commentHeartIcon.classList.add('fa-regular', 'fa-heart');
      }
      if (comment.commentLikeCheck == 1) {
        commentHeartIcon.classList.add('fa-solid', 'fa-heart');
        commentLikeBtn.classList.add('red')

      }

      commentLikeBtn.append(commentHeartIcon);

      commentDiv3.append(commentLikeBtn);

      // commentDiv1의 자식 요소 createReply
      const createReply = document.createElement('div');
      createReply.classList.add('create-reply');

      commentDiv1.append(commentFirstLine, createReply);

      // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
      const commentCreateDate = document.createElement('span');
      commentCreateDate.innerText = comment.commentCreateDate;

      const replyBtn = document.createElement('button');
      replyBtn.setAttribute('type', 'button');
      replyBtn.classList.add('reply-btn');
      replyBtn.innerText = '답글 달기';

      // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
      // 만약 이미 언급된 닉네임일 시 추가 안됨
      // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
      replyBtn.addEventListener('click', () => {
        const commentInput =
          commentUl.parentElement.parentElement.parentElement
            .nextElementSibling.firstElementChild.firstElementChild;
        commentInput.value = '';
        commentInput.value = '@' + commentMemberIdA.innerText + ' ';
        commentInput.focus();

        upperCommentNo = commentNoInput.value;
        console.log("upperCommentNo: " + upperCommentNo);
      });

      const hoverBtn = document.createElement('button');
      hoverBtn.setAttribute('type', 'button');
      hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

      hoverBtn.addEventListener('click', function () {
        const commentMenu = document.getElementById('commentMenu');
        const loginCommentMenu = document.getElementById('commentMenuL');

        deleteBoardNo = comment.boardNo;
        deleteCommentNo = comment.commentNo;
        deleteCommentUl = commentUl;

        console.log(deleteBoardNo);
        console.log(deleteCommentNo);
        console.log(deleteCommentUl);


        if(commentMemberIdA.innerText == memberNickname) {
          // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
          loginCommentMenu.style.display = "flex";
        } else {
          commentMenu.style.display = 'flex';
        }

        body.classList.add('scrollLock');
      });

      createReply.append(commentCreateDate, replyBtn, hoverBtn);

      // 답글이 있으면 버튼 생성
      if (comment.replyCount > 0) {
        const commentNo = comment.commentNo;
        const moreReply = document.createElement('span');
        moreReply.classList.add('more-reply');
        // FIXME: 경로 설정하기
        moreReply.innerText = '모든 답글 보기(' + comment.replyCount + ')';
        commentLi.append(moreReply);

        // 모든 답글 보기 버튼에 클릭 이벤트 추가
        moreReply.addEventListener('click', () => {
        moreReply.style.display = 'none';

        selectReplyList(commentNo, commentLi);
        });

      }
    }
  }

  // 댓글 입력창 추가
  
  
  const div4 = document.createElement('div');
  
  commentInputArea.append(div4);
  
  const commentInput = document.createElement('textarea');
  commentInput.setAttribute('name', 'comment');
  commentInput.setAttribute('placeholder', '댓글 달기...');
  commentInput.id = 'commentInput';
  commentInput.classList.add('comment-input');
  
  const postingBtn = document.createElement('button');
  postingBtn.classList.add('posting-btn');
  postingBtn.disabled = true;
  postingBtn.innerText = '게시';
  
  // 댓글 입력창에 입력 이벤트 추가
  commentInput.addEventListener('input', () => {
    if (commentInput.value.trim().length == 0) {
      postingBtn.setAttribute('disabled', true);
      return;
    } else {
      postingBtn.removeAttribute('disabled');
      return;
    }
  });
  
  // postingBtn에 게시 클릭 이벤트 추가
  postingBtn.addEventListener('click', () => {
    console.log(commentInput.innerText);
    
    if (commentInput.value != '') {
      $.ajax({
        url: '/comment/insert',
        type: 'Post',
        data: {
          'memberNo': memberNo,
          'boardNo': board.boardNo,
          'commentContent': commentInput.value,
          'upperCommentNo': upperCommentNo,
        },
        success: (result) => {
          if (result > 0) {
            const flag = 1; //1이 등록 0이 삭제

            selectCommentList(board.boardNo, commentUl, flag);
            commentInput.value = '';
            mainContainerDiv.scrollTop = mainContainerDiv.scrollHeight;
          }
        },
        error: () => {
          console.log('댓글 등록 오류');
        },
      });
    }
  });

    // 댓글 입력창에 enter 이벤트 리스너 추가
    commentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

      if (commentInput.value != '') {
        $.ajax({
          url: '/comment/insert',
          type: 'Post',
          data: {
            'memberNo': memberNo,
            'boardNo': board.boardNo,
            'commentContent': commentInput.value,
            'upperCommentNo': upperCommentNo,
          },
          success: (result) => {
            if (result > 0) {
              const flag = 1; //1이 등록 0이 삭제

              selectCommentList(board.boardNo, commentUl, flag);
              commentInput.value = '';
              mainContainerDiv.scrollTop = mainContainerDiv.scrollHeight;
            }
          },
          error: () => {
            console.log('댓글 등록 오류');
          },
        });
      }
    
    }
  });
  
  div4.append(commentInput, postingBtn);
  
}

commentInputArea.classList.add('comment-input-area');
mainContainerDiv.append(feedMainContentDiv);
mainContainerDiv.append(commentContainer);
mainContainerDiv.append(createDate);
mainContentDiv.append(mainContainerDiv);
mainContentDiv.append(commentInputArea);


  // boardNo hidden input 태그 추가
  const boardNoInput = document.createElement("input");
  boardNoInput.setAttribute("type", "hidden");
  boardNoInput.classList.add("board-no");
  boardNoInput.value = board.boardNo;

  const commentBlockFlagInput = document.createElement("input");
  commentBlockFlagInput.setAttribute("type", "hidden");
  commentBlockFlagInput.classList.add("comment-block-fl");
  commentBlockFlagInput.value = board.commentBlockFlag;

  const boardPubPriFlagInput = document.createElement("input");
  boardPubPriFlagInput.setAttribute("type", "hidden");
  boardPubPriFlagInput.classList.add("board-pub-pri-fl");
  boardPubPriFlagInput.value = board.boardPubPriFlag;

  feedDiv.append(mainContentDiv, boardNoInput, commentBlockFlagInput, boardPubPriFlagInput);

  const feedSection = document.getElementById('feedSection');
  feedSection.append(feedDiv);

  listEnd = feedSection.lastElementChild;
  // ---------------------------------------------------
}



// 댓글 목록 조회 후 출력
function selectCommentList(boardNo1, commentListUl, flag) {
  console.log(boardNo1, memberNo);

  $.ajax({
    url: '/comment/list',
    data: { 'boardNo': boardNo1, 'myNo': memberNo },
    dataType: 'JSON',
    success: (commentList) => {
      console.log(commentList);
      if (commentListUl.parentElement.parentElement.firstElementChild.classList.contains('all-comment-btn')) {
        
        // 댓글 모두 보기 버튼 내용 수정
        commentListUl.parentElement.parentElement.firstElementChild.innerText =
          '댓글 모두 보기(' + commentList.length + ')';
      } else {

        if (commentList.length == 3 && flag == 1) { 
          // 댓글이 추가해서 3개가 됐다면 댓글 모두보기 버튼 추가
          const allCommentBtn = document.createElement('button');
          allCommentBtn.classList.add('all-comment-btn');
          allCommentBtn.innerText = '댓글 모두 보기(' + commentList.length + ')';
          commentListUl.parentElement.parentElement.prepend(allCommentBtn);
  
          // 댓글 모두보기 버튼에 클릭 이벤트
          allCommentBtn.addEventListener('click', () => {
            modalOn = 1;

            const commentList = document.getElementById('commentContainerM');
        
            console.log('댓글 모두 보기 실행');
        
            allCommentBtn.classList.add('hide');
        
            // 게시글 번호 얻어오기
            boardNo = commentListUl.parentElement.parentElement.parentElement
              .parentElement.nextElementSibling.value;
            boardMemberNickname = commentListUl.parentElement.parentElement.parentElement
              .parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild
              .firstElementChild.nextElementSibling.innerText;
            boardMemberProfileImg = commentListUl.parentElement.parentElement.parentElement
              .parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild
              .firstElementChild.firstElementChild.getAttribute('src');
            
            console.log("boardNo: " + boardNo) ;
            console.log("boardMemberNickname: " + boardMemberNickname) ;
            console.log("boardMemberProfileImg: " + boardMemberProfileImg) ;
      
            const commentListUlM = document.getElementById('commentListUl');


            // 모달창 프로필, 닉네임 설정
            const profilePhotoM = document.getElementById('profilePhotoM');
            const feedProfileImageM = document.getElementById('feedProfileImageM');
            const feedMemberIdM = document.getElementById('feedMemberIdM');
            profilePhotoM.href = '/feed/' + boardMemberNickname;
            feedProfileImageM.setAttribute('src', boardMemberProfileImg);

            feedMemberIdM.innerText = boardMemberNickname;
            feedMemberIdM.href = '/feed/' + boardMemberNickname;

            
            // 댓글 리스트 불러오기
            selectCommentListM(boardNo, commentListUlM);
        
            commentList.style.display = 'flex';
            document.getElementsByTagName('body')[0].classList.add('scrollLock');
      
      
            // 댓글 더보기 리스트 X 버튼 클릭 시
            document.getElementById('commentListXBtn').addEventListener('click', () => {
              commentList.style.display = 'none';
              allCommentBtn.classList.remove('hide');
              document.getElementsByTagName('body')[0].classList.remove('scrollLock');
              document.getElementById('commentInputM').value = "";
              modalOn = 0;
            });
        
          });
  
        }
      }



      // 댓글 목록 최상위 태그의 내용 삭제
      commentListUl.innerHTML = '';

      for (let comment of commentList) {
        if (comment.upperCommentNo == 0) {
          console.log(comment);

          // commentUl의 자식 요소 commentLi
          const commentLi = document.createElement('li');
          commentLi.classList.add('comment');
          commentListUl.append(commentLi);

          // commentNo input hidden 태그 생성
          const commentNoInput = document.createElement("input");
          commentNoInput.setAttribute("type", 'hidden');
          commentNoInput.value=comment.commentNo;
          commentNoInput.classList.add("comment-no");

          // commentLi의 자식요소 commentFirstChild, moreReply
          const commentFirstChild = document.createElement('div');
          commentFirstChild.classList.add('comment-firstchild');

          commentLi.append(commentNoInput, commentFirstChild);

          // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
          const commentProfileA = document.createElement('a');
          commentProfileA.classList.add('comment-profile');

          const commentDiv1 = document.createElement('div');

          commentFirstChild.append(commentProfileA, commentDiv1);

          // commentProfileA의 자식 요소 commentProfileImg
          const commentProfileImg = document.createElement('img');
          commentProfileImg.classList.add('comment-profile-image');

          commentProfileA.append(commentProfileImg);

          if (comment.memberProfileImg != undefined) {
            commentProfileImg.setAttribute('src', comment.memberProfileImg);
          } else {
            commentProfileImg.setAttribute(
              'src',
              '/resources/images/profile/profile.jpg'
            );
          }

          // commentDiv1의 자식 요소 commentFirstLine
          const commentFirstLine = document.createElement('div');
          commentFirstLine.classList.add('comment-firstline');

          // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
          const commentDiv2 = document.createElement('div');
          commentDiv2.classList.add('comment-id-content');
          const commentDiv3 = document.createElement('div');

          commentFirstLine.append(commentDiv2, commentDiv3);

          // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
          const commentMemberIdA = document.createElement('a');
          commentMemberIdA.classList.add('comment-memberId');
          commentMemberIdA.innerText = comment.memberNickname;

          const commentSpan = document.createElement('span');
          commentSpan.classList.add('comment-content');
          commentSpan.innerHTML = comment.commentContent;

          commentDiv2.append(commentMemberIdA, commentSpan);

          // commentDiv3의 자식 요소 commentLikeBtn
          const commentLikeBtn = document.createElement('button');
          commentLikeBtn.classList.add('comment-like-btn');

          // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
          commentLikeBtn.addEventListener('click', function () {
            const emptyHeart = '<i class="fa-regular fa-heart"></i>';
            const solidHeart = '<i class="fa-solid fa-heart"></i>';

            // 댓글 좋아요 안한 상태일 때
            if (!commentLikeBtn.classList.contains('red')) {
              // 좋아요 DB에 추가
              $.ajax({
                url: '/comment/likeUp',
                data: { commentNo: comment.commentNo, memberNo: memberNo },
                success: (result) => {
                  if (result > 0) {
                    commentLikeBtn.innerHTML = '';
                    commentLikeBtn.innerHTML = solidHeart;
                    commentLikeBtn.classList.add('red');
                  } else {
                    console.log('댓글 좋아요 증가 안됨');
                  }
                },
                error: () => {
                  console.log('댓글 좋아요 증가 실패');
                },
              });
            } else {
              // 댓글에 좋아요 돼있을 때

              // 댓글 좋아요 DB에서 삭제
              $.ajax({
                url: '/comment/likeDown',
                data: { commentNo: comment.commentNo, memberNo: memberNo },
                success: (result) => {
                  if (result > 0) {
                    commentLikeBtn.innerHTML = emptyHeart;
                    commentLikeBtn.classList.remove('red');
                  } else {
                    console.log('댓글 좋아요 취소 안됨');
                  }
                },
                error: () => {
                  console.log('댓글 좋아요 취소 실패');
                },
              });
            }
          });

          // commentLikeBtn의 자식 요소 commentHeartIcon
          const commentHeartIcon = document.createElement('i');
          if (comment.commentLikeCheck == 0) {
            commentHeartIcon.classList.add('fa-regular', 'fa-heart');
          }
          if (comment.commentLikeCheck == 1) {
            commentHeartIcon.classList.add('fa-solid', 'fa-heart');
            commentLikeBtn.classList.add("red");
          }

          commentLikeBtn.append(commentHeartIcon);

          commentDiv3.append(commentLikeBtn);

          // commentDiv1의 자식 요소 createReply
          const createReply = document.createElement('div');
          createReply.classList.add('create-reply');

          commentDiv1.append(commentFirstLine, createReply);

          // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
          const commentCreateDate = document.createElement('span');
          commentCreateDate.innerText = comment.commentCreateDate;

          const replyBtn = document.createElement('button');
          replyBtn.setAttribute('type', 'button');
          replyBtn.classList.add('reply-btn');
          replyBtn.innerText = '답글 달기';


          // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
          // 만약 이미 언급된 닉네임일 시 추가 안됨
          // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
          replyBtn.addEventListener('click', () => {
            const commentInput =
              commentListUl.parentElement.parentElement.parentElement
                .nextElementSibling.firstElementChild.firstElementChild;
            commentInput.value = '';
            commentInput.value = '@' + commentMemberIdA.innerText + ' ';
            commentInput.focus();

            upperCommentNo = comment.commentNo;
            console.log("upperCommentNo: " + upperCommentNo);

          });

          const hoverBtn = document.createElement('button');
          hoverBtn.setAttribute('type', 'button');
          hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

          // 댓글 ... 버튼에 클릭 이벤트 추가
          hoverBtn.addEventListener('click', function () {
            const commentMenu = document.getElementById('commentMenu');
            const loginCommentMenu = document.getElementById('commentMenuL');
            const body = document.getElementsByTagName('body')[0];

            console.log(commentMemberIdA.innerText);
            console.log(memberNickname);

            deleteCommentNo = comment.commentNo;
            deleteBoardNo = comment.boardNo;
            deleteCommentUl = commentListUl;

            console.log("deleteCommentNo: " + deleteCommentNo);
            console.log("deleteBoardNo: " + deleteBoardNo);
            console.log("deleteCommentUl: " + deleteCommentUl);

            if (commentMemberIdA.innerText == memberNickname) {
              // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
              loginCommentMenu.style.display = 'flex';
            } else {
              commentMenu.style.display = 'flex';
            }

            body.classList.add('scrollLock');
        });

          createReply.append(commentCreateDate, replyBtn, hoverBtn);

          // 답글이 있으면 버튼 생성
          if (comment.replyCount > 0) {
            const commentNo = comment.commentNo;
            const moreReply = document.createElement('span');
            moreReply.classList.add('more-reply');
            // FIXME: 경로 설정하기
            moreReply.innerText = '모든 답글 보기(' + comment.replyCount + ')';
            commentLi.append(moreReply);

            // 모든 답글 보기 버튼에 클릭 이벤트 추가
            moreReply.addEventListener('click', () => {
              moreReply.style.display = 'none';
              selectReplyList(commentNo, commentLi);
            });
          }
        } 
      }
    },
    error: () => {
      console.log('댓글 목록 조회 에러');
    },
  });
}


// 대댓글 목록 조회 후 출력
function selectReplyList(commentNo, commentLi) {
  $.ajax({
    url: "/comment/select/reply",
    data: {'commentNo': commentNo, 'myNo':memberNo},
    dataType: "json",
    type: "POST",
    success: (replyList)=>{
      console.log(replyList);

      const replyUl = document.createElement('ul');
      replyUl.classList.add("reply-list");
      replyUl.style.display = "flex";
      replyUl.style.flexDirection = "column";

      for(let comment of replyList) {
         // 답글 모양 출력


        commentLi.append(replyUl);

        // replyUl의 자식 요소 replyLi
        const replyLi = document.createElement('li');
        replyLi.classList.add('comment');
        replyLi.id = 'reply';
        replyUl.append(replyLi);

        // replyLi의 자식요소 replyFirstChild, moreReply
        const replyFirstChild = document.createElement('div');
        replyFirstChild.classList.add('reply-firstchild');

        // commentNo input hidden 태그 생성
        const commentNoInput = document.createElement("input");
        commentNoInput.setAttribute("type", 'hidden');
        commentNoInput.value=comment.commentNo;
        commentNoInput.classList.add("comment-no");

        replyLi.append(commentNoInput, replyFirstChild);

        // replyFirstChild의 자식 요소 replyProfileA, replyDiv1
        const replyProfileA = document.createElement('a');
        replyProfileA.classList.add('comment-profile');

        const replyDiv1 = document.createElement('div');

        replyFirstChild.append(replyProfileA, replyDiv1);

        // replyProfileA의 자식 요소 replyProfileImg
        const replyProfileImg = document.createElement('img');
        replyProfileImg.classList.add('comment-profile-image');

        replyProfileA.append(replyProfileImg);

        if (comment.memberProfileImg != undefined) {
          replyProfileImg.setAttribute('src', comment.memberProfileImg);
        } else {
          replyProfileImg.setAttribute(
            'src',
            '/resources/images/profile/profile.jpg'
          );
        }

        // replyDiv1의 자식 요소 replyFirstLine
        const replyFirstLine = document.createElement('div');
        replyFirstLine.classList.add('reply-firstline');

        // replyFirstLine의 자식 요소 replyDiv2, replyDiv3
        const replyDiv2 = document.createElement('div');
        const replyDiv3 = document.createElement('div');

        replyFirstLine.append(replyDiv2, replyDiv3);

        // replyDiv2의 자식 요소 replyMemberIdA, replySpan
        const replyMemberIdA = document.createElement('a');
        replyMemberIdA.classList.add('reply-memberId');
        replyMemberIdA.innerText = comment.memberNickname;

      
        const replySpan = document.createElement('span');
        replySpan.classList.add('comment-content');
        replySpan.innerHTML = comment.commentContent;

        replyDiv2.append(replyMemberIdA, replySpan);

        // commentDiv3의 자식 요소 commentLikeBtn
        const replyLikeBtn = document.createElement('button');
        replyLikeBtn.classList.add('comment-like-btn');

         // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
         replyLikeBtn.addEventListener('click', function () {
          const emptyHeart = '<i class="fa-regular fa-heart"></i>';
          const solidHeart = '<i class="fa-solid fa-heart"></i>';
  
          // 댓글 좋아요 안한 상태일 때
          if (!replyLikeBtn.classList.contains('red')) {
            // 좋아요 DB에 추가
            $.ajax({
              url: '/comment/likeUp',
              data: { commentNo: comment.commentNo, memberNo: memberNo },
              success: (result) => {
                if (result > 0) {
                  replyLikeBtn.innerHTML = '';
                  replyLikeBtn.innerHTML = solidHeart;
                  replyLikeBtn.classList.add('red');
                } else {
                  console.log('댓글 좋아요 증가 안됨');
                }
              },
              error: () => {
                console.log('댓글 좋아요 증가 실패');
              },
            });
          } else {
            // 댓글에 좋아요 돼있을 때
  
            // 댓글 좋아요 DB에서 삭제
            $.ajax({
              url: '/comment/likeDown',
              data: { commentNo: comment.commentNo, memberNo: memberNo },
              success: (result) => {
                if (result > 0) {
                  replyLikeBtn.innerHTML = emptyHeart;
                  replyLikeBtn.classList.remove('red');
                } else {
                  console.log('댓글 좋아요 취소 안됨');
                }
              },
              error: () => {
                console.log('댓글 좋아요 취소 실패');
              },
            });
          }
        });


        // replyLikeBtn의 자식 요소 commentHeartIcon
        const replyHeartIcon = document.createElement('i');
        if (comment.commentLikeCheck == 0) {
          replyHeartIcon.classList.add('fa-regular', 'fa-heart');
        }
        if (comment.commentLikeCheck == 1) {
          replyHeartIcon.classList.add('fa-solid', 'fa-heart');
          replyLikeBtn.classList.add('red');
        }


        replyLikeBtn.append(replyHeartIcon);

        replyDiv3.append(replyLikeBtn);

        // replyDiv1의 자식 요소 createReply
        const createReply = document.createElement('div');
        createReply.classList.add('create-reply');

        replyDiv1.append(replyFirstLine, createReply);

        // createReply의 자식 요소 replyCreateDate, replyBtn, hoverBtn
        const replyCreateDate = document.createElement('span');
        replyCreateDate.innerText = comment.commentCreateDate;

        const replyBtn = document.createElement('button');
        replyBtn.setAttribute('type', 'button');
        replyBtn.classList.add('reply-btn');
        replyBtn.innerText = '답글 달기';

        // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
        // 만약 이미 언급된 닉네임일 시 추가 안됨
        // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
        replyBtn.addEventListener('click', () => {
          const commentInput =
            replyUl.parentElement.parentElement.parentElement.parentElement.parentElement.
              nextElementSibling.firstElementChild.firstElementChild;
          commentInput.value = '';
          commentInput.value = '@' + replyMemberIdA.innerText + ' ';
          commentInput.focus();

          upperCommentNo = commentNo;
          console.log("upperCommentNo: " + upperCommentNo);

        });

        const hoverBtn = document.createElement('button');
        hoverBtn.setAttribute('type', 'button');
        hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

        // 답글 ... 버튼에 클릭 이벤트 추가
        hoverBtn.addEventListener('click', function () {
          console.log(replyMemberIdA.innerText);
          console.log(memberNickname);

          deleteCommentNo = comment.commentNo;
          deleteBoardNo = comment.boardNo;
          deleteCommentUl = commentLi.parentElement;
          
          console.log(deleteCommentNo);
          console.log(deleteBoardNo);

          if (replyMemberIdA.innerText == memberNickname) {
            // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
            loginCommentMenu.style.display = 'flex';
          } else {
            commentMenu.style.display = 'flex';
          }

          body.classList.add('scrollLock');
        });

        createReply.append(replyCreateDate, replyBtn, hoverBtn);
          
      }
    },
    error: ()=>{}
  })
}



