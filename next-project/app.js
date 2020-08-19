// var Redis = require('ioredis')
// const dotenv = require('dotenv')
// const { write } = require('fs')
// dotenv.config()
// const redisPass = process.env.REDIS

class nextProject {
    constructor(language, project) {
        // this.client = new Redis({
        //     port: 6379,          // Redis port
        //     host: '10.10.10.1',   // Redis host
        //     password: password,
        //     db: 3,
        // })
        
        this.language = language
        this.project = project
    }
    // async run() {
    //     client.get('language').then(function (result) {
    //         writeToEventLog(result);
    //     });
    // }
    async updatePositions() {
        $("#positions-log").prepend(
            `<div class="position-inst">
                <p class="position-fragment">${this.language}</p>
                <p class="position-fragment">${this.project}</p>
            </div>`
        )
        console.log("project" + this.project)
    }
} // End of nextProject


function updatePositions(project, language) {
    $("#positions-log").prepend(
        `<div class="position-inst">
                <p class="position-fragment">${language}</p>
                <p class="position-fragment">${project}</p>
            </div>`
    )
    console.log("project: " + project)
}


function addProject() {
    var language = $("#backend").val();
    console.log(language)
    var project = $("#frontend").val();
    console.log(project)
    // var Np = new nextProject(language, project, redisPass)
    updatePositions(project, language)
}

function removeProject() {
    var language = $("#backend").val()
    var project = $("#frontend").val()
    var padssword = $("#password").val()
    var Rp = new nextProject(language, project, password)
    Rp.run()
}

function writeToEventLog(text) {
    $("#event-log").prepend(`<p class="event-fragment">${text}</p>`);
}