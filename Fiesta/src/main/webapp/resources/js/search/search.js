// 검색창이라, 모든 페이지 아래에 들어가니, 아이디,클래스명 등 겹치지 않게 주의!
// 요소 생성 - 조립
// ajax 연결
                // append(요소) : 마지막 자식으로 추가
                // prepend(요소) : 첫 번째 자식으로 추가
                // after(요소) : 다음(이후)에 추가
                // before(요소) : 이전에 추가

                // 요소.setAttribute("속성명", "속성값")
                // 요소.removeAttribute("속성명")
// 검색창 주소
    // location : 주소, 주소창과 관련된 내장 객체
    // location.href : 현재 주소(전체)  
    // location.href = "주소" : 작성된 주소 요청  _주소로 이동함
    // location.pathname = 현재 요청 주소만을 반환(프로토콜, ip, 포트 제외)  ex)/board/1
    // location.search : 쿼리스트링만 반환  ex) ?cp=2


// * 검색창에 검색 키워드 남겨놓기
const searchInput = document.getElementById("searchInput");
//const params = new URL(location.href).searchParams;  // 주소에서 쿼리스트링만 분리한 객체
//const keyword = params.get("query");  -> 안 받아와짐..

// location.search : ?searchInput=%ED%94%BC%EC%97%90%EC%8A%A4%ED%83%80
// '=' 뒤에 인코딩된 주소 디코딩하기(decodeURI)
const keyword = decodeURI((location.search).substring(13));     //lastindexOf("=") 이거 왜 안 먹히지?

(()=>{
    console.log(keyword);
    searchInput.value = keyword;
    searchInput.style.color = 'lightgray';


    searchInput.addEventListener("focus", () => {
        searchInput.value = "";
        searchInput.style.color = 'black';
    });

})();





// * 최근 게시글 불러오기(무한스크롤)

// 무한스크롤용 객체생성
const boardResult = document.querySelector('.boardResult');
let recentBoardEnd = boardResult.lastElementChild;



// html요소 등장하면 이 안에 코드 실행해줌
// selectRecentList : 최근 게시글 불러오는 함수
// 최근 게시글을 ajax를 이용해서 불러오고 성공하면 요소 생성
const observer = new IntersectionObserver(selectRecentList); 
observer.observe(recentBoardEnd);  // recentBoardEnd가 화면에 등장하는지 감시

// let div = document.querySelector('boardImage');
// const obeserver = new IntersectionObserver(selectRecentList, option);  //html요소 등장하면 이 안에 코드 실행해줌
// observer.observe(div[7]);  // html 요소 감시. html 요소가 화면에 등장하는지 사라지는지 감시.
// observer.observe(div[8]);
// observer.observe(div[9]);


// 현재 페이지 번호 변수 선언
let cp = 2;



// 최근 게시글 목록 화면 출력(페이지네이션, 무한스크롤)
function selectRecentList(){

    $.ajax({
        url: '/selectRecentList',
        type: 'GET',
        data: {searchInput : searchInput.value, cp : cp},
        dataType: 'json',
        success: (recentResultMap) => {
            const recentBoardList = recentResultMap.recentBoardList;
            const pagination = recentResultMap.pagination;
            cp++;

            
            // for(let recentItem of recentBoardList){
            //     createRecentBoard(recentItem);
            //     console.log(cp);
            // }
        },
        error: () => {
            console.log("최근 게시글 조회 중 오류 발생");
        }
    })
}



(()=>{
    console.log("확인중");
    console.log(cp);
    createRecentBoard();

})()


// 최근 게시글 화면 출력용 함수 (boardResult클래스 게시글 9개 기준)
function createRecentBoard(recentItem){

    for(let n=0 ; n<3 ; n++){  // 3번 반복해서 총 9개 반환

    //   for(let i=0; i<3 ; i++){
            // if(recentBoardList.length > (3*i)){ // 0, 3, 6, 9, 12, 15, 18
            if(recentBoardList.length > 9){ 

                const divBoardImage = document.createElement('div');
                divBoardImage.classList.add("boardImage");

                boardResult.append(divBoardImage);

                // for(let i=(3*i); i<(3*i +2); i++){
                for(let i=9; i<11; i++){
                    const aBoardImage = document.createElement('a');
                    aBoardImage.classList.add("aBoardImage");
                    aBoardImage.setAttribute('href', '#')

                    const imgBoardImage = document.createElement('img');
                    imgBoardImage.classList.add("b-img");
                    imgBoardImage.setAttribute('src', recentItem.imgPath);

            
                    const divHoverIcon = document.createElement('div');
                    divHoverIcon.classList.add("hover-icon-container");

                    const iHover1 = document.createElement('i');
                    iHover1.classList.add('fa-regular', 'fa-heart', 'iHover');
                    
                    const spanHover1 = document.createElement('span');
                    spanHover1.classList.add('spanHover');
                    spanHover1.innerText = recentItem.likeCount;

                    const iHover2 = document.createElement('i');
                    iHover2.classList.add('fa-regular', 'fa-heart', 'iHover');
                    
                    const spanHover2 = document.createElement('span');
                    spanHover2.classList.add('spanHover');
                    spanHover2.innerText = recentItem.CommentCount;

                    divBoardImage.append(aBoardImage, imgBoardImage);
                    imgBoardImage.after(divHoverIcon);
                    divHoverIcon.append(iHover1, spanHover1, iHover2, spanHover2);
                }
            }  
        // }
    }
  
}





















        










