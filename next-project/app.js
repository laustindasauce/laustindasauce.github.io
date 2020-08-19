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
        
        this.language = language
        this.project = project
    }
    async run() {
        client.get('language').then(function (result) {
            writeToEventLog(result);
        });
    }

}


function addProject() {
    var language = $("#backend").val()
    var project = $("#fronted").val()
    var Np = new nextProject(language, project, redisPass)
    Np.run()
}

function removeProject() {
    var language = $("#backend").val()
    var project = $("#fronted").val()
    var padssword = $("#password").val()
    var Rp = new nextProject(language, project, password)
    Rp.run()
}

function writeToEventLog(text) {
    $("#event-log").prepend(`<p class="event-fragment">${text}</p>`);
}