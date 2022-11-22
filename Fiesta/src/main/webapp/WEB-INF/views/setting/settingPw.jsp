<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>instagram</title>
    <link rel="stylesheet" href="/resources/css/common-style.css" />
    <link rel="stylesheet" href="/resources/css/setting/settingPw-style.css">
    <script
      src="https://kit.fontawesome.com/591746f9e8.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
      <!-- 헤더 -->
      <jsp:include page="/WEB-INF/views/common/header.jsp"/>
    <!-- 메인 섹션 -->
    <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
    <main>
        <section class="setting-content">
            
            <section class="left-side">
    
                <ul class="list-group">
                    <li><a href="/setting/setting">프로필 편집</a></li>
                    <li><a href="/setting/setting/Pw">비밀번호 변경</a></li>
                    <li><a href="/setting/setting/3">개인정보 및 보안</a></li>
                </ul>
                
            </section>
    
            <section class="setting-main">
                <div class="top">
                    <aside class="menu-left">
                        <img src="../../resources/images/user.jpg" class="pro-img">
                    </aside> 
                    <h1 class="loginid">${loginMember.memberNickname}</h1>
                </div>
              <form action="Pw" id="changePwForm" method="POST">
                <div class="pre-pw">
                    <aside class="menu-left">
                        이전 비밀번호
                    </aside>
                    <input type="password" id="currentPw" name="currnetPw">
                </div>
                <div class="new-pw">
                    <aside class="menu-left">
                        새 비밀번호
                    </aside>
                     <input type="password" id="newPw" name="newPw">
                </div>

                <div class="new-pw2">
                    <aside class="menu-left">
                        새 비밀번호 확인
                    </aside>
                    <input type="password" id="newPwConfirm" name="newPwConfirm">
                </div>
                <div class="ch-btn">
                    <aside class="menu-left">
                    </aside>
                    <button class="change-button">비밀번호 변경</button>                    
                </div>
                <div class="forget">
                    <aside class="menu-left">
                    </aside>
                    <a href="#">비밀번호를 잊으셨나요?</a>
                </div>
              </form>
                
                
            </section>
          </section>
    </main>
    <!-- 푸터 -->
    <jsp:include page="/WEB-INF/views/common/footer.jsp"/>


    <script src="/resources/js/setting/settingPw.js"></script>
  </body>
</html>
