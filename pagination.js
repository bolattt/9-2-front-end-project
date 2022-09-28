const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const articlesPerPage = 25;
let currentPage = 1;
let resultsShown = 0;

prev.addEventListener("click", () => {
  const url = backendURL + `pagination?page=${--currentPage}`;
  changePage(url);
});

next.addEventListener("click", () => {
  const url = backendURL + `pagination?page=${++currentPage}`;
  changePage(url);
});

function changePage(url) {
  console.log("url for paginatin", url);
  const keyword = title.innerText
    .split(" ")
    .filter((word) => word.toLowerCase() != "news")
    .join(" ");
  fetchNews(url, keyword);
}

/* 
    Pagination  

    On 1st page, disable prev button 
    On last page, disable next button
    On 1st page, show articlesPerPage 

    on clicking next button,
        currentPage + 1; 
        make a new fetch to backend server 
        enable prev button; 

*/
