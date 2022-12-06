<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


  <!-- 메인 섹션 -->
  <!-- main 태그 안쪽에 구현할 태그 작성해주시면 됩니다. -->
  <!-- 모달 배경 -->
  <div class="modal_background" id="modalBackgroundUpdate">
    <!-- 닫기버튼 -->
    <div class="new-post-close" id="updateClose">&times;</div>
    <!-- post 배경 -->
    <section class="modal_post_section-text" >
      <!-- post top -->
      <div class="new-post-top-text">
        <div id="updateClose2">취소</div>
        <p>정보 수정</p>
        <button name="newpostText" id="update">완료</button>
      </div>
      <!-- post-bottom -->
      <div class="new-post-bottom-text">
        <div class="bottom-left-box">
         <%-- <c:forEach var="i" begin="${start}" end="${fn:length(board.imageList) - 1}">
            <img src="${board.imageList[i].imagePath}${board.imageList[i].imageReName}">
          </c:forEach> --%>
          <%-- <img id="file" src=""> --%>

        </div>

        <div class="bottom-right-box">
          <div class="new-post-bottom-information">
            <div class="new-post-bottom-member">
              <img id="file" src="../../resources/images/user.jpg" alt="작성자 프로필">
              <div class="member-nikname">${loginMember.memberNickname}</div>
            </div>

            <div class="new-post-bottom-inputtext">
              <textarea name="content" rows="5" placeholder="문구 입력..."></textarea>
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
                대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며, 직접 입력할 수도 있습니다.
                <div class="postFileText-area">
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                  <div class="postFileText">
                    <img id="eidtFile" src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                    <input type="text" name="postFileText" placeholder="대체 텍스트 입력...">
                  </div>
                </div>
              </div>
            </div>



            

          </div>
        </div>
      </div>
    </section>



  </div>




