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
