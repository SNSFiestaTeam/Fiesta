const newPostOpen = document.getElementById("newPostOpen"); // 헤더 개시물 작성 버튼
const modalBackground = document.getElementById("modalBackground"); // file 모달창
const newPostClose = document.getElementById("newPostClose"); // 닫기 버튼
const modalBackgroundEidt = document.getElementById("modalBackgroundEidt"); // 파일 편집창
const modalBackgroundText = document.getElementById("modalBackgroundText"); // 텍스트 작성창

const slideImages = document.getElementById("slideImages"); // edit화면 파일 리스트
const filePreview = document.getElementById("filePreview"); // edit화면 파일 추가의 미리보기
const textFileSwiper = document.getElementById("textFileSwiper"); // text화면 파일 리스트(합치기,지우기사용)
const postFileTextArea = document.getElementById("postFileTextArea"); // text 접근성 리스트

var form = new FormData(); // 파일 리스트 보내기 위해 form 선언
// 게시물 작성 버튼 누르면
newPostOpen.addEventListener("click", function () {
  modalBackground.style.display = "flex";
  document.getElementsByTagName("body")[0].classList.add("scrollLock");
});
//! 닫기 버튼
// 닫기 버튼 누르면
newPostClose.addEventListener("click", function () {
  modalBackground.style.display = "none";
  document.getElementsByTagName("body")[0].classList.remove("scrollLock");
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
    filePreview.innerHTML="";
    textFileSwiper.innerHTML="";
    postFileTextArea.innerHTML="";
});``
// 작성 중 x버튼
document.getElementById("newPostClosePostEdit").addEventListener("click", function () {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
    slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
    filePreview.innerHTML="";
    textFileSwiper.innerHTML="";
    postFileTextArea.innerHTML="";
  });
// text작성중 x버튼
document.getElementById("newPostClosePostText").addEventListener("click", function () {
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
    slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
    filePreview.innerHTML="";
    textFileSwiper.innerHTML="";
    postFileTextArea.innerHTML="";
  });


// document.getElementById('newPostBottom').addEventListener('click',()=>{
//   modalBackground.style.display = 'flex';
// });

// modalBackground.addEventListener('click',()=>{
//   modalBackground.style.display = 'none';
//   document.getElementsByTagName('body')[0].classList.remove('scrollLock');

// });

// ! 뒤로가기 버튼

// edit에서 뒤로가기
document.getElementById("backBtnedit").addEventListener("click", () => {
  modalBackgroundEidt.style.display = "none";
  modalBackground.style.display = "flex";
  slideImages.innerHTML = ""; // 취소했을때 미리보기 이미지 다 지우기
  filePreview.innerHTML="";
  textFileSwiper.innerHTML="";
  postFileTextArea.innerHTML="";  
  formData.delete("files");

});
// text에서 뒤로가기
const backBtnText = document.getElementById("backBtnText");
backBtnText.addEventListener("click", () => {
  modalBackgroundText.style.display = "none";
  modalBackgroundEidt.style.display = "flex";
    textFileSwiper.innerHTML="";
    postFileTextArea.innerHTML="";
    // formData.delete('files');
});


//! 접근성 토클
const $toggle = document.querySelector(".toggleSwitch");

$toggle.onclick = () => {
  $toggle.classList.toggle("active");
};


const postFileText = document.getElementById("postFileText"); // 접근성박스
// ! 기본 이미지 선택
//? 1. 바로 텍스트 작성 부분으로 가기
//? 2. 기본 이미지 넣어주기
//? 3. 접근성 부분 안보이게 하기
document.getElementById("basicImage").addEventListener("click", ()=>{

  modalBackground.style.display = "none";
  modalBackgroundText.style.display = "flex";

  //*기본이미지 생성 부분*
  // <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>
  const swiperSildeDiv = document.createElement("div");
  const fileImg = document.createElement("img");

  swiperSildeDiv.classList.add("swiper-slide");
  fileImg.id = "files";
  fileImg.src = "../../resources/images/default/defaultImg.png";
  form.append("files", fileImg);
  
  swiperSildeDiv.append(fileImg);
  textFileSwiper.append(swiperSildeDiv);

  postFileText.style.display = "none";
  backBtnText.addEventListener("click",()=>{
    modalBackground.style.display = "flex";
    modalBackgroundEidt.style.display = "none";
    modalBackgroundText.style.display = "none";
  });
});


// // 사진크롭 
// var isInitialized = false;
// var cropper = '';
// var file = '';
// var _URL = window.URL || window.webkitURL;

// const zoomSlider = document.getElementById("zoomSlider");

//! 컴퓨터에서 선택


document.getElementById("cropperfile").addEventListener("change", (e) => {
  if (e.target.files[0] != undefined) {
    // 이벤트 발생한 요소에 선택된 파일이 있을 경우
    for (let i = 0; i < e.target.files.length; i++) {
      // 이벤트 발생 파일 길이 만큼 반복문 돌림

      
      form.append("files", e.target.files[i]);
      const reader = new FileReader(); // 파일 읽는 객체
      reader.readAsDataURL(e.target.files[i]); // 파일 정보를 불러와서 URL형태로 저장
      console.log(e.target.files[i]);

      reader.onload = (e) => {
        // 파일 읽은 후
        
        // *edit부분 파일*-----------------------------------------
        // *<div class="eidt-file swiper-slide"><img id="eidtFile" src=""></div>
        // 나타날 div, img 생성
        const editFileDiv = document.createElement("div");
        const editFileImg = document.createElement("img");
        editFileDiv.classList.add("edit-file", "swiper-slide");

        editFileImg.classList.add("ready");
        editFileImg.id = "cropper-img";

        // 읽어온 URL을 editFileIm에 src요소로 추가
        editFileImg.setAttribute("src", e.target.result);
        // // 사진 크롭
        // editFileImg.classList.add('ready');
        // if (isInitialized == true) {
        //   zoomSlider.val(0);
        //   cropper.destroy();
      // }
      // initCropper();


        // div와 img 합치기
        editFileDiv.append(editFileImg);

        // 부모요소에 div 합치기
        slideImages.append(editFileDiv);

        // *edit 미리보기 부분 파일*
        // <div class="preview-file swiper-slide">
        //   <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
        //   <div class="preview-remove">&times;</div>
        // </div>
        const previewFileDiv = document.createElement("div");
        const previewFileImg = document.createElement("img");
        const previewRemoveDiv = document.createElement("div");
        const times = document.createTextNode("x");

        previewFileDiv.classList.add("preview-file", "swiper-slide");
        previewFileImg.setAttribute("src", e.target.result);
        previewRemoveDiv.classList.add("preview-remove");

        previewFileDiv.append(previewFileImg, previewRemoveDiv);
        previewRemoveDiv.appendChild(times);

        filePreview.append(previewFileDiv);


        
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
      filelist = e.target.result;
    }
    modalBackground.style.display = "none";
    modalBackgroundEidt.style.display = "flex";
    postFileText.style.display = "block";
  }
});

// zoomSlider.slider({
//   orientation: "horizontal",
//   range: "min",
//   max: 1,
//   min: 0,
//   value: 0,
//   step: 0.0001,
//   slide: function () {
//       if (isInitialized == true) {
//           if (cropper.canvasData.naturalWidth < 600 || cropper.canvasData.naturalHeight < 400) {
//               event.preventDefault();
//           } else {
//               var currentValue = $("#zoom-slider").slider("value");
//               var zoomValue = parseFloat(currentValue);
//               cropper.zoomTo(zoomValue.toFixed(4));
//           }
//       }
//   }
// });
// const minZoomVal= document.getElementById("minZoomVal");
// const maxZoomVal= document.getElementById("maxZoomVal");


// function initCropper() {
//   cropper = new Cropper(editFile, {
//       viewMode: 1,
//       dragMode: 'move',
//       aspectRatio: 1.5,
//       checkOrientation: false,
//       cropBoxMovable: false,
//       cropBoxResizable: false,
//       zoomOnTouch: false,
//       zoomOnWheel: false,
//       guides: false,
//       highlight: false,
//       ready: function (e) {
//           var cropper = this.cropper;
//           cropper.zoomTo(0);

//           var imageData = cropper.getImageData();
//           console.log("imageData ", imageData);
//           var minSliderZoom = imageData.width / imageData.naturalWidth;

//           minZoomVal.html(minSliderZoom.toFixed(4));

//           $(".cr-slider-wrap").show();
//           zoomSlider.slider("option", "max", 1);
//           zoomSlider.slider("option", "min", minSliderZoom);
//           zoomSlider.slider("value", minSliderZoom);
//       }
//   });
//   isInitialized = true;
// }


//! 다음 버튼
// edit 다음 버튼
document.getElementById("editNextBtn").addEventListener("click", () => {
  modalBackgroundEidt.style.display = "none";
  modalBackgroundText.style.display = "flex";
/* key 확인하기 */
for (let key of form.keys()) {
  console.log(key);
}

/* value 확인하기 */
for (let value of form.values()) {
   console.log(value);
}
  for(let value of form.values()){

    // *text 부분 파일-------------------------------------------------------------
    // <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>
    const reader = new FileReader();
    reader.readAsDataURL(value);


    reader.onload = ()=>{
      // console.log("값확인해볼거임");
      // console.log(reader.result);
      // *text 부분 파일-------------------------------------------------------------
      // <div class="swiper-slide"><img id="file" src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>
    const swiperSildeDiv = document.createElement("div");
    const fileImg = document.createElement("img");
    
    swiperSildeDiv.classList.add("swiper-slide");
    fileImg.id = "files";
    fileImg.setAttribute("src", reader.result);
    
    swiperSildeDiv.append(fileImg);
    textFileSwiper.append(swiperSildeDiv);

        // *text 접근성 부분 파일*
        // postFileText.style.display = "block";

        // <div class="postFileText">
        //   <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
        //   <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
        // </div>

        const postFileTextDiv = document.createElement("div");
        const postFileTextImg = document.createElement("img");
        const postFileTextInput = document.createElement("input");

        postFileTextDiv.classList.add("postFileText");
        postFileTextImg.id = "editFile";
        postFileTextImg.setAttribute("src", reader.result);
        postFileTextInput.setAttribute("type", "text");
        postFileTextInput.setAttribute("name", "postFileText");
        postFileTextInput.setAttribute("placeholder", "대체 텍스트 입력...");

        postFileTextDiv.append(postFileTextImg, postFileTextInput);
        postFileTextArea.append(postFileTextDiv);
    }
    

    
    
  }
    
});
//! edit 미리보기 슬라이드
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

// 확대 축소
const zoomInOut = document.getElementById("zoomInOut");
const value = document.getElementById("value");
// const editFileImg = document.getElementById("editFileImg");
// output.innerHTML = zoomInOut.value;

// value.addEventListener("change", (e) => {
//   zoomInOut.style.transform = "scale(${value})";
// });
// zoomInOut.addEventListener("input", (e) => {
//   zoomInOut.innerHTML = e.target.value;
//   editFileImg.style.transform = "scale(${value})"; // value값만큼 확대
//   // editFileImg.style.zIndex = 1;
//   editFileImg.style.transition = "all 0.5s"; // 속도
// });


// ! edit에서 파일 추가 버튼
const addFileInput = document.getElementById("addFileInput");

addFileInput.addEventListener("change", (e) => {
  if (e.target.files[0] != undefined) {
    // 이벤트 발생한 요소에 선택된 파일이 있을 경우
    for (let i = 0; i < e.target.files.length; i++) {
      // 이벤트 발생 파일 길이 만큼 반복문 돌림
      const reader = new FileReader(); // 파일 읽는 객체

      reader.readAsDataURL(e.target.files[i]); // 파일 정보를 불러와서 URL형태로 저장

      reader.onload = (e) => {
        // 파일 읽은 후
        // <div class="eidt-file swiper-slide"><img id="eidtFile" src=""></div>

        // *edit부분 파일*
        // 나타날 div, img 생성
        const editFileDiv = document.createElement("div");
        const editFileImg = document.createElement("img");
        editFileDiv.classList.add("edit-file", "swiper-slide");
        editFileImg.classList.add("ready");
        editFileImg.id = "cropper-img";



        // ---------------------------------------------------------------------------


        


        // ---------------------------------------------------------------------------







        // 읽어온 URL을 editFileIm에 src요소로 추가
        editFileImg.setAttribute("src", e.target.result);

        // div와 img 합치기
        editFileDiv.append(editFileImg);

        // 부모요소에 div 합치기
        slideImages.append(editFileDiv);
      };
    }
  }
});


//! 최종 제출(게시하기 버튼 클릭)
const newPostAll = document.getElementById("newPostAll");
newPostAll.addEventListener("click", () => {
  
  const boardContent = document.getElementById("boardContent");
  const files = document.getElementById("file");

  form.append("boardContent", boardContent.value);

  $.ajax({
    url: "/write",
    type: "Post",
    processData : false,
    contentType : false,
    data: form,
    success: (result) => {
      if (result > 0) {
        console.log("게시물 작성 성공");
        modalBackgroundText.style.display = "none";
      } else {
        console.log("게시물 작성 실패");
      }
    },
    error: () => {
      console.log("게시물 작성 에러");
    },
  });
});




// Write Javascript code!
var isInitialized = false;
var cropper = '';
var file = '';
var _URL = window.URL || window.webkitURL;
// Initialize Slider

$(document).ready(function () {
    $("#cropperfile")
        .change(function (e) {
            if (file = this.files[0]) {
                var oFReader = new FileReader();
                oFReader.readAsDataURL(file);
                oFReader.onload = function () {

                    $('#cropper-img').addClass('ready');
                    if (isInitialized == true) {
                        $('#zoom-slider').val(0);
                        cropper.destroy();
                    }
                    initCropper();
                }
            }
        });

    $("#zoom-slider").slider({
        orientation: "horizontal",
        range: "min",
        max: 1,
        min: 0,
        value: 0,
        step: 0.0001,
        slide: function () {
            if (isInitialized == true) {
                if (cropper.canvasData.naturalWidth < 600 || cropper.canvasData.naturalHeight < 400) {
                    event.preventDefault();
                } else {
                    var currentValue = $("#zoom-slider").slider("value");
                    var zoomValue = parseFloat(currentValue);
                    cropper.zoomTo(zoomValue.toFixed(4));
                }
            }
        }
    });
});

function initCropper() {
    var vEl = document.getElementById('cropper-img');
    cropper = new Cropper(vEl, {
        viewMode: 1,
        dragMode: 'move', // 마우스 포인터의 역할(move, crop, none)
        aspectRatio: 1.5,
        checkOrientation: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        zoomOnTouch: false,
        zoomOnWheel: false,
        guides: false,
        highlight: false,
        ready: function (e) {
            var cropper = this.cropper;
            cropper.zoomTo(0);

            var imageData = cropper.getImageData();
            console.log("imageData ", imageData);
            var minSliderZoom = imageData.width / imageData.naturalWidth;

            $('#min-zoom-val').html(minSliderZoom.toFixed(4));

            $(".cr-slider-wrap").show();
            $("#zoom-slider").slider("option", "max", 1);
            $("#zoom-slider").slider("option", "min", minSliderZoom);
            $("#zoom-slider").slider("value", minSliderZoom);
        }
    });
    isInitialized = true;
}




