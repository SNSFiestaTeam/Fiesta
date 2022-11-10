const feedMenu = document.getElementById('feedMenu');
const feedHeaderMenu = document.getElementsByClassName('feed-header-menu');
const body = document.getElementsByTagName('body')[0];
const feedMenuCancel = document.getElementById('feedMenuCancel');

// 피드 헤더 ...아이콘 클릭 시 메뉴창
for (let i = 0; i < feedHeaderMenu.length; i++) {
  feedHeaderMenu[i].addEventListener('click', function () {
    feedMenu.style.display = 'flex';

    body.classList.add('scrollLock');
  });
}

// 피트 헤더 메뉴창 취소 클릭시 닫힘
feedMenuCancel.addEventListener('click', function () {
  feedMenu.style.display = 'none';

  body.classList.remove('scrollLock');
});

const feedReportBtn = document.getElementById('feedReportBtn');
const report = document.getElementById('report');

// 피드 신고 버튼 클릭시 신고 창 열림
feedReportBtn.addEventListener('click', function () {
  feedMenu.style.display = 'none';
  report.style.display = 'flex';

  body.classList.add('scrollLock');
});

const reportCancle = document.getElementById('reportCancle');
reportCancle.addEventListener('click', function () {
  report.style.display = 'none';

  body.classList.remove('scrollLock');
});

const share = document.getElementById('share');
const feedShareBtn = document.getElementById('feedShareBtn');

// 피드 공유하기 버튼 클릭시 공유하기 창 열림
feedShareBtn.addEventListener('click', function () {
  feedMenu.style.display = 'none';
  share.style.display = 'flex';

  body.classList.add('scrollLock');
});

// 공유하기 모달창에서 클릭버튼 클릭 시
const shareCancleBtn = document.getElementById('shareCancleBtn');
shareCancleBtn.addEventListener('click', function () {
  share.style.display = 'none';
  body.classList.remove('scrollLock');
});

const likeBtn = document.getElementsByClassName('like-btn');

// 좋아요 버튼 클릭 시
//  -> 버튼 색상 변경
//  -> 좋아요 카운트 상승
for (let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    if (!likeBtn[i].classList.contains('red')) {
      likeBtn[i].innerHTML = '';
      likeBtn[i].innerHTML = solidHeart;
      likeBtn[i].classList.add('red');
    } else {
      likeBtn[i].innerHTML = emptyHeart;
      likeBtn[i].classList.remove('red');
    }
  });
}

// 말풍선 버튼 클릭 시
//  -> 댓글 입력창에 포커스
const commentBtn = document.getElementsByClassName('comment-btn');
const commentInput = document.getElementsByClassName('comment-input');

for (let i = 0; i < commentBtn.length; i++) {
  commentBtn[i].addEventListener('click', function () {
    commentInput[i].focus();
  });
}

// 댓글 창에 입력 시 버튼 활성화
const postingBtn = document.getElementsByClassName('posting-btn');
for (let i = 0; i < commentInput.length; i++) {
  commentInput[i].addEventListener('input', function () {
    if (commentInput[i].value.trim().length == 0) {
      postingBtn[i].setAttribute('disabled', true);
      return;
    } else {
      postingBtn[i].removeAttribute('disabled');
      return;
    }
  });
}

// 댓글 등록 버튼 클릭 시
for (let i = 0; i < postingBtn.length; i++) {
  postingBtn[i].addEventListener('click', () => {
    // 댓글 리스트 최상위 부모인 Ul 태그 불러오기
    const commentUl = document.getElementsByClassName('comment-list');

    // ul 태그에 추가할 li 태그 생성
    const commentLi = document.createElement('li');

    // li태그에 comment 클래스 추가
    commentLi.classList.add('comment');

    // ul태그 마지막 자식 요소로 li 태그 추가
    commentUl[i].append(commentLi);

    // li 태그에 추가할 div.comment-firstchild 요소 생성
    const commentFirstChild = document.createElement('div');

    // commentFirstChild에 클래스 추가
    commentFirstChild.classList.add('comment-firstchild');

    // commentLi에 commentFirstChild 추가
    commentLi.append(commentFirstChild);

    // div.comment-firstchild에 추가할 a 태그 생성
    const commentProfile = document.createElement('a');
    const commentProfileDiv = document.createElement('div');

    //commentProfile에 comment-profile 클래스 추가
    commentProfile.classList.add('comment-profile');

    // commentFirstChild에 commentProfile, commentProfileDiv 요소 추가
    commentFirstChild.append(commentProfile, commentProfileDiv);

    // commentProfile에 추가할 commentProfileImg 생성
    const commentProfileImg = document.createElement('img');

    // commentProfileImg에 id, src 속성 추가
    commentProfileImg.setAttribute('id', 'comment-profile-image');
    commentProfileImg.setAttribute('src', '/resources/images/안유진.jpg');

    commentProfile.append(commentProfileImg);

    // commentProfileDiv에 추가할 div 요소 생성
    const commentFirstLine = document.createElement('div');
    const createReply = document.createElement('div');

    commentFirstLine.classList.add('comment-firstline');
    createReply.classList.add('create-reply');

    // commentProfileDiv에 div 두개 추가
    commentProfileDiv.append(commentFirstLine, createReply);

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    commentFirstLine.append(div1, div2);

    // div1에 a.comment-memberId, span.comment-content 추가
    const memberIdArea = document.createElement('a');
    memberIdArea.classList.add('comment-memberId');
    const commentContent = document.createElement('span');
    commentContent.classList.add('comment-content');

    var memberId = document.createTextNode('_yujin_an');
    var content = document.createTextNode(commentInput[i].value);

    memberIdArea.appendChild(memberId);
    commentContent.appendChild(content);

    div1.append(memberIdArea, commentContent);

    // div2에 button.comment-like-btn 추가
    const likeBtn = document.createElement('button');

    console.log(commentLi);
  });
}

// 북마크 버튼 클릭 시
//  -> 북마크 버튼 색상 검정
//  -> 북마크에 추가
const bookmarkBtn = document.getElementsByClassName('bookmark-btn');
for (let i = 0; i < bookmarkBtn.length; i++) {
  bookmarkBtn[i].addEventListener('click', function () {
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
const moreBtn = document.getElementsByClassName('more-btn');
for (let i = 0; i < moreBtn.length; i++) {
  moreBtn[i].addEventListener('click', function () {
    const feedContent = document.getElementsByClassName('feed-content');

    if (feedContent[i].classList.contains('one-line')) {
      feedContent[i].classList.remove('one-line');
      moreBtn[i].classList.add('hide');
    }
  });
}

// 댓글 모두보기 버튼 클릭 시
const allCommentBtn = document.getElementsByClassName('all-comment-btn');
for (let i = 0; i < allCommentBtn.length; i++) {
  allCommentBtn[i].addEventListener('click', function () {
    const commentList = document.getElementsByClassName('comment-list');

    commentList[i].classList.remove('two-line');
    allCommentBtn[i].classList.add('hide');
  });
}

// 댓글 좋아요 버튼 클릭 시
const commentLikeBtn = document.getElementsByClassName('comment-like-btn');

for (let i = 0; i < commentLikeBtn.length; i++) {
  commentLikeBtn[i].addEventListener('click', function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    if (!commentLikeBtn[i].classList.contains('red')) {
      commentLikeBtn[i].innerHTML = '';
      commentLikeBtn[i].innerHTML = solidHeart;
      commentLikeBtn[i].classList.add('red');
    } else {
      commentLikeBtn[i].innerHTML = emptyHeart;
      commentLikeBtn[i].classList.remove('red');
    }
  });
}
