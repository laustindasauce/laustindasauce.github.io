// const fs = require('fs')
const axios = require('axios')

var tickers = []
var percentages = []
var exposure = 0
let accountVal
var postData = new Object()
let jsonData

const BASE_URL = 'https://guldentech.com'

const postAppPrice = async (shareP, perc) => {
    try {
        axios({
          url: `${BASE_URL}/austinapi/current-stock-price`,
          method: 'post',
          data: jsonData,
        })
          .then(function (response) {
            if (response.data === "500") {
                alert("There was an internal auth error!")
            } else if (response.data === "404") {
                alert(`${jsonData.Stock} is not a valid ticker!`)
            } else {
                let dataString = setString(response.data, perc)
                shareP.innerText = dataString
            }
          })
          .catch(function (error) {
            // your action on error success
            console.log(error)
          })
    } catch (e) {
        console.error(e)
    }
}

function setString(price, perc) {
    let holdingVal = accountVal * (perc / 100);
    let numShares = holdingVal / price;
    // numShares = Math.floor(numShares);
    let dataString = "Price: $" + price + "  Ideal Holding Value: $" + holdingVal + "  Shares: " + numShares;
    return dataString
}

function addFields() {
    // Number of inputs to create
    var number = document.getElementById("ticker").value;
    // Total account value
    accountVal = document.getElementById("amt").value;

    // If either input is null return an alert
    if (number === "" || number <= 0 || accountVal === "" || accountVal <= 0) return alert('Please enter valid response in both fields.')
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    if (number > 100) return alert(`${number} is over the 100 max`)
    for (i=0;i<number;i++){
        // Append a node
        container.appendChild(document.createTextNode("Ticker " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.id = "ticker" + i;
        input.placeholder = 'EX: MSFT'
        container.appendChild(input);
        // Append a node
        container.appendChild(document.createTextNode("Percentage " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var inputPerc = document.createElement("input");
        inputPerc.type = "text";
        inputPerc.id = "percentage" + i;
        inputPerc.placeholder = 'EX: 30'
        container.appendChild(inputPerc);
        // Create a <P> element
        var outputShares = document.createElement("P");
        outputShares.id = "shares" + i;
        container.appendChild(outputShares);
        
        // Append a line break 
        container.appendChild(document.createElement("br"));
        // Append a line break 
        container.appendChild(document.createElement("br"));
    }
    // Create an <input> element, set its type and name attributes
    var btn = document.createElement("button");
    btn.innerHTML = "RUN";
    btn.type = 'submit';
    btn.id = 'send-button'
    container.appendChild(btn);
    // Run main to set the listener for newly created button
    main()
}

async function getShares(number) {
    for (i = 0; i < number; i++) {
        var ticker = document.getElementById('ticker' + i);
        var percentage = document.getElementById('percentage' + i);
        var shareP = document.getElementById('shares' + i);
        if (ticker.value == "") return false;
        if (percentage.value == "") return false;
        console.log(`${ticker.value} is the ticker`)
        try {
            exposure += parseInt(percentage.value);
        } catch (error) {
            console.log(error)
            return false
        }
        tickers.push(ticker.value.toUpperCase());
        percentages.push(percentage.value);
        postData.Stock = ticker.value.toUpperCase();
        jsonData = JSON.stringify(postData);
        await postAppPrice(shareP, parseFloat(percentage.value));
    }
    return true;
}

function main() {
    const send_button = document.getElementById("send-button")

    send_button.addEventListener('click', () => runMain(), false)
    
    async function runMain() {
        var number = document.getElementById("ticker").value;
        // alert(`${number} stocks given`)
        let correct = await getShares(number);
        if (!correct) return alert('Please fill out each text field. Be sure only numbers in the percentage fields.')
        // alert(tickers)
        alert(`Your leverage is at ${exposure}%, be sure this is what you want.`)
    }
}

function showFields() {
    const button = document.getElementById("showfields")
    button.addEventListener('click', function() {
        addFields()
    })
}

showFields()