const cors = "https://cors-anywhere.herokuapp.com/";

const BASE = `${cors}https://newsapi.org/v2/top-headlines?country=us`;
const header = {
  headers: {
    Authorization: "9a3c6ce90d4b4958a771bfc5370df6b1",
  },
};
const displayList = document.querySelector(".display-list");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  displayList.innerHTML = "";

  const input = document.querySelector(".search-input");
  let keyword = input.value;
  input.value = "";
  keyword = keyword.replaceAll(" ", "%");
  const url = `${cors}https://newsapi.org/v2/everything?q=${keyword}&soryBy=popularity&searchIn=title&pageSize=20`;

  console.log(url);

  fetchNews(url, header, keyword);
});

function fetchNews(url, header, keyword = "Headlines") {
  fetch(url, header)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      displayNews(data.articles, keyword);
    })
    .catch((err) => console.log(err));
}

function displayNews(articles, newTitle) {
  const title = document.querySelector(".main-display .title");
  if (newTitle != "Headlines") {
    title.innerText =
      newTitle
        .split("%")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ") + " News";
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

fetchNews(BASE, header);
