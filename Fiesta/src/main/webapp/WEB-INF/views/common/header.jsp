<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!-- 헤더 -->
    <header>
      <section id="header-section">
        <!-- 로고 -->
        <section class="logo-section">
          <a href="/main"
            >Fiesta</a>
        </section>
        <!-- 검색창  -->
        <section class="search-section">
          <form action="/search">
            <fieldset>
              <button id="search-glass">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                type="text"
                name="searchInput"
                id="searchInput"
                placeholder="검색"
                autocapitalize="none"
                autocomplete="off"
              />
              <button id="searchX"><i class="fa-solid fa-xmark"></i></button>
            </fieldset>
              
          </form>
        </section>
        <!-- 메뉴 -->
        <nav id="nav-bar">
          <ul>
            <li>
              <button id="searchBtn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
            <li>
              <a href="/main"> <i class="fa-solid fa-house"></i></a>
            </li>
            <li>
              <a href="/dm/dm">
                <i class="fa-regular fa-paper-plane"></i>
              </a>
            </li>
            <%-- new-post버튼 --%>
            <li>
              <button id="newPostOpen">
                <i class="fa-regular fa-square-plus" ></i>
              </button>
            </li>
          
            <li>
              <a href="/feed/popularFeed">
                <i class="fa-regular fa-compass"></i>
              </a>
            </li>

            <li>
              <button>
                <i class="fa-regular fa-bell"></i>
              </button>
            </li>
            <li class="header-menu-parent">
              <label for="header-menu-toggle">
                  <i class="fa-regular fa-user"></i>
              </label>

              <input type="checkbox" id="header-menu-toggle">

              <div id="toggle-menu">
                  <a href="/feed/${loginMember.memberNickname}">프로필</a>
                  <a href="/feed/logout">로그아웃</a>
              </div>
            </li>

          </ul>
        </nav>
      </section>
    </header>
    <section class="toggle-search-section">
      <form action="/search">
        <fieldset>
          <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="검색"
          autocapitalize="none"
          autocomplete="off"
          />
          <button id="search-glass">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </fieldset>
          
      </form>
    </section>
