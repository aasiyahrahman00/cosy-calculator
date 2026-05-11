let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function press(value) {
    const operators = ["+", "-", "*", "/"];
    const lastChar = display.value.slice(-1);

    if (display.value === "Error") {
        display.value = "";
    }

    // Prevent operators at the start
    if (operators.includes(value) && display.value === "") {
        return;
    }

    // Prevent double operators
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    // Prevent multiple decimals in one number
    if (value === ".") {
        let currentNumber = display.value.split(/[+\-*/()]/).pop();

        if (currentNumber.includes(".")) {
            return;
        }
    }

    display.value += value;
}

// Safely evaluates the calculator expression
function calculate() {
    let expression = display.value;

    if (expression === "") {
        return;
    }

    const validPattern = /^[0-9+\-*/.() ]+$/;

    if (!validPattern.test(expression)) {
        display.value = "Error"
        return;
    }

    try {
        let result = Function('"use strict"; return (' + expression + ')')();

        if (!isFinite(result)) {
            display.value = "Error";
            return;
        }
        display.value = result;
        saveToHistory(expression + " = " + result);

    } catch {
        display.value = "Error";
    }
}


// Saves calculations to browser localStorage
 function clearDisplay() {
    display.value = "";
 }

 function backspace() {
    display.value = display.value.slice(0, -1); 
 }

 function saveToHistory(entry) {
    let history = JSON.parse(localStorage.getItem("calculatorHistory")) || [];

    history.push(entry);

    if (history.length > 10) {
        history.shift();
    }

    localStorage.setItem("calculatorHistory", JSON.stringify(history));

    renderHistory();
 }

 // Displays saved history on the page
function renderHistory() {
    let history = JSON.parse(localStorage.getItem("calculatorHistory")) || [];

    historyList.innerHTML = "";

    history.slice().reverse().forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}



 document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", ".", "(", ")"].includes(key)) {
        press(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        backspace()
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
 });

 renderHistory();

 function clearHistory() {
    localStorage.removeItem("calculatorHistory");
    renderHistory();
 }


