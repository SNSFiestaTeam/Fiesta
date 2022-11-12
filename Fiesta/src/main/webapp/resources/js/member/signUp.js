/*
회원가입(필수) : 이메일, 성명, 사용자이름, 비밀번호, 비밀번호 확인

회원가입 양식이 제출되었을 때
- 성공 (필수 요소 모두 작성) -> 아이콘 변경
- 실패 (필수 요소 중 하나라도 작성되지 않았을 때) 
        -> 아이콘 변경 /제출 이벤트 제거, 유효하지 않은 입력으로 포커스 이동


- 이메일(유효성 검사) : 아이콘 v(색변경)
- 성명(작성 여부) : v(색변경)
- 사용자이름(랜덤, 작성 여부) : <-, v/x
- 비밀번호(유효성 검사 / 보이기숨기기) : v/x, eye
- 비밀번호 확인(일치 여부) : v/x

*/


const checkObj = {
    "memberEmail"   : false,
    "memberName"    : false,
    "memberNickname": false,
    "memberPw"      : false,
    "memberPwConfirm" : false,
}


const signUpForm = document.getElementById("signUp-frm");

const memberEmail = document.getElementById("memberEmail");
const memberName = document.getElementById("memberName");
const memberNickname = document.getElementById("memberNickname");
const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");

const signUpButton = document.getElementById("signUpButton");



// 회원가입 form 제출 이벤트
document.getElementById("signUp-frm").addEventListener("submit", function(event){

    //버튼 비활성화 만들기
    for(let key in checkObj){
        if( !checkObj[key] ){
            signUpButton.disabled = false;
            document.getElementById(key).focus();
            event.preventDefault();
            return;
        }
    }

});

       // signUpButton.disabled = true;
        // signUpButton.classList.add("buttonOn");



// icon 전체에 회색 적용
const icon = document.getElementsByClassName("icon");

for(let item of icon){
    item.classList.add("gray");
}
    

// 이메일 아이콘 : 필수입력, 유효성 검사 + 중복검사
// v/x 하지 말고, v 색 변경으로.
const emailCheck = document.getElementById("emailCheck");
const emailXmark = document.getElementById("emailXmark");

emailXmark.classList.add("iHidden");

memberEmail.addEventListener("input", function(){
    
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
                    emailCheck.classList.remove("gray");
                    emailXmark.classList.add("iHidden");
                    checkObj.memberEmail = true;
               
                } else { // 중복
                    emailCheck.classList.add("iHidden");
                    emailCheck.classList.remove("iVisible","green");
                    emailXmark.classList.remove("iHidden");
                    emailXmark.classList.add("iVisible", "red");
                    checkObj.memberEmail = false;
                }
            },
            error: () => {
                console.log("중복 검사 실패(ajax");
            },
            complete: () => {
                console.log("중복 검사 수행 완료");
            }
        });

    } else { // 유효x
        emailCheck.classList.add("gray");
        emailCheck.classList.remove("green");
        checkObj.memberEmail = false;
    }

});


// 성명 아이콘 : 필수 입력, 유효성 검사(한글, 영문자만 가능, 3글자 이상)
memberName.addEventListener("input", function(){
    const nameCheck = document.getElementById("nameCheck");

    if(this.value.trim().length == 0){
        nameCheck.classList.add("iVisible", "gray");
        nameCheck.classList.remove("green");
        checkObj.memberName = false;
    } 
    
    // 유효성 검사
    const regEx = /^[가-힣\w\d]{3,}$/;
    
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
// 자동완성 지우기
// document.addEventListener("DOMContentLoaded", function(){
//     memberNickname.removeAttribute("readonly");
//     memberNickname.value = "123";
//     memberNickname.value = "";
// })


const nickCheck = document.getElementById("nickCheck");
const nickRefresh = document.getElementById("nickRefresh");

memberNickname.addEventListener("input", function(){

    if(this.value.trim().length == 0){
        nickCheck.classList.add("gray");
        nickCheck.classList.remove("green");
        nickRefresh.classList.add("gray");
        nickRefresh.classList.remove("blue")
        checkObj.memberNickname = false;
    } 
    

    // 유효성 검사(== 비밀번호)
    const regEx = /^[\w\-\_\.]{3,}$/;

    if(regEx.test(memberNickname.value)){
        nickCheck.classList.add("green");
        nickCheck.classList.remove("gray");
        nickRefresh.classList.add("blue");
        nickRefresh.classList.remove("gray")
        checkObj.memberNickname = true;

    } else {
        nickCheck.classList.add("gray");
        nickCheck.classList.remove("green");
        nickRefresh.classList.add("gray");
        nickRefresh.classList.remove("blue")
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

pwEye.classList.add("iHidden");
pwConfirmXmark.classList.add("iHidden");

memberPw.addEventListener("input", () => {

    pwEyeSlash.classList.add("black");
    
    //필수입력
    if(memberPw.value.trim().length == 0){
        pwEye.classList.add("gray");
        pwEye.classList.remove("black");
        pwCheck.classList.add("iVisible", "gray");
        pwCheck.classList.remove("green");
        pwEyeSlash.classList.add("iVisible", "gray");
        pwEyeSlash.classList.remove("black");
        pwEye.classList.add("iHidden");
        checkObj.memberPw = false;
    } 
    
    // 유효성 검사
    const regEx = /^[\w~!@#$%^&*-_]{6,30}$/;

    // 유효o
    if(regEx.test(memberPw.value)){
        pwCheck.classList.add("green");
        pwCheck.classList.remove("gray");
        checkObj.memberPw = true;


        // 비밀번호 확인 일치
        if(memberPw.value == memberPwConfirm.value){
            pwConfirmCheck.classList.add("iVisible", "green");
            pwConfirmCheck.classList.remove("iHidden", "gray");
            pwConfirmXmark.classList.add("iHidden");
            pwConfirmXmark.classList.remove("red");
            checkObj.memberPwConfirm = true;
        
        } else { 
            // 비밀번호 확인 불일치
            pwConfirmCheck.classList.add("iHidden");
            pwConfirmCheck.classList.remove("iVisible","green");
            pwConfirmXmark.classList.add("iVisible", "red");
            pwConfirmXmark.classList.remove("gray");
            checkObj.memberPwConfirm = false;
        }


    // 유효x
    } else {
        pwCheck.classList.add("gray");
        pwCheck.classList.remove("green");
        checkObj.memberPw = false;
    }

    // 비밀번호 보이기, 숨기기
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
})


memberPwConfirm.addEventListener("input", () => {

    if(memberPwConfirm.value.trim().length == 0){
        pwConfirmCheck.classList.add("gray");
        pwConfirmCheck.classList.remove("green");
        checkObj.memberPwConfirm = false;
    }

    // 비밀번호 유효o
    if(checkObj.memberPw){
        if(memberPw.value == memberPwConfirm.value){ //일치
            pwConfirmCheck.classList.add("iVisible","green");
            pwConfirmCheck.classList.remove("gray");
            // pwConfirmXmark.classList.add("iHidden", "gray");
            // pwConfirmXmark.classList.remove("red");
            checkObj.memberPwConfirm = true;
        } else {
            pwConfirmCheck.classList.add("iVisible", "gray");
            pwConfirmCheck.classList.remove("green");
            // pwConfirmXmark.classList.add("iVisible", "red");
            // pwConfirmXmark.classList.remove("gray");
            checkObj.memberPwConfirm = false;
        }
    } else {
        checkObj.memberPwConfirm = false;
    }
})
