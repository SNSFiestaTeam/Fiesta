// 댓글 창에 입력 시 게시 버튼 활성화
const postingBtn = document.getElementsByClassName('posting-btn');
for (let i = 0; i < commentInput.length; i++) {
  commentInput[i].addEventListener('input', (e) => {
    if (commentInput[i].value.trim().length == 0) {
      postingBtn[i].setAttribute('disabled', true);
      return;
    } else {
      postingBtn[i].removeAttribute('disabled');
    }
  });
}



 
let autoCompleteModal;
for (let i = 0; i < commentInput.length; i++) {
  commentInput[i].addEventListener('keyup', function (event) {
    

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
      
      commentInput[i].addEventListener('input', function (e) { 

        
        if (commentInput[i].value.trim().length != 0) {
          const loading = 
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
          
          
          // 로딩 창 생성
          autoCompleteModal.innerHTML = loading;
          
      
          commentInput[i].parentElement.parentElement.append(autoCompleteModal);
          commentInput[i].parentElement.parentElement.style.position = 'relative';
          

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
                      // commentInput[i].value = commentInput[i].value.replace(inputWord, mention.memberNickname) + " ";

                      const before = content.substring(0, start);
                      const after = content.substring(end2, content.length);

                      commentInput[i].value = before + "@" + mention.memberNickname + " " + after;

                      flag = false;

                      // 모달창 제거
                      autoCompleteModal.parentElement.removeChild(autoCompleteModal);

                      // 인풋 이벤트 리스너 제거해서 모달창 안나오게
                      commentInput[i].removeEventListener('input', arguments.callee);
                      commentInput[i].focus();
                    });


                  }  
                } else {
                  // 로딩 창 생성
                  autoCompleteModal.innerHTML = loading;
                  

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
          event.preventDefault();
          commentInput[i].removeEventListener('input', arguments.callee);
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

      
      commentInput[i].addEventListener('input', function (e) { 
        
        if (commentInput[i].value.trim().length != 0) {

          // 로딩 창 생성
          autoCompleteModal.innerHTML = loading;
          
      
          commentInput[i].parentElement.parentElement.append(autoCompleteModal);
          commentInput[i].parentElement.parentElement.style.position = 'relative';
          

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
                    if(hashtag.boardCount > 0) {

                      
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
                    
                    
                    
                    // !해시태그  클릭 시
                    autoCompleteDiv.addEventListener('click', () => {

                      // 해시태그 인풋 태그에 추가
                      // const inputWord = searchWord[searchWord.length - 1];
                      // commentInput[i].value = commentInput[i].value.replaceAll(inputWord, hashtag.hashtagContent) + " ";
                      
                      
                      const before = content.substring(0, start);
                      const after = content.substring(end2, content.length);

                      commentInput[i].value = before + "#" + hashtag.hashtagContent + " " + after;

                      flag = false;

                      
                      // 모달창 제거
                      autoCompleteModal.parentElement.removeChild(autoCompleteModal);
                      
                      // 인풋 이벤트 리스너 제거해서 모달창 안나오게
                      commentInput[i].removeEventListener('input', arguments.callee);
                      commentInput[i].focus();
                    });

                  }
                    
                  }  
                } else {
                  // 로딩 창 생성
                  autoCompleteModal.innerHTML = loading;
                  

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
          event.preventDefault();
          commentInput[i].removeEventListener('input', arguments.callee);
        }

      });
    }



    if (event.keyCode === 32) {
      if(autoCompleteModal !== undefined) {
        autoCompleteModal.parentElement.removeChild(autoCompleteModal);
        console.log('모달 삭제');
      }
      event.preventDefault();
      commentInput[i].removeEventListener('input', arguments.callee);
    }

    event.preventDefault();
  });
}

// 댓글 모두 보기 버튼 클릭 시 모달창 출력
const allCommentBtn = document.getElementsByClassName('all-comment-btn');
for (let i = 0; i < allCommentBtn.length; i++) {
  allCommentBtn[i].addEventListener('click', () => {
    modalOn = 1;
    const commentList = document.getElementById('commentContainerM');
    const commentUl = document.getElementsByClassName('comment-list')[i];


    console.log('댓글 모두 보기 실행');

    allCommentBtn[i].classList.add('hide');

    // 게시글 번호 얻어오기
    boardNo =
      allCommentBtn[i].parentElement.parentElement.parentElement
        .nextElementSibling.value;
    boardMemberNickname = allCommentBtn[i].parentElement.parentElement.parentElement
      .parentElement.firstElementChild.firstElementChild.firstElementChild
      .firstElementChild.nextElementSibling.innerText;
    boardMemberProfileImg = allCommentBtn[i].parentElement.parentElement.parentElement
      .parentElement.firstElementChild.firstElementChild.firstElementChild
      .firstElementChild.firstElementChild.getAttribute('src');
    
    console.log("boardNo: " + boardNo) ;
    console.log("boardMemberNickname: " + boardMemberNickname) ;
    console.log("boardMemberProfileImg: " + boardMemberProfileImg) ;

    const commentListUlM = document.getElementById('commentListUl');

    // 모달창 프로필, 닉네임 설정
    const profilePhotoM = document.getElementById('profilePhotoM');
    const feedProfileImageM = document.getElementById('feedProfileImageM');
    const feedMemberIdM = document.getElementById('feedMemberIdM');
    profilePhotoM.href = '/feed/' + boardMemberNickname;
    feedProfileImageM.setAttribute('src', boardMemberProfileImg);

    feedMemberIdM.innerText = boardMemberNickname;
    feedMemberIdM.href = '/feed/' + boardMemberNickname;

    // 댓글 리스트 불러오기
    selectCommentListM(boardNo, commentListUlM);

    commentList.style.display = 'flex';
    document.getElementsByTagName('body')[0].classList.add('scrollLock');



  

    // 댓글 더보기 리스트 X 버튼 클릭 시
    document.getElementById('commentListXBtn').addEventListener('click', () => {
      commentList.style.display = 'none';
      allCommentBtn[i].classList.remove('hide');
      document.getElementsByTagName('body')[0].classList.remove('scrollLock');
      document.getElementById('commentInputM').value = "";
      modalOn = 0;
    });
  });
}

// 댓글 좋아요 버튼 클릭 시
const commentLikeBtn = document.getElementsByClassName('comment-like-btn');
const commentNo = document.getElementsByClassName('comment-no');

for (let i = 0; i < commentLikeBtn.length; i++) {
  commentLikeBtn[i].addEventListener('click', function () {
    const emptyHeart = '<i class="fa-regular fa-heart"></i>';
    const solidHeart = '<i class="fa-solid fa-heart"></i>';

    // 댓글 좋아요 안한 상태일 때
    if (!commentLikeBtn[i].classList.contains('red')) {
      console.log(commentNo[i].value);
      // 좋아요 DB에 추가
      $.ajax({
        url: '/comment/likeUp',
        data: { commentNo: commentNo[i].value, memberNo: memberNo },
        success: (result) => {
          if (result > 0) {
            commentLikeBtn[i].innerHTML = '';
            commentLikeBtn[i].innerHTML = solidHeart;
            commentLikeBtn[i].classList.add('red');
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
        data: { commentNo: commentNo[i].value, memberNo: memberNo },
        success: (result) => {
          if (result > 0) {
            commentLikeBtn[i].innerHTML = emptyHeart;
            commentLikeBtn[i].classList.remove('red');
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
}

// 댓글 답글 달기 버튼 클릭 시 인풋 태그에 @작성자 아이디 추가
const replyBtn = document.getElementsByClassName('reply-btn');
const commentId = document.getElementsByClassName('comment-memberId');

for (let i = 0; i < replyBtn.length; i++) {
  replyBtn[i].addEventListener('click', () => {
    const input =
      replyBtn[i].parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.parentElement
        .nextElementSibling.firstElementChild.firstElementChild;

    input.value = '@' + commentId[i].innerText;
    input.focus();

    upperCommentNo = document.getElementsByClassName('comment-no')[i].value;
    console.log('upperCommentNo: ' + upperCommentNo);
  });
}

// ! ------------------------------------댓글 등록 시작 -------------------------------------


// 댓글 등록 버튼 클릭 시
for (let i = 0; i < postingBtn.length; i++) {
  postingBtn[i].addEventListener('click', () => {
    const boardNo = postingBtn[i].parentElement.parentElement.parentElement.nextElementSibling;
    const commentInput = document.getElementsByClassName('comment-input');
    const commentListUl = document.getElementsByClassName('comment-list')[i];
    const mainContainer = document.getElementsByClassName('main-container')[i];

    console.log(commentInput[i].value);
    console.log('upperCommentNo: ' + upperCommentNo);
    console.log(boardNo.value);

    
    if (commentInput[i].value != '') {


      console.log("바뀐 댓글 내용: "+ commentInput[i].value);


      $.ajax({
        url: '/comment/insert',
        type: 'Post',
        data: {
          "memberNo": memberNo,
          "boardNo": boardNo.value,
          "commentContent": commentInput[i].value,
          "upperCommentNo": upperCommentNo,
        },
        success: (result) => {
          if (result > 0) {
            const flag = 1; // 1이 등록, 2가 삭제
            selectCommentList(boardNo.value, commentListUl, flag);
            commentInput[i].value = '';
            postingBtn[i].setAttribute('disabled', true);
            mainContainer.scrollTop = mainContainer.scrollHeight;
            upperCommentNo = 0;
          }
        },
        error: () => {
          console.log('댓글 등록 오류');
        },
      });
    }
  });
}

// 댓글 입력 후 Enter키 입력 시
for (let i = 0; i < commentInput.length; i++) {
  commentInput[i].addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      
      const boardNo = postingBtn[i].parentElement.parentElement.parentElement.nextElementSibling;
      const commentInput = document.getElementsByClassName('comment-input');
      const commentListUl = document.getElementsByClassName('comment-list')[i];
      const mainContainer = document.getElementsByClassName('main-container')[i];
      
      console.log(commentInput[i].value);
      console.log('upperCommentNo: ' + upperCommentNo);
      console.log(boardNo.value);
    
    
      if (commentInput[i].value != '') {


        console.log("바뀐 댓글 내용: "+ commentInput[i].value);

        
        $.ajax({
          url: '/comment/insert',
          type: 'Post',
          data: {
            "memberNo": memberNo,
            "boardNo": boardNo.value,
            "commentContent": commentInput[i].value,
            "upperCommentNo": upperCommentNo,
          },
          success: (result) => {
            if (result > 0) {
              const flag = 1; // 1이 등록, 2가 삭제
              selectCommentList(boardNo.value, commentListUl, flag);
              commentInput[i].value = '';
              postingBtn[i].setAttribute('disabled', true);
              mainContainer.scrollTop = mainContainer.scrollHeight;
              upperCommentNo = 0;
            }
          },
          error: () => {
            console.log('댓글 등록 오류');
          },
        });
      }
    }
  });
}

// 모달창 댓글 목록 조회 후 출력
function selectCommentListM(boardNo, commentListUl) {
  console.log(boardNo, memberNo);
  console.log(commentListUl);

  $.ajax({
    url: '/comment/list',
    data: { "boardNo": boardNo, 'myNo': memberNo },
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
          commentLi.classList.add('comment-m');
          commentListUl.append(commentLi);

          // commentNo input hidden 태그 생성
          const commentNoInput = document.createElement('input');
          commentNoInput.setAttribute('type', 'hidden');
          commentNoInput.value = comment.commentNo;
          commentNoInput.classList.add('comment-no');

          // commentLi의 자식요소 commentFirstChild, moreReply
          const commentFirstChild = document.createElement('div');
          commentFirstChild.classList.add('comment-firstchild-m');

          commentLi.append(commentNoInput, commentFirstChild);

          // commentFirstChild의 자식 요소 commentProfileA, commentDiv1
          const commentProfileA = document.createElement('a');
          commentProfileA.href = '/feed/' + comment.memberNickname;
          commentProfileA.id = 'commentProfileM';

          const commentDiv1 = document.createElement('div');

          commentFirstChild.append(commentProfileA, commentDiv1);

          // commentProfileA의 자식 요소 commentProfileImg
          const commentProfileImg = document.createElement('img');
          commentProfileImg.id = 'commentProfileImageM';

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
          commentFirstLine.classList.add('comment-firstline-m');

          // commentFirstLine의 자식 요소 commentDiv2, commentDiv3
          const commentDiv2 = document.createElement('div');
          const commentDiv3 = document.createElement('div');

          commentFirstLine.append(commentDiv2, commentDiv3);

          // commentDiv2의 자식 요소 commentMemberIdA, commentSpan
          const commentMemberIdA = document.createElement('a');
          commentMemberIdA.classList.add('comment-memberId-m');
          commentMemberIdA.innerText = comment.memberNickname;
          commentMemberIdA.href = '/feed/' + comment.memberNickname;

          const commentSpan = document.createElement('span');
          commentSpan.classList.add('comment-content-m');
          commentSpan.innerHTML = comment.commentContent;

          commentDiv2.append(commentMemberIdA, commentSpan);

          // commentDiv3의 자식 요소 commentLikeBtn
          const commentLikeBtn = document.createElement('button');
          commentLikeBtn.classList.add('comment-like-btn-m');

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
            commentLikeBtn.classList.add('red');
          }

          commentLikeBtn.append(commentHeartIcon);

          commentDiv3.append(commentLikeBtn);

          // commentDiv1의 자식 요소 createReply
          const createReply = document.createElement('div');
          createReply.classList.add('create-reply-m');

          commentDiv1.append(commentFirstLine, createReply);

          // createReply의 자식 요소 commentCreateDate, replyBtn, hoverBtn
          const commentCreateDate = document.createElement('span');
          commentCreateDate.innerText = comment.commentCreateDate;

          const replyBtn = document.createElement('button');
          replyBtn.setAttribute('type', 'button');
          replyBtn.innerText = '답글 달기';

          // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
          // 만약 이미 언급된 닉네임일 시 추가 안됨
          // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
          replyBtn.addEventListener('click', () => {
            const commentInput = document.getElementById('commentInputM');
            commentInput.value = '';
            commentInput.value = '@' + commentMemberIdA.innerText + ' ';
            commentInput.focus();

            upperCommentNo = commentNoInput.value;
            console.log('upperCommentNo: ' + upperCommentNo);
          });

          const hoverBtn = document.createElement('button');
          hoverBtn.setAttribute('type', 'button');
          hoverBtn.classList.add('fa-solid', 'fa-ellipsis', 'hover-btn');

          hoverBtn.addEventListener('click', function () {

            deleteCommentNo = comment.commentNo;
            deleteBoardNo = boardNo;
            deleteCommentUl = commentListUl;

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
            moreReply.classList.add('more-reply-m');
            // FIXME: 경로 설정하기
            moreReply.innerText = '모든 답글 보기(' + comment.replyCount + ')';
            commentLi.append(moreReply);

            // 모든 답글 보기 버튼에 클릭 이벤트 추가
            moreReply.addEventListener('click', () => {
              moreReply.style.display = 'none';

              selectReplyListM(commentNo, commentLi, boardNo);
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


// 모달 대댓글 목록 조회 후 출력
function selectReplyListM(commentNo, commentLi, boardNo) {
  $.ajax({
    url: '/comment/select/reply',
    data: {'commentNo': commentNo, 'myNo':memberNo},
    dataType: 'json',
    type: 'POST',
    success: (replyList) => {
      console.log(replyList);

      const replyUl = document.createElement('ul');
      replyUl.classList.add("reply-list");
      replyUl.style.display = "flex";
      replyUl.style.flexDirection = "column";

      commentLi.append(replyUl);
      for (let comment of replyList) {
        // 답글 모양 출력

        // replyUl의 자식 요소 replyLi
        const replyLi = document.createElement('li');
        replyLi.classList.add('comment-m');
        replyLi.id = 'replyM';
        replyUl.append(replyLi);

        // replyLi의 자식요소 replyFirstChild, moreReply
        const replyFirstChild = document.createElement('div');
        replyFirstChild.classList.add('comment-firstchild-m');

        // commentNo input hidden 태그 생성
        const commentNoInput = document.createElement('input');
        commentNoInput.setAttribute('type', 'hidden');
        commentNoInput.value = comment.commentNo;
        commentNoInput.classList.add('comment-no');

        replyLi.append(commentNoInput, replyFirstChild);

        // replyFirstChild의 자식 요소 replyProfileA, replyDiv1
        const replyProfileA = document.createElement('a');
        replyProfileA.href = '/feed/' + comment.memberNickname;
        replyProfileA.id = 'commentProfileM';

        const replyDiv1 = document.createElement('div');

        replyFirstChild.append(replyProfileA, replyDiv1);

        // replyProfileA의 자식 요소 replyProfileImg
        const replyProfileImg = document.createElement('img');
        replyProfileImg.id = 'commentProfileImageM';

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
        replyFirstLine.classList.add('comment-firstline-m');

        // replyFirstLine의 자식 요소 replyDiv2, replyDiv3
        const replyDiv2 = document.createElement('div');
        const replyDiv3 = document.createElement('div');

        replyFirstLine.append(replyDiv2, replyDiv3);

        // replyDiv2의 자식 요소 replyMemberIdA, mention, replySpan
        const replyMemberIdA = document.createElement('a');
        replyMemberIdA.classList.add('comment-memberId-m');
        replyMemberIdA.innerText = comment.memberNickname;
        replyMemberIdA.href = '/feed/' + comment.memberNickname;

    
        const replySpan = document.createElement('span');
        replySpan.classList.add('comment-content-m');
        replySpan.innerHTML = comment.commentContent;

        replyDiv2.append(replyMemberIdA, replySpan);

        // commentDiv3의 자식 요소 commentLikeBtn
        const replyLikeBtn = document.createElement('button');
        replyLikeBtn.classList.add('comment-like-btn-m');

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
        createReply.classList.add('create-reply-m');

        replyDiv1.append(replyFirstLine, createReply);

        // createReply의 자식 요소 replyCreateDate, replyBtn, hoverBtn
        const replyCreateDate = document.createElement('span');
        replyCreateDate.innerText = comment.commentCreateDate;

        const replyBtn = document.createElement('button');
        replyBtn.setAttribute('type', 'button');
        replyBtn.classList.add('reply-btn-m');
        replyBtn.innerText = '답글 달기';

        // 답글 달기 버튼 클릭 시 언급 태그 댓글 입력창에 추가
        // 만약 이미 언급된 닉네임일 시 추가 안됨
        // FIXME: 언급된 닉네임일 시 추가 안되게 만들기
        replyBtn.addEventListener('click', () => {
          const commentInput = document.getElementById('commentInputM');
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
          deleteBoardNo = boardNo;
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
    error: () => {},
  });
}

// 모든 답글보기 클릭 시 답글 목록 출력
const moreReplyBtn = document.getElementsByClassName('more-reply');
for (let i = 0; i < moreReplyBtn.length; i++) {
  moreReplyBtn[i].addEventListener('click', () => {
    moreReplyBtn[i].style.display = 'none';

    const replyNo =
      moreReplyBtn[i].previousElementSibling.previousElementSibling.value;
    const replyCommentLi = moreReplyBtn[i].parentElement;

    selectReplyList(replyNo, replyCommentLi);
  });
}



// ------------------------------------------------------------------------------------------------



// 댓글 ...아이콘 클릭 시 메뉴창
const hoverBtn = document.getElementsByClassName('hover-btn');
const commentMenu = document.getElementById('commentMenu');
const loginCommentMenu = document.getElementById('commentMenuL');

for (let item of hoverBtn) {
  item.addEventListener('click', function () {
    const commentMemberId =
      item.parentElement.previousElementSibling.firstElementChild
        .firstElementChild.innerText;

    if (commentMemberId == memberNickname) {
      // 로그인 멤버 닉네임과 일치하면 삭제 메뉴 띄우기
      loginCommentMenu.style.display = 'flex';

      deleteBoardNo =
        item.parentElement.parentElement.parentElement.parentElement
          .parentElement.parentElement.parentElement.parentElement.parentElement
          .nextElementSibling.value;

      deleteCommentUl =
        item.parentElement.parentElement.parentElement.parentElement
          .parentElement;

      deleteCommentNo =
        item.parentElement.parentElement.parentElement.previousElementSibling
          .value;

      
      console.log(deleteCommentUl);
      console.log(deleteCommentNo);
      console.log(deleteBoardNo);
      
    } else {
      commentMenu.style.display = 'flex';
    }

    body.classList.add('scrollLock');
  });
}

// 댓글 메뉴 닫기 버튼 클릭 시
document.getElementById('commentMenuCancel').addEventListener('click', () => {
  commentMenu.style.display = 'none';

  body.classList.remove('scrollLock');
});

// (로그인)댓글 메뉴 닫기 버튼 클릭 시
document.getElementById('commentMenuCancelL').addEventListener('click', () => {
  loginCommentMenu.style.display = 'none';

  body.classList.remove('scrollLock');
});

// TODO: 댓글 삭제 버튼 클릭 시 삭제
const commentDeleteBtn = document.getElementById('commentDeleteBtnL');
commentDeleteBtn.addEventListener('click', () => {
  
  console.log("deleteBoardNo: "+ deleteBoardNo);
  console.log("deleteCommentNo: " + deleteCommentNo);
  console.log(deleteCommentUl);
  console.log("modalOn: " + modalOn);

  $.ajax({
    url: '/comment/delete',
    data: { "commentNo": deleteCommentNo },
      success: (result) => {
        if (result > 0) {
          loginCommentMenu.style.display = 'none';

          const flag = '0';
          
          if(modalOn == 0) {
            selectCommentList(deleteBoardNo, deleteCommentUl, flag);
          }
          
          if(modalOn == 1) {
            selectCommentListM(deleteBoardNo, deleteCommentUl);
            
          }
          body.classList.remove('scrollLock');
        } else {
          console.log('댓글 삭제 실패');
        }
      },
      error: () => {
        console.log('댓글 삭제 에러');
      },
    });
});


const commentInputM = document.getElementById('commentInputM');
const postingBtnM = document.getElementById('postingBtnM');
const commentListUlM = document.getElementById('commentListUl');

// 댓글 모달창 게시 클릭 이벤트 추가
postingBtnM.addEventListener('click', () => {


  console.log("댓글 등록 boardNo: " + boardNo);

  if (commentInputM.value != '') {
    $.ajax({
      url: '/comment/insert',
      type: 'Post',
      data: {
        "memberNo": memberNo,
        "boardNo": boardNo,
        "commentContent": commentInputM.value,
        "upperCommentNo": upperCommentNo,
      },
      success: (result) => {
        if (result > 0) {
          selectCommentListM(boardNo, commentListUlM);
          commentInputM.value = '';
          postingBtnM.setAttribute('disabled', true);
          upperCommentNo = 0;
        }
      },
      error: () => {
        console.log('댓글 등록 오류');
      },
    });
  }
});

// 댓글 모달창 댓글 입력 후 Enter키 입력 시
commentInputM.addEventListener('keypress', e => {

  if (e.key === 'Enter') {

    if (commentInputM.value != '') {
      $.ajax({
        url: '/comment/insert',
        type: 'Post',
        data: {
          "memberNo": memberNo,
          "boardNo": boardNo,
          "commentContent": commentInputM.value,
          "upperCommentNo": upperCommentNo,
        },
        success: (result) => {
          if (result > 0) {
            selectCommentListM(boardNo, commentListUlM);
            commentInputM.value = '';
            postingBtnM.setAttribute('disabled', true);
            upperCommentNo = 0;
          }
        },
        error: () => {
          console.log('댓글 등록 오류');
        },
      });
    }
    
  }
});

   // 댓글 모달창 입력 이벤트 추가

commentInputM.addEventListener('input', () => {
  if (commentInputM.value.trim().length == 0) {
    postingBtnM.setAttribute('disabled', true);
    return;
  } else {
    postingBtnM.removeAttribute('disabled');
    return;
  }
});




