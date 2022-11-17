// const newPostOpen = document.getElementById('newPostOpen');
// const modalBackground = document.getElementById('modalBackground');

// newPostOpen.addEventListener('click', function () {
//   modalBackground.style.display = 'flex';
//   document.getElementsByTagName('body')[0].classList.add('scrollLock');
// });

// const newPostClose = document.getElementById('new-post-close');

// newPostClose.addEventListener('click', function () {
//   modalBackground.style.display = 'none';
//   document.getElementsByTagName('body')[0].classList.remove('scrollLock');
// });




// modalBackground.addEventListener('click',()=>{
//   modalBackground.style.display = 'none';
//   document.getElementsByTagName('body')[0].classList.remove('scrollLock');
//   alert("body클릭");
// });

// newpost-eidt----------------------------------------------------------------
// *** 이미지 넘기기 ***
const slideImages = document.getElementById('slideImages');
const slideLis = slideImages.querySelectorAll('img');

// ?보여기는 이미지 넓이계산
const fileWidth = slideLis[0].clientWidth;
const silderWidth = fileWidth * slideLis.length; // 전체 파일 넓이
slideImages.style.width = '${silderWidth}px';
console.log(fileWidth);

let fileIndex = 0; // 현재 보여지는 이미지 번호
let position = 0; // 이미지 태그 위치값 지정
// const IMAGE_WIDTH = 640;

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
// const slideImages = document.getElementById('slideImages');

// 다음 파일
function filenext(){
  if(fileIndex < slideLis.length -1){ // 파일 갯수 까지만
    prevBtn.removeAttribute('disabled');
    console.log(position);
    position -= fileWidth; // next 니까 빼기 정한 크기만큼
    slideImages.style.transform = 'translateX("position"px)';
    fileIndex += 1;
  }
  if(fileIndex == slideLis.length -1){
    nextBtn.setAttribute('disabled', 'true');
  }
}
// 전 파일
function fileprev(){
  if(fileIndex > 0){
    nextBtn.removeAttribute('disabled');
    position += fileWidth;
    slideImages.style.transform = 'translateX(${position}px)';
    console.log(position)
    fileIndex -= 1;
  }
  if(fileIndex == 0){
    prevBtn.setAttribute('disabled', 'true');
  }
}
// 첫번째 함수 지정하는 거
function init(){
  prevBtn.setAttribute('disabled', 'true');// 첫번째 사진에서 앞으로 안가게 disabled지정(누를수 없는 상태)
  nextBtn.addEventListener("click", filenext);
  prevBtn.addEventListener("click", fileprev);

}
init();

// document.getElementById("file-add").addEventListener("click", function(){

//   const div = document.createElement("div");

// })
