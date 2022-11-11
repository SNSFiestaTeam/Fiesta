<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>instagram</title>
  <link rel="stylesheet" href="/resources/css/common-style.css" />
  <link rel="stylesheet" href="/resources/css/newpost-text-style.css" />


  <script src="https://kit.fontawesome.com/591746f9e8.js" crossorigin="anonymous"></script>
</head>


<body>
  
  <!-- 메인 섹션 -->
  <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
  <main>
    <form action="#">
      <button name="close" id="close-post">
        <span id="post-x"><i class="fa-solid fa-x"></i></span>
      </button>
    </form>

    <!-- 모달 배경 -->
    <div class="modal_background">
      <!-- 모달 흰창 -->
      <section class="modal_post_section">
        <div class="new-post-background">
          <!-- 게시물 작성 top -->
          <section class="new-post-top-section">
            <div class="new-post-top">
              <button class="new-post-top-back-btn" onclick="history.back()">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <div class="new-post-top-title">새 게시물 만들기</div>
              <button class="new-post-top-next-btn">공유하기</button>
            </div>
          </section>

          <section class="new-post-bottom-section">
            <div class="bottom-left-box">
              <div class="new-post-bottom-file">
                <img id="file" src="/resources/images/37769e3106c8f99048ba73c124844dec.jpg" alt="파일미리보기">
              </div>
            </div>

            <div class="bottom-right-box">
              <div class="new-post-bottom-information">
                <div class="new-post-bottom-member">
                  <img id="file" src="/resources/images/user.jpg" alt="작성자 프로필">
                  <div class="member-nikname">juyeong7063</div>
                </div>

                <div class="new-post-bottom-inputtext">
                  <textarea name="content" rows="8">문구 입력...</textarea>
                </div>

                <div class="new-post-bottom-textsize">
                  <span>0</span>
                  /
                  <span>3000</span>
                </div>

                <div class="new-post-bottom-set">
                  <input type="checkbox" id="set-btn1">
                  <label for="set-btn1">
                    접근성<i class="fa-solid fa-angle-down"></i></label>
                  <div>
                    대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며, 직접 입력할 수도 있습니다.4
                  </div>
                </div>



                <div class="new-post-bottom-set">

                  <input type="checkbox" id="set-btn2">
                  <label for="set-btn2">고급설정<i class="fa-solid fa-angle-down"></i></label>
                  <div class="content">이 게시물의 좋아요 수 및 조회수 숨기기</div>
                </div>
            
              </div>
            </div>
          </section>
          </div>
      </section>
    </div>


    </div>
  </main>
 
</body>

</html>