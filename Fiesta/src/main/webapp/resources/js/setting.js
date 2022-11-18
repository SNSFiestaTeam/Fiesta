const memberName = document.getElementById("memberName");
const nameMessage = document.getElementById("name-message");


const checkObj = {
    "memberName" : false,
    "memberNickname" : false
};




document.getElementById("setting-frm").addEventListener("submit", event =>{

    for(let key of checkObj){
        
        let str;

        if(!checkObj[key]){

            switch(key){
                case "memberName" : str = "이름이 유효하지 않습니다."; break;
                case "memberNickname" : str = "사용자 이름이 유효하지 않습니다."; break;
            }

            alert(str);
            document.getElementById(key).focus();
            event.preventDefault();
            return;
        }
    }

});

memberName.addEventListener("input", ()=>{
        
        if(memberName.value.trim().length == 0){
            memberName.value = "";
            memberName.focus();
            checkObj.memberName = false;
            return;
        }


        const regEx = /^[가-힣a-zA-Z]{3,30}$/;
        if(regEx.test(memberName.value)){
            
            nameMessage.innerText="유효한 이름 형식입니다.";
            nameMessage.style.color="green";
            
    } else{
        nameMessage.innerText="유효하지 않은 이름 형식입니다.";
        nameMessage.style.color= "red";
        checkObj.memberName = false;
        return;

    }

});

const memberNickname = document.getElementById("memberNickname");
const nickMessage = document.getElementById("nick-message")
memberNickname.addEventListener("input", ()=>{ 

    if(memberNickname.value.trim().length == 0){
    memberNickname.value="";
    memberNickname.focus();
    checkObj.memberNickname = false;
    return;
    }

    const regEx = /^[\w-_.]{3,30}$/;
    if(regEx.test(memberNickname.value.trim())){

        $ajax({
            url:"/nickDupCheck",
            data:{"memberNickname" : memberNickname.value},
            type:"GET",
            success : (res) => {

                if(res == 0){
                    nickMessage.innerHTML = "사용할 수 있는 사용자 이름입니다."
                    nickMessage.style.color = "green";
                    checkObj.memberNickname = true;
                }

                else{
                    nickMessage.innerHTML = "사용중인 사용자 이름입니다.";
                    nickMessage.style.color = "red";
                    checkObj.memberNickname = false;
                }
            },

            error: () => {
                
            },
            complete: tempFn

        })


    } else{

        nickMessage.innerHTML = "유효하지 않은 사용자 이름 형식입니다."
        nickMessage.style.color = "red";
        checkObj.memberNickname = false;

    }


});


function tempFn(){
    console.log("닉네임 검사 완료");
}