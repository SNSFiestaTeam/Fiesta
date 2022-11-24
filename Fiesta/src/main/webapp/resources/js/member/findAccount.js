/*
    계정찾기 (비밀번호 찾기)

    1. 이메일 인증하기
    2. 인증하면 비밀번호 변경 페이지로 이동하여
       비밀번호 재설정하기.
*/

const checkObj = {
    "memberEmail"   : false,
    "memberPw"      : false,
    "memberPwConfirm" : false,
    "authKey"       : false
}



// fixme : memberEmail로 수정함
const memberEmail = document.getElementById("inputEmail");

const authKey = document.getElementById("authKey");
const sendAuthKeyBtn = document.getElementById("sendAuthKeyBtn");
const checkAuthKeyBtn = document.getElementById("checkAuthKeyBtn");

const inputAuthArea = document.getElementById("inputAuthArea");
const changePwBtn = document.getElementById("changePwBtn");

const toLoginArea = document.getElementById("toLogin");

// 이메일로 인증하기 버튼 비활성화
sendAuthKeyBtn.classList.add("buttonOff");
sendAuthKeyBtn.classList.remove("buttonOn");
sendAuthKeyBtn.disabled = true;

// 인증번호 입력칸 숨기기
inputAuthArea.classList.add("displayOff");
checkAuthKeyBtn.classList.add("gray");

// 비밀번호 재설정 버튼 숨기기
changePwBtn.classList.add("displayOff");


// 이메일 유효성 검사
memberEmail.addEventListener("input", function(){
    
    // 필수 입력
    if(memberEmail.value.trim().length == 0){ 
        checkObj.memberEmail = false;
        sendAuthKeyBtn.classList.add("buttonOff");
        sendAuthKeyBtn.classList.remove("buttonOn");
        sendAuthKeyBtn.disabled = true;
    } 
    
    // 유효성 검사
    const regEx = /^[\w\d\-\_]{4,}@[가-힣\w]+(\.\w+){1,3}$/;

    if(regEx.test(memberEmail.value)){

        // 중복 검사_중복되어야 함(회원만 비밀번호 찾기 가능)
        $.ajax({
            url: "/emailDupCheck",
            data: {"memberEmail" : memberEmail.value},
            type: "GET",
            success: (result) => {

                if(result == 1){// 중복
                    sendAuthKeyBtn.innerHTML = "이메일로 인증하기";
                    sendAuthKeyBtn.classList.add("buttonOn");
                    sendAuthKeyBtn.classList.remove("buttonOff");
                    sendAuthKeyBtn.disabled = false;
                    checkObj.memberEmail = true;
                    
                } else { // 중복x 또는 2이상
                    sendAuthKeyBtn.innerHTML = "이메일이 존재하지 않습니다.";
                    sendAuthKeyBtn.classList.add("buttonOff");
                    sendAuthKeyBtn.classList.remove("buttonOn");
                    sendAuthKeyBtn.disabled = true;
                    checkObj.memberEmail = false;
                    
                }
            },
            error: () => {
                console.log("이메일 중복 검사 실패(ajax");
            },
            complete: () => {
                console.log("이메일 중복 검사 수행 완료");
            }
        });

    } else { // 유효x
        checkObj.memberEmail = false;
    }

});




let authTimerArea = document.getElementById("authTimerArea");
let authTimer;
let authMin = 4;
let authSec = 59;


// 이메일로 인증하기 버튼 누르면
sendAuthKeyBtn.addEventListener("click",() => {
    inputAuthArea.classList.remove("displayOff");
    inputAuthArea.classList.add("displayFlex");

    sendAuthKeyBtn.classList.add("buttonOff");
    sendAuthKeyBtn.classList.remove("buttonOn");
    sendAuthKeyBtn.disabled = true;

    authTimerArea.classList.add("displayFlex");

    // 타이머
    authMin = 4;
    authSec = 59;

    checkObj.authKey = false;

    if(checkObj.memberEmail){ // 중복이 아닌 이메일인 경우
        $.ajax({
            url : "/accountSendEmail/findAccount",
            data : {"email": memberEmail.value},
            success : (result) => {
                if(result > 0){
                    console.log("인증 번호가 발송되었습니다.")
                }else{
                    console.log("인증번호 발송 실패")
                }
            }, error : () => {
                console.log("이메일 발송 중 에러 발생");
            }
        })

        //_비동기라서 위 ajax와 동시에 아래 코드 실행됨.
        // alert("인증번호가 발송 되었습니다.");
        toLoginArea.innerHTML = "인증번호가 발송되었습니다!"
        toLoginArea.classList.add("green");

        
        authTimerArea.innerText = "05:00";

        authTimer = window.setInterval(()=>{
        //_ 인터벌을 변수에 저장해야 나중에 clearInterval이 가능함.

            authTimerArea.innerText = "0" + authMin + ":" + (authSec<10 ? "0" + authSec : authSec);
            
            // 남은 시간이 0분 0초인 경우
            if(authMin == 0 && authSec == 0){
                checkObj.authKey = false;
                clearInterval(authTimer);
                return;
            }

            // 0초인 경우
            if(authSec == 0){
                authSec = 60;
                authMin--;
            }

            authSec--; // 1초 감소

        }, 1000)

    } else{
        // alert("중복되지 않은 이메일을 작성해주세요.");
        memberEmail.focus();
    }
});


// 인증하기 버튼 보이게
inputAuthArea.addEventListener("click", () => {
    checkAuthKeyBtn.innerHTML = "인증하기"
    checkAuthKeyBtn.classList.add("gray");
    checkAuthKeyBtn.classList.remove("red", "black");

    // 인증번호 입력하면 인증하기버튼 초록색으로
    inputAuthArea.addEventListener("input", ()=> {
        checkAuthKeyBtn.classList.add("black");
        checkAuthKeyBtn.classList.remove("gray", "red");
        
        if(authKey.value.trim().length ==  0) {
            checkAuthKeyBtn.classList.add("gray");
            checkAuthKeyBtn.classList.remove("red", "black");
        } 
    })
})



// 인증 확인
checkAuthKeyBtn.addEventListener("click", function(){

    if(authMin > 0 || authSec > 0){ // 시간 제한이 지나지 않은 경우에만 인증번호 검사 진행

        $.ajax({
            url : "/accountSendEmail/checkAuthKey",
            data : {"inputKey": authKey.value},
            success : (result) => {

                if(result > 0){
                    clearInterval(authTimer);
                    checkObj.authKey = true;

                    // 비밀번호 재설정 버튼
                    changePwBtn.classList.add("displayFlex");
                    changePwBtn.classList.remove("displayOff");

                } else{
                    // alert("인증번호가 일치하지 않습니다.")
                    checkObj.authKey = false;
                    checkAuthKeyBtn.innerHTML = "불일치";
                    checkAuthKeyBtn.classList.add("red");
                    checkAuthKeyBtn.classList.remove("black");

                    // 불일치일 경우, 빈칸으로 
                    if(authKey.value.trim().length > 1){
                        authKey.value = "";
                    }
                }
            }, 
            
            error : () => {
                console.log("인증코드 확인 오류");
            }
            
        })

    } else{
        alert("인증 시간이 만료되었습니다. 다시 시도해주세요.")
    }
});



