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
        <%-- post bottom --%>
        <div class="new-post-bottom-edit">
          <div class="album swiper">
          <%-- 이미지 리스트 묶음 --%>
            <div class="images swiper-wrapper " id="slideImages">  
            <%-- 이미지 리스트 --%>
              
              <%-- <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
                   
                   <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
                   <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
                   <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
                   <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
                   <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
                   <div class="edit-file swiper-slide"><img id="cropper-img" class="ready" src="../../resources/images/박보검.gif" alt="파일미리보기">
              </div> --%>
            </div>
          </div>
          <%-- 줌 슬라이더 --%>
          <div id="zoom-slider"></div>
          <div id="zoom-slider0"></div>
          <div id="zoom-slider1"></div>
          <div id="zoom-slider2"></div>
          <div id="zoom-slider3"></div>
          <div id="zoom-slider4"></div>
          <div id="zoom-slider5"></div>
 
          <%-- 사진 몇번째 인지 밑에 보여주는거 --%>
          <div class="swiper-pagination"></div>
          <%-- 이미지 슬라이드 좌우 버튼 --%>
          <div class="siltde-btn-area slide-controller">
            <div class="sild-file-btn swiper-button-prev" id="prewBtn"></div>
            <div class="sild-file-btn swiper-button-next" id="nextBtn"></div>
          </div>

           <div class="img-btn">
            <!-- 이미지 확대 축소 -->
            <div class="new-post-btn-menu">
              <input id="check-btn1" type="checkbox" name="btn" />
              <label for="check-btn1" id="zoomBtn">
                
                <div class="btn-background"><i class="fa-solid fa-magnifying-glass-plus"></i> </div>
              </label>
              <div class="cut">
                <div class="slider-val-area">
                    <span id="minZoomVal" class="pull-left">0</span>
                </div>
                <div class="slider-val-area">
                    <span id="maxZoomVal" class="pull-right">1</span>
                </div>
                <%-- <input type="range" min="1" max="10" value="1" id="zoomInOut">
                <p>Value: <span id="value"></span></p> --%>
              </div>
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
                      
                        <%-- <div class="preview-file swiper-slide">
                          <img src="../../resources/images/다운로드 (1).jpeg" alt="파일미리보기">
                          <div class="preview-remove">&times;</div>
                        </div> --%>
                        

                      </div>

                      <div class="preview-controller">
                        <div class="preview-btn preview-swiper-button-prev">&lsaquo;</div>
                        <div class="preview-btn preview-swiper-button-next">&rsaquo;</div>
                      </div>
                    </div>
                  </div>

                  <div class="edit-add-file-input">
                    <label for="addFileInput"><i class="fa-solid fa-plus"></i></label>
                    <input type="file" name="addFileInput" id="addFileInput" hidden none accept="image/*" multiple >
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


    </section>


    </section>