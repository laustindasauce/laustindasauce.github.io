const fs = require('fs')
const pr1_p = document.getElementById("pr1")
const add_button = document.getElementById("add")
const rm_button = document.getElementById("rm")
const language_val = document.getElementById("backend")
const project_val = document.getElementById("frontend")
const password_val = document.getElementById("password")
const rmPass = "NotSecureLOL"

function addProject() {
    var language = $("#backend").val()
    language_val.value = ''
    var project = $("#frontend").val()
    project_val.value = ''
    var proj = language.toUpperCase() + " &emsp; || &emsp; " + project.toUpperCase()
    setProjects(proj)
    alert("Working on being able to save newly added projects...")
}

function removeProject() {
    var language = $("#backend").val()
    language_val.value = ''
    var project = $("#frontend").val()
    project_val.value = ''
    var passwordText = password_val.value
    console.log(passwordText)
    password_val.value = ''
    var proj = language.toUpperCase() + " &emsp; || &emsp; " + project.toUpperCase()
    if (passwordText == rmPass) {
        alert("How'd you get my password! Working on this function")
    } else { 
        var strAlert = proj + "\nCould not be removed since you entered incorrect password."
        alert(strAlert) 
    }
}

function newRead() {
    var text = fs.readFileSync("pr1.txt", "utf-8")
    console.log(text)
    var fileArray = text.split("\n")
    for (var i = 0; i < fileArray.length; i++) {
        fileName = fileArray[i]
        newSetProjects(fileName)
    }
}

function newGet(fileList) {
    console.log(fileList[i])
    let text
    for (var i = 0; i < fileList.length; i++) {
        text = fs.readFileSync(fileList[i], "utf-8")
        console.log(text)
    }
}

function newSetProjects(file) {
    console.log("file: " + file)
    pr1_p.innerHTML = file.fontcolor("lime")
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