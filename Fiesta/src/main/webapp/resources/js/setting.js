document.getElementById("setting-frm").addEventListener("submit", event =>{


    const memberName = document.getElementById("memberName");
    const memberNickname = document.getElementById("memberNickname");

    if(memberName.value.trim().length == 0){
        alert("이름을 입력하세요.");
        memberName.value = "";
        memberName.focus();
        event.preventDefault();
        return;
    }
    
    if(memberNickname.value.trim().length == 0){
        alert("사용자 이름을 입력하세요");
        memberNickname.value="";
        memberNickname.focus();
        event.preventDefault();
        return;
    }

    
});
