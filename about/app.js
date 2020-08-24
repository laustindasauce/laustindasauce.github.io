const axios = require('axios')
// const pr1_p = document.getElementById("pr1")
const send_button = document.getElementById("button-blue")
const name_val = document.getElementById("name")
const email_val = document.getElementById("email")
const message_val = document.getElementById("message")
const input_h5 = document.getElementById("input-title")
var postData = new Object()
let jsonData

const BASE_URL = 'https://guldentech.com'

const postInfo = async () => {
    try {
        axios({
            url: `${BASE_URL}/austinapi/email`,
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

function sendEmail() {
    var name = name_val.value
    if (!name) {
        alert(`Please enter your name`)
        return
    }
    var email = email_val.value
    if (!email) {
        email_val.value = "Please enter your email"
        return
    }
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
        console.log("Valid email address")
    } else {
        alert(`${email} is not a valid email address. If you think this is an error reach out to me via abspencer2097@gmail.com`)
        return
    }

    var message = message_val.value
    if (!message) {
        alert("Please enter a message")
        return
    }
    
    name_val.value = ''
    email_val.value = ''
    message_val.value = ''
    postData.name = name
    postData.email = email
    postData.message = message
    jsonData = JSON.stringify(postData)
    console.log(jsonData)
    postInfo()
    // alert("Working on being able to save newly added projects...")
}








function main() {
    send_button.addEventListener('click', function () {
        sendEmail()
    })
}

main()