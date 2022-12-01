
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

    const regEx = /^[\w\-\_\.]{3,20}$/;
    if(memberNickname.value != this.value){
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
    }
        else {
            checkObj.memberNickname = true;
        }
});

function tempFn(){
    console.log("닉네임 검사 완료");
}


const profileContainer = document.getElementById("profile-container")
const chgImg = document.getElementById("chg-img");
const editClose = document.getElementById("edit-close");
const profileUpdate = document.getElementById("profile-update");
const profileDelete = document.getElementById("profile-delete");
const imageInput = document.getElementById("image-input");
profileContainer.style.display = "none";


chgImg.addEventListener("click", ()=>{
    profileContainer.style.display = "flex";
});

editClose.addEventListener("click", function(){

    profileContainer.style.display = "none";
})

const changeImg = document.getElementById("change-img");
const profileImg = document.getElementById("profile-image");
const profileFrm = document.getElementById("profilefrm");
const prosubmit = document.getElementById("prosubmit");



// 모달
changeImg.addEventListener("click", ()=>{
    profileContainer.style.display = "flex";
})

const text = document.getElementById("text");

function start(){
    
    if(text.value != null){
        $.ajax({
            url : "/setting",
            data : {"memberNo" : memberNo},
            type : "POST",
            dataType:"JSON",
            success : (member)=>{
                
                text.innerText = member.introContent;

            },
            
            error : ()=>{
                console.log("실패");
            }
            
        });

    }
    
};


document.addEventListener("DOMContentLoaded", ()=>{
    prosubmit.style.display = "none";
    start();
});



const originalImage = profileImg.getAttribute("src");

if(imageInput != null){

    imageInput.addEventListener("change", e => {

        // 선택된 파일의 목록
        console.log(e.target.files);
        console.log(e.target.files[0]);

        if(e.target.files[0] != undefined){
            const reader = new FileReader();

            reader.readAsDataURL(e.target.files[0]);

            reader.onload = event=>{
                
                profileImg.setAttribute("src", event.target.result);
                profileContainer.style.display = "none";

                prosubmit.click();
            } 

        } else {
            profileImg.setAttribute("src", originalImage);
        }
    });

    profileDelete.addEventListener("click", ()=>{

        profileImg.setAttribute("src", "/resources/images/user.jpg")
        profileContainer.style.display = "none";

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