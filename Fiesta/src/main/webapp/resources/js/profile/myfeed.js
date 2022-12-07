const followBtn = document.getElementById("follow-btn");
const followContainer = document.getElementById("follow-container");
const scrollrock = document.getElementById("scrollrock")
const followingBtn = document.getElementById("following-btn");
const followingContainer = document.getElementById("following-container");
const self = document.getElementById("self");
const profileContainer = document.getElementById("profile-container");
const editClose = document.getElementById("edit-close");
const followingPeople = document.getElementById("following-people");

followingPeople.addEventListener("click", function(){

    memberNo = document.getElementById('nickname').firstElementChild.nextElementSibling.value;
    $.ajax({
        url : "/feed/" + memberNickname + "/followingList",
        type : "post",
        data : {"memberNo" : memberNo},
        dataType : "json",
        success : (followingList) => {
            console.log(followingList);
            
            for( let following of followingList) {
                if(following.memberNo != memberNo) {
                    
                    // followingContent를 추가할 부모요소 불러오기
                    const followingArea = document.getElementById("followingList");
                    
                    // followingContent(div)요소 생성 및 class추가
                    const followingContent = document.createElement("div");
                    followingContent.classList.add("following-content");
                    
                    // followingArea안에 followingContent를 조립
                    followingArea.append(followingContent)

                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");

                    followingContent.append(div1);
                    div1.append(div2);

                    // div2안에 span태그와 img태그를 삽입하기 위한 요소 생성
                    // following멤버에 프로필 사진과 닉네임
                    const profileImgSpan = document.createElement("span");
                    const profileImg = document.createElement("img");
                    
                    if(following.memberProfileImg == undefined){
                        profileImg.setAttribute("src", "/resources/images/profile/profile.jpg");
                        
                    } else {
                        profileImg.setAttribute("src", following.memberProfileImg);
                        
                    }
                    
                    profileImgSpan.append(profileImg);

                    const nicknameSpan = document.createElement("span");
                    const nicknameA = document.createElement("a");
                    
                    nicknameA.href = "/feed/"+ following.memberNickname;
                    nicknameA.innerText = following.memberNickname;
                    
                    nicknameSpan.append(nicknameA);
                    
                    div2.append(profileImgSpan, nicknameSpan);
                    
                    const followingBtn = document.createElement("button");
                    followingBtn.classList.add("following-btn-small");
                    followingBtn.innerText = "팔로잉";
                    
                    div1.append(followingBtn);
                }
            }
            
            followingContainer.style.display = "flex";
            scrollrock.style.overflow = "hidden";
        },
        error : () => {
            console.log("오류 발생");
        }
    });
    

})

// 팔로우 ajax
followBtn.addEventListener("click", function(){

    memberNo = document.getElementById('nickname').firstElementChild.nextElementSibling.value;
    
    $.ajax({
        url :"/feed/" + memberNickname + "/followList",
        type : "post",
        data : {"memberNo" : memberNo},
        dataType : "json",
        success : (followList) => {
            
            for(let follow of followList) {
                console.log(follow.memberNo);

                if(follow.memberNo != memberNo){

                    const followArea = document.getElementById("followList");

                    const followContent = document.createElement("div");
                    followContent.classList.add("follow-content");

                    followArea.append(followContent);

                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");

                    followContent.append(div1);
                    div1.append(div2);

                    const profileImgSpan = document.createElement("span");
                    const profileImg = document.createElement("img");

                    if(follow.memberProfileImg == undefined) {
                        profileImg.setAttribute("src","/resources/images/profile/profile.jpg" )
                    
                    } else {
                        profileImg.setAttribute("src",follow.memberProfileImg);

                    }

                    const profileNickname = document.createElement("span");
                    const nicknameA = document.createElement("a");

                    nicknameA.href = "/feed/"+ follow.memberNickname;
                    nicknameA.innerText = follow.memberNickname;

                    div2.append(profileImgSpan, profileNickname);

                    profileImgSpan.append(profileImg);
                    profileNickname.append(nicknameA);

                    const deleteBtn = document.createElement("button");
                    deleteBtn.innerText = "삭제";

                    div1.append(deleteBtn);
                }
            }

            followContainer.style.display ="flex";
            scrollrock.style.overflow = "hidden";
        }
        
    })

});

// 팔로잉 ajax
followingBtn.addEventListener("click", function(){
    memberNo = document.getElementById('nickname').firstElementChild.nextElementSibling.value;
    $.ajax({
        url : "/feed/" + memberNickname + "/followingList",
        type : "post",
        data : {"memberNo" : memberNo},
        dataType : "json",
        success : (followingList) => {
            console.log(followingList);
            
            for( let following of followingList) {
                if(following.memberNo != memberNo) {
                    
                    // followingContent를 추가할 부모요소 불러오기
                    const followingArea = document.getElementById("followingList");
                    
                    // followingContent(div)요소 생성 및 class추가
                    const followingContent = document.createElement("div");
                    followingContent.classList.add("following-content");
                    
                    // followingArea안에 followingContent를 조립
                    followingArea.append(followingContent)

                    const div1 = document.createElement("div");
                    const div2 = document.createElement("div");

                    followingContent.append(div1);
                    div1.append(div2);

                    // div2안에 span태그와 img태그를 삽입하기 위한 요소 생성
                    // following멤버에 프로필 사진과 닉네임
                    const profileImgSpan = document.createElement("span");
                    const profileImg = document.createElement("img");
                    
                    if(following.memberProfileImg == undefined){
                        profileImg.setAttribute("src", "/resources/images/profile/profile.jpg");
                        
                    } else {
                        profileImg.setAttribute("src", following.memberProfileImg);
                        
                    }
                    
                    profileImgSpan.append(profileImg);

                    const nicknameSpan = document.createElement("span");
                    const nicknameA = document.createElement("a");
                    
                    nicknameA.href = "/feed/"+ following.memberNickname;
                    nicknameA.innerText = following.memberNickname;
                    
                    nicknameSpan.append(nicknameA);
                    
                    div2.append(profileImgSpan, nicknameSpan);
                    
                    const followingDiv = document.createElement("button");

                    // followingDiv.innerText = "팔로잉";
                    followingDiv.classList.add("following-div");
                    div1.append(followingDiv);


                }
            }
            
            followingContainer.style.display = "flex";
            scrollrock.style.overflow = "hidden";
        },
        error : () => {
            console.log("오류 발생");
        }
    });

})



const followClose = document.getElementById("follow-close")
followClose.addEventListener("click", function(){
    followContainer.style.display ="none";
    scrollrock.style.overflow = "visible";
    document.getElementById("followList").innerHTML ="";
})

const followingClose = document.getElementById("following-close")
followingClose.addEventListener("click", function(){
    followingContainer.style.display ="none";
    scrollrock.style.overflow = "visible";
    document.getElementById("followingList").innerHTML ="";
})


self.addEventListener("click", function(){
    profileContainer.style.display = "flex";
    scrollrock.style.overflow = "hidden";
})

editClose.addEventListener("click", function(){
    profileContainer.style.display = "none"
    scrollrock.style.overflow = "visible";
})

const feedSection = document.querySelector(".feed-section");
let listEnd = feedSection.lastElementChild;
const option = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
};


let endList;

window.addEventListener("load", (event) => {
  endList = document.getElementById('feed-section').lastElementChild;

  createObserver();
}, false)


// ! 무한 스크롤 용 객체 생성
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  };

  observer = new IntersectionObserver(selectBoardList, options);
  observer.observe(endList);
}

// * 현재 페이지 번호 변수 선언
let cp = 4;
    
function selectBoardList(entries, observer) {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

                // 게시글 ajax
                $.ajax({
                    url : "/feed/" + memberNickname + "/selectBoardList",
                    type : "GET",
                    data : {"memberNo" : memberNo, "cp" : cp},
                    dataType : "json",
                    success : (map) => {

                        if(map==null) {
                            console.log("결과 없음");
                        }else{

                            const boardList = map.boardList;
                            const pagination = map.pagination;
                           
                            if (cp <= pagination.maxPage) {
                                endList = document.getElementById('feed-section').lastElementChild;
                                createObserver();
                                cp++;
                                console.log("cp :" + cp);
                            }
            
                                const feedSection = document.getElementById("feed-section");
                    
                                const imgContainer = document.createElement("div");
                                imgContainer.classList.add("img-container");
                            
                                feedSection.append(imgContainer);
                    
                            for(let board of boardList){
        
                                const boardContainer = document.createElement("a");
                                boardContainer.href = "/feedDetail/"+ board.boardNo;
                
                                imgContainer.append(boardContainer);
                
                                const feedImg = document.createElement("img");
                                feedImg.classList.add("feed-img");
                                feedImg.setAttribute("src", board.imgPath);
    
                                const hoverIconContainer = document.createElement("div")
                                hoverIconContainer.classList.add("hover-icon-container");
    
                                boardContainer.append(feedImg, hoverIconContainer);
    
                                const faHeart = document.createElement("i");
                                faHeart.classList.add("fa-regular", "fa-heart");
    
                                const faComment = document.createElement("i");
                                faComment.classList.add("fa-regular", "fa-comment");
    
                                hoverIconContainer.append(faHeart, faComment);
    
                                const boardLikeSpan = document.createElement("span");
                                const boardCommentSpan = document.createElement("span");
    
                                boardLikeSpan.innerText = board.likeCount;
                                boardCommentSpan.innerText = board.commentCount;
    
                                faHeart.append(boardLikeSpan);
                                faComment.append(boardCommentSpan);
                            }
                        }
                },
                error : () => {
                    console.log("게시글 오류 발생");
                }
            
            });
        }
    })
    
}

window.addEventListener("click", (e) => {

    e.target === followContainer ? 
        (followContainer.style.display = "none") && (scrollrock.style.overflow = "visible")
        && (document.getElementById("followList").innerHTML = "") : false

    e.target === followingContainer ?
        (followingContainer.style.display = "none") && (scrollrock.style.overflow = "visible")
        && (document.getElementById("followingList").innerHTML ="") : false

    e.target === profileContainer ? 
        (profileContainer.style.display = "none") && (scrollrock.style.overflow = "visible") : false

    e.target === followingPeople ?
    document.getElementById("followingList").innerHTML ="" : false

    });


// // * 관련 계정 팔로우 *
// const followAccountBtn = document.getElementById("btn-follow");
// const profileNickname = document.getElementById("follow-to-nickname");

// // * 계정 팔로우 여부 보여주기 -> 버튼 다르게

//     (()=>{
//         $.ajax({
//             url: "/followAccountCheck",
//             data: {"followToNickname" : profileNickname.value},
//             type: "GET",
//             success: (result) => {
                
//                 console.log(profileNickname.innerText);

//                     if(result > 0) {  // 팔로우한 상태
//                         followAccountBtn.innerText = "팔로잉";
//                         followAccountBtn.classList.add("unfollowAccountBtn");
//                         followAccountBtn.classList.remove("followAccountBtn");
//                         unfollowAccountBtn.style.backgroundColor = "blue";
//                         console.log("계정 팔로우한 상태");
        
//                     } else{ // 팔로우 안 한 상태
//                         followAccountBtn.innerText = "팔로우";
//                         followAccountBtn.classList.add("followAccountBtn");
//                         followAccountBtn.classList.remove("unfollowAccountBtn");
//                         console.log("계정 팔로우 안 한 상태");
//                     }
//                 },
//                 error: (result) => {console.log("계정 팔로우 여부 조회 오류");}
//             })
//     })();



// // * 계정 팔로우, 언팔로우

//     // 클릭됐을 때 해당 아이디(순서)에 맞는 요소가 선택되도록!
//     followAccountBtn.addEventListener("click", (e) => {
    
        
//         if(profileNickname.value != undefined){
//             if(e.target.classList.contains('followAccountBtn')){ // 팔로우 안 한 상태
                
//                 $.ajax({
//                     url: "/followAccount",
//                     data:{"followToNickname" : profileNickname.value},  
//                     type: "GET",
//                     success: (result) => {
                        
//                         if(result > 0){ 
//                             e.target.innerText = "팔로잉";
//                             e.target.classList.add("unfollowAccountBtn");
//                             e.target.classList.remove("followAccountBtn");
//                         } else {
//                             console.log("계정 팔로잉 실패");
//                         }
//                     },
//                     error: () => {
//                         console.log("계정 팔로우 오류");
//                     }
            
//                 });
            
//             } else if(e.target.classList.contains('unfollowAccountBtn')){ // 팔로우한 상태
        
//                 $.ajax({
//                     url: "/unfollowAccount",
//                     data:{"followToNickname" : profileNickname.value},
//                     type: "GET",
//                     success: (result) => {
//                         if(result > 0) {  // 언팔로우 성공
//                             console.log(profileNickname.value);
//                             e.target.innerText = "팔로우";
//                             e.target.classList.add("followAccountBtn");
//                             e.target.classList.remove("unfollowAccountBtn");
//                         } else {
//                             console.log("계정 언팔로우 실패");
//                         }
//                     },
//                     error : () => {console.log("계정 언팔로우 오류");}
//                 });
//             }
//         }

//     });


