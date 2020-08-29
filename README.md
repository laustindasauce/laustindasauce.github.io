# abspen1.github.io
My Webapp

## About
* Added info form that can email me when someone wants to send me something!
* Was able to do this with my [backend](https://github.com/abspen1/go-backend) in Go

## 404 Page
* Added a wild 404 page with some crazy colors
* There is a link back to home page

## Social Links
* Open in new tab since there isn't a link back to home page
* Removed Facebook since I don't really use Facebook
* Move these to their own page

## Projects
* [Adam Alston](https://github.com/adamalston/v1) has his website open-source as well.. I pulled the styles for this page from there
* I also got the idea for the footer/header on pages from his website. 
* Program language logos all from [Logo Wine](https://www.logo.wine/Technology)
### Hangman
* Added random-words generator with browserify 😍
### Rock Paper Scissors
* Included Rock Paper Scissors game in JavaScript projects
* Code from [freecodecamp](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=871s)
* Thinking about adding my go-backend to this game...
    * That would allow me to have a user login that would keep track of their all-time stats
    * All you would need to do is put in a valid email address and that would be used as your login
    * So what I could do is have a text box for login with login button there then have a seperate button for saving that you need to hit to save your progress
    * Returning User Ideal Interaction
        * User logs in
        * Plays 
        * Saves progress and leaves
    * Returning User Non-Ideal Interaction
        * User already in database
        * They play without logging in
        * Then try to save progress to add ontop of what they already had
    * New User Interaction
        * Play the game
        * Save the data and enter a valid email to have their data stored
        * Leave the site
    * Possible Interactions
        * New User
        * Returning User (Ideal)
        * Returning User (Non-Ideal)

## Next Project
* Uses my [backend](https://github.com/abspen1/go-backend) to persist data
* Might need to adjust the format of the description string..
* Backend is running on guldentech.com
* Still need to code the remove function on the backend

## To-Do
### Add a page for project ideas!!
* Add README to individual folders that we link to

## Sources
### Animated Background
* Not currently using this since I couldn't get it to work with a header
* [Kumar Kuila](https://codepen.io/uiswarup/pen/XWdXGGV)

### Fancy Hover
* [Shaw](https://codepen.io/shshaw/pen/MoxrPV)

### Rock Paper Scissors 
* [freecodecamp](https://www.youtube.com/watch?v=jaVNP3nIAv0&t=871s)

### New Project
* [fs/browserify/brfs](https://github.com/browserify/brfs)
* If you use 'fs' package
    * $ browserify -t brfs page.js > bundle.js
* If not you dont need the brfs tag
    * $ browserify page.js > bundle.js
* [backend](https://github.com/abspen1/go-backend) to persist data run on Go 