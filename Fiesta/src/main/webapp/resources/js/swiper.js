new Swiper('.swiper', {
    // autoplay: {
    //   delay: 5000
    // },
    loop: false, // 무한반복 x
    slidesPerView: 1, // 슬라이드 몇개 보여줄지
    spaceBetween: 0, // 슬라이드간 간격
    centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
    pagination: { // 페이징 클릭시 해당영역 이동
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: { // 다음 화상표 버튼
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })

  new Swiper('.preview-swiper', {
    // autoplay: {
    //   delay: 5000
    // },
    loop: false, // 무한반복 x
    slidesPerView: 3, // 슬라이드 몇개 보여줄지
    spaceBetween: 0, // 슬라이드간 간격
    centeredSlides: true, // 활성화된 슬라이드 가운데 보이게 지정
    navigation: { // 다음 화상표 버튼
      prevEl: '.preview-swiper-button-prev',
      nextEl: '.preview-swiper-button-next'
    }
  })