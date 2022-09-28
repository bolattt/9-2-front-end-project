
## How to hide public api key on front end  

Didn't figure that out. 

## Authorization 

For Marvel API,Even after adding api key to the query string, it is sill not authorized. Had to authorize localhost on marvel api settings.

## Response Type 

I was fetching data from waifuai. I was calling .json() on response object and logging  but it's not logging anything to the console.
Turns out response type wasn't json. 
Took me a few hours to figure out use response.text().

## API that didn't get used 

Wanted to do car related project. After searching with VIN, it would show specs, recall info, current market value, and mainteneace by mileage, owner manual  but APIs has very low limits for free tier. 

## Nice to haves 

- fix navbar layout 
- fix gallery css layout using flex box
- add img hover zoom in effects

## Progress


JS

[x] Fetch and display Headlines upon visting home page

[x] Fetch and display data upon search 

[x] Deploy Node Server to bypass cors enabled only for local host 

[x] Connect frontend and backend

[x] Make topic titles links work on home page 

[x] Error handling

[x] Input Validation

[x] Show news details on the page

[ ] Add Pagination 

[ ] Save topics to My topics 

[ ] Display news from saved topics 

[ ] Save News 

[ ] Save to local storage 

--- 

CSS 

[x] Nav links css hover effects 

[x] Color Palette

[x] Overall layout 

[x] Card Design 

[x] search bar design 

[x] Media Queries 

[x] Style topic titles on home page 


--- 

HTML 

[x] Add Favicon 

[x] Add more topic titles to home page 


--- 

ISSUES 

[x] Clicking on Home or Header Logo doesn't repaint the dom with default Headlines
