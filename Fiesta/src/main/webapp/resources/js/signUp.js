/*
회원가입(필수) : 이메일, 성명, 사용자이름, 비밀번호, 비밀번호 확인

회원가입 양식이 제출되었을 때
- 성공 (필수 요소 모두 작성) -> 아이콘 변경
- 실패 (필수 요소 중 하나라도 작성되지 않았을 때) 
        -> 아이콘 변경 /제출 이벤트 제거, 유효하지 않은 입력으로 포커스 이동


- 이메일(유효성 검사) : 아이콘 v/x
- 성명(작성 여부) : v/x
- 사용자이름(랜덤, 작성 여부) : <-, v/x
- 비밀번호(유효성 검사 / 보이기숨기기) : v/x, eye
- 비밀번호 확인(일치 여부) : v/x

*/


// const checkObj = {
//     "memberEmail"   : false,
//     "memberName"    : false,
//     "memberNickname": false,
//     "memberPw"      : false,
//     "memberPwConfirm" : false,
// }


// document.getElementById("signUp-frm").addEventListener("submit", function(){


// //버튼 비활성화 만들기
//     for(let key in checkObj){

//         if( !checkObj[key] ){
            
//             switch(key){
//                 case memberEmail : 
 
                        
//             }

//             document.getElementById(key).focus();
//             event.preventDefault();
//             return;

//         }

//     }

// });


const memberEmail = document.getElementById("memberEmail");
const memberEmailLabel = document.getElementById("memberEmailLabel");

const iCheck = document.getElementById("iCheck");
const iXmark = document.getElementById("iXmark");

iCheck.classList.add("gray");
iXmark.style.display="none";

memberEmail.addEventListener("input", function(){

    // 유효성 검사로 바꾸기!
    if(memberEmail.value.trim().length == 0){
        memberEmailLabel.innerText = "입력해주세요"
        memberEmail.value = "";

        iCheck.style.display = "none";
        iXmark.classList.add("red");

    } else {
        iXmark.style.display = "none";
        iCheck.classList.add("green");
    }
})