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



//---------------------------------------------------------------------------------

// * 상세조회


/*
const aBoardImage = document.getElementsByClassName("aBoardImage");

for(i=0; i<aBoardImage.length; i++){
    const inputBoardNo = aBoardImage[i].firstElementChild.nextElementSibling.nextElementSibling;
    
    aBoardImage[i].addEventListener("click", () => {
    
        $.ajax({
            url: "/search/boardDetail",
            data: {"boardNo" : inputBoardNo.value},
            dataType: "json",
            success: (boardResult) =>{
                console.log(boardResult.memberNickname);

                let commentUl;
                
                // 작성자 프로필
                const writerInfoDiv = document.getElementById("writerInfoDiv");
              
                const profilePhotoA = document.createElement('a');
                profilePhotoA.classList.add('profile-photo');
                profilePhotoA.setAttribute('href', '/feed/' + boardResult.memberNickname);

                
                const feedProfileImage = document.getElementById("feedProfileImage");
                feedProfileImage.classList.add("feed-profile-image");
                
                
                if(boardResult.feedProfileImage == undefined){  
                    feedProfileImage.setAttribute("src", "/resources/images/profile/profile.jpg"); 
                } else {
                    feedProfileImage.setAttribute("src", boardResult.memberProfileImage);
                }
                
               


                const memberIdA = document.createElement('a');
                memberIdA.classList.add('feed-memberId');
                memberIdA.setAttribute('href', '/feed/' + boardResult.memberNickname);
              
                memberIdA.innerText = boardResult.memberNickname;;

                profilePhotoA.append(feedProfileImage);
                writerInfoDiv.prepend(profilePhotoA, memberIdA);


                // 사진 목록
                const imageUl = document.getElementById("imageUl")

                if(boardResult.imageList.length > 0){
                    for(let image of boardResult.imageList){
                        const imageLi = document.createElement("li");
                        imageLi.classList.add('swiper-slide');

                        const uploadedImage = document.createElement("img");
                        uploadedImage.setAttribute('src', image.imgAddress + image.imgChangeName);
                        uploadedImage.setAttribute('alt', image.imgAccessibility);

                        imageLi.append(uploadedImage);
                        imageUl.append(imageLi);
                    }
                } else {
                    const imageLi = document.createElement("li");
                    imageLi.classList.add('swiper-slide');

                    const uploadedImage = document.createElement("img");
                    uploadedImage.classList.add("uploaded-image");
                    uploadedImage.setAttribute('src', 'resources/images/default/defaultImg.png');  //! 이영지 사진 물어보기
                
                    uploadedImage.classList.add("uploaded-image");
                    imageLi.append(uploadedImage);
                    imageUl.appendChild(imageLi);
                }


                // ! ----------------------------------------------------------------------------------------------
                // ! swiper 슬라이드 초기화!!!!
                var swiper = new Swiper('.mySwiper', {
                    speed: 1000,
                    // cssMode: true,

                    // 반복
                    loop: false,
                    // 반복 시 이미지 계속 넘어갈 수 있게
                    // loopAdditionalSlides: 1,

                    // 해당 슬라이드 클릭 시 슬라이드 위치로 이동
                    slideToClickedSlide: true,

                    // 슬라이드 터치에 대한 저항 여부
                    resistance: false,

                    // 슬라이드가 1개일 때 pager, button 숨김 여부
                    watchOverflow: true,

                    grabCursor: false,

                    spaceBetween: 30,
                    hashNavigation: {
                    watchState: true,
                    },

                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    },
                    mousewheel: true,
                    keyboard: true,
                });
                // ! 스와이퍼 슬라이드 초기화 끝
                // ! ----------------------------------------------------------------------------------------------
                


                // 본문
                // 좋아요 버튼
                const likeBtn = document.createElement('button');
                likeBtn.id = 'likeBtn';
                likeBtn.classList.add('like-btn');

                const heartIcon = document.createElement('i');

                if (boardResult.likeCheck == 1) {
                  heartIcon.classList.add('fa-solid', 'fa-heart');
                  likeBtn.classList.add("red");
                }
              
                if (boardResult.likeCheck == 0) {
                  heartIcon.classList.add('fa-regular', 'fa-heart');
                }    



                // 좋아요 버튼에 이벤트리스너 생성
                likeBtn.addEventListener('click', function () {
                    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
                    const solidHeart = '<i class="fa-solid fa-heart"></i>';

                    if (!likeBtn.classList.contains('red')) {
                    $.ajax({
                        url: '/boardLikeUp',
                        data: { "boardNo": boardResult.boardNo, "memberNo": memberNo },
                        success: (result) => {

                            likeBtn.innerHTML = '';
                            likeBtn.innerHTML = solidHeart;
                            likeBtn.classList.add('red');


                            
                            if(boardResult.boardPubPriFlag == 'Y') {
                            likeCount.innerHTML = '좋아요 ' + result + '개';

                            } 
                
                            if(boardResult.boardPubPriFlag == 'N') {
                            if(result == 0) {
                                likeCount.innerText = "좋아요를 눌러주세요";
                            } else if(result == 1) {
                                likeCount.innerText = "한 명이 좋아합니다";     
                            } else {
                                likeCount.innerText = "여러 명이 좋아합니다";     
                            }
                            }

                        },
                    });
                    } else {
                    $.ajax({
                        url: '/boardLikeDown',
                        data: { "boardNo": boardResult.boardNo, "memberNo": memberNo },
                        success: (result) => {

                        likeBtn.innerHTML = emptyHeart;
                        likeBtn.classList.remove('red');

                        if(boardResult.boardPubPriFlag == 'Y') {
                            likeCount.innerHTML = '좋아요 ' + result + '개';

                        } 

                        if(boardResult.boardPubPriFlag == 'N') {
                            if(result == 0) {
                            likeCount.innerText = "좋아요를 눌러주세요";
                            } else if(result == 1) {
                            likeCount.innerText = "한 명이 좋아합니다";     
                            } else {
                            likeCount.innerText = "여러 명이 좋아합니다";     
                            }
                        }
                        
                        },
                    });
                    }
                });

                likeBtn.append(heartIcon);

                // 북마크
                const bookmarkBtn = document.createElement('button');
                bookmarkBtn.id = 'bookmarkBtn';
                bookmarkBtn.classList.add('bookmark-btn');

                const bookmarkIcon = document.createElement('i');

                if (boardResult.bookmarkCheck == 0) {
                    bookmarkIcon.classList.add('fa-regular', 'fa-bookmark');
                }

                if (boardResult.bookmarkCheck == 1) {
                    bookmarkIcon.classList.add('fa-solid', 'fa-bookmark');
                }
                
                // 북마크 버튼 클릭 시 이벤트 추가
                bookmarkBtn.addEventListener('click', () => {
                    const emptyIcon = '<i class="fa-regular fa-bookmark"></i>';
                    const solidIcon = '<i class="fa-solid fa-bookmark"></i>';

                    if (bookmarkBtn.innerHTML == emptyIcon) {
                    $.ajax({
                        url: '/boardBookmarkOn',
                        data: { "boardNo": boardResult.boardNo, "memberNo": memberNo },
                        success: (result) => {
                        if (result > 0) {
                            bookmarkBtn.innerHTML = solidIcon;
                        } else {
                            console.log('북마크 실패');
                        }
                        },
                        error: () => {
                        console.log('북마크 추가 중 오류 발생');
                        },
                    });
                    } else {
                    $.ajax({
                        url: '/boardBookmarkOff',
                        data: { "boardNo": boardResult.boardNo, memberNo: memberNo },
                        success: (result) => {
                        if (result > 0) {
                            bookmarkBtn.innerHTML = emptyIcon;
                        } else {
                            console.log('북마크 취소 실패');
                        }
                        },
                        error: () => {
                        console.log('북마크 취소 중 오류 발생');
                        },
                    });
                    }
                });

                bookmarkBtn.append(bookmarkIcon);

                const buttonArea = document.getElementById("buttonArea");
                buttonArea.prepend(likeBtn);
                buttonArea.nextElementSibling.append(bookmarkBtn);

                // 댓글 버튼
                const commentBtn = document.getElementById("commentBtn");

                // 댓글 버튼 클릭 시 댓글 입력창 포커스
                const commentInput = document.getElementById("commentInput");
                commentBtn.addEventListener('click', () => {
                    commentInput.focus();
                });


                const dmBtn = document.getElementById("dmBtn");

                // DM 버튼 클릭 시 DM 모달창 열림
                dmBtn.addEventListener('click', () => {
                    const dmContainer = document.getElementById('dmContainer');
                    dmContainer.style.display = 'flex';
                    dmContainer.classList.add('scrollrock');
                });

                // 좋아요 수 표시
                const likeCount = document.getElementById("likeCount");
                const boardLikeCount = document.getElementById("boardLikeCount");
                
                if(boardResult.boardPubPriFlag == 'Y'){
                    boardLikeCount.innerText = boardResult.likeCount;
                } 
                if(boardResult.boardPubPriFlag == 'N'){
                    if(boardResult.likeCount == 0){
                        likeCount.innerText = '좋아요를 눌러주세요';
                    }
                    if(boardResult.likeCount == 1){
                        likeCount.innerText = '한 명이 좋아합니다.';
                    }
                    if(boardResult.likeCount > 1){
                        likeCount.innerText = '여러명이 좋아합니다.';
                    }
                }


                // 본문 내용
                const aMemberNickname = document.getElementById("aMemberNickname");
                aMemberNickname.setAttribute('href', '/feed/' + boardResult.memberNickname);

                const spanMemberId = document.getElementById("spanMemberId");
                spanMemberId.innerText = boardResult.memberNickname;

                const boardContent = document.getElementById("boardContent");
                boardContent.innerText = boardResult.boardContent;

                const moreBtn = document.createElement('button');
                moreBtn.setAttribute('type', 'button');
                moreBtn.classList.add('more-btn');

                
                const feedContentDiv = document.getElementById("feedContentDiv");
                moreBtn.addEventListener('click', function () {
                    if (feedContentDiv.classList.contains('one-line')) {
                        feedContentDiv.classList.remove('one-line');
                        moreBtn.classList.add('hide');
                    }
                });
                
                const moreSpan = document.createElement('span');
                moreSpan.classList.add("member-id");
                moreSpan.id = 'textMore';
                moreSpan.innerText = '더 보기';
                
                moreBtn.append(moreSpan);
                

                const feedMainContentDiv = document.getElementById("feedMainContentDiv");
                feedMainContentDiv.classList.add("feed-main-content");

                feedMainContentDiv.append(feedContentDiv);
                
                if(boardResult.boardContent.length > 20){
                    feedMainContentDiv.append(moreBtn);
                }



                // 댓글
                const commentContainer = document.getElementById("commentContainer");

                if(boardResult.commentBlockFlag == 'N'){
                    
                    const allCommentBtn = document.createElement('button');


                        // commentContainer의 자식 요소 commentArea
                        const commentArea = document.createElement('div');
                        commentArea.classList.add('comment-area');

                        commentContainer.append(commentArea);

                        // commentArea의 자식 요소 commentUl
                        const commentUl = document.createElement('ul');
                        commentUl.classList.add('comment-list', 'two-line');

                        commentArea.append(commentUl);

                        // TODO: 댓글 출력
                        // TODO: 댓글 2개 이하일 시 2개만 출럭 더보기 버튼X
                        // TODO: 댓글 3개 이상일 시 2개만 출력 더보기 버튼 O
                        // TODO: 더보기 버튼 클릭 시 모든 댓글 조회하는 모달창 출력

                        // ! 댓글, 대댓글 나눠서 출력하기

                        // TODO: 대댓글 Default 숨기기
                        // TODO: 대댓글 모두보기 버튼 클릭하면 모두 보기
                        for (let comment of boardResult.commentList) {
                            if (comment.upperCommentNo == 0) {

                            // commentUl의 자식 요소 commentLi
                            commentLi = document.createElement('li');
                            commentLi.classList.add('comment');
                            commentUl.append(commentLi);

                            // commentNo input hidden 태그 생성
                            const commentNoInput = document.createElement("input");
                            commentNoInput.setAttribute("type", 'hidden');
                            commentNoInput.value=comment.commentNo;
                            commentNoInput.classList.add("comment-no");


                            // commentLi의 자식요소 commentFirstChild, moreReply
                            const commentFirstChild = document.createElement('div');
                            commentFirstChild.classList.add('comment-firstchild');

                            commentLi.append(commentNoInput, commentFirstChild);

                            // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
                            const commentProfileA = document.createElement('a');
                            commentProfileA.classList.add('comment-profile');
                            commentProfileA.href = '/feed/' + comment.memberNickname;

                            const commentDiv1 = document.createElement('div');

                            commentFirstChild.append(commentProfileA, commentDiv1);

                            // commentProfileA의 자식 요소 commentProfileImg
                            const commentProfileImg = document.createElement('img');
                            commentProfileImg.classList.add('comment-profile-image');

                            commentProfileA.append(commentProfileImg);

                            if (comment.memberProfileImg != undefined) {
                                commentProfileImg.setAttribute('src', comment.memberProfileImg);
                            } else {
                                commentProfileImg.setAttribute(
                                'src',
                                '/resources/images/profile/profile.jpg'
                                );
                            }

                            // commentDiv1의 자식 요소 commentFirstLine
                            const commentFirstLine = document.createElement('div');
                            commentFirstLine.classList.add('comment-firstline');

                            // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
                            const commentDiv2 = document.createElement('div');
                            commentDiv2.classList.add('comment-id-content');
                            const commentDiv3 = document.createElement('div');

                            commentFirstLine.append(commentDiv2, commentDiv3);

                            // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
                            const commentMemberIdA = document.createElement('a');
                            commentMemberIdA.classList.add('comment-memberId');
                            commentMemberIdA.href = '/feed/' + comment.memberNickname;
                            commentMemberIdA.innerText = comment.memberNickname;

                            const commentSpan = document.createElement('span');
                            commentSpan.classList.add('comment-content');
                            commentSpan.innerText = comment.commentContent;

                            commentDiv2.append(commentMemberIdA, commentSpan);

                            // commentDiv3의 자식 요소 commentLikeBtn
                            const commentLikeBtn = document.createElement('button');
                            commentLikeBtn.classList.add('comment-like-btn');

                            // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
                            commentLikeBtn.addEventListener('click', function () {
                                const emptyHeart = '<i class="fa-regular fa-heart"></i>';
                                const solidHeart = '<i class="fa-solid fa-heart"></i>';

                                // 댓글 좋아요 안한 상태일 때
                                if (!commentLikeBtn.classList.contains('red')) {
                                // 좋아요 DB에 추가
                                $.ajax({
                                    url: '/comment/likeUp',
                                    data: { commentNo: comment.commentNo, memberNo: memberNo },
                                    success: (result) => {
                                    if (result > 0) {
                                        commentLikeBtn.innerHTML = '';
                                        commentLikeBtn.innerHTML = solidHeart;
                                        commentLikeBtn.classList.add('red');
                                    } else {
                                        console.log('댓글 좋아요 증가 안됨');
                                    }
                                    },
                                    error: () => {
                                    console.log('댓글 좋아요 증가 실패');
                                    },
                                });
                                } else {
                                // 댓글에 좋아요 돼있을 때

                                // 댓글 좋아요 DB에서 삭제
                                $.ajax({
                                    url: '/comment/likeDown',
                                    data: { commentNo: comment.commentNo, memberNo: memberNo },
                                    success: (result) => {
                                    if (result > 0) {
                                        commentLikeBtn.innerHTML = emptyHeart;
                                        commentLikeBtn.classList.remove('red');
                                    } else {
                                        console.log('댓글 좋아요 취소 안됨');
                                    }
                                    },
                                    error: () => {
                                    console.log('댓글 좋아요 취소 실패');
                                    },
                                });
                                }
                            });

                            // commentLikeBtn의 자식 요소 commentHeartIcon
                            const commentHeartIcon = document.createElement('i');
                            if (comment.commentLikeCheck == 0) {
                                commentHeartIcon.classList.add('fa-regular', 'fa-heart');
                            }
                            if (comment.commentLikeCheck == 1) {
                                commentHeartIcon.classList.add('fa-solid', 'fa-heart');
                                commentLikeBtn.classList.add('red')

                            }

                            commentLikeBtn.append(commentHeartIcon);

                            commentDiv3.append(commentLikeBtn);

                            // commentDiv1의 자식 요소 createReply
                            const createReply = document.createElement('div');
                            createReply.classList.add('create-reply');

                            commentDiv1.append(commentFirstLine, createReply);

                            // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
                            const commentCreateDate = document.createElement('span');
                            commentCreateDate.innerText = comment.commentCreateDate;

                            const replyBtn = document.createElement('button');
                            replyBtn.setAttribute('type', 'button');
                            replyBtn.classList.add('reply-btn');
                            replyBtn.innerText = '답글 달기';

                            // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
                            // 만약 이미 언급된 닉네임일 시 추가 안됨
                            // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
                            replyBtn.addEventListener('click', () => {
                                const commentInput =
                                commentUl.parentElement.parentElement.parentElement
                                    .nextElementSibling.firstElementChild.firstElementChild;
                                commentInput.value = '';
                                commentInput.value = '@' + commentMemberIdA.innerText + ' ';
                                commentInput.focus();

                                upperCommentNo = commentNoInput.value;
                                console.log("upperCommentNo: " + upperCommentNo);
                            });

                            const hoverBtn = document.createElement('button');
                            hoverBtn.setAttribute('type', 'button');
                            hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

                            // 댓글 ... 버튼에 클릭 이벤트 추가
                            hoverBtn.addEventListener('click', function () {
                                const commentMenu = document.getElementById('commentMenu');
                                const loginCommentMenu = document.getElementById('commentMenuL');
                                const body = document.getElementsByTagName('body')[0];

                                console.log(commentMemberIdA.innerText);
                                console.log(memberNickname);

                                deleteCommentNo = comment.commentNo;
                                deleteBoardNo = comment.boardNo;
                                deleteCommentUl = commentUl;

                                console.log("deleteCommentNo: " + deleteCommentNo);
                                console.log("deleteBoardNo: " + deleteBoardNo);
                                console.log("deleteCommentUl: " + deleteCommentUl);

                                if (commentMemberIdA.innerText == memberNickname) {
                                // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
                                loginCommentMenu.style.display = 'flex';
                                } else {
                                commentMenu.style.display = 'flex';
                                }

                                body.classList.add('scrollLock');
                            });

                            createReply.append(commentCreateDate, replyBtn, hoverBtn);

                            // 답글이 있으면 버튼 생성
                            if (comment.replyCount > 0) {
                                const commentNo = comment.commentNo;
                                const moreReply = document.createElement('span');
                                moreReply.classList.add('more-reply');
                                // FIXME: 경로 설정하기
                                moreReply.innerText = '모든 답글 보기(' + comment.replyCount + ')';
                                commentLi.append(moreReply);

                                // 모든 답글 보기 버튼에 클릭 이벤트 추가
                                moreReply.addEventListener('click', () => {
                                moreReply.style.display = 'none';

                                selectReplyList(commentNo, commentLi);
                                });

                            }


                             // 댓글 입력창 추가
                            const postingBtn = document.getElementById("postingBtn");
                            

                        }
                    }
                }
                
                document.querySelector(".board-no").value = boardResult.boardNo;
                document.querySelector(".comment-block-fl").value = boardResult.commentBlockFlag;
                document.querySelector(".board-pub-pri-fl").value = boardResult.boardPubPriFlag;


                document.getElementById("feedBackground").style.display="flex";
                document.querySelector("body").classList.add("scrollLock");


                // 댓글 입력창에 입력 이벤트 추가
                commentInput.addEventListener('input', () => {
                    if (commentInput.value.trim().length == 0) {
                    postingBtn.setAttribute('disabled', true);
                    return;
                    } else {
                    postingBtn.removeAttribute('disabled');
                    return;
                    }
                });
                
                // postingBtn에 게시 클릭 이벤트 추가
                postingBtn.addEventListener('click', () => {
                    console.log(commentInput.innerText);
                    
                    if (commentInput.value != '') {
                    $.ajax({
                        url: '/comment/insert',
                        type: 'Post',
                        data: {
                        'memberNo': memberNo,
                        'boardNo': boardResult.boardNo,
                        'commentContent': commentInput.value,
                        'upperCommentNo': upperCommentNo,
                        },
                        success: (result) => {
                        if (result > 0) {
                            const flag = 1; //1이 등록 0이 삭제
                
                            selectCommentList(boardResult.boardNo, commentUl, flag);
                            commentInput.value = '';
                            // mainContainerDiv.scrollTop = mainContainerDiv.scrollHeight;
                        }
                        },
                        error: () => {
                        console.log('댓글 등록 오류');
                        },
                    });
                    }
                });
                
                // 댓글 입력창에 enter 이벤트 리스너 추가
                commentInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                
                    if (commentInput.value != '') {
                        $.ajax({
                        url: '/comment/insert',
                        type: 'Post',
                        data: {
                            'memberNo': memberNo,
                            'boardNo': boardResult.boardNo,
                            'commentContent': commentInput.value,
                            'upperCommentNo': upperCommentNo,
                        },
                        success: (result) => {
                            if (result > 0) {
                            const flag = 1; //1이 등록 0이 삭제
                
                            selectCommentList(boardResult.boardNo, commentUl, flag);
                            commentInput.value = '';
                            // mainContainerDiv.scrollTop = mainContainerDiv.scrollHeight;
                            }
                        },
                        error: () => {
                            console.log('댓글 등록 오류');
                        },
                        });
                    }
                    
                    }
                });
                
                let autoCompleteModal;
                    // 댓글 입력창에 @, # 입력 이벤트 추가
                commentInput.addEventListener('keyup', function (event) {
                    
                
                    // @키 입력 시 언급 자동완성 모달창
                    if (event.key === '@') {
                    const selection = window.getSelection();
                    
                    var range = document.createRange();
                
                    range.setStart(selection.anchorNode, 0);
                
                    
                    // 언급 자동완성 창 생성
                    autoCompleteModal = document.createElement('div');
                    autoCompleteModal.classList.add('auto-complete-container');
                    autoCompleteModal.id = 'autoCompleteModal';
                
                    let flag = false;
                    let start;
                    let end1;
                    let end2;
                    let content;
                    let targetCotent;
                
                    commentInput.addEventListener('input', function (e) { 
                        
                        if (commentInput.value.trim().length != 0) {
                
                        // 로딩 창 생성
                        autoCompleteModal.innerHTML =
                        '<div class="auto-complete-loading">'
                        +' <div class="loader loader--style1" title="0">'
                        +'  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
                        +'   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'
                        +'   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'
                        +'     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'
                        +'     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'
                        +'   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'
                        +'     C22.32,8.481,24.301,9.057,26.013,10.047z">'
                        +'     <animateTransform attributeType="xml"'
                        +'       attributeName="transform"'
                        +'       type="rotate"'
                        +'       from="0 20 20"'
                        +'       to="360 20 20"'
                        +'       dur="0.5s"'
                        +'       repeatCount="indefinite"/>'
                        +'   </path>'
                        +' </svg>'
                        +'</div>'  
                        +'</div > ';
                        
                    
                        commentInput.parentElement.parentElement.append(autoCompleteModal);
                        commentInput.parentElement.parentElement.style.position = 'relative';
                        
                
                        // ***** input 입력 값!!! ******
                        const regEx = /(@[^\s@]+)/gm;
                
                        let str = e.target.value;
                
                        // console.log(str);
                        let searchWord = str.match(regEx);
                        
                        if (searchWord != null) { 
                            searchWord = searchWord.join(', ');
                
                            searchWord = searchWord.replaceAll('@', '');
                
                            searchWord = searchWord.split(', ');
                        }
                
                        
                
                        if (searchWord != null) {
                            // 입력된 값으로 검색하기
                            $.ajax({
                            url: '/comment/autoComplete/mention',
                            data: { "searchWord": searchWord},
                            traditional: true,
                            dataType: 'json',
                            success: (mentionList) => {
                                if (mentionList != null) {
                                autoCompleteModal.innerHTML = '';
                    
                                for (let mention of mentionList) {
                
                
                                    const autoCompleteDiv = document.createElement('div');
                                    autoCompleteDiv.classList.add('auto-complete-content');
                
                                    // 언급 멤버 프로필 이미지
                                    const mentionProfileImg = document.createElement('img');
                
                                    if (mention.memberProfileImg != undefined) {
                                    mentionProfileImg.setAttribute('src', mention.memberProfileImg);
                                    } else {
                                    mentionProfileImg.setAttribute('src', '/resources/images/profile/profile.jpg');
                                    }
                
                                    autoCompleteDiv.append(mentionProfileImg);
                
                                    // 언급 멤버 정보
                                    const memberInfo = document.createElement('div');
                                    memberInfo.classList.add('member-info');
                
                                    // 언급 멤버 닉네임
                                    const mentionNickname = document.createElement('span');
                                    mentionNickname.classList.add('mention-nickname');
                                    mentionNickname.innerText = mention.memberNickname;
                                    
                                    // 언급 멤버 이름
                                    const mentionName = document.createElement('span');
                                    mentionName.classList.add('mention-name');
                                    mentionName.innerText = mention.memberName;
                
                                    memberInfo.append(mentionNickname, mentionName);
                
                                    autoCompleteDiv.append(memberInfo);
                
                                    autoCompleteModal.append(autoCompleteDiv);
                
                
                
                
                
                                    //! 언급 커서 위치로 문장 구분
                
                                    // 입력된 문장
                                    content = e.target.value;
                                    
                                    // 현재 커서의 위치
                                    end1 = e.target.selectionStart;
                
                                    // 커서 바로 앞의 @의 위치
                                    start = content.substring(0, end1).lastIndexOf('@');
                
                                    // @부터 커서 위치까지의 문장
                                    const temp = content.substring(start, end1);
                
                                    if(/\s/.test(temp)){ // 빈칸이 있을 경우
                                    flag = false;
                                    }else{
                                        flag = true;
                                    }
                
                                    if(start > -1 && flag){
                
                                    end2 = start + temp.length;
                
                                    //@뒤의 문장 선택
                                    targetCotent = content.substring(start, end2);
                                    }
                
                
                
                
                                    // ! 언급 아이디 클릭 시
                                    autoCompleteDiv.addEventListener('click', () => {
                
                                    // 언급 아이디 인풋 태그에 추가
                                    // const inputWord = searchWord[searchWord.length - 1];
                                    // commentInput.value = commentInput.value.replaceAll(inputWord, mention.memberNickname) + " ";
                
                                    const before = content.substring(0, start);
                                    const after = content.substring(end2, content.length);
                
                                    commentInput.value = before + "@" + mention.memberNickname + " " + after;
                
                                    flag = false;
                
                                    // 모달창 제거
                                    autoCompleteModal.parentElement.removeChild(autoCompleteModal);
                
                                    // 인풋 이벤트 리스너 제거해서 모달창 안나오게
                                    commentInput.removeEventListener('input', arguments.callee);
                                    commentInput.focus();
                                    });
                
                
                                }  
                                } else {
                                // 로딩 창 생성
                                autoCompleteModal.innerHTML =
                                '<div class="auto-complete-loading">'
                                +' <div class="loader loader--style1" title="0">'
                                +'  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
                                +'   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'
                                +'   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'
                                +'     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'
                                +'     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'
                                +'   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'
                                +'     C22.32,8.481,24.301,9.057,26.013,10.047z">'
                                +'     <animateTransform attributeType="xml"'
                                +'       attributeName="transform"'
                                +'       type="rotate"'
                                +'       from="0 20 20"'
                                +'       to="360 20 20"'
                                +'       dur="0.5s"'
                                +'       repeatCount="indefinite"/>'
                                +'   </path>'
                                +' </svg>'
                                +'</div>'  
                                    + '</div > ';
                                
                
                                }
                            },
                            error: () => {
                                console.log("언급 자동완성 에러");
                            },
                            });
                            
                
                        }
                
                
                
                        } else {
                        if(autoCompleteModal !== undefined) {
                            autoCompleteModal.parentElement.removeChild(autoCompleteModal);
                            console.log('모달 삭제');
                            event.preventDefault();
                        }
                
                        commentInput.removeEventListener('input', arguments.callee);
                        }
                
                    });
                    event.preventDefault();
                    }
                
                    // #키 입력 시 해시태그 자동완성 모달창 추가
                    if (event.key === '#') {
                    const selection = window.getSelection();
                    
                    var range = document.createRange();
                
                    range.setStart(selection.anchorNode, 0);
                
                    
                    // 언급 자동완성 창 생성
                    const autoCompleteModal = document.createElement('div');
                    autoCompleteModal.classList.add('auto-complete-container');
                    autoCompleteModal.id = 'autoCompleteModal';
                
                    
                    commentInput.addEventListener('input', function (e) { 
                        
                        if (commentInput.value.trim().length != 0) {
                
                        // 로딩 창 생성
                        autoCompleteModal.innerHTML =
                        '<div class="auto-complete-loading">'
                        +' <div class="loader loader--style1" title="0">'
                        +'  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
                        +'   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'
                        +'   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'
                        +'     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'
                        +'     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'
                        +'   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'
                        +'     C22.32,8.481,24.301,9.057,26.013,10.047z">'
                        +'     <animateTransform attributeType="xml"'
                        +'       attributeName="transform"'
                        +'       type="rotate"'
                        +'       from="0 20 20"'
                        +'       to="360 20 20"'
                        +'       dur="0.5s"'
                        +'       repeatCount="indefinite"/>'
                        +'   </path>'
                        +' </svg>'
                        +'</div>'  
                        +'</div > ';
                        
                    
                        commentInput.parentElement.parentElement.append(autoCompleteModal);
                        commentInput.parentElement.parentElement.style.position = 'relative';
                        
                
                        // ***** input 입력 값!!! ******
                        const regEx = /(#[^\s#]+)/gm;
                
                        let str = e.target.value;
                
                        // console.log(str);
                        let searchWord = str.match(regEx);
                        
                        if (searchWord != null) { 
                            searchWord = searchWord.join(', ');
                
                            searchWord = searchWord.replaceAll('#', '');
                
                            searchWord = searchWord.split(', ');
                        }
                
                        
                
                        if (searchWord != null) {
                            // 입력된 값으로 검색하기
                            $.ajax({
                            url: '/comment/autoComplete/hashtag',
                            data: { "searchWord": searchWord},
                            traditional: true,
                            dataType: 'json',
                            success: (hashtagList) => {
                                if (hashtagList != null) {
                                console.log(hashtagList);
                                autoCompleteModal.innerHTML = '';
                    
                                for (let hashtag of hashtagList) {
                
                
                                    const autoCompleteDiv = document.createElement('div');
                                    autoCompleteDiv.classList.add('auto-complete-content');
                
                                    // 해시태그 정보
                                    const hashtagInfo = document.createElement('div');
                                    hashtagInfo.classList.add('hashtag-info');
                
                                    // 해시태그 내용
                                    const hashtagContent = document.createElement('span');
                                    hashtagContent.classList.add('hashtag-content');
                                    
                                    const span = document.createElement('span');
                                    span.innerText = '#'
                                    
                                    hashtagContent.append(span);
                                    hashtagContent.innerText += hashtag.hashtagContent;
                                    
                                    // 해시태그 관련 게시물 수
                                    const boardCount = document.createElement('span');
                                    boardCount.classList.add('hashtag-board-count');
                                    boardCount.innerText = '게시물 ' +  hashtag.boardCount;
                
                                    hashtagInfo.append(hashtagContent, boardCount);
                
                                    autoCompleteDiv.append(hashtagInfo);
                
                                    autoCompleteModal.append(autoCompleteDiv);
                
                
                
                                    //! 언급 커서 위치로 문장 구분
                
                                    // 입력된 문장
                                    content = e.target.value;
                                    
                                    // 현재 커서의 위치
                                    end1 = e.target.selectionStart;
                
                                    // 커서 바로 앞의 #의 위치
                                    start = content.substring(0, end1).lastIndexOf('#');
                
                                    // #부터 커서 위치까지의 문장
                                    const temp = content.substring(start, end1);
                                    
                                    if(/\s/.test(temp)){ // 빈칸이 있을 경우
                                    flag = false;
                                    }else{
                                        flag = true;
                                    }
                
                                    if(start > -1 && flag){
                
                                    end2 = start + temp.length;
                                    
                                    //#뒤의 문장 선택
                                    targetCotent = content.substring(start, end2);
                                    }
                                    
                
                
                
                                    // 언급 아이디 클릭 시
                                    autoCompleteDiv.addEventListener('click', () => {
                
                                    // 언급 아이디 인풋 태그에 추가
                                    // const inputWord = searchWord[searchWord.length - 1];
                                    // commentInput.value = commentInput.value.replaceAll(inputWord, hashtag.hashtagContent) + " ";
                
                
                                    const before = content.substring(0, start);
                                    const after = content.substring(end2, content.length);
                
                                    commentInput.value = before + "#" + hashtag.hashtagContent + " " + after;
                
                                    flag = false;
                
                
                
                                    // 모달창 제거
                                    autoCompleteModal.parentElement.removeChild(autoCompleteModal);
                
                                    // 인풋 이벤트 리스너 제거해서 모달창 안나오게
                                    commentInput.removeEventListener('input', arguments.callee);
                                    commentInput.focus();
                                    });
                
                
                                }  
                                } else {
                                // 로딩 창 생성
                                autoCompleteModal.innerHTML =
                                '<div class="auto-complete-loading">'
                                +' <div class="loader loader--style1" title="0">'
                                +'  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
                                +'   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'
                                +'   <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946'
                                +'     s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634'
                                +'     c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>'
                                +'   <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0'
                                +'     C22.32,8.481,24.301,9.057,26.013,10.047z">'
                                +'     <animateTransform attributeType="xml"'
                                +'       attributeName="transform"'
                                +'       type="rotate"'
                                +'       from="0 20 20"'
                                +'       to="360 20 20"'
                                +'       dur="0.5s"'
                                +'       repeatCount="indefinite"/>'
                                +'   </path>'
                                +' </svg>'
                                +'</div>'  
                                    + '</div > ';
                                
                
                                }
                            },
                            error: () => {
                                console.log("언급 자동완성 에러");
                            },
                            });
                        }
                
                            } else {
                            if(autoCompleteModal !== undefined) {
                                autoCompleteModal.parentElement.removeChild(autoCompleteModal);
                                console.log('모달 삭제');
                
                            }
                            commentInput.removeEventListener('input', arguments.callee);
                            }
                
                        });
                        }
                
                
                
                        if (event.keyCode === 32) {
                        if(autoCompleteModal !== undefined) {
                            autoCompleteModal.parentElement.removeChild(autoCompleteModal);
                            console.log('모달 삭제');
                        }
                        commentInput.removeEventListener('input', arguments.callee);
                        }
                
                
                        event.preventDefault();
                    });



            },
            error: () => { console.log("게시글 상세조회 중 에러");}
        })
    })
}






// 댓글 목록 조회 후 출력
function selectCommentList(boardNo, commentListUl, flag) {
    console.log(boardNo, memberNo);
  
    $.ajax({
      url: '/comment/list',
      data: { 'boardNo': boardNo, 'myNo': memberNo },
      dataType: 'JSON',
      success: (commentList) => {
        console.log(commentList);
  
  
        // 댓글 목록 최상위 태그의 내용 삭제
        commentListUl.innerHTML = '';
  
        for (let comment of commentList) {
          if (comment.upperCommentNo == 0) {
            console.log(comment);
  
            // commentUl의 자식 요소 commentLi
            const commentLi = document.createElement('li');
            commentLi.classList.add('comment');
            commentListUl.append(commentLi);
  
            // commentNo input hidden 태그 생성
            const commentNoInput = document.createElement("input");
            commentNoInput.setAttribute("type", 'hidden');
            commentNoInput.value=comment.commentNo;
            commentNoInput.classList.add("comment-no");
  
            // commentLi의 자식요소 commentFirstChild, moreReply
            const commentFirstChild = document.createElement('div');
            commentFirstChild.classList.add('comment-firstchild');
  
            commentLi.append(commentNoInput, commentFirstChild);
  
            // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
            const commentProfileA = document.createElement('a');
            commentProfileA.classList.add('comment-profile');
  
            const commentDiv1 = document.createElement('div');
  
            commentFirstChild.append(commentProfileA, commentDiv1);
  
            // commentProfileA의 자식 요소 commentProfileImg
            const commentProfileImg = document.createElement('img');
            commentProfileImg.classList.add('comment-profile-image');
  
            commentProfileA.append(commentProfileImg);
  
            if (comment.memberProfileImg != undefined) {
              commentProfileImg.setAttribute('src', comment.memberProfileImg);
            } else {
              commentProfileImg.setAttribute(
                'src',
                '/resources/images/profile/profile.jpg'
              );
            }
  
            // commentDiv1의 자식 요소 commentFirstLine
            const commentFirstLine = document.createElement('div');
            commentFirstLine.classList.add('comment-firstline');
  
            // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
            const commentDiv2 = document.createElement('div');
            commentDiv2.classList.add('comment-id-content');
            const commentDiv3 = document.createElement('div');
  
            commentFirstLine.append(commentDiv2, commentDiv3);
  
            // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
            const commentMemberIdA = document.createElement('a');
            commentMemberIdA.classList.add('comment-memberId');
            commentMemberIdA.innerText = comment.memberNickname;
  
            const commentSpan = document.createElement('span');
            commentSpan.classList.add('comment-content');
            commentSpan.innerHTML = comment.commentContent;
  
            commentDiv2.append(commentMemberIdA, commentSpan);
  
            // commentDiv3의 자식 요소 commentLikeBtn
            const commentLikeBtn = document.createElement('button');
            commentLikeBtn.classList.add('comment-like-btn');
  
            // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
            commentLikeBtn.addEventListener('click', function () {
              const emptyHeart = '<i class="fa-regular fa-heart"></i>';
              const solidHeart = '<i class="fa-solid fa-heart"></i>';
  
              // 댓글 좋아요 안한 상태일 때
              if (!commentLikeBtn.classList.contains('red')) {
                // 좋아요 DB에 추가
                $.ajax({
                  url: '/comment/likeUp',
                  data: { commentNo: comment.commentNo, memberNo: memberNo },
                  success: (result) => {
                    if (result > 0) {
                      commentLikeBtn.innerHTML = '';
                      commentLikeBtn.innerHTML = solidHeart;
                      commentLikeBtn.classList.add('red');
                    } else {
                      console.log('댓글 좋아요 증가 안됨');
                    }
                  },
                  error: () => {
                    console.log('댓글 좋아요 증가 실패');
                  },
                });
              } else {
                // 댓글에 좋아요 돼있을 때
  
                // 댓글 좋아요 DB에서 삭제
                $.ajax({
                  url: '/comment/likeDown',
                  data: { commentNo: comment.commentNo, memberNo: memberNo },
                  success: (result) => {
                    if (result > 0) {
                      commentLikeBtn.innerHTML = emptyHeart;
                      commentLikeBtn.classList.remove('red');
                    } else {
                      console.log('댓글 좋아요 취소 안됨');
                    }
                  },
                  error: () => {
                    console.log('댓글 좋아요 취소 실패');
                  },
                });
              }
            });
  
            // commentLikeBtn의 자식 요소 commentHeartIcon
            const commentHeartIcon = document.createElement('i');
            if (comment.commentLikeCheck == 0) {
              commentHeartIcon.classList.add('fa-regular', 'fa-heart');
            }
            if (comment.commentLikeCheck == 1) {
              commentHeartIcon.classList.add('fa-solid', 'fa-heart');
              commentLikeBtn.classList.add("red");
            }
  
            commentLikeBtn.append(commentHeartIcon);
  
            commentDiv3.append(commentLikeBtn);
  
            // commentDiv1의 자식 요소 createReply
            const createReply = document.createElement('div');
            createReply.classList.add('create-reply');
  
            commentDiv1.append(commentFirstLine, createReply);
  
            // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
            const commentCreateDate = document.createElement('span');
            commentCreateDate.innerText = comment.commentCreateDate;
  
            const replyBtn = document.createElement('button');
            replyBtn.setAttribute('type', 'button');
            replyBtn.classList.add('reply-btn');
            replyBtn.innerText = '답글 달기';
  
  
            // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
            // 만약 이미 언급된 닉네임일 시 추가 안됨
            // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
            replyBtn.addEventListener('click', () => {
              const commentInput =
                commentListUl.parentElement.parentElement.parentElement
                  .nextElementSibling.firstElementChild.firstElementChild;
              commentInput.value = '';
              commentInput.value = '@' + commentMemberIdA.innerText + ' ';
              commentInput.focus();
  
              upperCommentNo = comment.commentNo;
              console.log("upperCommentNo: " + upperCommentNo);
  
            });
  
            const hoverBtn = document.createElement('button');
            hoverBtn.setAttribute('type', 'button');
            hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');
  
            // 댓글 ... 버튼에 클릭 이벤트 추가
            hoverBtn.addEventListener('click', function () {
              const commentMenu = document.getElementById('commentMenu');
              const loginCommentMenu = document.getElementById('commentMenuL');
              const body = document.getElementsByTagName('body')[0];
  
              console.log(commentMemberIdA.innerText);
              console.log(memberNickname);
  
              deleteCommentNo = comment.commentNo;
              deleteBoardNo = comment.boardNo;
              deleteCommentUl = commentListUl;
  
              console.log("deleteCommentNo: " + deleteCommentNo);
              console.log("deleteBoardNo: " + deleteBoardNo);
              console.log("deleteCommentUl: " + deleteCommentUl);
  
              if (commentMemberIdA.innerText == memberNickname) {
                // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
                loginCommentMenu.style.display = 'flex';
              } else {
                commentMenu.style.display = 'flex';
              }
  
              body.classList.add('scrollLock');
          });
  
            createReply.append(commentCreateDate, replyBtn, hoverBtn);
  
            // 답글이 있으면 버튼 생성
            if (comment.replyCount > 0) {
              const commentNo = comment.commentNo;
              const moreReply = document.createElement('span');
              moreReply.classList.add('more-reply');
              // FIXME: 경로 설정하기
              moreReply.innerText = '모든 답글 보기(' + comment.replyCount + ')';
              commentLi.append(moreReply);
  
              // 모든 답글 보기 버튼에 클릭 이벤트 추가
              moreReply.addEventListener('click', () => {
                moreReply.style.display = 'none';
                selectReplyList(commentNo, commentLi);
              });
            }
          } 
        }
      },
      error: () => {
        console.log('댓글 목록 조회 에러');
      },
    });
  }
  

  
  
  // 대댓글 목록 조회 후 출력
  function selectReplyList(commentNo, commentLi) {
    $.ajax({
      url: "/comment/select/reply",
      data: {'commentNo': commentNo, 'myNo':memberNo},
      dataType: "json",
      type: "POST",
      success: (replyList)=>{
        console.log(replyList);
  
        const replyUl = document.createElement('ul');
        replyUl.classList.add("reply-list");
        replyUl.style.display = "flex";
        replyUl.style.flexDirection = "column";
  
        for(let comment of replyList) {
           // 답글 모양 출력
  
  
          commentLi.append(replyUl);
  
          // replyUl의 자식 요소 replyLi
          const replyLi = document.createElement('li');
          replyLi.classList.add('comment');
          replyLi.id = 'reply';
          replyUl.append(replyLi);
  
          // replyLi의 자식요소 replyFirstChild, moreReply
          const replyFirstChild = document.createElement('div');
          replyFirstChild.classList.add('reply-firstchild');
  
          // commentNo input hidden 태그 생성
          const commentNoInput = document.createElement("input");
          commentNoInput.setAttribute("type", 'hidden');
          commentNoInput.value=comment.commentNo;
          commentNoInput.classList.add("comment-no");
  
          replyLi.append(commentNoInput, replyFirstChild);
  
          // replyFirstChild의 자식 요소 replyProfileA, replyDiv1
          const replyProfileA = document.createElement('a');
          replyProfileA.classList.add('comment-profile');
  
          const replyDiv1 = document.createElement('div');
  
          replyFirstChild.append(replyProfileA, replyDiv1);
  
          // replyProfileA의 자식 요소 replyProfileImg
          const replyProfileImg = document.createElement('img');
          replyProfileImg.classList.add('comment-profile-image');
  
          replyProfileA.append(replyProfileImg);
  
          if (comment.memberProfileImg != undefined) {
            replyProfileImg.setAttribute('src', comment.memberProfileImg);
          } else {
            replyProfileImg.setAttribute(
              'src',
              '/resources/images/profile/profile.jpg'
            );
          }
  
          // replyDiv1의 자식 요소 replyFirstLine
          const replyFirstLine = document.createElement('div');
          replyFirstLine.classList.add('reply-firstline');
  
          // replyFirstLine의 자식 요소 replyDiv2, replyDiv3
          const replyDiv2 = document.createElement('div');
          const replyDiv3 = document.createElement('div');
  
          replyFirstLine.append(replyDiv2, replyDiv3);
  
          // replyDiv2의 자식 요소 replyMemberIdA, replySpan
          const replyMemberIdA = document.createElement('a');
          replyMemberIdA.classList.add('reply-memberId');
          replyMemberIdA.innerText = comment.memberNickname;
  
        
          const replySpan = document.createElement('span');
          replySpan.classList.add('comment-content');
          replySpan.innerHTML = comment.commentContent;
  
          replyDiv2.append(replyMemberIdA, replySpan);
  
          // commentDiv3의 자식 요소 commentLikeBtn
          const replyLikeBtn = document.createElement('button');
          replyLikeBtn.classList.add('comment-like-btn');
  
           // 새롭게 추가된 likeBtn에 클릭 이벤트 핸들러 추가
           replyLikeBtn.addEventListener('click', function () {
            const emptyHeart = '<i class="fa-regular fa-heart"></i>';
            const solidHeart = '<i class="fa-solid fa-heart"></i>';
    
            // 댓글 좋아요 안한 상태일 때
            if (!replyLikeBtn.classList.contains('red')) {
              // 좋아요 DB에 추가
              $.ajax({
                url: '/comment/likeUp',
                data: { commentNo: comment.commentNo, memberNo: memberNo },
                success: (result) => {
                  if (result > 0) {
                    replyLikeBtn.innerHTML = '';
                    replyLikeBtn.innerHTML = solidHeart;
                    replyLikeBtn.classList.add('red');
                  } else {
                    console.log('댓글 좋아요 증가 안됨');
                  }
                },
                error: () => {
                  console.log('댓글 좋아요 증가 실패');
                },
              });
            } else {
              // 댓글에 좋아요 돼있을 때
    
              // 댓글 좋아요 DB에서 삭제
              $.ajax({
                url: '/comment/likeDown',
                data: { commentNo: comment.commentNo, memberNo: memberNo },
                success: (result) => {
                  if (result > 0) {
                    replyLikeBtn.innerHTML = emptyHeart;
                    replyLikeBtn.classList.remove('red');
                  } else {
                    console.log('댓글 좋아요 취소 안됨');
                  }
                },
                error: () => {
                  console.log('댓글 좋아요 취소 실패');
                },
              });
            }
          });
  
  
          // replyLikeBtn의 자식 요소 commentHeartIcon
          const replyHeartIcon = document.createElement('i');
          if (comment.commentLikeCheck == 0) {
            replyHeartIcon.classList.add('fa-regular', 'fa-heart');
          }
          if (comment.commentLikeCheck == 1) {
            replyHeartIcon.classList.add('fa-solid', 'fa-heart');
            replyLikeBtn.classList.add('red');
          }
  
  
          replyLikeBtn.append(replyHeartIcon);
  
          replyDiv3.append(replyLikeBtn);
  
          // replyDiv1의 자식 요소 createReply
          const createReply = document.createElement('div');
          createReply.classList.add('create-reply');
  
          replyDiv1.append(replyFirstLine, createReply);
  
          // createReply의 자식 요소 replyCreateDate, replyBtn, hoverBtn
          const replyCreateDate = document.createElement('span');
          replyCreateDate.innerText = comment.commentCreateDate;
  
          const replyBtn = document.createElement('button');
          replyBtn.setAttribute('type', 'button');
          replyBtn.classList.add('reply-btn');
          replyBtn.innerText = '답글 달기';
  
          // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
          // 만약 이미 언급된 닉네임일 시 추가 안됨
          // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
          replyBtn.addEventListener('click', () => {
            const commentInput =
              replyUl.parentElement.parentElement.parentElement.parentElement.parentElement.
                nextElementSibling.firstElementChild.firstElementChild;
            commentInput.value = '';
            commentInput.value = '@' + replyMemberIdA.innerText + ' ';
            commentInput.focus();
  
            upperCommentNo = commentNo;
            console.log("upperCommentNo: " + upperCommentNo);
  
          });
  
          const hoverBtn = document.createElement('button');
          hoverBtn.setAttribute('type', 'button');
          hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');
  
          // 답글 ... 버튼에 클릭 이벤트 추가
          hoverBtn.addEventListener('click', function () {
            console.log(replyMemberIdA.innerText);
            console.log(memberNickname);
  
            deleteCommentNo = comment.commentNo;
            deleteBoardNo = comment.boardNo;
            deleteCommentUl = commentLi.parentElement;
            
            console.log(deleteCommentNo);
            console.log(deleteBoardNo);
  
            if (replyMemberIdA.innerText == memberNickname) {
              // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
              loginCommentMenu.style.display = 'flex';
            } else {
              commentMenu.style.display = 'flex';
            }
  
            body.classList.add('scrollLock');
          });
  
          createReply.append(replyCreateDate, replyBtn, hoverBtn);
            
        }
      },
      error: ()=>{}
    })
  }


*/















// * 최근 게시글 불러오기(무한스크롤)

let recentEndList;
const boardResult = document.getElementsByClassName("recentBoardResult-section")[0];

window.addEventListener("load", (event) => {

    recentEndList = boardResult.lastElementChild;

    createObserver();
}, false)


// 무한 스크롤용 객체 생성
function createObserver(){

    let observer;

    let options = {
        root: null,  
        rootMargin: "0px",
        threshold: 0.8   // observe하는 크기의 얼마나 보였을 때 실행할 건지.
    };

    
    // html요소 등장하면 이 안에 코드 실행해줌
    // selectRecentList : 최근 게시글 불러오는 함수
    // 최근 게시글을 ajax를 이용해서 불러오고 성공하면 요소 생성
    observer = new IntersectionObserver(selectRecentList, options); 
    observer.observe(recentEndList);  // recentBoardEnd가 화면에 등장하는지 감시

}


// let div = document.querySelector('boardImage');
// const obeserver = new IntersectionObserver(selectRecentList, option);  //html요소 등장하면 이 안에 코드 실행해줌
// observer.observe(div[7]);  // html 요소 감시. html 요소가 화면에 등장하는지 사라지는지 감시.
// observer.observe(div[8]);
// observer.observe(div[9]);


// 현재 페이지 번호 변수 선언
let cp = 2;



// 최근 게시글 목록 화면 출력(페이지네이션, 무한스크롤)
function selectRecentList(entries, obeserver){

    // entries: 더 보이거나 덜 보이게 되면서 통과한 역치를 나타내는, 
    //           ntersectionObserverEntry (en-US) 객체의 배열.

    // observer : 자신을 호출한 IntersectionObserver.
    //           이 기능을 이용해 화면 맨 아래에 div 요소를 넣어 
    //           이 div 요소를 IntersectionObserver 가 감시.



    entries.forEach((entry) => {

        if(entry.isIntersecting){

            alert("감지");

            $.ajax({
                url: '/selectRecentList',
                type: 'GET',
                data: {"searchInput" : searchInput, "cp" : cp},
                dataType: 'json',
                success: (recentResultMap) => {
                    const recentBoardList = recentResultMap.recentBoardList;
                    const pagination = recentResultMap.pagination;
                    
                    for(let recentItem of recentBoardList){
                        createRecentBoard(recentItem);
                    }

                    if(cp != pagination.maxPage){
                        recentEndList = boardResult.lastElementChild;
                        createObserver();
                        cp++;
                        console.log("cp : " + cp);
                    }
                    console.log(recentEndList);
                },
                error: () => {
                    console.log("최근 게시글 조회 중 오류 발생");
                }
            });
        }
    });
}




// 최근 게시글 화면 출력용 함수 (boardResult클래스 게시글 9개 기준)
function createRecentBoard(recentItem){

    if(rBoardList != null) {

        for(let n=0 ; n<3 ; n++){  // 3번 반복해서 총 3행 반환 (3행 * 3열)
    
            if(recentBoardList.length > pagination.limit){ // 1열(사진3장) 반환 // (0, 3, 6), 9, 12, 15, 18
            // if(recentBoardList.length > 9){ 

                const divBoardResult = document.createElement('div');
                divBoardResult.classList.add('boardResult');


                const divBoardImage = document.createElement('div');
                divBoardImage.classList.add("boardImage");

                boardResult.append(divBoardImage);

                for(let i=pagination.limit; i<(pagination.limit+2); i++){
                // for(let i=9; i<11; i++){
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
        }
    }
  
}





















        










