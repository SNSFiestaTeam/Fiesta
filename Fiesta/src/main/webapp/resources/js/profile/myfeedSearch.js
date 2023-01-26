const toggleSearchForm = document.getElementById("toggleSearchForm");
const toggleSearchSections = document.getElementById("toggleSearchSection");

toggleSearchForm.classList.toggle("myfeed-toggle");
toggleSearchSections.classList.toggle("height-toggle");

document.getElementById("searchBtn").addEventListener("click", () => {
    toggleSearchForm.style.marginTop = "10px";
    toggleSearchForm.classList.toggle("myfeed-toggle");
    toggleSearchSections.classList.toggle("height-toggle");
})