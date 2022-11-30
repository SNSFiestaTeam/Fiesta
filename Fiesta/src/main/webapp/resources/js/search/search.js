// 검색창이라, 모든 페이지 아래에 들어가니, 아이디,클래스명 등 겹치지 않게 주의!
// 요소 생성 - 조립
// ajax 연결
                // append(요소) : 마지막 자식으로 추가
                // prepend(요소) : 첫 번째 자식으로 추가
                // after(요소) : 다음(이후)에 추가
                // before(요소) : 이전에 추가

                // 요소.setAttribute("속성명", "속성값")
                // 요소.removeAttribute("속성명")
    


// 해시태그 팔로우 버튼
const followHashtagBtn = document.getElementById("followHashtagBtn");

const searchInput = document.getElementById("searchInput").value;

followHashtagBtn.addEventListener("click", e => {

    // // 로그아웃 상태
    // if(memberNo == ""){
    //     alert("로그인 후 이용할 수 있습니다.");
    //     return;
    // }

    if(e.target.classList.contains('followButton')){ // 팔로우 안 한 상태
        
        $.ajax({
            url: "/followHashtag",
            data:{"searchInput" : searchInput, "memberNo" : memberNo},  /* memberNo는 header에 전역변수로 선언 */
            type: "GET",
            success: (result) => {
                if(result > 0){ 
                    e.target.classList.add("unfollowButton");
                    e.target.classList.remove("followButton");
                } else {
                    console.log("팔로우 실패");
                }
            },
            error: () => {
                console.log("해시태그 팔로우 오류");
            }
    
        });
    
    } else { // 팔로우한 상태

        $.ajax({
            url: "/unfollowHastag",
            data:{"searchInput" : searchInput, "memberNo" : memberNo},
            type: "GET",
            success: (result) => {
                if(result > 0) { 
                    e.target.classList.add("followButton");
                    e.target.classList.remove("unfollowButton");
                }
            },
            error : () => {console.log("해시태그 언팔로우 오류");}
        });
    }
});


                
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
        










