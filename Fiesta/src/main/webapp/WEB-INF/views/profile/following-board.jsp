<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="feedMember" value="${feedMap.feedMember}"></c:set>

    <div class="following-container" id="following-container">
      <div class="following-menu">

        <div class="following-title">
          <span class="following-space"></span>
            <span>팔로잉</span>

            <span>
              <button id="following-close" class="following-close">
                <i class="fa-solid fa-x"></i>
              </button>
            </span>
        </div>

        <div class="following-subtitle">
          <button id="following-people">사람</button>
          <button>해시태그</button>
        </div>

        <div class="list-container" id="followingList">
          <%-- <div class="following-content">
            <div>
              <div>
                <span><img src="/resources/images/안유진.jpg"></span>
                <span><a href="">안유진</a></span>
              </div>
              <button class="following-div">팔로잉</button>
            </div>
          </div> --%>
        </div>
          <input type="hidden" id="following-to-nickname" value="${feedMember.memberNickname}">
      </div>
    </div>
   