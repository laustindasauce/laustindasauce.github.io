(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const fs = require('fs')
// const pr1_p = document.getElementById("pr1")
const add_button = document.getElementById("add")
const rm_button = document.getElementById("rm")
const language_val = document.getElementById("backend")
const project_val = document.getElementById("frontend")
const password_val = document.getElementById("password")
const rmPass = "NotSecureLOL"
const languages = ["PYTHON", "JAVASCRIPT", "GO", "GOLANG", "C++", "C", "C#", "HTML", "CSS", "PHP", "RUBY", "R", "DJANGO", "JAVA", "PERL", "COBOL", "BASIC", "SQL", "SAS"]
var projNum = 0
var pID = ""

function addProject() {
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
    if (!project){
        alert(`Please give me a description for the project I should write in ${language}`)
        return
    }
    project = toCamelCaseString(project)
    language_val.value = ''
    project_val.value = ''
    var proj = language + " &emsp; || &emsp; " + project
    projNum += 1
    newSetProjects(proj, projNum)
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
    var text = "LANGUAGE &emsp; || &emsp; Example Project Description"
    var fileArray = text.split("\n")
    for (var i = 0; i < fileArray.length; i++) {
        fileName = fileArray[i]
        newSetProjects(fileName, 1)
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

function newSetProjects(file, num) {
    pID = "pr" + num.toString()
    document.getElementById(pID).innerHTML = file.fontcolor("white")
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
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
