const fs = require('fs')
// const pr1_p = document.getElementById("pr1")
const add_button = document.getElementById("add")
const rm_button = document.getElementById("rm")
const language_val = document.getElementById("backend")
const project_val = document.getElementById("frontend")
const password_val = document.getElementById("password")
const rmPass = "NotSecureLOL"
const languages = ["PYTHON", "JAVASCRIPT", "GO", "GOLANG", "C++", "C", "C#", "HTML", "CSS", "PHP", "RUBY", "R", "DJANGO", "JAVA", "PERL", "COBOL", "BASIC", "SQL", "SAS"]
var projNum = 1
var pID = ""

function addProject() {
    projNum += 1
    if (projNum > 5){
        alert("The project list is full!")
        return
    }
    var language = $("#backend").val().toUpperCase()
    if (checkWhitespace(language)){
        alert(`Invalid format for ${language}: dont include whitespace\nFor multiple languages: Pick main language and add others in project description.`)
        language_val.value = ''
        return
    }
    if (!(inLanguageArray(language))){
        alert(`Not a valid language, check your spelling: ${language}`)
        alert(`Valid languages: ${languages}`)
        language_val.value = ''
        return
    }
    var project = $("#frontend").val()
    project = toCamelCaseString(project)
    if (!project){
        alert(`Please give me a description for the project I should write in ${language}`)
        return
    }
    language_val.value = ''
    project_val.value = ''
    var proj = language + " &emsp; || &emsp; " + project
    newSetProjects(proj)
    alert("Working on being able to save newly added projects...")
}

function removeProject() {
    getVals()
    var language = $("#backend").val().toUpperCase()
    language_val.value = ''
    var project = $("#frontend").val()
    project = toCamelCaseString(project)
    project_val.value = ''
    var passwordText = password_val.value
    password_val.value = ''
    var proj = language + " &emsp; || &emsp; " + project
    if (passwordText == rmPass) {
        alert("How'd you get my password! Working on this function")
    } else { 
        var strAlert = proj + "\nCould not be removed since you entered incorrect password."
        alert(strAlert) 
    }
}

function newRead() {
    var text = fs.readFileSync("pr1.txt", "utf-8")
    var fileArray = text.split("\n")
    for (var i = 0; i < fileArray.length; i++) {
        fileName = fileArray[i]
        newSetProjects(fileName)
    }
}

function newGet(fileList) {
    let text
    for (var i = 0; i < fileList.length; i++) {
        text = fs.readFileSync(fileList[i], "utf-8")
    }
}


// this function call all other functions
function toCamelCaseString(input) {
    let words = toWords(input);
    return toCamelCase(words);
}

// convert string to words
function toWords(input) {
    var regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    return input.match(regex);
}

function toCamelCase(inputArray) {
    let result = "";
    for (let i = 0, len = inputArray.length; i < len; i++) {
        let currentStr = inputArray[i];
        let tempStr = currentStr.toLowerCase();
        // convert first letter to upper case (the word is in lowercase) 
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
        result += tempStr + " ";
    }
    return result;
}

function newSetProjects(file) {
    pID = "pr" + projNum.toString()
    document.getElementById(pID).innerHTML = file.fontcolor("lime")
}

function checkWhitespace(s) {
    return s.indexOf(' ') >= 0;
}

function inLanguageArray(a) {
    return languages.includes(a)
}

// This is to set up our existing projects on reload of site
function main() {
    newRead()
    add_button.addEventListener('click', function() {
        addProject()
    })
    rm_button.addEventListener('click', function () {
        removeProject()
    })
}

main()