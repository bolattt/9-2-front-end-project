# Box News 

It's a responsive news website using [news api](https://newsapi.org/). 

It displays top headlines upon visiting the home page. 

There are different headings on the homepage and a search bar. 

When users click a heading or make a  search, it will make a fetch request and repaint the dom. 

--- 

News api only enables CORS for localhost. 

So, I setup a basic backend server to bypass CORS issues. 

It's deployed on [render](https://render.com).

Please be patient when visiting the page for the first time. 

Backend server takes a while to wake up. 

--- 

Added the feature to read the news details on the page instead of going to the source on a new tab. 

On the server side,  Axios is used to get html of the news, JSDOM to create dom tree and Mozilla Readability to get the content. 





[Live Demo](https://bolattt.github.io/9-2-front-end-project/)

[Backend](https://github.com/bolattt/backend-for-box-news)






