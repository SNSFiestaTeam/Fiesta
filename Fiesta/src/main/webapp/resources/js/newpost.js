const newPostOpen = document.getElementById("newPostOpen"); // 헤더 개시물 작성 버튼
const modalBackground = document.getElementById("modalBackground"); // file 모달창
const newPostClose = document.getElementById("newPostClose"); // 닫기 버튼

// 게시물 작성 버튼 누르면
newPostOpen.addEventListener("click", function () {
  modalBackground.style.display = "flex";
  document.getElementsByTagName("body")[0].classList.add("scrollLock");
});
// 닫기 버튼 누르면
newPostClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  document.getElementsByTagName("body")[0].classList.remove("scrollLock");
});

// document.getElementById('newPostBottom').addEventListener('click',()=>{
//   modalBackground.style.display = 'flex';
// });

// modalBackground.addEventListener('click',()=>{
//   modalBackground.style.display = 'none';
//   document.getElementsByTagName('body')[0].classList.remove('scrollLock');

// });

// newpost-eidt----------------------------------------------------------------

const modalBackgroundEidt = document.getElementById("modalBackgroundEidt"); // 파일 편집창

// 파일 추가 버튼 누르면
document.getElementById("fileSelect").addEventListener("click", () => {
  modalBackground.style.display = "none";
  modalBackgroundEidt.style.display = "flex";
});
// 기본파일 추가 버튼 누르면
document.getElementById("fileSelectBasic").addEventListener("click", () => {
  modalBackground.style.display = "none";
  modalBackgroundEidt.style.display = "flex";
});
// edit에서 뒤로가지 Btn(+ 데이터 지우면서 뒤로 가야함)
document.getElementById("backBtnedit").addEventListener("click", () => {
  modalBackgroundEidt.style.display = "none";
  modalBackground.style.display = "flex";
});
//! 좌우슬라이드
new Swiper(".swiper", {
  // autoplay: {
  //   delay: 5000
  // },
  loop: false, // 무한반복 x
  slidesPerView: 1, // 슬라이드 몇개 보여줄지
  spaceBetween: 0, // 슬라이드간 간격
  centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
  pagination: {
    // 페이징 클릭시 해당영역 이동
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // 다음 화상표 버튼
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
//!미리보기 슬라이드
new Swiper(".preview-swiper", {
  // autoplay: {
  //   delay: 5000
  // },
  loop: false, // 무한반복 x
  slidesPerView: 3, // 슬라이드 몇개 보여줄지
  spaceBetween: 0, // 슬라이드간 간격
  centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
  navigation: {
    // 다음 화상표 버튼
    prevEl: ".preview-swiper-button-prev",
    nextEl: ".preview-swiper-button-next",
  },
});

//?텍스트 작성 부분
const modalBackgroundText = document.getElementById("modalBackgroundText");

const editNextBtn = document.getElementById("editNextBtn");
editNextBtn.addEventListener("click", () => {
  modalBackgroundEidt.style.display = "none";
  modalBackgroundText.style.display = "flex";
});

// text에서 뒤로가지 Btn(+ 데이터 지우면서 뒤로 가야함)
document.getElementById("backBtnText").addEventListener("click", () => {
  modalBackgroundText.style.display = "none";
  modalBackgroundEidt.style.display = "flex";
});
const $toggle = document.querySelector(".toggleSwitch");

$toggle.onclick = () => {
  $toggle.classList.toggle("active");
};
// 작성 중 x버튼
document
  .getElementById("newPostClosePostEdit")
  .addEventListener("click", function () {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
    document.getElementsByTagName("body")[0].classList.remove("scrollLock");
  });
document
  .getElementById("modalBackgroundText")
  .addEventListener("click", function () {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
    document.getElementsByTagName("body")[0].classList.remove("scrollLock");
  });
