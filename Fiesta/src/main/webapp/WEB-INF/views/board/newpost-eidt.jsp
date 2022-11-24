<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<section class="modal_background" id="modalBackgroundEidt">
      <!-- 작성 닫기 버튼 -->
      <div class="new-post-close" id="newPostClosePostEdit">&times;</div>
      <!-- post 배경 -->
      <section class="modal_post_section_edit">
        <!-- post top -->
        <div class="new-post-top-edit">
          <div id="backBtnedit">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <p>자르기</p>  
          <button id="editNextBtn">다음</button>
        </div>
        <div class="new-post-bottom-edit">
          <div class="album swiper">
            <div class="images swiper-wrapper" id="slideImages">  
              <div class="eidt-file swiper-slide"><img id="eidtFile" src="../../resources/images/박보검.gif" alt="파일미리보기">
              </div>
              <div class="eidt-file swiper-slide"><img id="eidtFile"
                  src="../../resources/images/1973ca8ce1b8dc4bac38683bc39d7fbd.jpg" alt="파일미리보기"></div>
              <div class="eidt-file swiper-slide"><img id="eidtFile"
                  src="../../resources/images/20e6905c2155885b86dc81e6a63fc88b.jpg" alt="파일미리보기"></div>
              <div class="eidt-file swiper-slide"><img id="eidtFile"
                  src="../../resources/images/37769e3106c8f99048ba73c124844dec.jpg" alt="파일미리보기"></div>
              <div class="eidt-file swiper-slide"><img id="eidtFile"
                  src="../../resources/images/7500f8049b8275ee14fd49e0a253a129.jpg" alt="파일미리보기"></div>
            </div>
          </div>

          <div class="swiper-pagination"></div>

          <div class="siltde-btn-area slide-controller">
            <div class="swiper-button-prev">
              <!-- <div class="material-icons">arrow_back</div> -->
            </div>
            <div class="swiper-button-next">
              <!-- <div class="material-icons">arrow_forward</div> -->
            </div>
          </div>

          <div class="img-btn">
            <!-- 이미지 확대 축소 -->
            <div class="new-post-btn-menu">
              <input id="check-btn1" type="checkbox" name="btn" />
              <label for="check-btn1">
                
                <div class="btn-background"><i class="fa-solid fa-magnifying-glass-plus"></i> </div>
              </label>
              <div class="cut"><input type="range" min="1" max="10"></div>
            </div>

            <!-- 이미지 추가 -->
            <div class="new-post-btn-menu">
              <input id="check-btn2" type="checkbox" name="btn" />
              <label for="check-btn2">
                <div class="btn-background"><i class="fa-regular fa-square-plus fa-xs"></i> </div>
              </label>
              <!-- img 미리보기 -->
              <div class="add">
                <div class="add-files">

                  <div class="files-preview" id="filesPreview">

                    <div class="file-preview-and-remove preview-swiper">
                      <div class="file-preview swiper-wrapper" id="filePreview">
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>
                        <div class="preview-file swiper-slide">

                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">

                          <div class="remove">&times;</div>
                        </div>


                      </div>
                      
                      
                      
                      
                      
                      
                      
                      <div class="preview-controller">
                        <div class="preview-btn preview-swiper-button-prev">
                          <div class="material-icons">arrow_back</div>
                        </div>
                        <div class="preview-btn preview-swiper-button-next">
                          <div class="material-icons">arrow_forward</div>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                  <div class="edit-add-file-input">
                    <label for="addFileInput"><i class="fa-solid fa-plus"></i></label>
                    <input type="file" name="addFileInput" id="addFileInput" hidden>
                  </div>
                  <!-- <label for="add-file-input"><i class="fa-solid fa-plus"></i></label>
                  <input type="file" name="add-file-input" id="add-file-input"> -->
                  <!-- <p class="preview-controller">
                      <span class="preview-prev" id="previewPrev">&lang;</span>  
                      <span class="preview-next" id="previewNext">&rang;</span>
                    </p> -->
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


    </section>