// 자동완성 시 라벨이 내려와있음.
// 클래스 하나 만들어서
// label에 클래스로 받아오고
// !=0 label 올라가게
// == 0 내려가게

// const input = document.querySelectorAll("input");
const loginLabel = document.getElementsByClassName("loginLabel");
const memberEmail = document.getElementById("memberEmail");
const memberPw = document.getElementById("memberPw");
const loginBtn = document.getElementById("loginBtn");


document.addEventListener("DOMContentLoaded", function(){
    memberEmail.removeAttribute("readonly");
    memberEmail.value = "123";
    memberEmail.value = "";
    memberEmail.focus();

    memberPw.removeAttribute("readonly");
    memberPw.value = "123";
    memberPw.value = "";
})

// setTimeout(function(){
//     memberEmail.focus();
//     memberEmail.value = "";
//     // document.getElementsByTagName("body").addEventListener("click");
// }, 100);

// setTimeout(function(){
//     memberPw.focus();
//     memberPw.value = "";
//     // document.getElementsByTagName("body").addEventListener("click");
// }, 150);


// memberPw.value = "";


// setTimeout(function(){
//     memberEmail.focus();
// }, 0);




// setTimeout(function(){
//     // memberEmail.setSelectionRange(1,5);
//     memberEmail.focus();
// }, 0);

// if(memberEmail.value.trim().length != 0){
    
// }




// memberEmail.addEventListener("focus", function(e){
//     memberEmail.value = "";
//     e.preventDefault();
//     return;
// })


// this.setSelectionRange(1,20);

// setSelectionRange