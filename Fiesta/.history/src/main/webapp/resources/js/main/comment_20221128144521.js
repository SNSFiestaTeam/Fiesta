// 댓글 창에 입력 시 게시 버튼 활성화
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

// FIXME: 댓글이 있을 시
// 초기 화면에서 최대 2개까지 표시, 3개 이상일 시 댓글 더보기 버튼 생성
// 댓글 더보기 버튼 클릭 시 댓글 10개 표시 10개 초과일 경우 모두보기 버튼 생성
// 모두보기 클릭 시 댓글 모달창으로 댓글 전체 표시
const allCommentBtn = document.getElementsByClassName('all-comment-btn');
for (let i = 0; i < allCommentBtn.length; i++) {
  allCommentBtn[i].addEventListener('click', function () {
    const commentList = document.getElementsByClassName('comment-list');

    commentList[i].classList.remove('two-line');
    commentList[i].classList.add('ten-line');

    allCommentBtn[i].classList.add('hide');
  });
}

// 댓글 좋아요 버튼 클릭 시
// TODO: 댓글 좋아요 클릭 시 좋아요 db insert
// 이미 클릭 한 댓글일 시 좋아요 db 삭제
const commentLikeBtn = document.getElementsByClassName('comment-like-btn');
const commentNo = document.getElementsByClassName('comment-no');

for (let i = 0; i < commentLikeBtn.length; i++) {
  commentLikeBtn[i].addEventListener('click', function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    // 댓글 좋아요 안한 상태일 때
    if (!commentLikeBtn[i].classList.contains('red')) {
      console.log(commentNo[i].value);
      // 좋아요 DB에 추가
      $.ajax({
        url: '/comment/likeUp',
        data: { commentNo: commentNo[i].value, memberNo: memberNo },
        success: (result) => {
          if (result > 0) {
            commentLikeBtn[i].innerHTML = '';
            commentLikeBtn[i].innerHTML = solidHeart;
            commentLikeBtn[i].classList.add('red');
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
        data: { commentNo: commentNo[i].value, memberNo: memberNo },
        success: (result) => {
          if (result > 0) {
            commentLikeBtn[i].innerHTML = emptyHeart;
            commentLikeBtn[i].classList.remove('red');
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
}

// 모든 답글보기 버튼 클릭 시 답글 보이게
const moreReply = document.getElementsByClassName('more-reply');

for (let item of moreReply) {
  item.addEventListener('click', () => {
    item.style.display = 'none';
    item.parentElement.nextElementSibling.style.display = 'flex';
  });
}

// 댓글 답글 달기 버튼 클릭 시 인풋 태그에 @작성자 아이디 추가
const replyBtn = document.getElementsByClassName('reply-btn');
const commentId = document.getElementsByClassName('comment-memberId');

for (let i = 0; i < replyBtn.length; i++) {
  replyBtn[i].addEventListener('click', () => {
    const input =
      replyBtn[i].parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.parentElement
        .nextElementSibling.firstElementChild.firstElementChild;

    input.value = '@' + commentId[i].innerText;

    upperCommentNo = document.getElementsByClassName('comment-no')[i].value;
    console.log('upperCommentNo: ' + upperCommentNo);
  });
}



// ! ------------------------------------댓글 등록 시작 -------------------------------------

// TODO: 댓글 입력 후 ENTER 입력 시도 만들 것
// 댓글 등록 버튼 클릭 시
for (let i = 0; i < postingBtn.length; i++) {
  postingBtn[i].addEventListener('click', () => {
    const boardNo = document.getElementsByClassName('board-no');
    const commentInput = document.getElementsByClassName('comment-input');
    const commentListUl = document.getElementsByClassName('comment-list')[i];
    const mainContainer = document.getElementsByClassName('main-container')[i];

    console.log(commentInput[i].value);
    console.log('upperCommentNo: ' + upperCommentNo);

    if (commentInput[i].value != '') {
      $.ajax({
        url: '/comment/insert',
        type: 'Post',
        data: {
          memberNo: memberNo,
          boardNo: boardNo[i].value,
          commentContent: commentInput[i].value,
          upperCommentNo: upperCommentNo,
        },
        success: (result) => {
          if (result > 0) {
            selectCommentList(boardNo[i].value, commentListUl);
            commentInput[i].value = '';
            mainContainer.scrollTop = mainContainer.scrollHeight;
          }
        },
        error: () => {
          console.log('댓글 등록 오류');
        },
      });
    }
  });
}


// 댓글 목록 조회 후 출력
function selectCommentList(boardNo, commentListUl) {
  console.log(boardNo, memberNo);

  $.ajax({
    url: '/comment/list',
    data: { boardNo: boardNo, myNo: memberNo },
    dataType: 'JSON',
    success: (commentList) => {
      console.log(commentList);

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
            commentHeartIcon.classList.add('fa-solid', 'fa-heart', 'red');
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

            upperCommentNo = commentNoInput.value;
            console.log("upperCommentNo: " + upperCommentNo);

          });

          const hoverBtn = document.createElement('button');
          hoverBtn.setAttribute('type', 'button');
          hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

          hoverBtn.addEventListener('click', function () {
            const commentMenu = document.getElementById('commentMenu');
            const loginCommentMenu = document.getElementById('commentMenuL');

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
              moreReply.parentElement.nextSibling.style.display = "flex";
            });
          }
        } else if(comment.upperCommentNo > 0){ 
      
      
          // replyUl의 자식 요소 replyLi
          const replyLi = document.createElement('li');
          replyLi.classList.add('comment');
          replyLi.id = 'reply';
    
          commentListUl.append(replyLi);
    
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
    
          // replyDiv2의 자식 요소 replyMemberIdA, mention, replySpan
          const replyMemberIdA = document.createElement('a');
          replyMemberIdA.classList.add('reply-memberId');
          replyMemberIdA.innerText = comment.memberNickname;
    
          // 답글 멘션 부분
          const mention = document.createElement('a');
          mention.href = '';
          mention.classList.add('mention');
          mention.innerText = '@' + comment.mentionNickname;
    
          const replySpan = document.createElement('span');
          replySpan.classList.add('comment-content');
          replySpan.innerText = comment.commentContent;
    
          replyDiv2.append(replyMemberIdA, mention, replySpan);
    
          // commentDiv3의 자식 요소 commentLikeBtn
          const replyLikeBtn = document.createElement('button');
          replyLikeBtn.classList.add('comment-like-btn');
    
          // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
          replyLikeBtn.addEventListener('click', () => {
            const emptyHeart = '<i class="fa-regular fa-heart"></i>';
            const solidHeart = '<i class="fa-solid fa-heart"></i>';
    
            if (!replyLikeBtn.classList.contains('red')) {
              replyLikeBtn.innerHTML = '';
              replyLikeBtn.innerHTML = solidHeart;
              replyLikeBtn.classList.add('red');
            } else {
              replyLikeBtn.innerHTML = emptyHeart;
              replyLikeBtn.classList.remove('red');
            }
          });
    
          // replyLikeBtn의 자식 요소 replyHeartIcon
          const replyHeartIcon = document.createElement('i');
          replyHeartIcon.classList.add('fa-regular', 'fa-heart');
    
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
              commentListUl.parentElement.parentElement.parentElement
                .nextElementSibling.firstElementChild.firstElementChild;
            commentInput.value = '';
            commentInput.value = '@' + replyMemberIdA.innerText + ' ';

            upperCommentNo = commentNoInput.value;
            console.log("upperCommentNo: " + upperCommentNo);

          });
    
          const hoverBtn = document.createElement('button');
          hoverBtn.setAttribute('type', 'button');
          hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');
    
          // 답글 ... 버튼에 클릭 이벤트 추가
          hoverBtn.addEventListener('click', function () {
            const commentMenu = document.getElementById('commentMenu');
            const loginCommentMenu = document.getElementById('commentMenuL');

            if(commentMemberIdA.innerText == memberNickname) {
              // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
              loginCommentMenu.style.display = "flex";
            } else {
              commentMenu.style.display = 'flex';
            }

            body.classList.add('scrollLock');
          });
    
          createReply.append(replyCreateDate, replyBtn, hoverBtn)
        }
      }
    },
    error: () => {
      console.log('댓글 목록 조회 에러');
    },
  });
}



let deleteBoardNo = 0;
let deleteCommentNo = 0;
let deleteCommentUl = null;
let deleteReplyCount = 0;


// 댓글 ...아이콘 클릭 시 메뉴창
const hoverBtn = document.getElementsByClassName("hover-btn");
const commentMenu = document.getElementById("commentMenu");
const loginCommentMenu = document.getElementById('commentMenuL');

for (let item of hoverBtn) {
  item.addEventListener("click", function () {
    const commentMemberId = item.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText;

    if(commentMemberId == memberNickname) {
      // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
      loginCommentMenu.style.display = "flex";

      deleteBoardNo = item.parentElement.parentElement.parentElement.parentElement.
      parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.value;

      deleteCommentUl = item.parentElement.parentElement.parentElement.parentElement.parentElement;

      deleteCommentNo = item.parentElement.parentElement.parentElement.previousElementSibling.value;

      deleteReplyCount = item.parentElement.parentElement.parentElement.nextElementSibling.firstChild.innerText;
    } else {
      commentMenu.style.display = 'flex';
    }
  
    body.classList.add("scrollLock");
  });
}



// 댓글 메뉴 닫기 버튼 클릭 시
document.getElementById("commentMenuCancel").addEventListener("click", () => {
    commentMenu.style.display = "none";

    body.classList.remove("scrollLock");
  });




// (로그인)댓글 메뉴 닫기 버튼 클릭 시
document.getElementById("commentMenuCancelL").addEventListener("click", () => {
  loginCommentMenu.style.display = "none";

    body.classList.remove("scrollLock");
  });



// 댓글 삭제 버튼 클릭 시 삭제
const commentDeleteBtn = document.getElementById("commentDeleteBtnL");
commentDeleteBtn.addEventListener('click', ()=>{

  if(deleteReplyCount > 0) {
    // 답글 1개 이상이면 
    // 댓글 내용을 삭제된 댓글입니다로 바꾸기
    $.ajax({
      url: "/comment/deleteContent",
      data: {"commentNo": deleteCommentNo},
      success: (result)=>{
        if(result > 0) {
          selectCommentList(deleteBoardNo, deleteCommentUl);
        } else {
          console.log("댓글 삭제 실패");
        }
      },
      error: ()=> {
        console.log("댓글 삭제 에러");
      }
    })
  }

  if(deleteReplyCount == 0) {
    // 답글이 없으면 삭제하기

    $.ajax({
      url: "/comment/delete",
      data: {"commentNo": deleteCommentNo},
      success: (result)=>{
        if(result > 0) {
          selectCommentList(deleteBoardNo, deleteCommentUl);
        } else {
          console.log("댓글 삭제 실패");
        }
      },
      error: ()=> {
        console.log("댓글 삭제 에러");
      }
    })
  }
});


