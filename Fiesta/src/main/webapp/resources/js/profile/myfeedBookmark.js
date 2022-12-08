const followBtn = document.getElementById("follow-btn");
const followContainer = document.getElementById("follow-container");
const scrollrock = document.getElementById("scrollrock")
const followingBtn = document.getElementById("following-btn");
const followingContainer = document.getElementById("following-container");
const self = document.getElementById("self");
const profileContainer = document.getElementById("profile-container");
const editClose = document.getElementById("edit-close");

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


<<<<<<< Updated upstream
self.addEventListener("click", function(){
    profileContainer.style.display = "flex";
   
})
=======
// self.addEventListener("click", function(){
//     profileContainer.style.display = "flex";
//     scrollrock.style.overflow = "hidden";
// })
>>>>>>> Stashed changes

editClose.addEventListener("click", function(){
    profileContainer.style.display = "none"
  
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

  observer = new IntersectionObserver(selectBookmarkList, options);
  observer.observe(endList);
}

// * 현재 페이지 번호 변수 선언
let cp = 2;
    
function selectBookmarkList(entries, observer) {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

                // 게시글 ajax
                $.ajax({
                    url : "/feed/" + memberNickname + "/selectBookmarkList",
                    type : "GET",
                    data : {"memberNo" : memberNo, "cp" : cp},
                    dataType : "json",
                    success : (map) => {

                        if(map==null) {
                            console.log("결과 없음");
                        }else{

                            const bookmarkList = map.bookmarkList;
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
                    
                            for(let bookmark of bookmarkList){
        
                                const boardContainer = document.createElement("a");
                                boardContainer.href = "/feedDetail/"+ bookmark.boardNo;
                
                                imgContainer.append(boardContainer);
                
                                const feedImg = document.createElement("img");
                                feedImg.classList.add("feed-img");
                                feedImg.setAttribute("src", bookmark.imgPath);
    
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
    
                                boardLikeSpan.innerText = bookmark.likeCount;
                                boardCommentSpan.innerText = bookmark.commentCount;
    
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
});


<<<<<<< HEAD:Fiesta/src/main/webapp/resources/js/myfeed.js
const selfImg = document.getElementById("selfImg");
const profileFrm = document.getElementById("profilefrm");
const profileUpdate = document.getElementById("profile-update");
const profileDelete = document.getElementById("profile-delete");
const imageInput = document.getElementById("image-input");

const originalImage = selfImg.getAttribute("src");

imageInput.style.display = "none";

if(imageInput != null){

    imageInput.addEventListener("change", e => {

        // 선택된 파일의 목록
        console.log(e.target.files);
        console.log(e.target.files[0]);

        if(e.target.files[0] != undefined){
            const reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = event=>{
                
                selfImg.setAttribute("src", event.target.result);
                profileContainer.style.display = "none";
                profileFrm.submit();

            } 

        } else {
            selfImg.setAttribute("src", originalImage);
        }
    });

    profileDelete.addEventListener("click", ()=>{

        selfImg.setAttribute("src", "/resources/images/user.jpg")
        profileContainer.style.display = "none";
        profileFrm.submit();

        imageInput.value = "";

    });

    editClose.addEventListener("click", ()=>{
        profileContainer.style.display = "none";
    })

}

function submit(){

    imageInput.addEventListener("change", e => {
    profileFrm.submit();
    })
    
}
=======


>>>>>>> main:Fiesta/src/main/webapp/resources/js/profile/myfeedBookmark.js
