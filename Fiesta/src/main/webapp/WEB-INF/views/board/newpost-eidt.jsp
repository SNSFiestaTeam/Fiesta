<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>instagram</title>
  <link rel="stylesheet" href="/resources/css/common-style.css" />
  <link rel="stylesheet" href="/resources/css/newpost-eidt-style.css" />


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
              <div class="new-post-top-title">자르기</div>
              <button class="new-post-top-next-btn">다음</button>
            </div>
          </section>

          <!-- 게시물 작성 bottom -->
          <section class="new-post-bottom-section">
            <div class="new-post-file-input-box">
              <!-- 사진 편집 -->
              <div class="file-eidt">
                <!-- post파일 -->
                <img id="file" src="/resources/images/3bfe8e6e6ee1f835a979cd1baad59d06.jpg" alt="파일미리보기">

                <!-- 다음 사진 보기 -->
                <div class="img-next-view">
                  <div class="btn-background">
                    <i class="fa-solid fa-chevron-right fa-xs"></i>
                  </div>
                </div>

                <div class="img-btn">
                  <!-- 이미지 편집 -->
                  <div class="new-post-btn-menu">
                    <input id="check-btn1" type="checkbox" name="btn" />
                    <label for="check-btn1">
                      <div class="btn-background"><i class="fa-solid fa-scissors fa-xs"></i> </div>
                    </label>
                    <div class="cut">
                      <div class="cut-1">원본<i class="fa-regular fa-image fa-lg"></i></div>
                      <div class="cut-2">1:1<i class="fa-regular fa-square fa-lg"></i></div>
                    </div>
                  </div>

                  <!-- 이미지 추가 -->
                  <div class="new-post-btn-menu">
                    <input id="check-btn2" type="checkbox" name="btn" />
                    <label for="check-btn2">
                      <div class="btn-background"><i class="fa-regular fa-square-plus fa-xs"></i> </div>
                    </label>
                    <div class="add">
                      <div class="add-1">
                        <div class="new-post-files">
                          <div class="first-file"></div>
                        </div>
                      
                      </div>
                      
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </main>

<link rel="stylesheet" href="/resources/css/newpost-file-style.css" />
<link rel="stylesheet" href="/resources/css/newpost-post-style.css" />
<link rel="stylesheet" href="/resources/css/newpost-eidt-style.css" />

<jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
<jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
<jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />

<script src="/resources/js/newpost.js"></script>

</body>

</html>