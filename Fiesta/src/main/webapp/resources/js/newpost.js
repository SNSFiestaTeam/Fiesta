const newPostOpen = document.getElementById("new-post-open");
const modalBackground = document.getElementById("modal_background")


newPostOpen.addEventListener("click", function(){
    modalBackground.style.display="flex";
})

const newPostClose = document.getElementById("new-post-close")

newPostClose.addEventListener("click",function(){
    modalBackground.style.display="none";
})