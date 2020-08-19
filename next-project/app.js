var Redis = require('ioredis')
const dotenv = require('dotenv')
const { write } = require('fs')
dotenv.config()
const redisPass = process.env.REDIS

class nextProject {
    constructor(language, project, password) {
        this.client = new Redis({
            port: 6379,          // Redis port
            host: '10.10.10.1',   // Redis host
            password: password,
            db: 3,
        })
        
        this.project = language.toUpp
    }

    async run() {
        this.client.smembers("projects", function (err, result) {
            if (err) {
                console.error(err);
            } else {
                for (var i = 0; i < result.length; i++) {
                    $("#positions-log").prepend(
                        `<div class="position-inst">
                            <p class="position-fragment">${result[i]}</p>
                        </div>`
                    )
                }
            }
        });
    }

    async runAdd() {
        $("#positions-log").prepend(
            `<div class="position-inst">
                <p class="position-fragment">${this.project}</p>
            </div>`
        )
    }

    async checkDuplicate() {
        if (this.client.sismember("projects", this.project)) {
            return true
        }
        return false
    }

    async remProj() {
        this.client.srem("projects", this.project)
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
    if (password == redisPass){
        var Rp = new nextProject(language.toUpperCase(), project.toUpperCase(), password)
        Rp.remProj()
    } else { alert("Incorrect Password!") }
}

// This is to set up our existing projects on reload of site
function main() {
    var Mp = new nextProject("some", "value", redisPass)
    Mp.Run()
}

main()