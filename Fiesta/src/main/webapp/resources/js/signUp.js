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


emailCheck.classList.add("iVisible", "gray");
nameCheck.classList.add("iVisible", "gray");
    
// 이메일 아이콘 : 필수입력, 유효성 검사
// v/x 하지 말고, v 색 변경으로.
memberEmail.addEventListener("input", function(){
    const emailCheck = document.getElementById("emailCheck");
    
    // 필수 입력
    if(memberEmail.value.trim().length == 0){ 
        checkObj.memberEmail = false;
        return;
    } 
    
    // 유효성 검사
    const regEx = /^[\w\d\-\_]{4,}@[가-힣\w]+(\.\w+){1,3}$/;

    if(regEx.test(memberEmail.value)){
        emailCheck.classList.add("iVisible", "green");
        emailCheck.classList.remove("gray");
        checkObj.memberEmail = true;
        // signUpButton.disabled = true;
        // signUpButton.classList.add("buttonOn");
        
    } else {
        emailCheck.classList.add("iVisible", "gray");
        emailCheck.classList.remove("green");
        checkObj.memberEmail = false;
    }

});


// 성명 아이콘 : 필수 입력 / 유효성 검사(한글, 영문자만 가능, 3글자 이상)
memberName.addEventListener("input", function(){
    const nameCheck = document.getElementById("nameCheck");

    if(this.value.trim().length == 0){
        nameCheck.classList.add("iVisible", "gray");
        nameCheck.classList.remove("green");
        checkObj.memberName = false;
        return;
    } 
    
    // 유효성 검사
    const regEx = /^[\w\d]{3,}$/;
    
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



// 사용자 이름 : 필수 입력 / 유효성 검사 (비밀번호랑 같되)
// 자동완성 지우기
// document.addEventListener("DOMContentLoaded", function(){
//     memberNickname.removeAttribute("readonly");
//     memberNickname.value = "123";
//     memberNickname.value = "";
// })


memberNickname.addEventListener("input", function(){
    const nickCheck = document.getElementById("nickCheck");
    const nickRefresh = document.getElementById("nickRefresh");


    if(this.value.trim().length == 0){
        nickCheck.classList.add("iVisible", "gray");
        nickCheck.classList.remove("green");
        checkObj.memberNickname = false;
        return;
    }
    





})


