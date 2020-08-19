class nextProject {
    constructor(project) {
        this.project = project
    }

    async runAdd() {
        console.log(this.project)
        $("#positions-log").prepend(
            `<div class="position-inst">
                <p class="position-fragment">${this.project}</p>
            </div>`
        )
    }

    async checkDuplicate() {
        if (this.client.sismember("projectss", this.project)) {
            return true
        }
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
    var password = "password"
    var Np = new nextProject(language.toUpperCase(), project.toUpperCase(), password)
    if (Np.checkDuplicate()) {
        alert("That project is already in my list!")
    } else { Np.runAdd() }
}

function removeProject() {
    var language = $("#backend").val()
    var project = $("#frontend").val()
    var padssword = $("#password").val()
    if (password == redisPass) {
        var Rp = new nextProject(language.toUpperCase(), project.toUpperCase(), password)
        Rp.remProj()
    } else { alert("Incorrect Password!") }
}

function getFiles() {
    let fileList = []
    let fileName = ""
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "fileList.txt", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var fileArray = allText.split("\n")
                for (var i = 0; i < fileArray.length; i++) {
                    fileName = fileArray[i]
                    fileList.push(fileName)
                }
            }
        }
    }
    rawFile.send(null);
    readFiles(fileList)
}

function setProjects(project) {
    $("#positions-log").prepend(
        `<div class="position-inst">
                <p class="position-fragment">${project}</p>
            </div>`
    )
}

function readFiles(fileList) {
    var Sp = new nextProject("init")
    var rawFile = new XMLHttpRequest();
    for (var i = 0; i < fileList.length; i++) {
        console.log(fileList[i])
        rawFile.open("GET", fileList[i], false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    var fileArray = allText.split("\n")
                    for (var i = 0; i < fileArray.length; i++) {
                        Sp = new nextProject(fileArray[i])
                        Sp.runAdd()
                    }
                }
            }
        }
        rawFile.send(null);
    }
}

// This is to set up our existing projects on reload of site
function main() {
    getFiles()

}

main()