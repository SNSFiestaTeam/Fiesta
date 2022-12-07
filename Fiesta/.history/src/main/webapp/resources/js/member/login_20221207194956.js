
const memberEmail = document.getElementById("memberEmail");
const memberPw = document.getElementById("memberPw");
const loginBtn = document.getElementById("loginBtn");

// 브라우저 자동완성 해결!
document.addEventListener("DOMContentLoaded", function(){
    memberEmail.removeAttribute("readonly");
    // 로그인 빨리하기 위해 value값 추가. 제일 나중에 지우기
    memberEmail.value = "123";
    memberEmail.value = "";
    memberEmail.focus();
})


memberPw.addEventListener("focus", function(){
    memberPw.removeAttribute("readonly");
})



