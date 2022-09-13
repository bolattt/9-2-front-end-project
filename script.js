const BASE = "https://newsapi.org/v2/top-headlines?country=us";
const header = {
  headers: {
    Authorization: "9a3c6ce90d4b4958a771bfc5370df6b1",
  },
};
const displayList = document.querySelector(".display-list");

// fetch(BASE, header)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     displayNews(data.articles);
//   })
//   .catch((err) => console.log(err));

function displayNews(articles) {
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
