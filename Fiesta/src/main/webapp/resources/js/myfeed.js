const followBtn = document.getElementById("follow-btn");
const followContainer = document.getElementById("follow-container");

followBtn.addEventListener("click", function(){
    followContainer.style.display ="flex";
    
});

const followingBtn = document.getElementById("following-btn");
const followingContainer = document.getElementById("following-container");

followingBtn.addEventListener("click", function(){
    followingContainer.style.display = "flex";
})

const followClose = document.getElementById("follow-close")
followClose.addEventListener("click", function(){
    followContainer.style.display ="none";
})

const followingClose = document.getElementById("following-close")
followingClose.addEventListener("click", function(){
    followingContainer.style.display ="none";
})