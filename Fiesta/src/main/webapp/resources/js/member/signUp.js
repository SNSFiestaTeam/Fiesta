/*
회원가입(필수) : 이메일, 성명, 사용자이름, 비밀번호, 비밀번호 확인

회원가입 양식이 제출되었을 때
- 성공 (필수 요소 모두 작성) -> 아이콘 변경
- 실패 (필수 요소 중 하나라도 작성되지 않았을 때) 
        -> 아이콘 변경 /제출 이벤트 제거, 유효하지 않은 입력으로 포커스 이동


- 이메일(유효성 검사, 중복검사) : 아이콘 v(색변경)
- 성명(작성 여부) : v(색변경)
- 사용자이름(랜덤, 작성 여부, 중복검사) : <-, v/x
- 비밀번호(유효성 검사 / 보이기숨기기) : v/x, eye
- 비밀번호 확인(일치 여부) : v/x

*/


const checkObj = {
    "memberEmail"   : false,
    "memberName"    : false,
    "memberNickname": false,
    "memberPw"      : false,
    "memberPwConfirm" : false,
    "authKey"       : false
}


const signUpForm = document.getElementById("signUp-frm");

const memberEmail = document.getElementById("memberEmail");
const memberName = document.getElementById("memberName");
const memberNickname = document.getElementById("memberNickname");
const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");

const signUpButton = document.getElementById("signUpButton");

const toLoginArea = document.getElementById("toLogin");
const inputAuthArea = document.getElementById("inputAuth");
const completeMessage = document.getElementById("completeMessage");

const sendAuthKeyBtn = document.getElementById("sendAuthKeyBtn");
const checkAuthKeyBtn = document.getElementById("checkAuthKeyBtn");

const authKey = document.getElementById("authKey");



memberEmail.focus();
signUpButton.classList.add("buttonOff");
signUpButton.classList.remove("buttonOn");
// signUpButton.disabled = true;


// icon 전체에 회색 적용
let icon = document.getElementsByClassName("icon");

for(let item of icon){
    item.classList.add("gray");
}
    


// 이메일 
// 아이콘 : 필수입력, 유효성 검사 + 중복검사
const emailCheck = document.getElementById("emailCheck");
const emailXmark = document.getElementById("emailXmark");

emailXmark.classList.add("iHidden");

memberEmail.addEventListener("input", function(){
    
    memberEmail.focus();

    // 필수 입력
    if(memberEmail.value.trim().length == 0){ 
        emailCheck.classList.add("gray");
        emailCheck.classList.remove("green");
        checkObj.memberEmail = false;
    } 
    
    // 유효성 검사
    const regEx = /^[\w\d\-\_]{4,}@[가-힣\w]+(\.\w+){1,3}$/;

    if(regEx.test(memberEmail.value)){

        // 중복 검사
        $.ajax({
            url: "/emailDupCheck",
            data: {"memberEmail" : memberEmail.value},
            type: "GET",
            success: (result) => {

                if(result == 0 ){
                    emailCheck.classList.add("iVisible", "green");
                    emailCheck.classList.remove("iHidden","gray");
                    emailXmark.classList.add("iHidden");
                    checkObj.memberEmail = true;
               
                } else { // 중복
                    emailCheck.classList.add("iHidden");
                    emailCheck.classList.remove("iVisible","green");
                    emailXmark.classList.remove("iHidden");
                    emailXmark.classList.add("iVisible", "red");
                    
                    sendAuthKeyBtn.classList.add("buttonOff");
                    sendAuthKeyBtn.classList.remove("authButtonOn");
                    checkObj.memberEmail = false;
                }
            },
            error: () => {
                console.log("이메일 중복 검사 실패(ajax");
            },
            complete: () => {
                console.log("이메일 중복 검사 수행 완료");
            }
        });

    } else { // 유효x
        emailCheck.classList.add("iVisible", "gray");
        emailCheck.classList.remove("iHidden","green");
        emailXmark.classList.remove("iVisiebl");
        checkObj.memberEmail = false;
    }
});



// 성명 아이콘 : 필수 입력, 유효성 검사(한글, 영문자만 가능, 2글자 이상)
const nameCheck = document.getElementById("nameCheck");

memberName.addEventListener("input", function(){

    if(memberName.value.trim().length == 0){
        nameCheck.classList.add("iVisible", "gray");
        nameCheck.classList.remove("green");
        checkObj.memberName = false;
    } 
    
    // 유효성 검사
    const regEx = /^[가-힣a-zA-Z]{2,30}$/;
    
    if(regEx.test(memberName.value)){
        nameCheck.classList.add("iVisible", "green");
        nameCheck.classList.remove("gray");
        checkObj.memberName = true;

    } else {
        nameCheck.classList.add("iVisible", "gray");
        nameCheck.classList.remove("green");
        checkObj.memberName = false;
    }
})    



// 사용자 이름 : 필수 입력, 유효성 검사 + 중복검사
const nickCheck = document.getElementById("nickCheck");
const nickXmark = document.getElementById("nickXmark");
const nickRefresh = document.getElementById("nickRefresh");

nickXmark.classList.add("iHidden");

memberNickname.addEventListener("input", () => {

    // 필수입력
    if(memberNickname.value.trim().length == 0){
        nickCheck.classList.add("gray");
        nickCheck.classList.remove("green");
        nickRefresh.classList.add("gray");
        nickRefresh.classList.remove("blue")
        checkObj.memberNickname = false;
    } 
    
    // 유효성 검사
    const regEx = /^[\w\-\_\.]{3,20}$/;

    if(regEx.test(memberNickname.value)){

        // 중복 검사
        $.ajax({
            url: "/nicknameDupCheck",
            data: { "memberNickname" : memberNickname.value },
            type: "GET",
            success: (result) => {
                if(result == 0){
                    nickCheck.classList.add("iVisible","green");
                    nickCheck.classList.remove("gray");
                    nickXmark.classList.add("iHidden");
                    nickXmark.classList.remove("iVisible", "red");
                    nickRefresh.classList.add("blue");
                    nickRefresh.classList.remove("gray");
                    checkObj.memberNickname = true;
                } else {
                    nickCheck.classList.add("iHidden");
                    nickCheck.classList.remove("iVisible","green");
                    nickXmark.classList.remove("iHidden");
                    nickXmark.classList.add("iVisible", "red");
                    nickRefresh.classList.add("gray");
                    nickRefresh.classList.remove("blue");
                    checkObj.memberNickname = false;
                }
            },
            error: () => {
                console.log("사용자 이름 중복 검사 실패(ajax)");
            },
            complete: () => {
                console.log("사용자 이름 중복 검사 수행 완료");
            }
        });

    } else { //유효하지 않을 경우
        nickCheck.classList.add("iVisible","gray");
        nickCheck.classList.remove("iHidden","green");
        nickXmark.classList.add("iHidden");
        nickXmark.classList.remove("iVisible", "red");
        nickRefresh.classList.add("gray");
        nickRefresh.classList.remove("blue");
        checkObj.memberNickname = false;
    }


    // 랜덤 닉네임 생성
    nickRefresh.addEventListener("click", () => {
        let arr = [];
        arr = memberNickname.value.split(""); // 닉네임을 하나씩 나누기
        arr.sort(() => Math.random() -0.5);
        memberNickname.value = arr.join('');
    })

})




// 비밀번호, 비밀번호 확인 : 필수입력, 유효성 검사, 일치
const pwEye = document.getElementById("pwEye");
const pwEyeSlash = document.getElementById("pwEyeSlash");
const pwCheck = document.getElementById("pwCheck");
const pwConfirmCheck = document.getElementById("pwConfirmCheck");
const pwConfirmXmark = document.getElementById("pwConfirmXmark");
const pwConfirmEye = document.getElementById("pwConfirmEye");
const pwConfirmEyeSlash = document.getElementById("pwConfirmEyeSlash");

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
        pwConfirmCheck.classList.add("iHidden", "gray");
        pwConfirmCheck.classList.remove("iVisible", "green");
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
        pwConfirmCheck.classList.add("iHidden", "gray");
        pwConfirmCheck.classList.remove("iVisible", "green");
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



// 자동완성 지우기
document.addEventListener("DOMContentLoaded", () => {
    memberEmail.value = "123";
    memberEmail.value = "";
});

checkAuthKeyBtn.addEventListener("click", () => {
    memberName.removeAttribute("readonly");
    memberNickname.removeAttribute("readonly");
    memberPw.removeAttribute("readonly");
    memberPwConfirm.removeAttribute("readonly");
})



toLoginArea.classList.add("displayFlex");


// '이메일로 인증번호 보내기' 버튼 활성화
memberEmail.addEventListener("input", () => {

    signUpButton.classList.add("displayOff", "buttonOff");
    signUpButton.classList.remove("displayBlock", "buttonOn");

    sendAuthKeyBtn.classList.add("displayBlock", "authButtonOn");
    sendAuthKeyBtn.classList.remove("displayOff");

    checkAuthKeyBtn.classList.add("gray");
    checkAuthKeyBtn.classList.remove("green");
    

    if(memberEmail.value.trim().length==0){
        sendAuthKeyBtn.classList.add("displayOff");
        sendAuthKeyBtn.classList.remove("displayBlock", "authButtonOn");
        signUpButton.classList.add("displayBlock");
        signUpButton.classList.remove("displayOff")
    }

    if(checkObj.memberEmail == true){
        sendAuthKeyBtn.classList.add("authButtonOn");
        sendAuthKeyBtn.classList.remove("buttonOff");
        sendAuthKeyBtn.disabled = false;
    
    }  else {
        sendAuthKeyBtn.classList.add("buttonOff");
        sendAuthKeyBtn.classList.remove("authButtonOn");
        sendAuthKeyBtn.disabled = true;
    }
})


// 이메일 인증코드 발송, 확인
let authTimerArea = document.getElementById("authTimer-area");
let authTimer;
let authMin = 4;
let authSec = 59;


sendAuthKeyBtn.addEventListener("click", function(){
    
    // 인증번호 입력창 보이기
    toLoginArea.classList.add("displayOff");
    toLoginArea.classList.remove("displayFlex");
    inputAuthArea.classList.add("displayFlex");
    inputAuthArea.classList.remove("displayOff");
    checkAuthKeyBtn.innerHTML = "인증하기";
    
    // 이메일 인증 완료 후 이메일 수정할 경우, 이메일 인증완료 메시지가 남아있는 문제 해결
    completeMessage.classList.add("displayOff")
    completeMessage.classList.remove("displayFlex")

    authKey.value = "";

    // 타이머
    authMin = 4;
    authSec = 59;

    checkObj.authKey = false;

    if(checkObj.memberEmail){ // 중복이 아닌 이메일인 경우
        $.ajax({
            url : "/sendEmail/signUp",
            data : {"email": memberEmail.value},
            success : (result) => {
                if(result > 0){
                    console.log("인증 번호가 발송되었습니다.")
                }else{
                    console.log("인증번호 발송 실패")
                }
            }, error : () => {
                console.log("이메일 발송 중 에러 발생");
            }
        })

        //_비동기라서 위 ajax와 동시에 아래 코드 실행됨.
        alert("인증번호가 발송 되었습니다.");

        
        authTimerArea.innerText = "05:00";

        authTimer = window.setInterval(()=>{
        //_ 인터벌을 변수에 저장해야 나중에 clearInterval이 가능함.

            authTimerArea.innerText = "0" + authMin + ":" + (authSec<10 ? "0" + authSec : authSec);
            
            // 남은 시간이 0분 0초인 경우
            if(authMin == 0 && authSec == 0){
                checkObj.authKey = false;
                clearInterval(authTimer);
                return;
            }

            // 0초인 경우
            if(authSec == 0){
                authSec = 60;
                authMin--;
            }

            authSec--; // 1초 감소

        }, 1000)

    } else{
        alert("중복되지 않은 이메일을 작성해주세요.");
        memberEmail.focus();
    }

});


checkAuthKeyBtn.classList.add("gray");


// 인증하기 버튼 
inputAuthArea.addEventListener("click", () => {
    checkAuthKeyBtn.innerHTML = "인증하기"
    checkAuthKeyBtn.classList.add("gray");
    checkAuthKeyBtn.classList.remove("red", "black");

    // 인증번호 입력하면 인증하기버튼 초록색으로
    inputAuthArea.addEventListener("input", ()=> {
        checkAuthKeyBtn.classList.add("black");
        checkAuthKeyBtn.classList.remove("gray", "red");
        
        if(authKey.value.trim().length ==  0) {
            checkAuthKeyBtn.classList.add("gray");
            checkAuthKeyBtn.classList.remove("red", "black");
        } 
    })
})


// 인증 확인
checkAuthKeyBtn.addEventListener("click", function(){

    if(authMin > 0 || authSec > 0){ // 시간 제한이 지나지 않은 경우에만 인증번호 검사 진행

        $.ajax({
            url : "/sendEmail/checkAuthKey",
            data : {"inputKey": authKey.value},
            success : (result) => {

                if(result > 0){
                    clearInterval(authTimer);
                    checkObj.authKey = true;

                    // 인증 완료 표시
                    completeMessage.classList.add("displayFlex");
                    completeMessage.classList.remove("displayOff");
                    inputAuthArea.classList.add("displayOff");
                    inputAuthArea.classList.remove("displayFlex");

                    
                    // 가입 버튼 다시 보이게
                    signUpButton.classList.add("displayBlock", "buttonOff");
                    signUpButton.classList.remove("displayOff", "buttonOn");
                    sendAuthKeyBtn.classList.add("displayOff");
                    sendAuthKeyBtn.classList.remove("displayBlock", "authButtonOn");

                    

                } else{
                    // alert("인증번호가 일치하지 않습니다.")
                    checkObj.authKey = false; 

                    checkAuthKeyBtn.innerHTML = "불일치";
                    checkAuthKeyBtn.classList.add("red");
                    checkAuthKeyBtn.classList.remove("black");
                    
                    if(authKey.value.trim().length > 1){
                        authKey.value = "";
                    }
                }
            }, 
            
            error : () => {
                console.log("인증코드 확인 오류");
            }
        })

    } else{
        alert("인증 시간이 만료되었습니다. 다시 시도해주세요.")
    }
});



// 버튼 활성화/비활성화
document.getElementById("signUp-frm").addEventListener("input", function(){
    for(let key in checkObj){

        // 가입하기 버튼 비활성화
        if( !checkObj[key] ){
            signUpButton.classList.add("buttonOff");
            signUpButton.classList.remove("buttonOn");
            signUpButton.disabled = true;

        } 
    }

    // 가입하기 버튼 활성화
    if(checkObj.memberEmail && checkObj.memberPw && checkObj.memberPwConfirm &&
        checkObj.memberNickname && checkObj.memberName && checkObj.authKey) {
        signUpButton.classList.add("buttonOn");
        signUpButton.classList.remove("buttonOff");
        signUpButton.disabled = false;
    }


});



// 회원가입 form 제출 이벤트
document.getElementById("signUp-frm").addEventListener("submit", function(event){

    // 하나라도 false면 제출 못하게!
    for(let key in checkObj){
        if( !checkObj[key] ){
            document.getElementById(key).focus();
            event.preventDefault();
            return;
        }
    }
});




// if(checkObj.authKey == false){
//     memberName.addEventListener("focus", () =>{
//         alert("이메일 인증을 먼저 진행하세요.");
//         memberEmail.focus();
//     })
// } else{
//     memberName.removeEventListener("focus", () =>{
//         memberName.removeAttribute("readonly");
//         memberName.focus();
//     })
// };

