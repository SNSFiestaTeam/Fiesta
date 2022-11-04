<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>instagram</title>
    <link rel="stylesheet" href="../../resources/css/common-style.css" />
    <link rel="stylesheet" href="../../resources/css/setting3-style.css">
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
      <!-- 헤더 -->
      <header>
        <section id="header-section">
          <!-- 로고 -->
          <section class="logo-section">
            <a href="#"
              >Fiesta</a>
          </section>
          <!-- 검색창 -->
          <section class="search-section">
            <form action="#">
              <fieldset>
                <button id="search-glass">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="text"
                  name="search"
                  id="searchInput"
                  placeholder="검색"
                  autocapitalize="none"
                  autocomplete="off"
                />
                <button id="searchX"><i class="fa-solid fa-xmark"></i></button>
              </fieldset>
                
              </button>
            </form>
          </section>
          <!-- 메뉴 -->
          <nav id="nav-bar">
            <ul>
              <li>
                <a href="#"> <i class="fa-solid fa-house"></i></a>
              </li>
              <li>
                <a href="../dm/dm(용환재).html">
                  <i class="fa-regular fa-paper-plane"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-regular fa-square-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-regular fa-compass"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-regular fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-regular fa-user"></i>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>

    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
      <section class="setting-content">
            
        <section class="left-side">

            <ul class="list-group">
                <li><a href="../setting/setting(용환재).html">프로필 편집</a></li>
                <li><a href="../setting/settingPw(용환재).html">비밀번호 변경</a></li>
                <li><a href="../setting/setting3(용환재).html">개인정보 및 보안</a></li>
            </ul>
            
        </section>

        <section class="setting-main">
            <section class= account>
              <h2>계정 공개 범위</h2>
              <input type="radio" name="account"> 모두 공개
              <input type="radio" name="account"> 팔로워 공개
              <input type="radio" name="account"> 비공개
              <p class="note"> 계정이 비공개 상태인 경우 회원님이 승인한 사람만 Instagram에서 회원님의 사진과 동영상을 볼 수 있습니다. 기존 팔로워는 영향을 받지 않습니다. </p>
            </section>
            
      

            <section class="post">
              <h2>게시물</h2>
              <span class="like-1">좋아요 및 조회수</span>
              <div class="post-1"> 
                <span class="like-2">좋아요, 재생 및 조회수 숨기기</span>
                <input type="checkbox" id="chk1"><label for="chk1"><span></span></label>
              </div>
                <span class="like-3">다른 계정에서 올린 게시물의 좋아요, 재생 및 조회수가 숨겨집니다. 공유하기 전에 고급 설정으로 이동하여 회원님 게시물의 좋아요, 재생 및 조회수를 숨길 수 있습니다.</span>
            </section>

        </section>
      </section>
    </main>
    <!-- 푸터 -->
    <footer>
      <p>
        Copyright &copy; KH Information Educational Institute A-Class SNS Team
      </p>
      <article>
        <a href="#">프로젝트 소개</a>
        <span>|</span>
        <a href="#">이용약관</a>
        <span>|</span>
        <a href="#">개인정보처리방침</a>
        <span>|</span>
        <a href="#">고객센터</a>
      </article>
    </footer>


  </body>
</html>
