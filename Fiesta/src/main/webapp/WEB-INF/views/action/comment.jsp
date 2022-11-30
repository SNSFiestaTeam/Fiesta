<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

    <section id="commentContainerM">
      <section id="commentListAreaM">
        <div id="writerInfoAreaM">
          <div id="writerInfoM">
            <a href="html/profile/memberfeed(신아민) .html" id="profilePhotoM">
              <img
                id="feedProfileImageM"
                src="../../resources/images/karina.jpeg"
              />
            </a>
            <a href="#" class="feed-memberId-m">karina_aespas_</a>
          </div>
          <div>
            <button
              type="button"
              id="commentListXBtn"
              class="comment-list-x-btn"
            >&times;</button>
          </div>
        </div>

        <div class="comment-container-m">
          <div class="comment-area-m">
            <ul class="comment-list-m" id = "commentListUl">
              <!-- 첫번째 댓글(답글 보기 X) -->
              <li class="comment-m">
                <div class="comment-firstchild-m">
                  <a href="#" id="commentProfileM">
                    <img
                      id="commentProfileImageM"
                      src="../../resources/images/안유진.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline-m">
                      <div>
                        <a href="#" class="comment-memberId-m">_yujin_an</a>
                        <span class="comment-content-m"
                          >이 언니 넘모 이뿌당</span
                        >
                      </div>
                      <div>
                        <button class="comment-like-btn-m">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply-m">
                      <span>2주</span>
                      <button>답글 달기</button>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn"
                      ></button>
                    </div>
                  </div>
                </div>
                <button class="more-reply-m">모든 답글 보기(1개)</button>
              </li>
            </ul>
          </div>
        </div>
        <div class="comment-input-area-m">
          <div>
            <textarea id="commentInputM" class="comment-input-m" placeholder="댓글 달기..."></textarea>
            <button class="posting-btn-m" id="postingBtnM" disabled>게시</button>
          </div>
        </div>
      </section>
    </section>