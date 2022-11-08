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

// setTimeout(function(){
//     memberPw.focus();
// }, 10);

setTimeout(function(){
    memberEmail.focus();
}, 0);


    

// memberEmail.addEventListener("focus", function(){
//     this.setSelectionRange(1,20);
// })

    // loginLabel[1].classList.add("labelUp");
    // loginLabel[0].style.fontSize = "0.5em";
    // loginLabel[1].style.fontSize = "0.5em";
// }


// setSelectionRange