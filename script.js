const BASE = "https://newsapi.org/v2/top-headlines?country=us";
const header = {
  headers: {
    Authorization: "9a3c6ce90d4b4958a771bfc5370df6b1",
  },
};

fetch(BASE, header)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
