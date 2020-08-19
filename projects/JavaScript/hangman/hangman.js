var randomWords = require('random-words')

let word = ""
let correctGuess
let correctArray = []
let wrongGuess = 1
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const result_p = document.querySelector(".result > p")
const dashes_span = document.getElementById("dashes")
var hangImage_src = document.getElementById("myImage")
const giveUp_span = document.getElementById("quit")
const newGame_span = document.getElementById("new")
let endGameBool = false
let winGameBool = false


function winGame() {
    winGameBool = true
    strFont = "You Won! Nice Job!"
    result_p.innerHTML = strFont.fontcolor("green")
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = "_ ")
}

resetBoard = () => {
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = letter)
}


function adjustBoard(array1, wordArray) {
    if (!endGameBool && !winGameBool) {
        let output = ""
        for (let i = 0; i < wordArray.length; i++) {
            if (array1.includes(wordArray[i])) {
                output += wordArray[i] + " "
            } else {
                output += "_ "
            }
        }
        dashes_span.innerHTML = output
        output === correctGuess ? winGame() : result_p.innerHTML = "Nice guess!"
    }
}


function checkInWord(userChoice) {
    let tally = 0
    let wordArray = Array.from(word)
    for (let j = 0; j < wordArray.length; j++) {
        if (wordArray[j] === userChoice) {
            correctArray.push(wordArray[j])
            tally++
        }
    }
    if (tally > 0) {
        adjustBoard(correctArray, wordArray)
        return true
    }
    return false
}

function resetImage() {
    let filePath = "images/hang.png"
    hangImage_src.src = filePath
}


function changeImage(wrongGuess) {
    let filePath = "images/hang" + wrongGuess.toString() + ".png"
    // console.log(filePath)
    hangImage_src.src = filePath
    // console.log(hangImage_src)
}

function quitGame() {
    let wordArray2 = Array.from(word)
    let outputs = ""
    for (let l = 0; l < wordArray2.length; l++) {
        if (alphabet.includes(wordArray2[l])) {
            outputs += wordArray2[l] + " "
        }
    }
    dashes_span.innerHTML = outputs
    endGameBool = true
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = "_ ")
    result_p.innerHTML = ":( You gave up! Play again!".fontcolor("red")
}


function endGame() {
    let wordArray2 = Array.from(word)
    let outputs = ""
    for (let l = 0; l < wordArray2.length; l++) {
        if (alphabet.includes(wordArray2[l])) {
            outputs += wordArray2[l] + " "
        }
    }
    dashes_span.innerHTML = outputs
    endGameBool = true
    alphabet.forEach(letter => document.getElementById(letter).innerHTML = "_ ")
    result_p.innerHTML = "You ran out of guesses! Play again!".fontcolor("red")
}


function game(userChoice) {
    letter_span = document.getElementById(userChoice)
    if (!endGameBool && !winGameBool) {
        if (letter_span.innerHTML === "_") {
            result_p.innerHTML = `You've already guessed ${userChoice.fontcolor("orange")}, silly!`.fontcolor("red")
            return
        } else {
            letter_span.innerHTML = "_"
        }
        if (checkInWord(userChoice)) {
            return
        } else {
            wrongGuess++
            let guessesLeft = 7 - wrongGuess
            if (guessesLeft > 0) {
                result_p.innerHTML = `Wrong! Careful, you can only get ${guessesLeft} more wrong!`
                changeImage(wrongGuess, userChoice)
            }
            else if (guessesLeft === 0) {
                endGame()
                hangImage_src.src = "images/end.png"
            }
        }
    } else {
        result_p.innerHTML = "Press 'New Game' :)"
    }
}


function setupGame() {
    let output = "_ "
    for (let i = 0; i < word.length - 1; i++) {
        output += "_ "
    }
    dashes_span.innerHTML = output
}


getWord = () => {
    let wordArr = randomWords({ exactly: 1, maxLength: 14, formatter: (word) => word.toUpperCase() })
    word = wordArr[0]
    if (word.length < 5) { getWord() }
    return word
}

function setCorrectGuess() {
    let strConcat = ""
    for (let k = 0; k < word.length; k++) {
        strConcat += word[k] + " "
    }
    correctGuess = strConcat
}

init = () => {
    result_p.innerHTML = `Let's Play!`
    console.log(getWord())
    setCorrectGuess()
    setupGame()
    resetBoard()
    resetImage()
    endGameBool = false
    winGameBool = false
    wrongGuess = 1
}

function main() {
    init()
    if (!endGameBool && !winGameBool) {
        alphabet.forEach(letter => document.getElementById(letter).addEventListener('click', function () {
            game(letter)
        }))
        giveUp_span.addEventListener('click', function () {
            quitGame()
        })
    }
}

main()