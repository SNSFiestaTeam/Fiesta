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

// 댓글 모두 보기 버튼 클릭 시 모달창 출력
const allCommentBtn = document.getElementsByClassName('all-comment-btn');
for (let i = 0; i < allCommentBtn.length; i++) {
  allCommentBtn[i].addEventListener('click', () => {
    modalOn = 1;
    const commentList = document.getElementById('commentContainerM');
    const commentUl = document.getElementsByClassName('comment-list')[i];

    console.log('댓글 모두 보기 실행');

    allCommentBtn[i].classList.add('hide');

    // 게시글 번호 얻어오기
    boardNo =
      allCommentBtn[i].parentElement.parentElement.parentElement
        .nextElementSibling.value;

    const commentListUlM = document.getElementById('commentListUl');

    // 댓글 리스트 불러오기
    selectCommentListM(boardNo, commentListUlM);

    commentList.style.display = 'flex';
    document.getElementsByTagName('body')[0].classList.add('scrollLock');



  

    // 댓글 더보기 리스트 X 버튼 클릭 시
    document.getElementById('commentListXBtn').addEventListener('click', () => {
      commentList.style.display = 'none';
      allCommentBtn[i].classList.remove('hide');
      document.getElementsByTagName('body')[0].classList.remove('scrollLock');
      document.getElementById('commentInputM').value = "";
      modalOn = 0;
    });
  });
}

// 댓글 좋아요 버튼 클릭 시
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
    input.focus();

    upperCommentNo = document.getElementsByClassName('comment-no')[i].value;
    console.log('upperCommentNo: ' + upperCommentNo);
  });
}

// ! ------------------------------------댓글 등록 시작 -------------------------------------

// TODO: 댓글 입력 후 ENTER 입력 시도 만들 것
// 댓글 등록 버튼 클릭 시
for (let i = 0; i < postingBtn.length; i++) {
  postingBtn[i].addEventListener('click', () => {
    const boardNo = postingBtn[i].parentElement.parentElement.parentElement.nextElementSibling;
    const commentInput = document.getElementsByClassName('comment-input');
    const commentListUl = document.getElementsByClassName('comment-list')[i];
    const mainContainer = document.getElementsByClassName('main-container')[i];

    console.log(commentInput[i].value);
    console.log('upperCommentNo: ' + upperCommentNo);
    console.log(boardNo.value);

    
    if (commentInput[i].value != '') {

      // 해시태그 인식해서 a 태그로 감싸기
      const regEx = /(#[^\s#]+)/gm;
      commentInput[i].value
  
      commentInput[i].value = commentInput[i].value.replace(regEx, (match) => {
        const tagName = match.replace("#", '');
        return "<a href='/search?searchInput="+tagName+"' class='hashtag'>"+match+"</a>"
      });

      // 언급 인식해서 a 태그로 감싸기
      const regEx2 = /(@[^\s@]+)/gm;
  
      commentInput[i].value = commentInput[i].value.replace(regEx2, (match) => {
        const tagName = match.replace("@", '');
        return "<a href='/feed/"+tagName+"' class='hashtag'>"+match+"</a>"
      });

      console.log("바뀐 댓글 내용: "+ commentInput[i].value);


      $.ajax({
        url: '/comment/insert',
        type: 'Post',
        data: {
          "memberNo": memberNo,
          "boardNo": boardNo.value,
          "commentContent": commentInput[i].value,
          "upperCommentNo": upperCommentNo,
        },
        success: (result) => {
          if (result > 0) {
            selectCommentList(boardNo[i].value, commentListUl);
            commentInput[i].value = '';
            mainContainer.scrollTop = mainContainer.scrollHeight;
            upperCommentNo = 0;
          }
        },
        error: () => {
          console.log('댓글 등록 오류');
        },
      });
    }
  });
}



// 모달창 댓글 목록 조회 후 출력
function selectCommentListM(boardNo, commentListUl) {
  console.log(boardNo, memberNo);
  console.log(commentListUl);

  $.ajax({
    url: '/comment/list',
    data: { "boardNo": boardNo, 'myNo': memberNo },
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
          commentLi.classList.add('comment-m');
          commentListUl.append(commentLi);

          // commentNo input hidden 태그 생성
          const commentNoInput = document.createElement('input');
          commentNoInput.setAttribute('type', 'hidden');
          commentNoInput.value = comment.commentNo;
          commentNoInput.classList.add('comment-no');

          // commentLi의 자식요소 commentFirstChild, moreReply
          const commentFirstChild = document.createElement('div');
          commentFirstChild.classList.add('comment-firstchild-m');

          commentLi.append(commentNoInput, commentFirstChild);

          // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
          const commentProfileA = document.createElement('a');
          commentProfileA.id = 'commentProfileM';

          const commentDiv1 = document.createElement('div');

          commentFirstChild.append(commentProfileA, commentDiv1);

          // commentProfileA의 자식 요소 commentProfileImg
          const commentProfileImg = document.createElement('img');
          commentProfileImg.id = 'commentProfileImageM';

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
          commentFirstLine.classList.add('comment-firstline-m');

          // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
          const commentDiv2 = document.createElement('div');
          const commentDiv3 = document.createElement('div');

          commentFirstLine.append(commentDiv2, commentDiv3);

          // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
          const commentMemberIdA = document.createElement('a');
          commentMemberIdA.classList.add('comment-memberId-m');
          commentMemberIdA.innerText = comment.memberNickname;
          commentMemberIdA.href = '/feed/' + comment.memberNickname;

          const commentSpan = document.createElement('span');
          commentSpan.classList.add('comment-content-m');
          commentSpan.innerHTML = comment.commentContent;

          commentDiv2.append(commentMemberIdA, commentSpan);

          // commentDiv3의 자식 요소 commentLikeBtn
          const commentLikeBtn = document.createElement('button');
          commentLikeBtn.classList.add('comment-like-btn-m');

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
            commentLikeBtn.classList.add('red');
          }

          commentLikeBtn.append(commentHeartIcon);

          commentDiv3.append(commentLikeBtn);

          // commentDiv1의 자식 요소 createReply
          const createReply = document.createElement('div');
          createReply.classList.add('create-reply-m');

          commentDiv1.append(commentFirstLine, createReply);

          // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
          const commentCreateDate = document.createElement('span');
          commentCreateDate.innerText = comment.commentCreateDate;

          const replyBtn = document.createElement('button');
          replyBtn.setAttribute('type', 'button');
          replyBtn.innerText = '답글 달기';

          // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
          // 만약 이미 언급된 닉네임일 시 추가 안됨
          // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
          replyBtn.addEventListener('click', () => {
            const commentInput = document.getElementById('commentInputM');
            commentInput.value = '';
            commentInput.value = '@' + commentMemberIdA.innerText + ' ';
            commentInput.focus();

            upperCommentNo = commentNoInput.value;
            console.log('upperCommentNo: ' + upperCommentNo);
          });

          const hoverBtn = document.createElement('button');
          hoverBtn.setAttribute('type', 'button');
          hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

          hoverBtn.addEventListener('click', function () {

            deleteCommentNo = comment.commentNo;
            deleteBoardNo = boardNo;
            deleteCommentUl = commentListUl;

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
            moreReply.classList.add('more-reply-m');
            // FIXME: 경로 설정하기
            moreReply.innerText = '모든 답글 보기(' + comment.replyCount + ')';
            commentLi.append(moreReply);

            // 모든 답글 보기 버튼에 클릭 이벤트 추가
            moreReply.addEventListener('click', () => {
              moreReply.style.display = 'none';

              selectReplyListM(commentNo, commentLi, boardNo);
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


// 모달 대댓글 목록 조회 후 출력
function selectReplyListM(commentNo, commentLi, boardNo) {
  $.ajax({
    url: '/comment/select/reply',
    data: {'commentNo': commentNo, 'myNo':memberNo},
    dataType: 'json',
    type: 'POST',
    success: (replyList) => {
      console.log(replyList);

      const replyUl = document.createElement('ul');
      replyUl.classList.add("reply-list");
      replyUl.style.display = "flex";
      replyUl.style.flexDirection = "column";

      commentLi.append(replyUl);
      for (let comment of replyList) {
        // 답글 모양 출력

        // replyUl의 자식 요소 replyLi
        const replyLi = document.createElement('li');
        replyLi.classList.add('comment-m');
        replyLi.id = 'replyM';
        replyUl.append(replyLi);

        // replyLi의 자식요소 replyFirstChild, moreReply
        const replyFirstChild = document.createElement('div');
        replyFirstChild.classList.add('comment-firstchild-m');

        // commentNo input hidden 태그 생성
        const commentNoInput = document.createElement('input');
        commentNoInput.setAttribute('type', 'hidden');
        commentNoInput.value = comment.commentNo;
        commentNoInput.classList.add('comment-no');

        replyLi.append(commentNoInput, replyFirstChild);

        // replyFirstChild의 자식 요소 replyProfileA, replyDiv1
        const replyProfileA = document.createElement('a');
        replyProfileA.id = 'commentProfileM';

        const replyDiv1 = document.createElement('div');

        replyFirstChild.append(replyProfileA, replyDiv1);

        // replyProfileA의 자식 요소 replyProfileImg
        const replyProfileImg = document.createElement('img');
        replyProfileImg.id = 'commentProfileImageM';

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
        replyFirstLine.classList.add('comment-firstline-m');

        // replyFirstLine의 자식 요소 replyDiv2, replyDiv3
        const replyDiv2 = document.createElement('div');
        const replyDiv3 = document.createElement('div');

        replyFirstLine.append(replyDiv2, replyDiv3);

        // replyDiv2의 자식 요소 replyMemberIdA, mention, replySpan
        const replyMemberIdA = document.createElement('a');
        replyMemberIdA.classList.add('comment-memberId-m');
        replyMemberIdA.innerText = comment.memberNickname;
        replyMemberIdA.href = '/feed/' + comment.memberNickname;

        // 답글 멘션 부분
        const mention = document.createElement('a');
        mention.href = '';
        mention.classList.add('mention-m');
        mention.innerText = '@' + comment.mentionNickname;

        const replySpan = document.createElement('span');
        replySpan.classList.add('comment-content-m');
        replySpan.innerHTML = comment.commentContent;

        replyDiv2.append(replyMemberIdA, mention, replySpan);

        // commentDiv3의 자식 요소 commentLikeBtn
        const replyLikeBtn = document.createElement('button');
        replyLikeBtn.classList.add('comment-like-btn-m');

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
        createReply.classList.add('create-reply-m');

        replyDiv1.append(replyFirstLine, createReply);

        // createReply의 자식 요소 replyCreateDate, replyBtn, hoverBtn
        const replyCreateDate = document.createElement('span');
        replyCreateDate.innerText = comment.commentCreateDate;

        const replyBtn = document.createElement('button');
        replyBtn.setAttribute('type', 'button');
        replyBtn.classList.add('reply-btn-m');
        replyBtn.innerText = '답글 달기';

        // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
        // 만약 이미 언급된 닉네임일 시 추가 안됨
        // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
        replyBtn.addEventListener('click', () => {
          const commentInput = document.getElementById('commentInputM');
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
          deleteBoardNo = boardNo;
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
    error: () => {},
  });
}

// 모든 답글보기 클릭 시 답글 목록 출력
const moreReplyBtn = document.getElementsByClassName('more-reply');
for (let i = 0; i < moreReplyBtn.length; i++) {
  moreReplyBtn[i].addEventListener('click', () => {
    moreReplyBtn[i].style.display = 'none';

    const replyNo =
      moreReplyBtn[i].previousElementSibling.previousElementSibling.value;
    const replyCommentLi = moreReplyBtn[i].parentElement;

    selectReplyList(replyNo, replyCommentLi);
  });
}



// ------------------------------------------------------------------------------------------------



// 댓글 ...아이콘 클릭 시 메뉴창
const hoverBtn = document.getElementsByClassName('hover-btn');
const commentMenu = document.getElementById('commentMenu');
const loginCommentMenu = document.getElementById('commentMenuL');

for (let item of hoverBtn) {
  item.addEventListener('click', function () {
    const commentMemberId =
      item.parentElement.previousElementSibling.firstElementChild
        .firstElementChild.innerText;

    if (commentMemberId == memberNickname) {
      // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
      loginCommentMenu.style.display = 'flex';

      deleteBoardNo =
        item.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.parentElement.parentElement
          .nextElementSibling.value;

      deleteCommentUl =
        item.parentElement.parentElement.parentElement.parentElement
          .parentElement;

      deleteCommentNo =
        item.parentElement.parentElement.parentElement.previousElementSibling
          .value;

      
      console.log(deleteCommentUl);
      
    } else {
      commentMenu.style.display = 'flex';
    }

    body.classList.add('scrollLock');
  });
}

// 댓글 메뉴 닫기 버튼 클릭 시
document.getElementById('commentMenuCancel').addEventListener('click', () => {
  commentMenu.style.display = 'none';

  body.classList.remove('scrollLock');
});

// (로그인)댓글 메뉴 닫기 버튼 클릭 시
document.getElementById('commentMenuCancelL').addEventListener('click', () => {
  loginCommentMenu.style.display = 'none';

  body.classList.remove('scrollLock');
});

// TODO: 댓글 삭제 버튼 클릭 시 삭제
const commentDeleteBtn = document.getElementById('commentDeleteBtnL');
commentDeleteBtn.addEventListener('click', () => {

  console.log("deleteBoardNo: "+ deleteBoardNo);
  console.log("deleteCommentNo: " + deleteCommentNo);
  console.log(deleteCommentUl);
  console.log("modalOn: " + modalOn);

    $.ajax({
      url: '/comment/delete',
      data: { "commentNo": deleteCommentNo },
      success: (result) => {
        if (result > 0) {
          loginCommentMenu.style.display = 'none';
          
          if(modalOn == 0) {
            selectCommentList(deleteBoardNo, deleteCommentUl);
          }
          
          if(modalOn == 1) {
            selectCommentListM(deleteBoardNo, deleteCommentUl);

          }
        } else {
          console.log('댓글 삭제 실패');
        }
      },
      error: () => {
        console.log('댓글 삭제 에러');
      },
    });
});


const commentInputM = document.getElementById('commentInputM');
const postingBtnM = document.getElementById('postingBtnM');
const commentListUlM = document.getElementById('commentListUl');

// 댓글 모달창 게시 클릭 이벤트 추가
postingBtnM.addEventListener('click', () => {
  const regEx = /(#[^\s#]+)/gm;


  commentInputM.value = commentInputM.value.replace(regEx, (match) => {
    const tagName = match.replace("#", '');
    return "<a href='/search?searchInput="+tagName+"' class='hashtag'>"+match+"</a>"
  });

  // 언급 인식해서 a 태그로 감싸기
  const regEx2 = /(@[^\s@]+)/gm;

  commentInputM.value = commentInputM.value.replace(regEx2, (match) => {
    const tagName = match.replace("@", '');
    return "<a href='/feed/"+tagName+"' class='hashtag'>"+match+"</a>"
  });

  console.log("댓글 등록 boardNo: " + boardNo);

  if (commentInputM.value != '') {
    $.ajax({
      url: '/comment/insert',
      type: 'Post',
      data: {
        "memberNo": memberNo,
        "boardNo": boardNo,
        "commentContent": commentInputM.value,
        "upperCommentNo": upperCommentNo,
      },
      success: (result) => {
        if (result > 0) {
          selectCommentListM(boardNo, commentListUlM);
          commentInputM.value = '';
          upperCommentNo = 0;
        }
      },
      error: () => {
        console.log('댓글 등록 오류');
      },
    });
  }
});


   // 댓글 모달창 입력 이벤트 추가

commentInputM.addEventListener('input', () => {
  if (commentInputM.value.trim().length == 0) {
    postingBtnM.setAttribute('disabled', true);
    return;
  } else {
    postingBtnM.removeAttribute('disabled');
    return;
  }
});
