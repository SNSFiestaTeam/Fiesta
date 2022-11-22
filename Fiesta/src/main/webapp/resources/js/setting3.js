const secessionBtn = document.getElementById("secession-btn");

secessionBtn.addEventListener("click", (event)=>{

    if(!confirm("탈퇴하시겠습니까?")){
        alert("탈퇴 취소")
        event.preventDefault();
        
    }   else {

        alert("탈퇴");
        SubmitEvent();
    } 
    
    

    

})