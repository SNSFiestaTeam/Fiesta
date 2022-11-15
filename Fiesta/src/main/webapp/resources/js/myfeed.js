const followBtn = document.getElementById("follow-btn");
const followContainer = document.getElementById("follow-container");
const scrollrock = document.getElementById("scrollrock")
const followingBtn = document.getElementById("following-btn");
const followingContainer = document.getElementById("following-container");

followBtn.addEventListener("click", function(){
    followContainer.style.display ="flex";
    scrollrock.style.overflow = "hidden";
});

followingBtn.addEventListener("click", function(){
    followingContainer.style.display = "flex";
    scrollrock.style.overflow = "hidden";
})

const followClose = document.getElementById("follow-close")
followClose.addEventListener("click", function(){
    followContainer.style.display ="none";
    scrollrock.style.overflow = "visible";
})

const followingClose = document.getElementById("following-close")
followingClose.addEventListener("click", function(){
    followingContainer.style.display ="none";
    scrollrock.style.overflow = "visible";
})
