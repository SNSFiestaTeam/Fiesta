const secessionBtn = document.getElementById("secession-btn");
const memberDeleteForm = document.getElementById("memberDeleteForm");

const accountFrm = document.getElementById("account-frm");
const idOpen = document.getElementById("idOpen");



function memberDeleteValidate(){

    if(!confirm("탈퇴하시겠습니까?")){
        alert("탈퇴 취소");
        return false;
    }

    alert("탈퇴");
    return true;
}


const likeFrm = document.getElementById("like-frm");
const chk1 = document.getElementById("chk1");

chk1.addEventListener("change", ()=>{

    if(chk1.checked){
        boardPubPriFlag = 'N'
        chk1.checked = true;

    } else {
        boardPubPriFlag = 'Y'
        chk1.checked = false
    }
    likeFrm.submit();

});

// 계정 공개
function getAccount(event){
    accountFrm.submit();
}

