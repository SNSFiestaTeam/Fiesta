const newPostOpen = document.getElementById("newPostOpen");
const modalBackground = document.getElementById("modalBackground");

newPostOpen.addEventListener("click", function () {
  modalBackground.style.display = "flex";
});

const newPostClose = document.getElementById("new-post-close");

newPostClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
});
