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
const commentNo = document.getElementsByClassName("comment-no");

for (let i = 0; i < commentLikeBtn.length; i++) {

  commentLikeBtn[i].addEventListener("click", function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    // 댓글 좋아요 안한 상태일 때
    if (!commentLikeBtn[i].classList.contains("red")) {

      console.log(commentNo[i].value);
      // 좋아요 DB에 추가
      $.ajax({
        url: "/comment/likeUp",
        data: { "commentNo": commentNo[i].value, "memberNo": memberNo },
        success: (result) => {
          if(result > 0) {
            commentLikeBtn[i].innerHTML = "";
            commentLikeBtn[i].innerHTML = solidHeart;
            commentLikeBtn[i].classList.add("red");
          } else {
            console.log("댓글 좋아요 증가 안됨");
          }
        },
        error: () => {
          console.log("댓글 좋아요 증가 실패");
        }
      })



    } else { // 댓글에 좋아요 돼있을 때

      // 댓글 좋아요 DB에서 삭제
      $.ajax({
        url: "/comment/likeDown",
        data: { "commentNo": commentNo[i].value, "memberNo": memberNo },
        success: (result) => {
          if(result > 0) {
            commentLikeBtn[i].innerHTML = emptyHeart;
            commentLikeBtn[i].classList.remove("red");
          } else {
            console.log("댓글 좋아요 취소 안됨");
          }
        },
        error: () => {
          console.log("댓글 좋아요 취소 실패");
        }
      })

    }
  });
}




// 댓글 답글 달기 버튼 클릭 시 인풋 태그에 @작성자 아이디 추가
const replyBtn = document.getElementsByClassName("reply-btn");
const commentId = document.getElementsByClassName("comment-memberId");


for (let i = 0; i < replyBtn.length; i++) {
  replyBtn[i].addEventListener("click", () => {
    const input =
      replyBtn[i].parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.parentElement
        .nextElementSibling.firstElementChild.firstElementChild;

    input.value = "@" + commentId[i].innerText;

    upperCommentNo = document.getElementsByClassName("comment-no")[i].value
  });
}



// ! ------------------------------------댓글 등록 시작 -------------------------------------

// TODO: 댓글 입력 후 ENTER 입력 시도 만들 것
// 댓글 등록 버튼 클릭 시
for (let i = 0; i < postingBtn.length; i++) {
  postingBtn[i].addEventListener("click", () => {
    const boardNo = document.getElementsByClassName("board-no");
    const commentInput = document.getElementsByClassName("comment-input");

    console.log(commentInput[i].value);

    if(commentInput[i].value != "") {
      console.log(upperCommentNo);
      $.ajax({
        url: "/comment/insert",
        data: {"memberNo":memberNo,"boardNo": boardNo[i].value,
        "commentContent":commentInput[i].value, "upperCommentNo": upperCommentNo },
        success: (commentNo)=> {
          createComment(commentNo, i);
          console.log("commentNo: " + commentNo);
        },
        error: ()=> {
          console.log("댓글 등록 오류");
        }
      })

    }
  });
}


function createComment(commentNo, i) {

  // 댓글 리스트 최상위 부모인 Ul 태그 불러오기
  const commentUl = document.getElementsByClassName("comment-list");

  // ul 태그에 li.comment 추가
  const commentLi = document.createElement("li");
  commentLi.classList.add("comment");

  commentUl[i].append(commentLi);

  // commentLi에 commentNo input hidden 태그 추가
  // <input type="hidden" value="${comment.commentNo}" class="comment-no">

  const commentNoInput = document.createElement('input')
  commentNoInput.value = commentNo;
  commentNoInput.setAttribute("type", "hidden");
  commentNoInput.classList.add("comment-no");

  // commentLi에 div.comment-firstchild 추가
  const commentFirstChild = document.createElement("div");
  commentFirstChild.classList.add("comment-firstchild");

  commentLi.append(commentNoInput, commentFirstChild);

  // div.comment-firstchild에  a.comment-profile 추가
  const commentProfile = document.createElement("a");
  const commentProfileDiv = document.createElement("div");
  commentProfile.classList.add("comment-profile");

  commentFirstChild.append(commentProfile, commentProfileDiv);

  // commentProfile에  commentProfileImg 추가
  const commentProfileImg = document.createElement("img");
  commentProfileImg.classList.add("comment-profile-image");
  if(memberProfileImg == "") {
    commentProfileImg.setAttribute("src", "/resources/images/profile/profile.jpg");
  }
  
  if(memberProfileImg != "") {
    commentProfileImg.setAttribute("src", memberProfileImg);

  }

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

  var memberId = document.createTextNode(memberNickname);
  var content = document.createTextNode(commentInput[i].value);

  memberIdArea.appendChild(memberId);
  commentContent.appendChild(content);

  div1.append(memberIdArea, commentContent);

  // div2에 button.comment-like-btn 추가
  const commentLikeBtn = document.createElement("button");
  commentLikeBtn.classList.add("comment-like-btn");
  const heart = document.createElement("i");
  heart.classList.add("fa-regular", "fa-heart");

  // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
  commentLikeBtn.addEventListener("click", function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    // 댓글 좋아요 안한 상태일 때
    if (!commentLikeBtn.classList.contains("red")) {

      // 좋아요 DB에 추가
      $.ajax({
        url: "/comment/likeUp",
        data: { "commentNo": comment.commentNo, "memberNo": memberNo },
        success: (result) => {
          if(result > 0) {
            commentLikeBtn.innerHTML = "";
            commentLikeBtn.innerHTML = solidHeart;
            commentLikeBtn.classList.add("red");
          } else {
            console.log("댓글 좋아요 증가 안됨");
          }
        },
        error: () => {
          console.log("댓글 좋아요 증가 실패");
        }
      })

    } else { // 댓글에 좋아요 돼있을 때

      // 댓글 좋아요 DB에서 삭제
      $.ajax({
        url: "/comment/likeDown",
        data: { "commentNo": comment.commentNo, "memberNo": memberNo },
        success: (result) => {
          if(result > 0) {
            commentLikeBtn.innerHTML = emptyHeart;
            commentLikeBtn.classList.remove("red");
          } else {
            console.log("댓글 좋아요 취소 안됨");
          }
        },
        error: () => {
          console.log("댓글 좋아요 취소 실패");
        }
      })

    }
  });


  commentLikeBtn.append(heart);
  div2.append(commentLikeBtn);

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

  upperCommentNo = 0;

}
// ! ---------------------------------------댓글 등록 끝 -------------------------------------



function createComment(comment) {

  
  // 댓글 리스트
  const commentList = board.commentList;

  // 댓글 컨테이너 생성
  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comment-container");

  // 댓글 2개 초과일 시 댓글 더보기 출력
  if (board.commentList.length > 2) {
    const allCommentBtn = document.createElement("button");
    allCommentBtn.classList.add("all-comment-btn");
    allCommentBtn.innerText = "댓글 모두 보기";
    commentContainer.append(allCommentBtn);
  }

  // commentContainer의 자식 요소 commentArea
  const commentArea = document.createElement("div");
  commentArea.classList.add("comment-area");

  commentContainer.append(commentArea);

  // commentArea의 자식 요소 commentUl
  const commentUl = document.createElement("ul");
  commentUl.classList.add("comment-list", "two-line");

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
      const commentLi = document.createElement("li");
      commentLi.classList.add("comment");
      commentUl.append(commentLi);

      // commentLi의 자식요소 commentFirstChild, moreReply
      const commentFirstChild = document.createElement("div");
      commentFirstChild.classList.add("comment-firstchild");

      commentLi.append(commentFirstChild);

      // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
      const commentProfileA = document.createElement("a");
      commentProfileA.classList.add("comment-profile");

      const commentDiv1 = document.createElement("div");

      commentFirstChild.append(commentProfileA, commentDiv1);

      // commentProfileA의 자식 요소 commentProfileImg
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

      // commentDiv1의 자식 요소 commentFirstLine
      const commentFirstLine = document.createElement("div");
      commentFirstLine.classList.add("comment-firstline");

      // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
      const commentDiv2 = document.createElement("div");
      commentDiv2.classList.add("comment-id-content");
      const commentDiv3 = document.createElement("div");

      commentFirstLine.append(commentDiv2, commentDiv3);

      // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
      const commentMemberIdA = document.createElement("a");
      commentMemberIdA.classList.add("comment-memberId");
      commentMemberIdA.innerText = comment.memberNickname;

      const commentSpan = document.createElement("span");
      commentSpan.classList.add("comment-content");
      commentSpan.innerText = comment.commentContent;

      commentDiv2.append(commentMemberIdA, commentSpan);

      // commentDiv3의 자식 요소 commentLikeBtn
      const commentLikeBtn = document.createElement("button");
      commentLikeBtn.classList.add("comment-like-btn");

      // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
      commentLikeBtn.addEventListener("click", function () {
        const emptyHeart = '<i class="fa-regular fa-heart"></i>';
        const solidHeart = '<i class="fa-solid fa-heart"></i>';
    
        // 댓글 좋아요 안한 상태일 때
        if (!commentLikeBtn.classList.contains("red")) {
    
          // 좋아요 DB에 추가
          $.ajax({
            url: "/commentLikeUp",
            data: { "commentNo": comment.commentNo, "memberNo": memberNo },
            success: (result) => {
              if(result > 0) {
                commentLikeBtn.innerHTML = "";
                commentLikeBtn.innerHTML = solidHeart;
                commentLikeBtn.classList.add("red");
              } else {
                console.log("댓글 좋아요 증가 안됨");
              }
            },
            error: () => {
              console.log("댓글 좋아요 증가 실패");
            }
          })
    
    
    
        } else { // 댓글에 좋아요 돼있을 때
    
          // 댓글 좋아요 DB에서 삭제
          $.ajax({
            url: "/commentLikeDown",
            data: { "commentNo": comment.commentNo, "memberNo": memberNo },
            success: (result) => {
              if(result > 0) {
                commentLikeBtn.innerHTML = emptyHeart;
                commentLikeBtn.classList.remove("red");
              } else {
                console.log("댓글 좋아요 취소 안됨");
              }
            },
            error: () => {
              console.log("댓글 좋아요 취소 실패");
            }
          })
    
        }
      });

      // commentLikeBtn의 자식 요소 commentHeartIcon
      const commentHeartIcon = document.createElement("i");
      if(comment.commentLikeCheck == 0) {
        commentHeartIcon.classList.add("fa-regular", "fa-heart");
        
      }
      if(comment.commentLikeCheck == 1) {
        commentHeartIcon.classList.add("fa-solid", "fa-heart", "red");

      }

      commentLikeBtn.append(commentHeartIcon);

      commentDiv3.append(commentLikeBtn);

      // commentDiv1의 자식 요소 createReply
      const createReply = document.createElement("div");
      createReply.classList.add("create-reply");

      commentDiv1.append(commentFirstLine, createReply);

      // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
      const commentCreateDate = document.createElement("span");
      commentCreateDate.innerText = comment.commentCreateDate;

      const replyBtn = document.createElement("button");
      replyBtn.setAttribute("type", "button");
      replyBtn.classList.add("reply-btn");
      replyBtn.innerText = "답글 달기";

      // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
      // 만약 이미 언급된 닉네임일 시 추가 안됨
      // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
      replyBtn.addEventListener("click", () => {
        commentInput.value = "";
        commentInput.value = "@" + commentMemberIdA.innerText + " ";
      });

      const hoverBtn = document.createElement("button");
      hoverBtn.setAttribute("type", "button");
      hoverBtn.classList.add("fa-solid", "fa-ellipsis", "hover-btn");

      hoverBtn.addEventListener("click", function () {
        const commentMenu = document.getElementById("commentMenu");
        commentMenu.style.display = "flex";

        body.classList.add("scrollLock");
      });

      createReply.append(commentCreateDate, replyBtn, hoverBtn);

      // 답글이 있으면 버튼 생성
      if (comment.replyCount > 0) {

        const commentNo = comment.commentNo;
        const moreReply = document.createElement("span");
        moreReply.classList.add("more-reply");
        // FIXME: 경로 설정하기
        moreReply.innerText = "모든 답글 보기(" + comment.replyCount + ")";
        commentLi.append(moreReply);

        // 모든 답글 보기 버튼에 클릭 이벤트 추가
        moreReply.addEventListener("click", () => {
          moreReply.style.display = "none";

          // 답글 모양 출력

          const replyUl = document.createElement("ul");

          commentLi.append(replyUl);

          for (let comment of board.commentList) {
            if (
              comment.upperCommentNo != 0 &&
              commentNo == comment.upperCommentNo
            ) {
              // replyUl의 자식 요소 replyLi
              const replyLi = document.createElement("li");
              replyLi.classList.add("comment");
              replyLi.id = "reply";
              replyUl.append(replyLi);

              // replyLi의 자식요소 replyFirstChild, moreReply
              const replyFirstChild = document.createElement("div");
              replyFirstChild.classList.add("reply-firstchild");

              replyLi.append(replyFirstChild);

              // replyFirstChild의 자식 요소 replyProfileA, replyDiv1
              const replyProfileA = document.createElement("a");
              replyProfileA.classList.add("comment-profile");

              const replyDiv1 = document.createElement("div");

              replyFirstChild.append(replyProfileA, replyDiv1);

              // replyProfileA의 자식 요소 replyProfileImg
              const replyProfileImg = document.createElement("img");
              replyProfileImg.classList.add("comment-profile-image");

              replyProfileA.append(replyProfileImg);

              if (comment.memberProfileImg != undefined) {
                replyProfileImg.setAttribute("src", comment.memberProfileImg);
              } else {
                replyProfileImg.setAttribute(
                  "src",
                  "/resources/images/profile/profile.jpg"
                );
              }

              // replyDiv1의 자식 요소 replyFirstLine
              const replyFirstLine = document.createElement("div");
              replyFirstLine.classList.add("reply-firstline");

              // replyFirstLine의 자식 요소 replyDiv2, replyDiv3
              const replyDiv2 = document.createElement("div");
              const replyDiv3 = document.createElement("div");

              replyFirstLine.append(replyDiv2, replyDiv3);

              // replyDiv2의 자식 요소 replyMemberIdA, mention, replySpan
              const replyMemberIdA = document.createElement("a");
              replyMemberIdA.classList.add("reply-memberId");
              replyMemberIdA.innerText = comment.memberNickname;

              // 답글 멘션 부분
              const mention = document.createElement("a");
              mention.href = "";
              mention.classList.add("mention");
              mention.innerText = "@" + comment.mentionNickname;

              const replySpan = document.createElement("span");
              replySpan.classList.add("comment-content");
              replySpan.innerText = comment.commentContent;

              replyDiv2.append(replyMemberIdA, mention, replySpan);

              // commentDiv3의 자식 요소 commentLikeBtn
              const replyLikeBtn = document.createElement("button");
              replyLikeBtn.classList.add("comment-like-btn");

              // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
              replyLikeBtn.addEventListener("click", () => {
                const emptyHeart = '<i class="fa-regular fa-heart"></i>';
                const solidHeart = '<i class="fa-solid fa-heart"></i>';

                if (!replyLikeBtn.classList.contains("red")) {
                  replyLikeBtn.innerHTML = "";
                  replyLikeBtn.innerHTML = solidHeart;
                  replyLikeBtn.classList.add("red");
                } else {
                  replyLikeBtn.innerHTML = emptyHeart;
                  replyLikeBtn.classList.remove("red");
                }
              });

              // replyLikeBtn의 자식 요소 replyHeartIcon
              const replyHeartIcon = document.createElement("i");
              replyHeartIcon.classList.add("fa-regular", "fa-heart");

              replyLikeBtn.append(replyHeartIcon);

              replyDiv3.append(replyLikeBtn);

              // replyDiv1의 자식 요소 createReply
              const createReply = document.createElement("div");
              createReply.classList.add("create-reply");

              replyDiv1.append(replyFirstLine, createReply);

              // createReply의 자식 요소 replyCreateDate, replyBtn, hoverBtn
              const replyCreateDate = document.createElement("span");
              replyCreateDate.innerText = comment.commentCreateDate;

              const replyBtn = document.createElement("button");
              replyBtn.setAttribute("type", "button");
              replyBtn.classList.add("reply-btn");
              replyBtn.innerText = "답글 달기";

              // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
              // 만약 이미 언급된 닉네임일 시 추가 안됨
              replyBtn.addEventListener("click", () => {
                commentInput.value = "";
                commentInput.value = "@" + replyMemberIdA.innerText + " ";
              });

              const hoverBtn = document.createElement("button");
              hoverBtn.setAttribute("type", "button");
              hoverBtn.classList.add("fa-solid", "fa-ellipsis", "hover-btn");

              // 답글 ... 버튼에 클릭 이벤트 추가
              hoverBtn.addEventListener("click", function () {
                const commentMenu = document.getElementById("commentMenu");
                commentMenu.style.display = "flex";

                body.classList.add("scrollLock");
              });

              createReply.append(replyCreateDate, replyBtn, hoverBtn);
            }
          }
        });
      }
    }
  }

}