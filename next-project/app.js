class nextProject {
    constructor(language, project) {
        this.project = language.toUpp
    }

    async run() {
        
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", "projects.txt", false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    var textArray = allText.split("\n")
                    for (var i = 0; i < textArray.length; i++) {
                        console.log(textArray[i]);
                        //Do something
                    }
                }
            }
        }
        rawFile.send(null);
    }

    async runAdd() {
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

// This is to set up our existing projects on reload of site
function main() {
    var Mp = new nextProject("some", "value")
    Mp.run()
}

main()