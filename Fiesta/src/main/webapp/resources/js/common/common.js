// 검색 모달창 
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => { 

  const toggleSearchSection = document.getElementById('toggleSearchSection');

  if (toggleSearchSection.classList.contains('hide')) {
    toggleSearchSection.classList.remove('hide');
    toggleSearchSection.classList.remove('disappear');
    toggleSearchSection.classList.add('appear');
  } else {
    toggleSearchSection.classList.add('disappear');
    toggleSearchSection.classList.remove('appear');

    setTimeout(() => {
      toggleSearchSection.classList.add('hide')
    }, 500);
  }

  const toggleSearchInput = document.getElementById('toggleSearchInput');
  const searchGlass = document.getElementById('searchGlass');

  toggleSearchInput.addEventListener('input', () => { 
    if (toggleSearchInput.value.trim().length == 0) {
      searchGlass.setAttribute('disabled', true);
      return;
    } else {
      searchGlass.removeAttribute('disabled');
      return;
    }
  });


  commentInputM.addEventListener('input', () => {
    if (commentInputM.value.trim().length == 0) {
      postingBtnM.setAttribute('disabled', true);
      return;
    } else {
      postingBtnM.removeAttribute('disabled');
      return;
    }
  });

  document.getElementById('toggleSearchForm').addEventListener('submit', () => { 
    toggleSearchSection.classList.add('disappear');
    toggleSearchSection.classList.remove('appear');

    setTimeout(() => {
      toggleSearchSection.classList.add('hide')
    }, 500);
  });
});


const topButton = document.getElementById('topButton');

const checkScroll=()=>{

    // 페이지가 수직으로 얼마나 스크롤되었는지를 확인하는 값(픽셀 단위로 변환) pageOffset
    let pageOffset = window.pageYOffset;

    // 이 값이 0이 아니면, 클래스를 show를 선언하고, 그렇지 않다면 show를 삭제한다. 디폴트 css는 hidden상태
    // 0이면 스크롤이 안된상태 이고, 0이 아니면 스크롤이 일어난상태 
    if(pageOffset !== 0){
        // id= backtotop  class="show"를 추가한다.
      topButton.classList.remove('hide');  
    }else{
      topButton.classList.add('hide'); 
    }
}

const moveBackToTop=()=>{
  if(window.pageYOffset > 0 ){
      //스무스하게 스크롤 하기 //어디까지 올라갈지 위치를 정한다. behavior 자연스럽게 이동.
      window.scrollTo({top:0, behavior:"smooth"});
  }
}

// 스크롤할때마다, checkScroll을 호출해라.
window.addEventListener('scroll', checkScroll);
// 클릭하면 oveBackToTop를 호출해라
topButton.addEventListener('click', moveBackToTop);

