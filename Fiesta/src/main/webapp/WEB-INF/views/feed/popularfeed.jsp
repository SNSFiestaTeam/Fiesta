<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>instagram</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/popularfeed.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-file-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-eidt-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-text-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-finish-style.css" />
    <link rel="stylesheet" href="/resources/css/board/newpost-close-style.css" />
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
      <jsp:include page="/WEB-INF/views/common/header.jsp"/>
   <main>
      <section class="feed-section">
        <div class="img-container">
          <a href="#">

            <img class="feed-img" src="/resources/images/다운로드.jpeg" />

            <div class="hover-icon-container">
              <i class="fa-regular fa-heart"></i><span>20</span>
              <i class="fa-regular fa-comment"></i><span>333</span>
            </div>
          </a>
          <a href="#">

            <img class="feed-img" src="/resources/images/다운로드 (1).jpeg" />

            <div class="hover-icon-container">
              <i class="fa-regular fa-heart"></i><span>159</span>
              <i class="fa-regular fa-comment"></i><span>21</span>
            </div>
          </a>
          <a href="#">

            <img class="feed-img" src="/resources/images/다운로드 (2).jpeg" />

            <div class="hover-icon-container">
              <i class="fa-regular fa-heart"></i><span>97</span>
              <i class="fa-regular fa-comment"></i><span>81</span>
            </div>
          </a>
      </div>

      <div class="img-container2">
        <a href="#">
          <img class="feed-img" src="/resources/images/7500f8049b8275ee14fd49e0a253a129.jpg" />
          <div class="hover-icon-container">
            <i class="fa-regular fa-heart"></i><span>1</span>
            <i class="fa-regular fa-comment"></i><span>1</span>
          </div>
        </a>
        <a href="#">

          <img class="feed-img" src="/resources/images/다운로드 (3).jpeg" />

          <div class="hover-icon-container">
            <i class="fa-regular fa-heart"></i><span>658</span>
            <i class="fa-regular fa-comment"></i><span>12</span>
          </div>
        </a>
        <a href="#">
          <img class="feed-img" src="/resources/images/37769e3106c8f99048ba73c124844dec.jpg" />
          <div class="hover-icon-container">
            <i class="fa-regular fa-heart"></i><span>334</span>
            <i class="fa-regular fa-comment"></i><span>12</span>
          </div>
        </a>
      </div>
        
      <div class="img-container3">
        <a href="#">
          <img class="feed-img" src="/resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" />
          <div class="hover-icon-container">
            <i class="fa-regular fa-heart"></i><span>784</span>
            <i class="fa-regular fa-comment"></i><span>2356</span>
          </div>
        </a>
        <a href="#">
          <img class="feed-img" src="/resources/images/1973ca8ce1b8dc4bac38683bc39d7fbd.jpg" />
          <div class="hover-icon-container">
            <i class="fa-regular fa-heart"></i><span>7654</span>
            <i class="fa-regular fa-comment"></i><span>5556</span>
          </div>
        </a>
        <a href="#">
          <img class="feed-img" src="/resources/images/2159c9572a920ef17d26d2d57b76d7a8.jpg" />
          <div class="hover-icon-container">
            <i class="fa-regular fa-heart"></i><span>17906</span>
            <i class="fa-regular fa-comment"></i><span>7445</span>
          </div>
        </a>
      </div>
      </section>
    </div>

    <jsp:include page="/WEB-INF/views/board/newpost-file.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-eidt.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-text.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-close.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-finish.jsp" />
    <jsp:include page="/WEB-INF/views/board/newpost-update.jsp" />
  </main>
    
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>

  </body>

  <script src="/resources/js/common/common.js"></script>
  <script src="/resources/js/newpost.js"></script>
  <script src="/resources/js/boardWriteUpdate.js"></script>
    
</html>