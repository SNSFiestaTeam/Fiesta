
const checkObj = {
    "memberName" : false,
    "memberNickname"  : false
};


document.getElementById("setting-frm").addEventListener("submit", function(event){

    for(let key in checkObj){
        
        let str;

        if( !checkObj[key]){

            switch(key){
            case "memberName" : str = "이름이 유효하지 않습니다."; break;
            case "memberNickname" : str = "사용자 이름이 유효하지 않습니다."; break;
        }

            alert(str); 
            document.getElementById(key).focus();
            event.preventDefault();
            return; 
    }
    }
});



const memberName = document.getElementById("memberName"); // input
const nameMessage = document.getElementById("name-message"); // span

memberName.addEventListener("keyup", function(){

    if(memberName.value.trim().length==0){
        nameMessage.innerText = "이름을 입력해주세요.";
        memberName.value="";
        nameMessage.style.color="Red";

        checkObj.memberName = false;
        return;
    }


    const regEx =   /^[가-힣a-zA-Z]{2,30}$/;
    
    if(regEx.test(memberName.value)){ // 유효한 경우
    
        nameMessage.innerText = "유효한 형식의 이름입니다."
        nameMessage.style.color="green";
        checkObj.memberName = true;

    } else{ // 유효하지 않은 경우

        nameMessage.innerText = "이름 형식이 유효하지 않습니다.";
        nameMessage.style.color="Red";

        checkObj.memberName = false;
    }

    
});



// 닉네임 유효성 검사
const memberNickname = document.getElementById("memberNickname");
const nickMessage = document.getElementById("nick-message");

memberNickname.addEventListener("input", function(){

    if(memberNickname.value.trim().length ==0){
        nickMessage.innerText = "사용자 이름을 입력해주세요";
        nickMessage.style.color="red";
        checkObj.memberNickname = false;
        return;
    }

    const regEx = /^[\w\-\_\.]{3,30}$/;

    if(regEx.test(memberNickname.value)){ 

        const param = { "memberNickname" : memberNickname.value };
        
        $.ajax({
            url : "/nicknameDupCheck",
            data : param,
            success : (result) => { 

                if(result == 0) {
                    
                    nickMessage.innerText = "사용 가능한 사용자 이름입니다.";
                    nickMessage.style.color="green";
                    checkObj.memberNickname = true; 
                    
                } else{
                    
                    nickMessage.innerText = "이미 사용중인 사용자 이름입니다.";
                    nickMessage.style.color="red";
                    checkObj.memberNickname = false;
                }
            }, 
            error: () => {
                console.log("실패");
            },
            complete: ()=>{
                console.log("완료");
            }
        });

    } else { // 유효하지 않을 경우
        nickMessage.innerText = "유효하지 않은 사용자 이름 형식입니다.";
        nickMessage.style.color="red";
        checkObj.memberNickname = false;
    }
});

function tempFn(){
    console.log("닉네임 검사 완료");
}


const profileContainer = document.getElementById("profile-container")
const chgImg = document.getElementById("chg-img");
profileContainer.style.display = "none";

const profileImage = document.getElementById("profile-image");

chgImg.addEventListener("click", ()=>{
    profileContainer.style.display = "flex";
    scrollrock.style.overflow = "hidden";
});

const editClose = document.getElementById("edit-close");
editClose.addEventListener("click", function(){

    profileContainer.style.display = "none";
    scrollrock.style.overflow = "visible";
})

const profileUpdate = document.getElementById("profile-update");
const profileDelete = document.getElementById("profile-delete");
const imageInput = document.getElementById("image-input");
const changeImg = document.getElementById("change-img");
const profileImg = document.getElementById("profile-image");

// 모달
changeImg.addEventListener("click", ()=>{
    profileContainer.style.display = "flex";
    scrollrock.style.overflow = "hidden";
})


// 초기 프로필 이미지 상태를 저장하는 변수
// (true: 업로드된 이미지 있음 / false : 기본 이미지)
let initCheck; 

// 이미지가 업로드 되었거나 삭제되었음을 나타내는 변수
// (-1 : 초기값(취소)  0: 프로필 삭제(X버튼 클릭), 1 : 새 이미지가 업로드)
let deleteCheck = -1;

//프로필 수정 페이지에 처음 들어왔을 때의 이미지 경로
const originalImage = profileImg.getAttribute("src")

const profileFrm = document.getElementById("profile-frm");

if(profileFrm != null){

    // 해당 화면 진입시 프로필 이미지 상태를 저장(initCheck)
    if(profileImg.getAttribute("src") == "/resources/images/user.png"){

        // 기본이미지인 경우
        initCheck = false;
    } else{
        initCheck = true;
    }

    // 이미지가 선택되었을 때 미리보기
    
    // * input type="file" 요소는 값이 없을 때 ''(빈칸)
    // * input type="file" 요소는 이전에 선택한 파일이 있어도 취소하면 다시 ''(빈칸)
    // * input type="file" 요소로 파일을 선택하면 change 이벤트가 발생한다.

    imageInput.addEventListener("change", e => {

        if(e.target.files[0] != undefined){
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = event =>{
                profileImg.setAttribute("src", event.target.result);
                deleteCheck=1;
                
                profileContainer.style.display = "none";
                profileFrm.submit();
            }
            
        } 
        else { // 취소가 눌러진 경우
            
            // 초기 이미지로 다시 변경
            profileImg.setAttribute("src", originalImage);
            deleteCheck = -1;
        } 

    });

    // 삭제
    profileDelete.addEventListener("click", () => {
        profileDelete.setAttribute("src", "/resources/images/user.png");
        imageInput.value='';
        deleteCheck = 0;
    });

}
function profileVaildate(){

    // 이미지가 없다 -> 있음 
    if(!initCheck && deleteCheck == 1){
        return true;
    }

    // 있음 -> 없음(X버튼)
    if(initCheck && deleteCheck == 0){
        return true;
    }

    // 있음 -> 있음 (새로운 이미지 업로드)
    if(initCheck&& deleteCheck == 1){
        return true;
    }

    alert("이미지 변경 후 클릭하세요.")
    return false;
}
