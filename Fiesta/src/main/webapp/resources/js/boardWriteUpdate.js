// const feedUpdateBtnLogin = document.getElementById("feedUpdateBtnLogin");
// const modalBackgroundUpdate = document.getElementById("modalBackgroundUpdate");
const updateClose = document.getElementById("updateClose");
const updateClose2 = document.getElementById("updateClose2");

const modalBackgroundUpdate = document.getElementById("modalBackgroundUpdate");

//! 수정
feedUpdateBtnLogin.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  console.log("눌림?");

  // 게시글 조회해와
  $.ajax({
    url: "/selectOneBoard",
    data: { boardNo: boardNo },
    dataType: "json",
    success: (board) => {
      console.log(board);
      const boardContent = document.getElementById('updateBoardContent');
      const boardImageOne = document.getElementById('boardImageOne');
      const boardNo = document.getElementById('boardNo');
      
      boardNo.value = board.boardNo;
      
      const img = document.createElement('img');
      img.setAttribute('src', board.imageList[0].imgAddress+board.imageList[0].imgChangeName);
      img.id="updateImgList";

      console.log(img);
      boardImageOne.append(img);
      boardContent.innerText = board.boardContent;
      
      modalBackgroundUpdate.style.display = "flex";
      feedMenuLogin.style.display = "none";
    },
    error: () => {
      console.log("게시글 조회 error");
    },
  });

  updateClose.addEventListener("click", () => {
    modalBackgroundUpdate.style.display = "none";
    // boardContent.innerText = "";
    document.body.style.overflow = "unset";
    boardImageOne.innerHTML = "";
    boardContent.innerText = "";

  });
  updateClose2.addEventListener("click", () => {
    modalBackgroundUpdate.style.display = "none";
    // boardImageOne.innerHTML = "";
    // boardContent.innerText = "";
    console.log("눌렸나욤?2");
    document.body.style.overflow = "unset";
    // document.getElementById("updateImgList").remove();
    boardImageOne.innerHTML = "";
    boardContent.innerText = "";
  });
});

window.addEventListener('click', (e) => {
  const modalBackgroundUpdate = document.getElementById("modalBackgroundUpdate");

  // 업데이트 홤녀
  e.target === modalBackgroundUpdate ? modalBackgroundUpdate.style.display = 'none' : false

  document.body.style.overflow = "unset";
  // document.getElementById("updateImgList").remove();
  boardImageOne.innerHTML = "";
    boardContent.innerText = "";

});