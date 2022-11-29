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
              id="feedHeaderMenuM"
              class="fa-solid fa-ellipsis feed-header-menu"
            ></button>
          </div>
        </div>

        <div class="comment-container-m">
          <div class="comment-area-m">
            <ul class="comment-list-m two-line">
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
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn-m"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply-m">모든 답글 보기(1개)</a>
              </li>

              <!-- 두번째 댓글(답글 보기 O) -->
              <li class="comment-m">
                <div class="comment-firstchild-m">
                  <a href="#" id="commentProfileM">
                    <img
                      id="commentProfileImageM"
                      src="../../resources/images/장원영.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline-m">
                      <div>
                        <a href="#" class="comment-memberId-m"
                          >for_everyoung10</a
                        >
                        <span class="comment-content-m">사랑해</span>
                      </div>
                      <div>
                        <button class="comment-like-btn-m">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply-m">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn-m"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply-m">답글 숨기기</a>
                <!-- 답글 리스트 -->
                <ul>
                  <!-- 두번째 댓글의 답글 -->
                  <li class="comment-m" id="replyM">
                    <div class="reply-firstchild-m">
                      <a href="#" id="commentProfileM">
                        <img
                          id="commentProfileImageM"
                          src="../../resources/images/karina.jpeg"
                        />
                      </a>
                      <div>
                        <div class="reply-firstline-m">
                          <div>
                            <a href="#" class="comment-memberId-m"
                              >karina_aespas_</a
                            >
                            <a href="#" class="mention-m">@for_everyoung10</a>
                            <span class="comment-content-m"
                              >나두 사랑해 Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Id in ducimus
                              eligendi perferendis, vero labore atque rem iusto
                              autem iure. Odit quos sed rem dicta vero ducimus
                              natus omnis culpa.</span
                            >
                          </div>
                          <div>
                            <button class="comment-like-btn-m">
                              <i class="fa-regular fa-heart"></i>
                            </button>
                          </div>
                        </div>
                        <div class="create-reply-m">
                          <a href="#">2주</a>
                          <a href="#">답글 달기</a>
                          <button
                            type="button"
                            class="fa-solid fa-ellipsis hover-btn-m"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- 세번째 댓글 -->
              <li class="comment-m">
                <div class="comment-firstchild-m">
                  <a href="#" id="commentProfileM">
                    <img
                      id="commentProfileImageM"
                      src="../../resources/images/이영지.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline-m">
                      <div>
                        <a href="#" class="comment-memberId-m">youngji_02</a>
                        <span class="comment-content-m">레전드</span>
                      </div>
                      <div>
                        <button class="comment-like-btn-m">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply-m">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn-m"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply-m">모든 답글 보기(1개)</a>
              </li>

              <!-- 네번째 댓글 -->
              <li class="comment-m">
                <div class="comment-firstchild-m">
                  <a href="#" id="commentProfileM">
                    <img
                      id="commentProfileImageM"
                      src="../../resources/images/이영지.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline-m">
                      <div>
                        <a href="#" class="comment-memberId-m">youngji_02</a>
                        <span class="comment-content-m">레전드</span>
                      </div>
                      <div>
                        <button class="comment-like-btn-m">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply-m">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn-m"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply-m">모든 답글 보기(1개)</a>
              </li>

              <!-- 네번째 댓글 -->
            </ul>
          </div>
        </div>
        <div class="comment-input-area-m">
          <form name="commentForm" action="#">
            <input
              name="comment"
              id="commentInputM"
              class="comment-input-m"
              type="text"
              placeholder="댓글 달기..."
              autocomplete="off"
            />
            <button class="posting-btn" disabled>게시</button>
          </form>
        </div>
      </section>
    </section>
