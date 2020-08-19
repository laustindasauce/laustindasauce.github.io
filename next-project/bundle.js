(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
}

function removeProject() {
    var language = $("#backend").val()
    language_val.value = ''
    var project = $("#frontend").val()
    project_val.value = ''
    var padssword = $("#password").val()
    password_val.value = ''
    if (password == rmPass) {
        
    } else { alert("Incorrect Password!") }
}


function setProjects(project) {
    $("#positions-log").prepend(
        `<div class="position-inst">
                <p class="position-fragment"style="color: lime;">${project}</p>
            </div>`
    )
    console.log("Added")
}


function newRead() {
    var text = "PYTHON &emsp; || &emsp; CALCULATOR APP"
    console.log(text)
    var fileArray = text.split("\n")
    for (var i = 0; i < fileArray.length; i++) {
        fileName = fileArray[i]
        newSetProjects(fileName)
        // fileList.push(fileName)
    }
    // newGet(fileList)
    // console.log("finished")
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
    // newRead()
    var strPrint = "The password is "
    pr1_p.innerHTML = strPrint.fontcolor("lime")
    newRead()
    add_button.addEventListener('click', function() {
        addProject()
    })
}

main()
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
