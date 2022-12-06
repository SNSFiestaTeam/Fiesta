// const feedUpdateBtnLogin = document.getElementById("feedUpdateBtnLogin");
const modalBackgroundUpdate = document.getElementById("modalBackgroundUpdate");
const updateClose = document.getElementById("updateClose");
const updateClose2 = document.getElementById("updateClose2");

feedUpdateBtnLogin.addEventListener("click", () => {
  modalBackgroundUpdate.style.display = "flex";
  feedMenuLogin.style.display = "none";
console.log("눌림?");
});

const update = document.getElementById("update");
update.addEventListener("click", () => {

    $.ajax({
        url : "/upate",
        type : "Post",
        data : {"boardContent": boardContent.value},
        success: (result) => {
            if(result > 0){
                console.log("게시물 작성 성공");
                modalBackgroundUpdate.style.display = "none";
                location.reload();
            }else{
                console.log("게시물 작성 실패");
            }
          },
          error: () => {
            console.log("게시물 작성 에러");
          },
    });
});
updateClose.addEventListener("click", () =>{
    modalBackgroundUpdate.style.display = "none";
});
updateClose2.addEventListener("click", () =>{
    modalBackgroundUpdate.style.display = "none";
});