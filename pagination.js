const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const articlesPerPage = 25;
let currentPage = 1;

prev.addEventListener("click", () => {});

next.addEventListener("click", () => {});

/* 
    Pagination Logic 

    On 1st page, disable prev button 
    On last page, disable next button
    On 1st page, show articlesPerPage 

    on clicking next button,
        make a new fetch to backend server 
        currentPage + 1; 
        enable prev button; 




*/
