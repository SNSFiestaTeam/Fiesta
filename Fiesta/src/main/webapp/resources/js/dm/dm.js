const down = document.getElementsByClassName("down")[0];
const right = document.getElementById("right")
const up = document.getElementById("up");
const noClick = document.getElementById("no-click");
const click = document.getElementById("click");
const message = document.getElementById("dm-message");
const dmMenu = document.getElementsByClassName("feed-menu-container")[0];
const sendMessage = document.getElementById("sendMessage");

document.addEventListener("DOMContentLoaded", ()=>{

    dmMenu.style.display = "none";
    click.style.display = "none";

    right.style.justifyContent = "center";

});

sendMessage.addEventListener("click", ()=>{

    dmMenu.style.display = "block";

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


const next = document.getElementById("next");

// 다음 클릭
next.addEventListener("click", ()=>{
  dmMenu.style.display = "none";
  noClick.style.display = "none";
  click.style.display = "flex";
  
})



// 받는 사람에 입력 있을시
const sendPeople = document.getElementById("sendPeople");
sendPeople.addEventListener("input", ()=>{

  $.ajax({
    url: "",
    data : {"input": inputValue},
    success : (memberList)=>{

      console.log(memberList);
      
    }


  });

})








