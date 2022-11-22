const secessionBtn = document.getElementById("secession-btn");
const memberDeleteForm = document.getElementById("memberDeleteForm");

if(memberDeleteForm != null){

    secessionBtn.addEventListener("click", (event)=>{
        
        if(!confirm("탈퇴하시겠습니까?")){
        alert("탈퇴 취소")
        event.preventDefault();
        
    }   else {
        alert("탈퇴");    
    } 
    
    })

}