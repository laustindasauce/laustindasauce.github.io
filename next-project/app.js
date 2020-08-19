const fs = require('fs')
const project_p = document.querySelector(". > p")

class nextProject {
    constructor(project) {
        this.project = project
    }

    async runAdd() {
        console.log(this.project)
        $("#positions-log").prepend(
            `<div class="position-inst">
                <p class="position-fragment"style="color: lime;">${this.project}</p>
            </div>`
        )
    }

    async checkDuplicate() {
        return false
    }

    async remProj() {
        this.client.srem("projectss", this.project)
    }

} // End of nextProject


function addProject() {
    var language = $("#backend").val();
    console.log(language)
    var project = $("#frontend").val();
    console.log(project)
    var proj = language + " || " + project
    // var Np = new nextProject(proj)
    // Np.runAdd()
    setProjects(proj)
}

function removeProject() {
    var language = $("#backend").val()
    var project = $("#frontend").val()
    var padssword = $("#password").val()
    if (password == redisPass) {
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
    var fileList = []
    var text = fs.readFileSync("project1.txt", "utf-8")
    console.log(text)
    var fileArray = text.split("\n")
    for (var i = 0; i < fileArray.length; i++) {
        fileName = fileArray[i]
        setProjects(fileName)
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


// This is to set up our existing projects on reload of site
function main() {
    newRead()
}

main()