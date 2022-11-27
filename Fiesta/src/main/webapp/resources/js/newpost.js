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
  document.getElementById("slideImages").innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
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
// document.getElementById("fileSelect").addEventListener("click", () => {
//   modalBackground.style.display = "none";
//   modalBackgroundEidt.style.display = "flex";
// });
// 기본파일 추가 버튼 누르면
document.getElementById("fileSelectBasic").addEventListener("click", () => {
  modalBackground.style.display = "none";
  modalBackgroundEidt.style.display = "flex";
});
// edit에서 뒤로가지 Btn(+ 데이터 지우면서 뒤로 가야함)
document.getElementById("backBtnedit").addEventListener("click", () => {
  modalBackgroundEidt.style.display = "none";
  modalBackground.style.display = "flex";
  document.getElementById("slideImages").innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
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
  slidesPerView: 2.5, // 슬라이드 몇개 보여줄지
  spaceBetween: 10, // 슬라이드간 간격
  //centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
  // breakpoints: slidesPerView,
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
  document.getElementById("slideImages").innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
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
    document.getElementById("slideImages").innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  });
document
  .getElementById("modalBackgroundText")
  .addEventListener("click", function () {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
    document.getElementsByTagName("body")[0].classList.remove("scrollLock");
  });

const fileInput = document.getElementById("fileInput");
// 부모요소 안에 생성하기 위해 부모요소 아이디로 불러옴.
const slideImages = document.getElementById("slideImages");
const editFileImg = document.createElement("img");

//fileInput값이 변했을때
fileInput.addEventListener("change", (e) => {
  if (e.target.files[0] != undefined) {
    // 이벤트 발생한 요소에 선택된 파일이 있을 경우
    for (let i = 0; i < e.target.files.length; i++) {
      // 이벤트 발생 파일 길이 만큼 반복문 돌림
      const reader = new FileReader(); // 파일 읽는 객체

      reader.readAsDataURL(e.target.files[i]); // 파일 정보를 불러와서 URL형태로 저장

      reader.onload = (e) => {
        // 파일 읽은 후
        // <div class="eidt-file swiper-slide"><img id="eidtFile" src=""></div>

        // 나타날 div, img 생성
        const editFileDiv = document.createElement("div");
        editFileDiv.classList.add("edit-file", "swiper-slide");

        editFileImg.id = "editFile";

        // 읽어온 URL을 editFileIm에 src요소로 추가
        editFileImg.setAttribute("src", e.target.result);

        // div와 img 합치기
        editFileDiv.append(editFileImg);

        // 부모요소에 div 합치기
        slideImages.append(editFileDiv);

        // 사진넘기게 하기 위해 swiper 작성구문
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
      };
    }
    modalBackground.style.display = "none";
    modalBackgroundEidt.style.display = "flex";
  }
});

// 확대 축소
const zoomInOut = document.getElementById("zoomInOut");
const value = document.getElementById("value");
// const editFileImg = document.getElementById("editFileImg");
// output.innerHTML = zoomInOut.value;

// value.addEventListener("change", (e) => {
//   zoomInOut.style.transform = "scale(${value})";
// });
zoomInOut.addEventListener("input", (e) => {
  zoomInOut.innerHTML = e.target.value;
  editFileImg.style.transform = "scale(${value})"; // value값만큼 확대
  // editFileImg.style.zIndex = 1;
  editFileImg.style.transition = "all 0.5s"; // 속도
});
