const newPostOpen = document.getElementById('newPostOpen');
const modalBackground = document.getElementById('modalBackground');

newPostOpen.addEventListener('click', function () {
  modalBackground.style.display = 'flex';
  document.getElementsByTagName('body')[0].classList.add('scrollLock');
});

const newPostClose = document.getElementById('new-post-close');

newPostClose.addEventListener('click', function () {
  modalBackground.style.display = 'none';
  document.getElementsByTagName('body')[0].classList.remove('scrollLock');
});


// document.getElementById('newPostBottom').addEventListener('click',()=>{
//   modalBackground.style.display = 'flex';
// });

// modalBackground.addEventListener('click',()=>{
//   modalBackground.style.display = 'none';
//   document.getElementsByTagName('body')[0].classList.remove('scrollLock');


// });

// newpost-eidt----------------------------------------------------------------
const basicImage = document.getElementById('basicImage');

const modalBackgroundEidt = document.getElementById('modalBackgroundEidt');
basicImage.addEventListener('click', ()=>{
  modalBackground.style.display = 'none';
  modalBackgroundEidt.style.display = 'flex';
});
// edit에서 뒤로가지 Btn(+ 데이터 지우면서 뒤로 가야함)
document.getElementById("backBtnedit").addEventListener('click',()=>{
  modalBackgroundEidt.style.display = 'none';
  modalBackground.style.display = 'flex';
});
//! 좌우슬라이드
new Swiper('.swiper', {
  // autoplay: {
  //   delay: 5000
  // },
  loop: false, // 무한반복 x
  slidesPerView: 1, // 슬라이드 몇개 보여줄지
  spaceBetween: 0, // 슬라이드간 간격
  centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
  pagination: { // 페이징 클릭시 해당영역 이동
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: { // 다음 화상표 버튼
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})
//!미리보기 슬라이드
new Swiper('.preview-swiper', {
  // autoplay: {
  //   delay: 5000
  // },
  loop: false, // 무한반복 x
  slidesPerView: 3, // 슬라이드 몇개 보여줄지
  spaceBetween: 0, // 슬라이드간 간격
  centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
  navigation: { // 다음 화상표 버튼
    prevEl: '.preview-swiper-button-prev',
    nextEl: '.preview-swiper-button-next'
  }
})


//?텍스트 작성 부분
const modalBackgroundText = document.getElementById('modalBackgroundText');

const editNextBtn = document.getElementById('editNextBtn');
editNextBtn.addEventListener('click', () => {
  modalBackgroundEidt.style.display = 'none';
  modalBackgroundText.style.display = 'flex';

});

// text에서 뒤로가지 Btn(+ 데이터 지우면서 뒤로 가야함)
document.getElementById("backBtnText").addEventListener('click',()=>{
  modalBackgroundText.style.display = 'none';
  modalBackgroundEidt.style.display = 'flex';
});











