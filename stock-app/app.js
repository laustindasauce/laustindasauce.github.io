var tickers = []
var percentages = []
var exposure = 0

function addFields() {
    // Number of inputs to create
    var number = document.getElementById("ticker").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    if (number > 100) return alert(`${number} is over the 100 max`)
    for (i=0;i<number;i++){
        // Append a node with a random text
        container.appendChild(document.createTextNode("Ticker " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.type = "text";
        input.id = "ticker" + i;
        input.placeholder = 'EX: MSFT'
        container.appendChild(input);
        // Append a node with a random text
        container.appendChild(document.createTextNode("Percentage " + (i+1)));
        // Create an <input> element, set its type and name attributes
        var inputPerc = document.createElement("input");
        inputPerc.type = "text";
        inputPerc.id = "percentage" + i;
        inputPerc.placeholder = 'EX: 30'
        container.appendChild(inputPerc);
        
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

function getShares(number) {
    for (i = 0; i < number; i++) {
        var ticker = document.getElementById('ticker' + i)
        var percentage = document.getElementById('percentage' + i)
        if (ticker.value == "") return false;
        if (percentage.value == "") return false;
        exposure += percentage.value
        tickers.push(ticker.value.toUpperCase())
        percentages.push(percentage.value.toUpperCase())
    }
    return true;
}

async function main() {
    const send_button = document.getElementById("send-button")

    send_button.addEventListener('click', function () {
        var number = document.getElementById("ticker").value;
        // alert(`${number} stocks given`)
        if (!getShares(number)) return alert('Please fill out each text field.')
        alert(tickers)
        alert(`Your leverage is at ${exposure}%, be sure this is what you want.`)
    })
}