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


function selectComment(commentNo, i) {

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


