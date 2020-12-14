# V1 of my website! [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fabspen1%2Fabspen1.github.io&count_bg=%23323330&title_bg=%23F0DB4F&icon=&icon_color=%23E7E7E7&title=JS&edge_flat=false)](https://hits.seeyoufarm.com)
My website, now being redirected now to my domain [austinspencer.works](austinspencer.works)

### Check out [V2](https://github.com/abspen1/V2) of my website, built with Vue framework!

## About
* Added info form that can email me when someone wants to send me something!
* Was able to do this with my [backend](https://github.com/abspen1/go-backend) in Go

## Social Links
* Broke Facebook link since I don't really use Facebook or expect people clicking that link often

## Contact Page
* Allows people to enter their name, email, and a message that will get emailed to me
* Uses [Go backend](https://github.com/abspen1/go-backend) to send me the email with the user's contact information
* Once user submits their info a new screen will show thanking them with a link to the home page
* Uses a go package to ensure emails are valid and also the JavaScript app makes sure that all input fields are filled 

## Projects
* Most of my personal coding projects are within these sources
* I love keeping a high percantage of my code as open-source
* I have recently added some screen-recorded demos of the Java projects running
* I might try to do more of this for projects I can't have a webpage for

### Hangman
* Added random-words generator with browserify 😍

### Rock Paper Scissors
* Included Rock Paper Scissors game in JavaScript projects
* Code from [freecodecamp](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=871s)
* Added backend to the game with Axios and browserify
   * You can now plug in your email and it will get your total score
* I might add where you can clear your score
* User score is stored in Redis on my [backend](https://github.com/abspen1/go-backend)

## Next Project
* Uses my [backend](https://github.com/abspen1/go-backend) to persist data
* Might need to adjust the format of the description string..
* Backend is running on guldentech.com

## 404 Page
* Added a wild 404 page with some crazy colors
* There is a link back to home page

## To-Do
* Add README to individual folders that we link to

## Sources
### Animated Background
* Not currently using this since I couldn't get it to work with a header
* [Kumar Kuila](https://codepen.io/uiswarup/pen/XWdXGGV)

### Fancy Hover
* Not using this right now but going to leave here as reference for future use possibly
* [Shaw](https://codepen.io/shshaw/pen/MoxrPV)

### Project Page
* [Adam Alston](https://github.com/adamalston/v1) has his website open-source as well.. I pulled the styles for this page from there
* I also got the idea for the footer/header on pages from his website. 
* Program language logos all from [Logo Wine](https://www.logo.wine/Technology)

### New Project
* [fs/browserify/brfs](https://github.com/browserify/brfs)
* If you use 'fs' package
    * $ browserify -t brfs page.js > bundle.js
* If not, you dont need the brfs tag
    * $ browserify page.js > bundle.js
* [backend](https://github.com/abspen1/go-backend) to persist data run on Go
