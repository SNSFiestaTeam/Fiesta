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

function start(){

    $.ajax({
        url : "setting/update",
        data : {"memberNo" : memberNo},
        type : "POST",
        dataType : "JSON",
        success : selectList=>{

            console.log(selectList);

        },

        error : ()=>{
            console.log("실패");
        }

    });

/*
SELECT MEMBER_OPEN_FL, BOARD_PUB_PRI_FL  
FROM "MEMBER"
JOIN BOARD USING(MEMBER_NO)
WHERE MEMBER_NO = 10


SELECT INTRO_CONTENT
FROM "INTRODUCE"
WHERE MEMBER_NO = 10;


*/


}
