const axios = require('axios')

let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
const smallUserWord = "(user)".fontsize(4).sub()
const smallCPUWord = "(cpu)".fontsize(4).sub()
const login_btn = document.getElementById("login")
const save_btn = document.getElementById("save")
let email_val = document.getElementById("username")
let username = ""
var postData = new Object()
let jsonData


function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randNum = Math.floor(Math.random() * 3)
    return choices[randNum]
}


const getFullWord = letter => {
    if (letter === 'r') return "Rock"
    if (letter === 'p') return "Paper"
    return "Scissors"
}


function formatResult(winLoss, user, computer) {
    let output
    if (winLoss === 'You won, ') {
        output = `${getFullWord(user)}${smallUserWord} beats ${getFullWord(computer)}${smallCPUWord}`
    } else {
        output = `${getFullWord(user)}${smallUserWord} loses to ${getFullWord(computer)}${smallCPUWord}`
    }
    result_p.innerHTML = winLoss + output
}

function win(user, computer) {
    const userChoice_div = document.getElementById(user)
    userScore++
    userScore_span.innerHTML = userScore
    formatResult("You won, ", user, computer)
    userChoice_div.classList.add('green_glow')
    setTimeout(() => userChoice_div.classList.remove('green_glow'), 300)
}


function lose(user, computer) {
    const userChoice_div = document.getElementById(user)
    computerScore++
    computerScore_span.innerHTML = computerScore
    formatResult("You lost, ", user, computer)
    userChoice_div.classList.add('red_glow')
    setTimeout(() => userChoice_div.classList.remove('red_glow'), 300)
}


function draw(user) {
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = "It's a draw!"
    userChoice_div.classList.add('grey_glow')
    setTimeout(() => userChoice_div.classList.remove('grey_glow'), 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice)
            break
    }
}

/*
    Adding backend requests below here
*/

const BASE_URL = 'https://guldentech.com'

const login_POST = async () => {
    try {
        axios({
            url: `${BASE_URL}/austinapi/rps/login`,
            method: 'post',
            data: jsonData,
        })
            .then(function (response) {
                if (response.data === "Format Error") {
                    alert(`${username} :: Invalid email format`)
                    username = ""
                    return
                } else if (response.data === "Error") {
                    alert("Email username/host could not be found")
                    username = ""
                    return
                }
                userScore = response.data.Wins
                computerScore = response.data.Losses

                userScore_span.innerHTML = userScore
                computerScore_span.innerHTML = computerScore 
                

                console.log(response)
            })
            .catch(function (error) {
                // your action on error success
                console.log(error)
            })
    } catch (e) {
        console.error(e)
    }
}

const save_POST = async () => {
    try {
        axios({
            url: `${BASE_URL}/austinapi/rps`,
            method: 'post',
            data: jsonData,
        })
            .then(function (response) {
                // your action after success
                console.log(response)
            })
            .catch(function (error) {
                // your action on error success
                console.log(error)
            })
    } catch (e) {
        console.error(e)
    }
}

function login() {
    if (email_val.value == "") {
        alert("Please enter you email to login!")
        return
    }
    if (username !== "") {
        alert("Already signed in! Please save your progress and refresh page to sign in as different user!")
        email_val.value = ""
        return
    }
    username = email_val.value
    console.log(username)
    postData.username = username
    postData.wins = userScore
    postData.losses = computerScore
    jsonData = JSON.stringify(postData)
    login_POST()
    email_val.value = ""
}

function saveData() {
    if (username == "") {
        alert("Please login before saving!")
        return
    }

    postData.Username = username
    postData.Wins = userScore
    postData.Losses = computerScore
    jsonData = JSON.stringify(postData)
    save_POST()
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })

    paper_div.addEventListener('click', function () {
        game("p")
    })

    scissors_div.addEventListener('click', function () {
        game("s")
    })

    save_btn.addEventListener('click', function () {
        saveData()
    })
    login_btn.addEventListener('click', function () {
        login()
    })
}

main()