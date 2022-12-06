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


const proImg = document.getElementById("proImg")
const nextBtn = document.getElementById("nextBtn");
const messageName = document.getElementById("messageName");

// 다음 클릭
next.addEventListener("click", ()=>{
  dmMenu.style.display = "none";
  noClick.style.display = "none";
  click.style.display = "flex";
  messageName.innerText = recipient.innerText;

  $.ajax({
    url: "/dm/number",
    data : {"memberNickname" : RecipientMemberNick},
    success : (result) =>{
      
      const RecipeintMemberNo = result;
    }

  })
  
})

const memberListArea = document.getElementById("memberListArea");


const modalNick = document.getElementsByClassName("modalNick");
const recipient = document.getElementById("Recipient");

// 받는 사람에 입력 있을시
const sendPeople = document.getElementById("sendPeople");
sendPeople.addEventListener("input", ()=>{
  
  $.ajax({  
    url: "/dm/selectMember",
    data: {"memberNickname": sendPeople.value},
    type:"GET",
    dataType:"JSON",
    success : (memberList)=>{
      memberListArea.innerHTML = "";
      
      
      for(let member of memberList){
        const li = document.createElement("li");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const targetNoInput = document.createElement("input");


        memberListArea.append(li);
        li.classList.add("chatMember")
<<<<<<< HEAD
        li.append(input,img, span, targetNoInput);
=======
        li.append(img, span);
>>>>>>> parent of a098d22 (Merge pull request #194 from SNSFiestaTeam/setting)
        img.classList.add("modalProfile")
        span.classList.add("modalNick")
        targetNoInput.setAttribute('type', 'hidden');
        targetNoInput.value = member.memberNo;
        
        if(member.memberProfileImg == null){
          img.setAttribute("src", "/resources/images/user.jpg")
        } else{
          img.setAttribute("src", member.memberProfileImg)
        }

        span.innerText = member.memberNickname;

<<<<<<< HEAD

        li.addEventListener("click", e => {


          targetNo = member.memberNo;

          recipient.innerText = "";  
          recipient.innerText = member.memberNickname;  
          sendPeople.value = '';
          

          // $.ajax({
          //   url : "/dm/enter",
          //   data : {"targetNo" : item.children[0].value},
          //   dataType:"JSON",
          //   success : ()=>{
          //     console.log("성공");
          //   }
  
          // });

        })

          
=======
        for(let item of chatMember){
          item.addEventListener("click", e=>{
            const itemName = item.innerText;
            const itemImage = item.getAttribute("src");
          
            const sendPeople = document.getElementById('sendPeople');
            sendPeople.value = '';
            recipient.innerText = itemName;  
          
          })

        }

>>>>>>> parent of a098d22 (Merge pull request #194 from SNSFiestaTeam/setting)
      }
    },
    error: ()=>{
      console.log("실패");
    }
<<<<<<< HEAD
  }); 
})





// 다음 클릭
nextBtn.addEventListener("click", () => {
  
  $.ajax({
    url: "/dm/enter",
    data: { "targetNo": targetNo },
    dataType: "json",
    success: (map) => {
      console.log(map);

      const messageList = map.messageList;

      // 전역변수 targetNo에 타겟넘버 저장
      targetNo = map.targetNo;
      chattingNo = map.chattingNo;

      if (messageList.length > 0) {


        // 메세지가 존재하면 화면에 출력
        for (let message of messageList) {

          // 메세지 출력구문


          
        }
      }

    },
    error: () => {
      console.log("채팅방 입장에러");
    }
    
  })


  dmMenu.style.display = "none";
  noClick.style.display = "none";
  click.style.display = "flex";
  messageName.innerText = recipient.innerText;

  const RecipientMemberNick = recipient.innerText;
=======
>>>>>>> parent of a098d22 (Merge pull request #194 from SNSFiestaTeam/setting)

  
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

if(loginMemberNo != ""){
	chattingSock = new SockJS("/chattingSock");
}

document.addEventListener("DOMContentLoaded", ()=>{

  roomListAddEvent();

  //  send.addEventListener("click", sendMessage);

  if(tempNo != ""){
    const chattingItemList = document.getElementsByClassName("dm-item");

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
  const chattingItemList = document.getElementsByClassName("dm-item");

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
    data:{"chattingNo" : selectChattingNo},
    dataType : "JSON",
    success : (messageList) =>{

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

const selectRoomList = () =>{
  $.ajax({
    url : "/dm/roomList",
    data : {"memberNo" : loginMemberNo},
    dataType : "JSON",
    success : roomList =>{

      const chattingList = document.querySelector(".dm-list");

      chattingList.innerHTML = "";

      for(let room of roomList){
        const li = document.createElement("li");
        li.classList.add("dm-item");
        li.setAttribute("id", room.chattingNo + "-" + room.targetNo);

        if(room.chattingNo == selectChattingNo){
          li.classList.add("select");
        }

        const itemHeader = document.createElement("div");
        itemHeader.classList.add("item-header");

        const listProfile = document.createElement("img");
        listProfile.classList.add("list-profile");

        if(room.targetProfile == undefined){
          listProfile.setAttribute("src", "/resources/images/user.jpg");
        } else{
          listProfile.setAttribute("src", room.targetProfile);
        }

        itemHeader.append(listProfile);

        const itemBody = document.createElement("div");
        itemBody.classList.add("item-body");

        const p = document.createElement("p");

        const targetName = document.createElement("span");
        targetName.classList.add("target-name");
        targetName.innerText = room.targetNickName;

        const recentSendTime = document.createElement("span");
        recentSendTime.classList.add("recent-send-time");
        recentSendTime.innerText = roon.sendDate;

        p.append(targetName, recentSendTime);

        const div = document.createElement("div");

        const recentMessage = document.createElement("p");
        recentMessage.classList.add("recent-message");

        if(room.lastMessage != undefined){
          recentMessage.innerHTML = room.lastMessage;
        }

        div.append(recentMessage);
        
        itemBody.append(p, div);


        if(room.notReadCount > 0 && room.chattingNo != selectChattingNo){

          const notReadCount = document.createElement("p");
          notReadCount.classList.add("not-read-count");
          notReadCount.innerText = room.notReadCount;
          div.append(notReadCount);
        } else{
          $.ajax({
            url : "/dm/updateReadFlag",
            data : {"chattingNo" : selectChattingNo, "memberNo" : loginMemberNo},
            success : result => {
              console.log("성공");
            },
            error : () => {
              console.log("실패");
            }
          })
        }

        li.append(itemHeader, itemBody);
        chattingList.append(li);

      }
      roomListAddEvent();
    }
  })

}


const sendMessage = () =>{
  const chattingInput = document.getElementById("chattingInput");
  console.log(selectTargetNo);
  if(chattingInput.value.trim().length == 0){
    chattingInput.value = "";
  } else{
    var obj = {
      "senderNo": loginMemberNo,
      "targetNo" : targetNo,
      "chattingNo" : chattingNo,
      "messageContent" : chattingInput.value,
    };
    chattingSock.send(JSON.stringify(obj));

    chattingInput.value = "";
  }
}

chattingInput.addEventListener("keyup", e=>{
  if(e.key == "Enter"){
    if(!e.shiftKey){
      sendMessage();
    }
  }
})


chattingSock.onmessage = function(e){
  const msg = JSON.parse(e.data);

  if(selectChattingNo == msg.chattingNo){
    const ul = document.querySelector(".dm-area");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add("chatDate");
    span.innerText = msg.sendDate;

    const p = document.createElement("p");
    p.classList.add("chat");
    p.innerHTML = msg.messageContent;

    if(loginMemberNo == msg.senderNo){
      li.classList.add("my-chat");

      li.append(span, p);
    } else {
    li.classList.add("target-chat");

    const img = document.createElement("img");
    img.setAttribute("src", selectTargetProfile);

    const div = document.createElement("div");

    const b = document.createElement("b");
    b.innerText = selectTargetName;

    const br = document.createElement("br");

    div.append(b, br, p, span);
    li.append(img, div);
  }  
  ul.append(li);
  dmArea.scrollTop = dmArea.scrollHeight;
  }
 selectRoomList();
}


const openNo = () => {

  $.ajax({
    url : "/dm/openNo",
    data: {"memberNickname" : RecipientMemberNick},
    success : () => {
      console.log("성공");
    }
  })

}
