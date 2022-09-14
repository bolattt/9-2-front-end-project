const BASE = `https://newsapi.org/v2/top-headlines?country=us`;
const header = {
  headers: {
    Authorization: "9a3c6ce90d4b4958a771bfc5370df6b1",
  },
};
const displayList = document.querySelector(".display-list");
const searchForm = document.querySelector(".search-form");
const backendURL = "https://backend-for-box-news.onrender.com/";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayList.innerHTML = "";

  const input = document.querySelector(".search-input");
  let keyword = input.value.trim();
  input.value = "";
  keyword = keyword.replaceAll(" ", "%");
  const url = `https://newsapi.org/v2/everything?q=${keyword}&soryBy=popularity&searchIn=title&pageSize=21`;

  console.log(url);

  fetchNews(url, header, keyword);
});

function fetchNews(url, header, keyword = "HEADLINES") {
  fetch(url, header)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // displayNews(data.articles, keyword);
      displayNews(data, keyword);
    })
    .catch((err) => console.log(err));
}

function displayNews(articles, newTitle) {
  displayList.innerHTML = "";
  const title = document.querySelector(".main-display .title");
  if (newTitle != "HEADLINES") {
    title.innerText =
      newTitle
        .split("%")
        .map((w) => w.toUpperCase())
        .join(" ") + " NEWS";
  }

  for (let article of articles) {
    if (article.urlToImage) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const img = document.createElement("img");
      const p = document.createElement("p");

      img.src = article.urlToImage;
      a.href = article.url;
      a.append(img);
      a.setAttribute("target", "_blank");
      p.textContent = article.title;
      p.classList.add("news-description");
      p.addEventListener("click", () => {
        window.open(article.url, "_blank");
      });
      li.classList.add("card");
      li.append(a);
      li.append(p);

      displayList.append(li);
    }
  }
}

function updateMainDisplay(e) {
  console.log(e.target.textContent);
  const topic = e.target.textContent.toLowerCase();
  const url = `https://newsapi.org/v2/everything?q=${topic}&soryBy=popularity&searchIn=title&pageSize=21`;
  fetchNews(url, header, topic);
}

fetchNews(BASE, header);
