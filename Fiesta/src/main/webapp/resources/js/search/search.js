// 검색창이라, 모든 페이지 아래에 들어가니, 아이디,클래스명 등 겹치지 않게 주의!
// 요소 생성 - 조립
// ajax 연결
                // append(요소) : 마지막 자식으로 추가
                // prepend(요소) : 첫 번째 자식으로 추가
                // after(요소) : 다음(이후)에 추가
                // before(요소) : 이전에 추가

                // 요소.setAttribute("속성명", "속성값")
                // 요소.removeAttribute("속성명")
    

                
// (()=>{
    const searchInput = document.getElementById("searchInput");

    // ajax쓰기
    $.ajax({
        url: "/main/search",
        data: {"searchInput" : searchInput.value},
        type: "GET",
        success: (accountTotal) => { 
            console.log(accountTotal);

            // // 관련 계정, 게시글 수
            // const totalNumber = document.getElementsByClassName("total-number")[0];
            // // totalNumber.innerText = "안녕하세요";
        
            // const spanSearchAccountTotal = document.createElement("span");
            // const spanSearchBoardTotal = document.createElement("span");
            
            // totalNumber.append(spanSearchAccountTotal, spanSearchBoardTotal);
        
            // // spanSearchAccountTotal.innerText = "${result}";
            // spanSearchBoardTotal.innerText = "게시글 수";
        },
        error: () => {console.log("검색 실패");}
    });
    
    
    


    // // 관련 있는 계정 (프로필이미지, 닉네임)
    // const divAccountGroup = document.getElementsByClassName("account-Group");
    // const aProfileImage = document.getElementsByClassName("profileImages");
    // const spanFollowButton - document.getElementsByClassName("follow-button-small");
    
    // for(let i=0; i<6 ; i++) {   //for(let member of memberList)
        
    //     const imgProfileImage = document.createElement("img");
    //     imgProfileImage.innerText = "member.imagePath";

        
    //     const aProfileNickname = document.createElement("a");
    //     aProfileNickname.innerText = "프로필닉네임";
        
    

    //     divAccountGroup[i].append(aProfileImage[i], aProfileNickname, spanFollowButton[i])
    //     aProfileImage[i].append(imgProfileImage);

    // }
        


    








// })();
