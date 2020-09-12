const axios = require('axios')
// const pr1_p = document.getElementById("pr1")
const send_button = document.getElementById("button-blue")
const name_val = document.getElementById("name")
const email_val = document.getElementById("email")
const message_val = document.getElementById("message")
const bottom_div = document.getElementById('bottom-container')
const bottom2_div = document.getElementById('bottom-container2')
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
                if (response.data === "Format Error") {
                    alert("Invalid email format")
                } else if (response.data === "Error") {
                    alert("Email username/host could not be found")
                } else if (response.data === "Email not sent") {
                    alert("Email wasn't sent due to an error.. please try again.")
                } else {
                    bottom_div.style.display = "none"
                    bottom2_div.style.display = "block"
                }
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
        alert(`${email} is not a valid email address.`)
        return
    }

    var message = message_val.value
    if (message === "N/A") {
        alert("Please enter a message")
        return
    }

    postData.name = name
    postData.email = email
    postData.message = message
    jsonData = JSON.stringify(postData)
    console.log(jsonData)
    postInfo()
}

function main() {
    bottom2_div.style.display = "none"
    send_button.addEventListener('click', function () {
        sendEmail()
    })
}

main()