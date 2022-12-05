const changePwForm = document.getElementById("changePwForm");

if(changePwForm != null){

    changePwForm.addEventListener("submit", function(event){


        const currentPw = document.getElementById("currentPw");
        const newPw = document.getElementById("newPw");
        const newPwConfirm = document.getElementById("newPwConfirm");


        if(currentPw.value.trim().length ==0 ){
            alert("이전 비밀번호를 입력해주세요.");
            currentPw.focus();
            currentPw.value="";

            event.preventDefault();

            return;
            
        }

        if(newPw.value.trim().length ==0){
            alert("새 비밀번호를 입력해주세요.");
            newPw.focus();
            newPw.value="";

            event.preventDefault();

            return;

        }

        if(newPwConfirm.value.trim().length ==0){
            alert("새 비밀번호 확인을 입력해주세요.");
            newPwConfirm.focus();
            newPw.value="";

            event.preventDefault();

            return;
        }

        if(newPw.value != newPwConfirm.value){
            alert("새 비밀번호가 일치하지 않습니다.");
            newPwConfirm.focus();
            event.preventDefault();
''
            return;
        }

        const regEx = /^[\w~!@#$%^&*-_]{8,30}$/;
        if(!regEx.test(newPw.value)){
            alert("이 비밀번호는 추측하기 너무 쉽습니다. 비밀번호를 다시 만드세요")
            event.preventDefault();
            newPw.focus();
        }
    })

    
}