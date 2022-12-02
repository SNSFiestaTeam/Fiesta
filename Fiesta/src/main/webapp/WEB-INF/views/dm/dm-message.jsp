<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/resources/css/dm/dm-message.css" />
  </head>
  <body>
    <div class="feed-menu-container">
      <div class="feed-menu">
        <div class="feed-menu-btn btn1">  
          <div class="x">
          <img src="/resources/images/x.png">
          </div>
          <div class="message">
            새로운 메시지
          </div>
          <div class="next">
          <button id="next">다음</button>
          </div>
        </div>
        <div class="feed-menu-btn btn2">
          <div>  
            <h4>받는 사람 :</h4>
          </div>  
          <div>
            <input type="text" id="sendPeople" class="search" placeholder="검색...">
          </div>
        </div>
        <div class="feed-menu-btn btn3">
          <span>추천</span>
          

        </div>
      </div>
    </div>
  </body>
</html>
