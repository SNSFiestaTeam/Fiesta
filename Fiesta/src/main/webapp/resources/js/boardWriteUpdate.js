// const feedUpdateBtnLogin = document.getElementById("feedUpdateBtnLogin");
// const modalBackgroundUpdate = document.getElementById("modalBackgroundUpdate");
const updateClose = document.getElementById("updateClose");
const updateClose2 = document.getElementById("updateClose2");

const modalBackgroundUpdate = document.getElementById('modalBackgroundUpdate');

//! 수정
feedUpdateBtnLogin.addEventListener("click", () => {

  console.log("눌림?");
  
  // 게시글 조회해와
  $.ajax({
    url : "/selectOneBoard",
    data: {"boardNo": boardNo},
    dataType: "json",
    success: (board) => {

      console.log(board);
      const boardContent = document.getElementById('updateBoardContent');
      const boardImageOne = document.getElementById('boardImageOne');
      const boardNo = document.getElementById('boardNo');
      
      boardNo.value = board.boardNo;
      
      const img = document.createElement('img');
      img.setAttribute('src', board.imageList[0].imgAddress+board.imageList[0].imgChangeName);

      boardImageOne.append(img);
      boardContent.innerText = board.boardContent;
      
      modalBackgroundUpdate.style.display = "flex";
      feedMenuLogin.style.display = "none";
    },
    error: () => {
        console.log("게시글 조회 error");
    },
})
updateClose.addEventListener("click", () =>{
    modalBackgroundUpdate.style.display = "none";
    console.log("눌렸나욤?");
});
updateClose2.addEventListener("click", () =>{
    modalBackgroundUpdate.style.display = "none";
    console.log("눌렸나욤?2");
});
});