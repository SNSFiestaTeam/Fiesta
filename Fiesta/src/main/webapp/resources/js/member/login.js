
const memberEmail = document.getElementById("memberEmail");
const memberPw = document.getElementById("memberPw");
const loginBtn = document.getElementById("loginBtn");

// 브라우저 자동완성 해결!
document.addEventListener("DOMContentLoaded", function(){
    memberEmail.removeAttribute("readonly");
    memberEmail.value = "123";
    memberEmail.value = "";
    memberEmail.focus();
})


memberPw.addEventListener("focus", function(){
    memberPw.removeAttribute("readonly");
})



// 로그인 실패
//"${message}"
// setTimeout(function(){
//     memberEmail.focus();
//     memberEmail.value = "";
//     // document.getElementsByTagName("body").addEventListener("click");
// }, 100);

// this.setSelectionRange(1,20);
// setSelectionRange