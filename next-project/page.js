// const fs = require('fs')
const axios = require('axios')
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
var postData = new Object()
let jsonData

const BASE_URL = 'myLocalRouterIP'

const getProjects = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/projects`);

        const projects = res.data;
        let language = []
        let description = []

        console.log(`GET: Here's the list of projects`, projects);
        
        if (projects === null) {
            initDisplay()
            return
        }

        for (i = 0; i < projects.length; i ++) {
            if (i % 2 === 0) {
                language.push(projects[i])
            } else {
                description.push(projects[i])
            }
        }
        for (i = 0; i < language.length; i++) {
            newRead(language[i], description[i])
        }

        return
    } catch (e) {
        console.error(e);
    }
};

const postProjects = async () => {
    try {
        axios({
          url: `${BASE_URL}/projects`,
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
function addProject() {
    if (projNum > 14){
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
    postData.language = language
    postData.description = project
    jsonData = JSON.stringify(postData)
    console.log(jsonData)
    postProjects()
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

function newRead(language, project) {
    projNum += 1
    fullProject = language + ' &emsp; || &emsp; ' + project
    newSetProjects(fullProject, projNum)
}


// this function call all other functions
function toCamelCaseString(input) {
    let words = toWords(input);
    return toCamelCase(words);
}

// convert string to words
function toWords(input) {
    let regex = input.trim().split('\\s+')
    return regex;
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

function initDisplay() {
    fullProject = 'LANGUAGE &emsp; || &emsp; Project Description'
    newSetProjects(fullProject, 1)
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
    getProjects()
    add_button.addEventListener('click', function() {
        addProject()
    })
    rm_button.addEventListener('click', function () {
        removeProject()
    })
}

main()