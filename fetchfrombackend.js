const backendURL = "https://backend-for-box-news.onrender.com/";

fetch(backendURL)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
