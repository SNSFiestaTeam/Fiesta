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


// // 아예 눌리지 않게 해야 하는데..
// document.getElementById("signUp-frm").addEventListener("submit", function(event){

//     const signUpButton = document.getElementById("signUpButton");

// //버튼 비활성화 만들기
//     for(let key in checkObj){

//         if( !checkObj[key] ){
//             signUpButton.classList.add("buttonOff");
//             document.getElementById(key).focus();
//             event.preventDefault();
//             return;
//         }
//     }

// });


const memberEmail = document.getElementById("memberEmail");
const memberName = document.getElementById("memberName");
const memberNickname = document.getElementById("memberNickname");
const memberPw = document.getElementById("memberPw");
const memberPwConfirm = document.getElementById("memberPwConfirm");

const signUpButton = document.getElementById("signUpButton");



// 이메일 아이콘 : 필수입력, 유효성 검사
memberEmail.addEventListener("input", function(){
    const emailCheck = document.getElementById("emailCheck");
    // const emailXmark = document.getElementById("emailXmark");
    
    // v/x 하지 말고, v 색 변경으로.
    if(memberEmail.value.trim().length == 0){ //문자가 입력되지 않을 때
        emailCheck.classList.add("iVisible", "gray");
        signUpButton.disabled = false;
    } 
    
    // 유효성 검사
    const regEx = /^[\w\d\-\_]{4,}@[가-힣\w]+(\.\w+){1,3}$/;

    if(regEx.test(memberEmail.value)){
        emailCheck.classList.add("iVisible", "green");
        emailCheck.classList.remove("gray");
        signUpButton.disabled = true;
        signUpButton.classList.add("buttonOn");
        
    } else {
        emailCheck.classList.add("iVisible", "gray");
        emailCheck.classList.remove("green");
    }
});


// 성명 아이콘 : 필수 입력
memberName.addEventListener("input", function(){
    const nameCheck = document.getElementById("nameCheck");

    if(this.value.trim().length == 0){
        nameCheck.classList.add("iVisible", "gray");
        signUpButton.disabled = false;
    
    } else {
        nameCheck.classList.add("iVisible", "green");
        nameCheck.classList.remove("gray");

    }


})
