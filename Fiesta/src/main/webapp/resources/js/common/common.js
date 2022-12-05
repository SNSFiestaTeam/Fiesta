// 검색 모달창 
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => { 

  const toggleSearchSection = document.getElementById('toggleSearchSection');

  if (toggleSearchSection.classList.contains('hide')) {
    toggleSearchSection.classList.remove('hide');
    toggleSearchSection.classList.remove('disappear');
    toggleSearchSection.classList.add('appear');
  } else {
    toggleSearchSection.classList.add('disappear');
    toggleSearchSection.classList.remove('appear');

    setTimeout(() => {
      toggleSearchSection.classList.add('hide')
    }, 500);
  }

  const toggleSearchInput = document.getElementById('toggleSearchInput');
  const searchGlass = document.getElementById('searchGlass');

  toggleSearchInput.addEventListener('input', () => { 
    if (toggleSearchInput.value.trim().length == 0) {
      searchGlass.setAttribute('disabled', true);
      return;
    } else {
      searchGlass.removeAttribute('disabled');
      return;
    }
  });


  commentInputM.addEventListener('input', () => {
    if (commentInputM.value.trim().length == 0) {
      postingBtnM.setAttribute('disabled', true);
      return;
    } else {
      postingBtnM.removeAttribute('disabled');
      return;
    }
  });

  document.getElementById('toggleSearchForm').addEventListener('submit', () => { 
    toggleSearchSection.classList.add('disappear');
    toggleSearchSection.classList.remove('appear');

    setTimeout(() => {
      toggleSearchSection.classList.add('hide')
    }, 500);
  });
});


