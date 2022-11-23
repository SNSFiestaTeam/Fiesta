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

