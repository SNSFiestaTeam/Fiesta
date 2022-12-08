const feedHeaderMenu = document.getElementsByClassName("feed-header-menu");
const body = document.getElementsByTagName("body")[0];
const feedMenuCancel = document.getElementById("feedMenuCancel");
const loginFeedMenuCancel = document.getElementById("feedMenuCancelLogin");
const feedMenu = document.getElementById("feedMenu");
const loginFeedMenu = document.getElementById("feedMenuLogin");
const feedCommentBtnLogin = document.getElementById('feedCommentBtnLogin');
const feedLikeBtnLogin = document.getElementById('feedLikeBtnLogin');



// 피드 헤더 ...아이콘 클릭 시 메뉴창
for (let i = 0; i < feedHeaderMenu.length; i++) {
  feedHeaderMenu[i].addEventListener("click", function () {

    boardNo = feedHeaderMenu[i].parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.value;

    console.log(boardNo);

    const boardMemberNickname = feedHeaderMenu[i].parentElement.previousElementSibling.
    firstElementChild.nextElementSibling.innerText;
    

    // 신고할 게시판 번호, 타입 설정
    const reportTargetNo = document.getElementById('reportTargetNo');
    reportTargetNo.value = boardNo;

    const reportType = document.getElementById('reportType');
    reportType.value = "B";


    
    // 로그인 멤버 == 게시글 작성자
    if (memberNickname == boardMemberNickname) {

      commentBlockFlag = document.getElementsByClassName('comment-block-fl')[i];
      boardPubPriFlag = document.getElementsByClassName('board-pub-pri-fl')[i];

      console.log(commentBlockFlag);
      console.log(boardPubPriFlag);
      
      if (commentBlockFlag.value == 'N') {
        feedCommentBtnLogin.innerText = '댓글 기능 해제'

      } else {
        feedCommentBtnLogin.innerText = '댓글 기능 설정'
        
      }
      
      // 좋아요 수 공개 유무에 따른 버튼 내용 변경
      if (boardPubPriFlag.value == 'Y') {
        feedLikeBtnLogin.innerText = '좋아요 수 숨기기'
      } else {
        feedLikeBtnLogin.innerText = '좋아요 수 숨기기 취소'
      }
      
      
      
      
      loginFeedMenu.style.display = "flex";
      
      const likeCount = feedHeaderMenu[i].parentElement.parentElement.parentElement.
        nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
      const commentContainer = feedHeaderMenu[i].parentElement.parentElement.parentElement.
        nextElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling
        .nextElementSibling;
      const commentInputArea = feedHeaderMenu[i].parentElement.parentElement.parentElement.
      nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling;
      const mainContainer = feedHeaderMenu[i].parentElement.parentElement.parentElement.
        nextElementSibling.firstElementChild.nextElementSibling;
      tags = null;
      tags = {
        "likeCount": likeCount, "commentContainer": commentContainer,
        "commentInputArea": commentInputArea, "mainContainer": mainContainer
      };
    
      console.log(likeCount);
      console.log(commentContainer);
      console.log(commentInputArea);
      console.log(mainContainer);

    } else {
      feedMenu.style.display = "flex";
    }

    body.classList.add("scrollLock");

  });
}

// -------------------------------------피드 메뉴-------------------------------------------------------
// 피드 헤더 메뉴창 취소 클릭시 닫힘
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

  const reportForm = document.getElementById('reportForm');
  reportForm.reset();
  
  body.classList.remove("scrollLock");
});




// 피드 공유하기 버튼 클릭시 공유하기 창 열림
const share = document.getElementById("share");
const feedShareBtn = document.getElementById("feedShareBtn");

feedShareBtn.addEventListener("click", function () {
  feedMenu.style.display = "none";
  copy(boardNo);

});


// 공유하기 모달창에서 취소 버튼 클릭 시 닫힘
const shareCancleBtn = document.getElementById("shareCancleBtn");
shareCancleBtn.addEventListener("click", function () {
  share.style.display = "none";
  body.classList.remove("scrollLock");
});


// -------------------------------------피드 메뉴 끝-------------------------------------------------------




// ------------------------------------- 로그인 피드 메뉴-------------------------------------------------------
// 로그인 피드 메뉴 취소버튼 클릭 시 취소
loginFeedMenuCancel.addEventListener("click", function () {
  loginFeedMenu.style.display = "none";
  body.classList.remove("scrollLock");
});



const feedDeleteBtnLogin = document.getElementById("feedDeleteBtnLogin");
const feedUpdateBtnLogin = document.getElementById("feedUpdateBtnLogin");
const feedShareBtnLogin = document.getElementById("feedShareBtnLogin");
const feedSelectBtnLogin = document.getElementById("feedSelectBtnLogin");

feedShareBtnLogin.addEventListener('click', () => {
  
  loginFeedMenu.style.display = "none";
  copy(boardNo);

})

const copy = (text) => {
  // 임시의 textarea 생성
  const $textarea = document.createElement("textarea");

  // body 요소에 존재해야 복사가 진행됨
  document.body.appendChild($textarea);
  
  // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
  $textarea.value = "http://kh-classa.xyz/feed/" + text;
  $textarea.select();
  
  // 복사 후 textarea 지우기
  document.execCommand('copy');
  document.body.removeChild($textarea);
}



//게시물로 이동 버튼에 클릭 이벤트 리스너 추가 
feedSelectBtnLogin.addEventListener('click', () => {
  location.href = "/feedDetail/" + boardNo;
})

// 댓글 기능 사용 유무버튼에 클릭 이벤트 리스너 추가
feedCommentBtnLogin.addEventListener('click', () => { 

  $.ajax({
    url: '/boardSetting/commentBlock',
    data: { "commentBlockFlag": commentBlockFlag.value, "boardNo": boardNo, "memberNo": memberNo},
    dataType: "json",
    success: (board) => { 

      console.log(tags.likeCount);
      console.log(tags.commentContainer);
      console.log(tags.commentInputArea);
      console.log(tags.mainContainer);
      console.log(commentBlockFlag);

      body.classList.remove('scrollLock');
      loginFeedMenu.style.display = 'none';

      if (commentBlockFlag.value == 'N') {
        // 댓글 기능을 해제한 경우
        console.log(commentBlockFlag.value);
        commentBlockFlag.value = 'Y';
        console.log(commentBlockFlag.value);

        tags.commentContainer.innerHTML = "";
        tags.commentInputArea.innerHTML = '';
        feedCommentBtnLogin.innerText = "댓글 기능 설정";
      } else {
        console.log(commentBlockFlag.value);
        commentBlockFlag.value = 'N';
        console.log(commentBlockFlag.value);

        feedCommentBtnLogin.innerText = "댓글 기능 해제";


        // 댓글 기능을 다시 사용하는 경우


  
          // 댓글 컨테이너 생성

          // const createDate = document.createElement('span');
          // createDate.classList.add('create-date');
          // createDate.innerHTML = board.boardCreateDate;

          // commentContainer.after(createDate);
  
          if(board.commentBlockFlag == 'N') {
  
          // 댓글 2개 초과일 시 댓글 더보기 출력
          if(board.commentList.length > 2) {
            const allCommentBtn = document.createElement('button');
            allCommentBtn.classList.add('all-comment-btn');
            allCommentBtn.innerHTML = '댓글 모두 보기(' + board.commentCount + ')';
            
            tags.commentContainer.append(allCommentBtn);
  
  
  
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
  
          tags.commentContainer.append(commentArea);
  
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

              console.log(comment);
  
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
              commentProfileA.href = '/feed/' + comment.memberNickname;
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
              commentMemberIdA.href = '/feed/' + comment.memberNickname;
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
  
          tags.commentInputArea.append(div4);
  
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

        }
    },
    error: () => { 
      console.log("댓글 기능 사용 유무 변경 에러");
    }
  })

});

// 좋아요 공개 유무버튼에 클릭 이벤트 리스너 추가
feedLikeBtnLogin.addEventListener('click', () => { 

  $.ajax({
    url: "/boardSetting/boardPubPri",
    data: { "boardPubPriFlag": boardPubPriFlag.value, "boardNo": boardNo},
    success: (result) => { 
      body.classList.remove('scrollLock');
      loginFeedMenu.style.display = 'none';

      console.log(tags.boardPubPriFlag);
      
      if (boardPubPriFlag.value == 'Y') {
        // 좋아요 공개에서 -> 비공개
        console.log(boardPubPriFlag.value);
        boardPubPriFlag.value = "N";
        console.log(boardPubPriFlag.value);
        // feedLikeBtnLogin.innerText = "좋아요 수 숨기기 취소";
        
        if (result == 0) {
          tags.likeCount.innerText = "좋아요를 눌러주세요";
        } else if (result == 1) {
          tags.likeCount.innerText = "한 명이 좋아합니다";
        } else {
          tags.likeCount.innerText = "여러 명이 좋아합니다";
        }
        
      } else {
        // 좋아요 비공개에서 공개
        console.log(boardPubPriFlag.value);
        boardPubPriFlag.value = "Y";
        console.log(boardPubPriFlag.value);
        // feedLikeBtnLogin.innerText = "좋아요 수 숨기기";

        tags.likeCount.innerHTML = '좋아요 <span class="board-like-count">' + result + '개</span>';
      }
    },
    error: () => { 
      console.log("좋아요 공개 여부 설정 오류");
    }
  })

});

// 게시글 삭제 버튼에 이벤트 리스너 추가
feedDeleteBtnLogin.addEventListener('click', () => {
  const confirmContainerM = document.getElementById('confirmContainerM');

  loginFeedMenu.style.display = "none";
  confirmContainerM.style.display = "flex";
  
});



// 삭제 취소버튼에 클릭 이벤트리스너 추가
const deleteCancleBtn = document.getElementById('deleteCancleBtn');
deleteCancleBtn.addEventListener('click', () => { 
  confirmContainerM.style.display = "none";
  body.classList.remove('scrollLock');
})




// 게시글 삭제 컨펌창 삭제 버튼 클릭 시 게시글 삭제
const deleteConfirmBtn = document.getElementById('deleteConfirmBtn');
deleteConfirmBtn.addEventListener('click', () => { 
  $.ajax({
    url: '/deleteBoard',
    data: { "boardNo": boardNo },
    success: (result) => {
      if (result > 0) {
        location.href = "/main";
      }
    }
  });

})


// ------------------------------------- 로그인 피드 메뉴 끝-------------------------------------------------------







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
    body.classList.add("scrollrock");
  });
}





// DM 모달창 X버튼 클릭 시 닫힘

document.getElementById("dmCloseBtn").addEventListener("click", () => {
  dmContainer.style.display = "none";
  body.classList.remove("scrollrock");
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









// 모달창 바깥 클릭 시 모달창 꺼짐
window.addEventListener('click', (e) => {
  // 신고창 밖 클릭 시 닫힘
  e.target === report ? report.style.display = 'none' : false
  
  // 공유하기 모달창 밖 클릭 시 닫힘
  e.target === share ? share.style.display = 'none' : false
  
  // DM 모달창 밖 클릭 시 닫힘
  e.target === dmContainer ? dmContainer.style.display = 'none' : false
  
  // 삭제 컨펌 모달창 밖 클릭 시 닫힘
  e.target === confirmContainerM ? confirmContainerM.style.display = 'none' : false
  
  // 로그인 피드 메뉴 밖 클릭 시 닫힘
  e.target === loginFeedMenu ? loginFeedMenu.style.display = 'none' : false
    
  // 피드 헤더 메뉴창 바깥 클릭 시 닫힘
  e.target === feedMenu ? feedMenu.style.display = 'none' : false

  // 피드 헤더 메뉴창 바깥 클릭 시 닫힘
  e.target === commentMenu ? commentMenu.style.display = 'none' : false
 
  // 피드 헤더 메뉴창 바깥 클릭 시 닫힘
  e.target === loginCommentMenu ? loginCommentMenu.style.display = 'none' : false

  body.classList.remove("scrollLock");

});



