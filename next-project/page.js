const fs = require('fs')
const pr1_p = document.getElementById("pr1")

function addProject() {
    var language = $("#backend").val();
    console.log(language)
    var project = $("#frontend").val();
    console.log(project)
    var proj = language + " || " + project
    setProjects(proj)
}

function removeProject() {
    var language = $("#backend").val()
    var project = $("#frontend").val()
    var padssword = $("#password").val()
    if (password == rmPass) {
        var Rp = new nextProject(language.toUpperCase(), project.toUpperCase())
        Rp.remProj()
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
    var text = fs.readFileSync("pr1.txt", "utf-8")
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
}

main()