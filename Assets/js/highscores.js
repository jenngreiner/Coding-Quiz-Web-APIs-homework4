// variables
var clearScoresButton = document.getElementById("clear-scores");
var returnButton = document.getElementById("go-back");

if (clearScoresButton) {
    clearScoresButton.addEventListener("click", function () {
        localStorage.clear();
        location.reload
    })
}

if (returnButton) {
    // When I click Go Back, index.html opens
    returnButton.addEventListener("click", function goBack() {
        // open index.html
        window.location.replace("index.html");
    })
}