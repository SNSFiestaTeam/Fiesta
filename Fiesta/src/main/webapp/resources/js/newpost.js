const newPostOpen = document.getElementById('newPostOpen');
const modalBackground = document.getElementById('modalBackground');

newPostOpen.addEventListener('click', function () {
  modalBackground.style.display = 'flex';
  document.getElementsByTagName('body')[0].classList.add('scrollLock');
});

const newPostClose = document.getElementById('new-post-close');

newPostClose.addEventListener('click', function () {
  modalBackground.style.display = 'none';
});

// const fileView = document.querySelector("fileView"); //전체 슬라이드 컨테이너
// const allFile = document.querySelectorAll(file); //모든 슬라이드들
// let currentIdx = 0; //현재 슬라이드 index
// const slideCount = allFile.length; // 슬라이드 개수
// const prev = document.querySelector('.prev'); //이전 버튼
// const next = document.querySelector('.next'); //다음 버튼
// const slideWidth = 300; //한개의 슬라이드 넓이
// const slideMargin = 100; //슬라이드간의 margin 값
//전체 슬라이드 컨테이너 넓이 설정
// fileView.style.width = (slideWidth + slideMargin) * slideCount + 'px';
// function moveSlide(num) {
//   slides.style.left = -num * 400 + 'px';
//   currentIdx = num;
// }
// prev.addEventListener('click', function () {
/*첫 번째 슬라이드로 표시 됐을때는 
  이전 버튼 눌러도 아무런 반응 없게 하기 위해 
  currentIdx !==0일때만 moveSlide 함수 불러옴 */
//   if (currentIdx !== 0) moveSlide(currentIdx - 1);
// });

// next.addEventListener('click', function () {
/* 마지막 슬라이드로 표시 됐을때는 
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만 
  moveSlide 함수 불러옴 */
//   if (currentIdx !== slideCount - 1) {
//     moveSlide(currentIdx + 1);
//   }
// });

// document.getElementById("file-add").addEventListener("click", function(){

//   // 생성
//   const div = document.createElement("div");

// })
