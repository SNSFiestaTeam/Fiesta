// 검색창이라, 모든 페이지 아래에 들어가니, 아이디,클래스명 등 겹치지 않게 주의!
// 요소 생성 - 조립
// ajax 연결
                // append(요소) : 마지막 자식으로 추가
                // prepend(요소) : 첫 번째 자식으로 추가
                // after(요소) : 다음(이후)에 추가
                // before(요소) : 이전에 추가

                // 요소.setAttribute("속성명", "속성값")
                // 요소.removeAttribute("속성명")
// 검색창 주소
    // location : 주소, 주소창과 관련된 내장 객체
    // location.href : 현재 주소(전체)  
    // location.href = "주소" : 작성된 주소 요청  _주소로 이동함
    // location.pathname = 현재 요청 주소만을 반환(프로토콜, ip, 포트 제외)  ex)/board/1
    // location.search : 쿼리스트링만 반환  ex) ?cp=2


// * 검색창에 검색 키워드 남겨놓기

const searchInput = document.getElementById("searchInput");
//const params = new URL(location.href).searchParams;  // 주소에서 쿼리스트링만 분리한 객체
//const keyword = params.get("query");  -> 안 받아와짐..

// location.search : ?searchInput=%ED%94%BC%EC%97%90%EC%8A%A4%ED%83%80
// '=' 뒤에 인코딩된 주소 디코딩하기(decodeURI)
const keyword = decodeURI((location.search).substring(13));     //lastindexOf("=") 이거 왜 안 먹히지?

(()=>{
    console.log(keyword);
    searchInput.value = keyword;
    searchInput.style.color = 'lightgray';


    searchInput.addEventListener("focus", () => {
        searchInput.value = "";
        searchInput.style.color = 'black';
    });

})();


























                
// (()=>{
    // const searchInput = document.getElementById("searchInput");

//     // ajax쓰기
//     $.ajax({
//         url: "/main/search/accountList",
//         data: {"searchInput" : searchInput.value},
//         type: "GET",
//         success: accountList => {
//             console.log(accountList); 
            

// /*
//             // 관련 있는 계정 (프로필이미지, 닉네임)
//             const accountContainer = document.getElementsByClassName("account-container")[0];
//             const divAccountGroup = document.getElementsByClassName("account-Group");
//             const aProfileImage = document.getElementsByClassName("profileImages");
//             const spanFollowButton = document.getElementsByClassName("follow-button-small");
//             const aFollow = document.getElementById("aFollow");
//                 <div class="account-Group">
//                   <a href="/feed/${loginMember.memberNickname}" class="profileImages">
//                     <img src="/resources/images/profile/profile.jpg">
//                   </a>
//                   <a href="/feed/${loginMember.memberNickname}" class="profileNickname">
//                     ${accountList.memberNickname}
//                   </a>
//                   <span class="follow-button-small">
//                     <a href="">팔로우</a>
//                   </span>
//                 </div>
// */


//             for(let member of accountList) {   //for(let member of memberList)
                
//                 // 프로필이미지
//                 const imgProfileImage = document.createElement("img");
//                 imgProfileImage.src = member.imgPath;

                
//                 // 닉네임(a태그)
//                 const aProfileNickname = document.createElement("a");
//                 aProfileNickname.innerText = member.memberNickname;
                
                

//                 accountContainer.append(divAccountGroup);
//                 divAccountGroup.append(aProfileImage, aProfileNickname, spanFollowButton)
//                 aProfileImage.after(aProfileNickname);
//                 aProfileImage.append(imgProfileImage);
//             }

//         },
//         error: () => {console.log("검색 실패");}
//     })
  
// })();  
    
    
/*

            // 관련 계정, 게시글 수
            const totalNumber = document.getElementsByClassName("total-number")[0];
            // totalNumber.innerText = "안녕하세요";
        
            const spanSearchAccountTotal = document.createElement("span");
            const spanSearchBoardTotal = document.createElement("span");
            
            totalNumber.append(spanSearchAccountTotal, spanSearchBoardTotal);
        
            // spanSearchAccountTotal.innerText = "${result}";
            spanSearchBoardTotal.innerText = "게시글 수";


*/

    // }
        










