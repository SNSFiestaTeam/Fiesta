const down = document.getElementsByClassName("down")[0];
const chat = document.getElementsById("chat");
const right = document.getElementById("right")



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

