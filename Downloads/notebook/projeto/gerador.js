document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-btn");
    const clearButton = document.getElementById("clear-btn");
    const randomNumberDisplay = document.getElementById("random-number");
    const historyList = document.getElementById("history");

    const history = [];

    function generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        history.push(randomNumber);
        randomNumberDisplay.textContent = "Pensei no número: " + randomNumber;
        updateHistoryList();
    }

    function updateHistoryList() {
        historyList.innerHTML = "";
        history.forEach(number => {
            const listItem = document.createElement("li");
            listItem.textContent = "Pensei no número: " + number;
            historyList.appendChild(listItem);
        });
    }

    generateButton.addEventListener("click", generateRandomNumber);

    clearButton.addEventListener("click", function () {
        history.length = 0;
        updateHistoryList();
        randomNumberDisplay.textContent = "";
    });
});
