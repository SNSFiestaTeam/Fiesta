const imgContainer = document.getElementById('imgContainer');
let lastChild;
let cp = 2;

window.addEventListener("load", (event) => {
  lastChild = imgContainer.lastElementChild;

  createObserver();
}, false)


// ! 무한 스크롤 용 객체 생성
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  observer = new IntersectionObserver(selectPopularFeedList, options);
  observer.observe(lastChild);
}

const selectPopularFeedList = (entries, observer) => { 
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $.ajax({
        url: "/PopularFeed/List",
        data: { "cp": cp },
        dataType: "json",
        success: (map) => {

          if (map != null) {

            const pagination = map.pagination;
            const boardList = map.boardList;

            if (cp <= pagination.maxPage) {

              printPopularFeed(boardList);
            
              lastChild = document.getElementById('imgContainer').lastElementChild;
              createObserver();
              cp++;
              console.log("cp :" + cp);
            }

            console.log(lastChild);
          } else {
            console.log("결과 없음");
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  });
};

const printPopularFeed = (boardList) => {


  for (let board of boardList) { 
    const a = document.createElement('a');
    a.href = "/feed/" + board.memberNickname;

    const img = document.createElement('img');
    img.className = "feed-img";

    if (board.imgPath != undefined) {
      img.src = board.imgPath;
    } else {
      img.src = "/resources/images/default/defaultImg.png";
    }

    const div = document.createElement('div');
    div.className = "hover-icon-container";

    const heartIcon = document.createElement('i');
    heartIcon.classList.add("fa-regular", "fa-heart");

    const span = document.createElement('span');
    span.innerText = board.likeCount;
    
    const commentIcon = document.createElement('i');
    commentIcon.classList.add("fa-regular", "fa-comment");
    
    const span2 = document.createElement('span');
    span.innerText = board.commentCount;

    imgContainer.append(a);
    a.append(img, div);

    div.append(heartIcon, commentIcon);

    heartIcon.append(span);
    commentIcon.append(span2);
  }

}