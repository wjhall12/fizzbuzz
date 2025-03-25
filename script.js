const runButton = document.getElementById("runButton");
const outputArea = document.getElementById("outputArea");

runButton.onclick = function() {
    const number = parseInt(document.getElementById("limitInput").value);
    let result = "";

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 3 === 0) {
        result = "Fizz";
    } else if (number % 5 === 0) {
        result = "Buzz";
    } else {
        result = number;
    }

    outputArea.textContent = result;
};
