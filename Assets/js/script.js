//Javascript quiz

//define variables
var startButton = document.querySelector("#start-button")
var clearScoresButton = document.querySelector("#clear-scores")
var returnButton = document.querySelector("#return")
var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var optionEl = document.querySelector(".options");
var listItem = document.querySelector("li");
var playerInitials = document.querySelector("#initials")
var secondsLeft = 30;

// main index
// When my browser opens, I see View highscores button top left, Timer top right, and Coding Quiz Challenge, overview, and start game button on page. Questions are hidden


// timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            endGame();
        }
    }, 1000);
};

// Function to end game and open score screen
function endGame() {
    timeEl.textContent = " ";
    // display scores

    // input initials

};
// When i click Start Game button, my html displays the first question with answer options, and the clock on the timer starts to run down.
startButton.addEventListener("click", function () {
    // start timer
    setTime();
    // display first question
    displayQuestion();
});

function displayQuestion() {
    questionEl. // how do you show something?
};



// When I click an answer choice, I am prompted with feedback that i answered the question correctly or not. Then I am presented another question.
// if correct = true {"Correct!"} else {"Wrong!"}

// When I give a wrong answer, the timer decreases by 10 seconds.
// if correct != true {timer i-10}

// When i answer all the questions OR the time runs out, the game ends and I am taken to the score screen.
if (secondsLeft === 0 || questionsLeft === 0) {
    endGame();
};

// final score displayed after all questions are answered
// final score is the number of seconds remaining on the timer
// enter initials in text field to save score

// When I click Save, my intials and score are stored and Highscores.html opens
// Save scores
function saveScore() {
    var playerScore = {
        initials: playerInitials,
        score: secondsLeft,
    }
}

// Highscores live in separate HTML page; displays list of saved scores
    // Scores are stored even if you refresh your browser
    // When I click go back, index.html opens
    // When I click Clear Highscores, all score data is erased
