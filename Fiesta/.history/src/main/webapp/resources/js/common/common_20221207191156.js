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










// todo 자동완성--------------------------------------------------------

// 해시태그, 계정 검색 시 자동완성
// 해시태그 결과, 계정 결과 나눠서 분리  // 첫줄은 해시태그, 그 밑으로 계정
// 모달로
// 결과 모두 보기 -> 검색 결과 창으로 이동


let searchCompleteModal;
const searchInput1 = document.getElementById('searchInput');


  searchInput1.addEventListener('input', function (event) {

    
    // 언급 자동완성 창 얻어오기
    searchCompleteModal = document.getElementById('searchCompleteModal');

    if (searchInput1.value.trim().length > 0) {

        const loading = 
        '<div class="auto-complete-loading">'
        +' <div class="loader loader--style1" title="0">'
        +'  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
        +'   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'
        +'   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'
        +'     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'
        +'     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'
        +'   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'
        +'     C22.32,8.481,24.301,9.057,26.013,10.047z">'
        +'     <animateTransform attributeType="xml"'
        +'       attributeName="transform"'
        +'       type="rotate"'
        +'       from="0 20 20"'
        +'       to="360 20 20"'
        +'       dur="0.5s"'
        +'       repeatCount="indefinite"/>'
        +'   </path>'
        +' </svg>'
        +'</div>'  
          + '</div > ';
        
        
        // 로딩 창 생성
        searchCompleteModal.innerHTML = loading;


        searchCompleteModal.style.display = 'flex';

        if (searchInput1.value != "") {
          // 입력된 값으로 검색하기
          $.ajax({
            url: '/comment/autoComplete/mention',
            data: { "searchWord": searchInput1.value},
            traditional: true,
            dataType: 'json',
            success: (mentionList) => {
              if (mentionList != null) {


                searchCompleteModal.innerHTML = '';
  
                for (let mention of mentionList) {
                  const autoCompleteDiv = document.createElement('a');
                  autoCompleteDiv.classList.add('search-complete-content');
                  autoCompleteDiv.href = '/feed/' + mention.memberNickname;

                  // 언급 멤버 프로필 이미지
                  const mentionProfileImg = document.createElement('img');

                  if (mention.memberProfileImg != undefined) {
                    mentionProfileImg.setAttribute('src', mention.memberProfileImg);
                  } else {
                    mentionProfileImg.setAttribute('src', '/resources/images/profile/profile.jpg');
                  }

                  autoCompleteDiv.append(mentionProfileImg);

                  // 언급 멤버 정보
                  const memberInfo = document.createElement('div');
                  memberInfo.classList.add('member-info');

                  // 언급 멤버 닉네임
                  const mentionNickname = document.createElement('span');
                  mentionNickname.classList.add('mention-nickname');
                  mentionNickname.innerText = mention.memberNickname;
                  
                  // 언급 멤버 이름
                  const mentionName = document.createElement('span');
                  mentionName.classList.add('mention-name');
                  mentionName.innerText = mention.memberName;

                  memberInfo.append(mentionNickname, mentionName);

                  autoCompleteDiv.append(memberInfo);

                  searchCompleteModal.append(autoCompleteDiv);


                  // ! 언급 아이디 클릭 시
                  autoCompleteDiv.addEventListener('click', () => {


                    // 모달창 제거
                    searchCompleteModal.style.display = 'none';
                    searchCompleteModal.innerHTML = "";

                  });


                }  
              } else {
                // 로딩 창 생성
                searchCompleteModal.innerHTML = loading;
                

              }
            },
            error: () => {
              console.log("언급 자동완성 에러");
            },
          });
          

        }  

    

    } else {
      searchCompleteModal.style.display = 'none';
      searchCompleteModal.innerHTML = "";
    }

   

  });
  
  
  
  


  

// TODO 모바일창에서 검색창 

  let searchCompleteModal2;
  const searchInput2 = document.getElementById('toggleSearchInput');
  const toggleSearchSection = document.getElementById("toggleSearchSection");
  
  
    searchInput2.addEventListener('input', function (event) {
      
      // 언급 자동완성 창 얻어오기
      searchCompleteModal2 = document.getElementById('searchCompleteModal2');
  
      if (searchInput2.value.trim().length > 0) {
  
          const loading = 
          '<div class="auto-complete-loading">'
          +' <div class="loader loader--style1" title="0">'
          +'  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
          +'   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'
          +'   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'
          +'     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'
          +'     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'
          +'   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'
          +'     C22.32,8.481,24.301,9.057,26.013,10.047z">'
          +'     <animateTransform attributeType="xml"'
          +'       attributeName="transform"'
          +'       type="rotate"'
          +'       from="0 20 20"'
          +'       to="360 20 20"'
          +'       dur="0.5s"'
          +'       repeatCount="indefinite"/>'
          +'   </path>'
          +' </svg>'
          +'</div>'  
            + '</div > ';
          
          
          // 로딩 창 생성
          searchCompleteModal2.innerHTML = loading;
  
  
          searchCompleteModal2.style.display = 'flex';
          toggleSearchSection.style.top = '162px';
  
          if (searchInput2.value != "") {
            // 입력된 값으로 검색하기
            $.ajax({
              url: '/comment/autoComplete/mention',
              data: { "searchWord": searchInput2.value},
              traditional: true,
              dataType: 'json',
              success: (mentionList) => {
                if (mentionList != null) {
                  searchCompleteModal2.innerHTML = '';
    
                  for (let mention of mentionList) {
                    const autoCompleteDiv2 = document.createElement('a');
                    autoCompleteDiv2.classList.add('search-complete-content2');
                    autoCompleteDiv2.href = '/feed/' + mention.memberNickname;
  
                    // 언급 멤버 프로필 이미지
                    const mentionProfileImg = document.createElement('img');
  
                    if (mention.memberProfileImg != undefined) {
                      mentionProfileImg.setAttribute('src', mention.memberProfileImg);
                    } else {
                      mentionProfileImg.setAttribute('src', '/resources/images/profile/profile.jpg');
                    }
  
                    autoCompleteDiv2.append(mentionProfileImg);
  
                    // 언급 멤버 정보
                    const memberInfo = document.createElement('div');
                    memberInfo.classList.add('member-info');
  
                    // 언급 멤버 닉네임
                    const mentionNickname = document.createElement('span');
                    mentionNickname.classList.add('mention-nickname');
                    mentionNickname.innerText = mention.memberNickname;
                    
                    // 언급 멤버 이름
                    const mentionName = document.createElement('span');
                    mentionName.classList.add('mention-name');
                    mentionName.innerText = mention.memberName;
  
                    memberInfo.append(mentionNickname, mentionName);
  
                    autoCompleteDiv2.append(memberInfo);
  
                    searchCompleteModal2.append(autoCompleteDiv2);
  
  
                    // ! 언급 아이디 클릭 시
                    autoCompleteDiv2.addEventListener('click', () => {
  
  
                      // 모달창 제거
                      searchCompleteModal2.style.display = 'none';
                      searchCompleteModal2.innerHTML = "";

                      toggleSearchSection.style.top = '40px';
  
                    });
  
  
                  }  
                } else {
                  // 로딩 창 생성
                  searchCompleteModal2.innerHTML = loading;
                  
  
                }
              },
              error: () => {
                console.log("언급 자동완성 에러");
              },
            });
            
  
          }  
  
      
  
      } else {
        searchCompleteModal2.style.display = 'none';
        searchCompleteModal2.innerHTML = "";

        toggleSearchSection.style.top = '40px';
      }
  
     
  
    });
  
   
