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




chk1.addEventListener("click", ()=>{

likeFrm.submit();

})



// 계정 공개
function getAccount(event){
    accountFrm.submit();
}

const idOpen1 = document.getElementById("idOpen1")
const idOpen2 = document.getElementById("idOpen2")
const idOpen3 = document.getElementById("idOpen3")

 function start(){
    $.ajax({
        url : "/setting/changeEtc",
        data : {"memberNo" : memberNo},
        type : "POST",
        dataType:"JSON",
        success : (member)=>{

            if(member.memberOpenFl == "Y"){
                idOpen1.checked = true;
            }
            if(member.memberOpenFl == "F"){
                idOpen2.checked = true;
            }
            if(member.memberOpenFl == "N"){
                idOpen3.checked = true;
            }

            if(member.userPubPriFl == "Y"){
                chk1.checked = false;
            }
            if(member.userPubPriFl == "N"){
                chk1.checked = true;
            }

        },

        error : ()=>{
            console.log("실패");
        }

    });



};


document.addEventListener("DOMContentLoaded", ()=>{
    start();
});
