<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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

  <c:if test="${ not empty message }"> 
      <script>
        // alert("${message}");
        const line = document.getElementById("line");
        
        line.innerHTML = "${message}";
        line.classList.add("lineFont");

        line.style.display = "inline";
        line.style.textAlign = "center";


      </script>

    <c:remove var="message" />
  </c:if>
