//Javascript quiz

//define variables
var startButton = document.getElementById("start-button");
var clearScoresButton = document.getElementById("clear-scores");
var returnButton = document.getElementById("return");
var saveButton = document.getElementById("save");
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question");
var optionEl = document.querySelector(".options");
var listItem = document.querySelector("li");
var playerInitials = document.getElementById("initials");
var secondsLeft = 4;

// question variables
var question = [
    {
        title: "What type of data returns a true or false?",
        choices: ["string", "boolean", "number", "character"],
        answer: "boolean",
    },
    {
        title: "What language would you use to style a project?",
        choices: ["HTML", "JavaScript", "CSS", "jQuery"],
        answer: "CSS",
    },
    {
        title: "What do you call a variable that is defined within a function?",
        choices: ["Global Variable", "National Variable", "Local Variable", "Regular Variable",],
        answer: "Local Variable",
    },
    {
        title: "Select the correct way to write a variable in JavaScript",
        choices: ["my-variable", "MyVariable", "myVariable", "my variable",],
        answer: "myVariable",
    },
    {
        title: "Which symbol means 'equal in value and type'?",
        choices: ["=", "!=", "==", "===",],
        answer: "===",
    },
    {
        title: "Which of the following allows user's to enter text via a pop-up?",
        choices: ["alert", "confirm", "input", "prompt",],
        answer: "prompt",
    },

]

// main index
// When my browser opens, I see View highscores button top left, Timer top right, and Coding Quiz Challenge, overview, and start game button on page. Questions are hidden

// hide all elements with class = hide on start screen
[].forEach.call(document.querySelectorAll('.hide'), function (el) {
    el.style.visibility = 'hidden';
});

// timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            endGame();
        }
    }, 1000);
};

// setTimeout(() => {
//     const highScore = document.getElementById("high-score");
//     highScore.textContent = "secondsLeft";
//     const qBlock = document.getElementById("question-block");
//     qBlock.innerHTML = "Question 1<br />Answer 1<br />Answer 2<br />Answer 3"
// }, 3000);

// Function to end game and open score screen

// function to display final score and get player initials once all questions are answered or secondsLeft is 0
function endGame() {
    timeEl.textContent = " ";

    // hide questions screen
    [].forEach.call(document.querySelectorAll('#question-block'), function (el) {
        el.style.visibility = 'hidden';
    });

    // display end screen
    document.getElementById('end-screen').style.visibility = 'visible';

    // display final score
    document.getElementById("final-score").append(secondsLeft);

    // When I click Save, my intials and score are stored 
    saveButton.addEventListener("click", saveScore)
    // When I click Save, Highscores.html opens
    saveButton.addEventListener("click", renderHighscores)
};

// When i click Start Game button, my html displays the first question with answer options, and the clock on the timer starts to run down.
startButton.addEventListener("click", function startGame() {
    // start timer
    setTime();
    // hide start screen
    [].forEach.call(document.querySelectorAll('.start'), function (el) {
        el.style.visibility = 'hidden';
    });
    // display Questions
    displayQuestion();
});

function displayQuestion() {
    document.getElementById('question-block').style.visibility = 'visible';
    const qBlock = document.getElementById("question-block");
    qBlock.innerHTML = "Question 1<br />Answer 1<br />Answer 2<br />Answer 3"
    // how do you insert questions here?
    // <div id="question-block" class="hide">
    //         <h2 id="question-title"></h2>
    //         <div id="choices" class="choices"></div>
    //     </div>

    // if secondsLeft=0, endGame
    if (secondsLeft === 0) {
        endGame();
    };
};

// When I click an answer choice, I am prompted with feedback that i answered the question correctly or not. Then I am presented another question.
// if correct = true {"Correct!"} else {"Wrong!"}

// When I give a wrong answer, the timer decreases by 10 seconds.
// if correct != true {timer i-10}

// When i answer all the questions OR the time runs out, the game ends and I am taken to the score screen.
if (secondsLeft === 0) {
    endGame();
};

// Save scores
var playerScore = "";

function saveScore() {
    var playerScore = {
        // enter initials in text field to save score
        initials: playerInitials.value,
        // final score is the number of seconds remaining on the timer
        score: secondsLeft,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("playerScore", JSON.stringify(playerScore));
    console.log(playerScore);
    console.log(playerScore.score)
}

// Highscores live in separate HTML page; displays list of saved scores
function renderHighscores() {
    // Use JSON.parse() to convert text to JavaScript object
    var highScore = JSON.parse(localStorage.getItem("playerScore"));
    console.log(highScore);
    // Check if data is returned, if not exit out of the function
    if (highScore != null) {
        document.getElementById("score-item").innerHTML = highScore.initials;
    } else {
        console.log("null");
        return;
    }
};
    // Scores are stored even if you refresh your browser
    // When I click go back, index.html opens
    // When I click Clear Highscores, all score data is erased
