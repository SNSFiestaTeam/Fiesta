const followBtn = document.getElementById("follow-btn");
const followContainer = document.getElementById("follow-container");
const scrollrock = document.getElementById("scrollrock")
const followingBtn = document.getElementById("following-btn");
const followingContainer = document.getElementById("following-container");
const self = document.getElementById("self");
const profileContainer = document.getElementById("profile-container");
const editClose = document.getElementById("edit-close");

followBtn.addEventListener("click", function(){

    $.ajax({
        url :"/feed/" + memberNickname + "/followList",
        type : "post",
        data : {"memberNo" : memberNo},
        dataType : "json",
        success : (followList) => {
            console.log(followList);

            for(let follow of followList) {
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

            followContainer.style.display ="flex";
            scrollrock.style.overflow = "hidden";
        }
        
    })

});

followingBtn.addEventListener("click", function(){
    
    $.ajax({
        url : "/feed/" + memberNickname + "/followingList",
        type : "post",
        data : {"memberNo" : memberNo},
        dataType : "json",
        success : (followingList) => {
            console.log(followingList);
            
            for( let following of followingList) {
                
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
                followingBtn.innerText = "팔로잉";

                div1.append(followingBtn);
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

followContainer.addEventListener("click", function(){
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

followingContainer.addEventListener("click", function(){
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

