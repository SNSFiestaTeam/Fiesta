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


// 댓글 목록 조회 후 출력
function selectCommentList(boardNo1, commentListUl, flag) {
  console.log(boardNo1, memberNo);

  $.ajax({
    url: '/comment/list',
    data: { 'boardNo': boardNo1, 'myNo': memberNo },
    dataType: 'JSON',
    success: (commentList) => {
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
