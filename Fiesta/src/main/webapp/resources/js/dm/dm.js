const down = document.getElementsByClassName("down")[0];
const right = document.getElementById("right")
const up = document.getElementById("up");
const noClick = document.getElementById("no-click");
const click = document.getElementById("click");
const message = document.getElementById("dm-message");
const dmMenu = document.getElementsByClassName("feed-menu-container")[0];
const sendMessageBtn = document.getElementById("sendMessageBtn");

document.addEventListener("DOMContentLoaded", ()=>{

    dmMenu.style.display = "none";
    click.style.display = "none";

    right.style.justifyContent = "center";

});

sendMessageBtn.addEventListener("click", ()=>{

    dmMenu.style.display = "flex";

})




function inputEnter(){

    if( window.event.key == "Enter"){

        readValue();   
    }    
}    

function readValue(){

    const room = document.getElementById("chattingRoom");
    const input = document.querySelector("#chattingInput");


    if( input.value.trim().length > 0){
        room.innerHTML += "<p><span>"+ input.value +"</span></p>";

        room.scrollTop =  room.scrollHeight;   
    } else {      
    
    }       
        input.value="";


}        

const proImg = document.getElementById("proImg")
const next = document.getElementById("next");
const messageName = document.getElementById("messageName");
// 다음 클릭
next.addEventListener("click", ()=>{
  dmMenu.style.display = "none";
  noClick.style.display = "none";
  click.style.display = "flex";
  messageName.innerText = recipient.innerText;
  
})

const memberListArea = document.getElementById("memberListArea");

const chatMember = document.getElementsByClassName("chatMember");
const modalNick = document.getElementsByClassName("modalNick");
const recipient = document.getElementById("Recipient");

// 받는 사람에 입력 있을시
const sendPeople = document.getElementById("sendPeople");
sendPeople.addEventListener("input", ()=>{
  
const param = {"memberNickname" : sendPeople.value}

  $.ajax({  
    url: "/dm/selectMember",
    type:"GET",
    dataType:"JSON",
    success : (memberList)=>{

      
      
      for(let member of memberList){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const span = document.createElement("span");
        
        memberListArea.append(li);
        li.classList.add("chatMember")
        li.append(img, span);
        img.classList.add("modalProfile")
        span.classList.add("modalNick")
        
        if(member.memberProfileImg == null){
          img.setAttribute("src", "/resources/images/user.jpg")
        } else{
          img.setAttribute("src", member.memberProfileImg)
        }

        span.innerText = member.memberNickname;

        for(let item of chatMember){
          item.addEventListener("click", e=>{
            const itemName = item.innerText;
            const itemImage = item.getAttribute("src");
          
            recipient.innerText = itemName;
            
          
          })
        

        }




    }
  },
  error: ()=>{
    console.log("실패");
  }

  
    });    
})


const dmOpen = document.getElementById("dmOpen");
dmOpen.addEventListener("click", ()=>{

  dmMenu.style.display = "flex";

})


// dm 메세지 모달 X버튼
const x = document.getElementsByClassName("x")[0];
x.addEventListener("click", ()=>{

  dmMenu.style.display = "none";
})


let selectChattingNo;
let selectTargetNo;

let selectTargetName;
let selectTargetProfile;


let chattingSock;

// if(loginMemberNo != ""){
//   chattingSock = new SockJs("/chattingSock");
// }

document.addEventListener("DOMContentLoaded", ()=>{

  roomListAddEvent();

  // send.addEventListener("click", sendMessage);

  if(tempNo != ""){
    const chattingItemList = document.getElementsByClassName("chatting-item");

    for(let item of chattingItemList){

      const id= item.getAttribute("id");
      const arr = id.split("-");

      if(arr[0] == tempNo){
        item.click();
        break;
      }
    }

  }
})

const dmArea = document.getElementsByClassName("dm-area")[0];

const roomListAddEvent = () =>{
  const chattingItemList = document.getElementsByClassName("chatting-item");

  for(let item of chattingItemList){
    item.addEventListener("click", e =>{

      const id = item.getAttribute("id");
      const arr = id.split("-");

      selectChattingNo = arr[0]
      selectTargetNo = arr[1];
      selectTargetProfile = item.children[0].children[0].getAttribute("src");
      selectTargetName = item.children[1].children[0].children[0].innerText;

      if(item.children[1].children[1].children[1] != undefined){
        item.children[1].children[1].children[1].remove();
      }

      for(let it of chattingItemList) it.classList.remove("select")

      item.classList.add("select")

      selectChattingFn();

    });
  }
}

const selectChattingFn = () =>{

  $.ajax({
    url : "dm/selectMessage",
    data:{"chattingNo" : selectChattingNo, "memberNo" : loginMemberNo},
    dataType : "JSON",
    success : messageList =>{

      const ul = document.querySelector(".dm-area");
      ul.innerHTML = "";

      for(let msg of messageList){
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.classList.add("chat-Date");
        span.innerText = msg.sendTime;

        const p = document.createElement("p");
        p.classList.add("chat");
        p.innerHTML = msg.messageContent;

        if(loginMemberNo == msg.senderNo){
          li.classList.add("my-chat");

          li.append(span, p);

        } else{
          li.classList.add("target-chat");

          const img = document.createElement("img");
          img.setAttribute("src", selectTargetProfile);

          const div = document.createElement("div");
          
          const b = document.createElement("b");
          b.innerText = selectTargetName;

          const br = document.createElement("br");

          div.append(b,br,p,span);
          li.append(img,div);
        }
        ul.append(li);
        display.scrollTop = display.scrollHeight;
      }

    },
      error : () => {
        console.log(object);}
  })
}



