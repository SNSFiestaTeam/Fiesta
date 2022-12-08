/*
    메일이 일치하는 회원에 한해,

    비밀번호 재설정
    - 비밀번호 : 유효성 검사, 보이기/숨기기
    - 비밀번호 확인 : 일치여부, 보이기/숨기기
*/

const checkObj = {
    "memberEmail"   : false,
    "memberPw"      : false,
    "memberPwConfirm" : false,
    "authKey"       : false
}




const memberEmail = document.getElementById("memberEmail");
const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");

const pwEye = document.getElementById("pwEye");
const pwEyeSlash = document.getElementById("pwEyeSlash");
const pwCheck = document.getElementById("pwCheck");
const pwConfirmCheck = document.getElementById("pwConfirmCheck");
const pwConfirmXmark = document.getElementById("pwConfirmXmark");
const pwConfirmEye = document.getElementById("pwConfirmEye");
const pwConfirmEyeSlash = document.getElementById("pwConfirmEyeSlash");

const changPwBtn = document.getElementById("changPwBtn");

memberPw.focus();

// icon 전체에 회색 적용
let icon = document.getElementsByClassName("icon");

for(let item of icon){
    item.classList.add("gray");
}


// 비밀번호 form 제출 이벤트
document.getElementById("changePw-frm").addEventListener("submit", function(event){

    // 하나라도 false면 제출 못하게!
    for(let key in checkObj){
        if( !checkObj[key] ){
            document.getElementById(key).focus();
            event.preventDefault();
            return;
        }
    }
});


// 비밀번호, 비밀번호 확인 : 필수입력, 유효성 검사, 일치
pwEye.classList.add("iHidden");
pwConfirmEye.classList.add("iHidden");
pwConfirmCheck.classList.add("iHidden");

memberPw.addEventListener("input", () => {
    
    // 비밀번호 보이기, 숨기기
    pwEye.classList.add("black");
    pwEyeSlash.classList.add("black");

    pwEyeSlash.addEventListener("click", () => {
        pwEyeSlash.classList.add("iHidden");
        pwEye.classList.add("iVisible", "gray");
        pwEye.classList.remove("iHidden","gray");
        memberPw.setAttribute("type", "text");
    })

    pwEye.addEventListener("click", () => {
        pwEye.classList.add("iHidden");
        pwEyeSlash.classList.add("iVisible","black");
        pwEyeSlash.classList.remove("iHidden", "gray");
        memberPw.setAttribute("type", "password");
    })
    
    //필수입력
    if(memberPw.value.trim().length == 0){
        pwEye.classList.add("gray");
        pwEye.classList.remove("black");
        pwEyeSlash.classList.add("gray");
        pwEyeSlash.classList.remove("black");
        pwConfirmXmark.classList.add("iVisible", "gray");
        pwConfirmXmark.classList.remove("iHidden","red");
        checkObj.memberPw = false;
   
    } 
    
    // 유효성 검사
    const regEx = /^[\w~!@#$%^&*-_]{8,30}$/;

    // 유효o
    if(regEx.test(memberPw.value)){
        pwCheck.classList.add("iVisieble","green");
        pwCheck.classList.remove("iHidden","gray");
        pwConfirmXmark.classList.remove("iVisible","red");
        pwConfirmXmark.classList.add("iHidden", "gray");
        memberPwConfirm.removeAttribute("readonly");
        checkObj.memberPw = true;


        // 비밀번호 확인 일치
        if(memberPw.value == memberPwConfirm.value){
            pwConfirmCheck.classList.add("iVisible","green");
            pwConfirmCheck.classList.remove("iHidden", "gray");
            pwConfirmXmark.classList.add("iHidden", "gray");
            pwConfirmXmark.classList.remove("iVisible", "red");
            checkObj.memberPwConfirm = true;
        
        } else { 
            // 비밀번호 확인 불일치
            pwConfirmCheck.classList.add("iHidden");
            pwConfirmCheck.classList.remove("green");
            pwConfirmXmark.classList.remove("iHidden");
            pwConfirmXmark.classList.add("iVisible", "gray");
            checkObj.memberPwConfirm = false;
        }

    // 유효x
    } else {
        pwCheck.classList.add("gray");
        pwCheck.classList.remove("green");
        checkObj.memberPw = false;
    }
})


// 비밀번호 미입력 + 비밀번호 확인 먼저 입력할 경우
memberPwConfirm.readOnly = true;

memberPwConfirm.addEventListener("input", () => {
    // 비밀번호 보이기, 숨기기
    pwConfirmEye.classList.add("black");
    pwConfirmEyeSlash.classList.add("black");

    pwConfirmEyeSlash.addEventListener("click", () => {
        pwConfirmEyeSlash.classList.add("iHidden");
        pwConfirmEye.classList.add("iVisible", "gray");
        pwConfirmEye.classList.remove("iHidden","black");
        memberPwConfirm.setAttribute("type", "text");
    })
 
    pwConfirmEye.addEventListener("click", () => {
        pwConfirmEye.classList.add("iHidden", "gray");
        pwConfirmEye.classList.remove("iVisible", "black");
        pwConfirmEyeSlash.classList.add("iVisible","black");
        pwConfirmEyeSlash.classList.remove("iHidden", "gray");
        memberPwConfirm.setAttribute("type", "password");
    })


    // 필수입력
    if(memberPwConfirm.value.trim().length == 0){
        pwConfirmXmark.classList.add("iVisible", "gray");
        pwConfirmXmark.classList.remove("iHidden","red");
        pwConfirmEye.classList.add("gray");
        pwConfirmEye.classList.remove("black");
        pwConfirmEyeSlash.classList.add("gray");
        pwConfirmEyeSlash.classList.remove("black");
        checkObj.memberPwConfirm = false;

    } else {
        
        // 비밀번호 유효o
        if(checkObj.memberPw){
            memberPwConfirm.removeAttribute("readonly");
            if(memberPw.value == memberPwConfirm.value){ //일치
                pwConfirmCheck.classList.add("iVisible","green");
                pwConfirmCheck.classList.remove("iHidden", "gray");
                pwConfirmXmark.classList.add("iHidden","gray");
                pwConfirmXmark.classList.remove("iVisible","red");
                checkObj.memberPwConfirm = true;
            } else {
                pwConfirmCheck.classList.add("iHidden", "gray");
                pwConfirmCheck.classList.remove("iVisible","green");
                pwConfirmXmark.classList.remove("iHidden");
                pwConfirmXmark.classList.add("iVisible", "red");
                checkObj.memberPwConfirm = false;
            }
        } else {
            checkObj.memberPwConfirm = false;
        }
    }   
})










const toAdmin = document.getElementById("toAdmin");

toAdmin.addEventListener("click", () => {
    toAdmin.innerHTML = "해당 계정을 관리자에게 전달했습니다.";    
})

// if(checkObj.memberPwConfirm == true){
//     toAdmin.addEventListener("click", () => {
//         toAdmin.innerHTML = "해당 계정이 관리자에게 전달됐습니다.";
//     })
// }
