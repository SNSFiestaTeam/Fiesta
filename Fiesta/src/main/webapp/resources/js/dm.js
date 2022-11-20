const down = document.getElementsByClassName("down")[0];
const chat = document.getElementsById("chat");
const right = document.getElementById("right")
const up = document.getElementById("up");
const noClick = document.getElementById("no-click");
const click = document.getElementById("click");


document.getElementById("click").style.display = "none";
noClick.style.display = "flex";

function send(){

    click.style.display = "flex";
    noClick.style.display = "none";
}


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

