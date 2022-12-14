const searchForm = document.querySelector(".search-form");
let backendURL = "https://backend-for-box-news.onrender.com/";
const local = "http://localhost:8081/";
const loader = document.querySelector(".loader");
const displayList = document.querySelector(".display-list");
const title = document.querySelector(".main-display .title");
const pagination = document.querySelector(".pagination");

const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector("#myModal");

// backendURL = local;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentPage = 1;
  const input = document.querySelector(".search-input");
  let keyword = input.value.trim();
  input.value = "";
  console.log(keyword);
  fetchNews(`${backendURL}?keyword=${keyword}`, keyword);
});

function fetchNews(url, keyword = "HEADLINES", resetCurPage = false) {
  console.log(url);
  if (resetCurPage) {
    currentPage = 1;
  }
  loader.classList.remove("hide");
  pagination.style.display = "none";

  fetch(url)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.length == 0) {
        displayList.innerHTML = "";
        title.innerText = "NO NEWS FOUND!";
        loader.classList.add("hide");
      } else {
        displayNews(data, keyword);
      }
    })
    .catch((err) => {
      console.log(err);
      loader.classList.add("hide");
      title.innerText = err.message;
    });
}

function displayNews(articles, newTitle) {
  if (currentPage == 1) {
    prev.style.visibility = "hidden";
  } else {
    prev.style.visibility = "";
  }

  displayList.innerHTML = "";
  // const title = document.querySelector(".main-display .title");
  if (newTitle != "HEADLINES") {
    title.innerText =
      newTitle
        .split("%")
        .map((w) => w.toUpperCase())
        .join(" ") + " NEWS";
  } else {
    title.innerText = "HEADLINES";
  }

  for (let article of articles) {
    if (article.urlToImage) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const p = document.createElement("p");

      img.src = article.urlToImage;
      a.append(img);
      // if url includes youtube open in a new tab
      if (article.url.includes("www.youtube.com")) {
        a.href = article.url;
        a.setAttribute("target", "_blank");
      }
      // if it doesn't, show the article on page
      else {
        //  go to server endpoint, server will fetch,parse and send json
        a.href = "#";
        a.setAttribute("data-article-url", article.url);
        li.addEventListener("click", () => {
          showArticle(article.url, article.urlToImage);
        });
      }
      p.textContent = article.title;
      p.classList.add("news-description");

      li.classList.add("card");
      li.append(a);
      li.append(p);

      displayList.append(li);
    }
  }

  loader.classList.add("hide");
  pagination.style.display = "flex";
}

function updateMainDisplay(e) {
  console.log(e.target.textContent);
  const topic = e.target.textContent.toLowerCase();
  currentPage = 1;
  fetchNews(`${backendURL}?keyword=${topic}`, topic);
  hideMenuAfterClick();
}

// For media query, toggle menu

const topicsList = document.querySelector(".topics-list");
const ul = document.querySelector(".nav-links");

function toggleMenu() {
  const toggle = document.querySelector(".nav-toggle");

  if (ul && toggle) {
    toggle.addEventListener("click", () => {
      ul.classList.toggle("show-menu");
      topicsList.classList.toggle("show-topics");
    });
  }
}

toggleMenu();

// hide menu on small screens after click
function hideMenuAfterClick() {
  ul.classList.remove("show-menu");
  topicsList.classList.remove("show-topics");
}

function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.toggle("hide");
}

fetchNews(backendURL);

// Get the modal

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showArticle(articleUrl, imgUrl) {
  const endPoint = backendURL + `details?url=${articleUrl}`;
  loader.classList.remove("hide");
  // go to server end point
  fetch(endPoint)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // const modelContnet = document.querySelector(".modal-content");
      // const modal = document.querySelector("#myModal");
      modalContent.innerHTML = data;
      if (!modalContent.innerHTML.includes("<img src=")) {
        modalContent.innerHTML =
          `<img src=${imgUrl} />` + modalContent.innerHTML;
      }
      loader.classList.add("hide");
      modal.style.display = "block";
    });
}
