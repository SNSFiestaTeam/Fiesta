
    <section id="commentContainer">
      <section id="commentListArea">
        <div id="writerInfoArea">
          <div id="writerInfo">
            <a href="html/profile/memberfeed(신아민) .html" id="profile-photo">
              <img
                id="feed-profile-image"
                src="../../resources/images/karina.jpeg"
              />
            </a>
            <a href="#" class="feed-memberId">karina_aespas_</a>
          </div>
          <div>
            <button
              type="button"
              id="feed-header-menu"
              class="fa-solid fa-ellipsis feed-header-menu"
            ></button>
          </div>
        </div>

        <div class="comment-container">
          <div class="comment-area">
            <ul class="comment-list two-line">
              <!-- 첫번째 댓글(답글 보기 X) -->
              <li class="comment">
                <div class="comment-firstchild">
                  <a href="#" id="comment-profile">
                    <img
                      id="comment-profile-image"
                      src="/resources/images/안유진.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline">
                      <div>
                        <a href="#" class="comment-memberId">_yujin_an</a>
                        <span class="comment-content">이 언니 넘모 이뿌당</span>
                      </div>
                      <div>
                        <button class="comment-like-btn">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply">모든 답글 보기(1개)</a>
              </li>

              <!-- 두번째 댓글(답글 보기 O) -->
              <li class="comment">
                <div class="comment-firstchild">
                  <a href="#" id="comment-profile">
                    <img
                      id="comment-profile-image"
                      src="/resources/images/장원영.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline">
                      <div>
                        <a href="#" class="comment-memberId">for_everyoung10</a>
                        <span class="comment-content">사랑해</span>
                      </div>
                      <div>
                        <button class="comment-like-btn">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply">답글 숨기기</a>
                <!-- 답글 리스트 -->
                <ul>
                  <!-- 두번째 댓글의 답글 -->
                  <li class="comment" id="reply">
                    <div class="reply-firstchild">
                      <a href="#" id="comment-profile">
                        <img
                          id="comment-profile-image"
                          src="/resources/images/karina.jpeg"
                        />
                      </a>
                      <div>
                        <div class="reply-firstline">
                          <div>
                            <a href="#" class="comment-memberId"
                              >karina_aespas_</a
                            >
                            <a href="#" class="mention">@for_everyoung10</a>
                            <span class="comment-content">나두 사랑해</span>
                          </div>
                          <div>
                            <button class="comment-like-btn">
                              <i class="fa-regular fa-heart"></i>
                            </button>
                          </div>
                        </div>
                        <div class="create-reply">
                          <a href="#">2주</a>
                          <a href="#">답글 달기</a>
                          <button
                            type="button"
                            class="fa-solid fa-ellipsis hover-btn"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <!-- 세번째 댓글 -->
              <li class="comment">
                <div class="comment-firstchild">
                  <a href="#" id="comment-profile">
                    <img
                      id="comment-profile-image"
                      src="/resources/images/이영지.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline">
                      <div>
                        <a href="#" class="comment-memberId">youngji_02</a>
                        <span class="comment-content">레전드</span>
                      </div>
                      <div>
                        <button class="comment-like-btn">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply">모든 답글 보기(1개)</a>
              </li>

              <!-- 네번째 댓글 -->
              <li class="comment">
                <div class="comment-firstchild">
                  <a href="#" id="comment-profile">
                    <img
                      id="comment-profile-image"
                      src="/resources/images/이영지.jpg"
                    />
                  </a>
                  <div>
                    <div class="comment-firstline">
                      <div>
                        <a href="#" class="comment-memberId">youngji_02</a>
                        <span class="comment-content">레전드</span>
                      </div>
                      <div>
                        <button class="comment-like-btn">
                          <i class="fa-regular fa-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div class="create-reply">
                      <a href="#">2주</a>
                      <a href="#">답글 달기</a>
                      <button
                        type="button"
                        class="fa-solid fa-ellipsis hover-btn"
                      ></button>
                    </div>
                  </div>
                </div>
                <a href="#" class="more-reply">모든 답글 보기(1개)</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="comment-input-area">
          <form name="commentForm" action="#">
            <input
              name="comment"
              id="commentInput"
              class="comment-input"
              type="text"
              placeholder="댓글 달기..."
              autocomplete="off"
            />
            <button class="posting-btn" disabled>게시</button>
          </form>
        </div>
      </section>
    </section>
