// * 해시태그 팔로우 버튼 *

const followHashtagBtn = document.getElementById("followHashtagBtn");

// 해시태그 팔로우 여부 보여주기 -> 버튼 다르게
(()=>{
    $.ajax({
        url: "/followHashtagCheck",
        data: {"keyword" : keyword},
        type: "GET",
        success: (result) => {

            if(result > 0) {  // 팔로우한 상태
                followHashtagBtn.innerText = "팔로잉";
                followHashtagBtn.classList.add("unfollowHashtagBtn");
                followHashtagBtn.classList.remove("followHashtagBtn");
                console.log("해시태그 팔로우한 상태");
            } else { // 팔로우 안 한 상태
                followHashtagBtn.innerText = "팔로우";
                followHashtagBtn.classList.add("followHashtagBtn");
                followHashtagBtn.classList.remove("unfollowHashtagBtn");
                console.log("해시태그 팔로우 안 한 상태");
            } 
        },
        error: (result) => {console.log("해시태그 팔로우 여부 조회 오류");}
    })
})();


followHashtagBtn.addEventListener("click", e => {

    if(e.target.classList.contains('followHashtagBtn')){ // 팔로우 안 한 상태
        
        $.ajax({
            url: "/followHashtag",
            data:{"keyword" : keyword}, 
            type: "GET",
            success: (result) => {
                if(result > 0){ 
                    e.target.innerText = "팔로잉";
                    e.target.classList.add("unfollowHashtagBtn");
                    e.target.classList.remove("followHashtagBtn");
                } else {
                    console.log("팔로잉 실패");
                }
            },
            error: () => {
                console.log("해시태그 팔로우 오류");
            }
    
        });
    
    } else if(e.target.classList.contains('unfollowHashtagBtn')){ // 팔로우한 상태

        $.ajax({
            url: "/unfollowHashtag",
            data:{"keyword" : keyword},
            type: "GET",
            success: (result) => {
                if(result > 0) {  // 언팔로우 성공
                    e.target.innerText = "팔로우";
                    e.target.classList.add("followHashtagBtn");
                    e.target.classList.remove("unfollowHashtagBtn");
                } else {
                    console.log("언팔로우 실패");
                }
            },
            error : () => {console.log("해시태그 언팔로우 오류");}
        });
    }
});




// * 관련 계정 팔로우 *
const followAccountBtn = document.getElementsByClassName("follow-button-small");
const profileNickname = document.getElementsByClassName("profileNickname");

// * 계정 팔로우 여부 보여주기 -> 버튼 다르게
for(let i=0; i<followAccountBtn.length; i++){
    console.log(i);
    console.log(followAccountBtn[i]);
    console.log(profileNickname[i]);

    (()=>{
        $.ajax({
            url: "/followAccountCheck",
            data: {"followToNickname" : profileNickname[i].innerText},
            type: "GET",
            success: (result) => {
                
                console.log(profileNickname[i].innerText);

                    /* if(output == profileNickname[i].innerText)  */
                    if(result > 0) {  // 팔로우한 상태
                        followAccountBtn[i].innerText = "팔로잉";
                        followAccountBtn[i].classList.add("unfollowAccountBtn");
                        followAccountBtn[i].classList.remove("followAccountBtn");
                        console.log("계정 팔로우한 상태");
        
                    } else{ // 팔로우 안 한 상태
                        followAccountBtn[i].innerText = "팔로우";
                        followAccountBtn[i].classList.add("followAccountBtn");
                        followAccountBtn[i].classList.remove("unfollowAccountBtn");
                        console.log("계정 팔로우 안 한 상태");
                    }
                },
                error: (result) => {console.log("계정 팔로우 여부 조회 오류");}
            })
    })();
}




// * 계정 팔로우, 언팔로우
// '팔로우'버튼에 0~5 아이디 붙이기
for(let i=0; i < followAccountBtn.length; i++){
    // followAccountBtn[i].id = i;
    
    // 클릭됐을 때 해당 아이디(순서)에 맞는 요소가 선택되도록!
    followAccountBtn[i].addEventListener("click", (e) => {
    
        // var btnId = followAccountBtn[i].id;
    
        // console.log(btnDiv);
        // console.log(btnId);
        
        if(profileNickname[i].innerText != undefined){
            if(e.target.classList.contains('followAccountBtn')){ // 팔로우 안 한 상태
                
                $.ajax({
                    url: "/followAccount",
                    data:{"followToNickname" : profileNickname[i].innerText},  
                    type: "GET",
                    success: (result) => {
                        
                        if(result > 0){ 
                            e.target.innerText = "팔로잉";
                            e.target.classList.add("unfollowAccountBtn");
                            e.target.classList.remove("followAccountBtn");
                        } else {
                            console.log("계정 팔로잉 실패");
                        }
                    },
                    error: () => {
                        console.log("계정 팔로우 오류");
                    }
            
                });
            
            } else if(e.target.classList.contains('unfollowAccountBtn')){ // 팔로우한 상태
        
                $.ajax({
                    url: "/unfollowAccount",
                    data:{"followToNickname" : profileNickname[i].innerText},
                    type: "GET",
                    success: (result) => {
                        if(result > 0) {  // 언팔로우 성공
                            console.log(profileNickname[i].innerText);
                            e.target.innerText = "팔로우";
                            e.target.classList.add("followAccountBtn");
                            e.target.classList.remove("unfollowAccountBtn");
                        } else {
                            console.log("계정 언팔로우 실패");
                        }
                    },
                    error : () => {console.log("계정 언팔로우 오류");}
                });
            }
        }

    });
    

}