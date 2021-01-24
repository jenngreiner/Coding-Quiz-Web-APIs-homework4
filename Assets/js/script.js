//Javascript quiz

//define variables
var startButton = document.getElementById("start-button");
var saveButton = document.getElementById("save");
var clearScoresButton = document.getElementById("clear-scores");
var returnButton = document.getElementById("go-back");
var timeEl = document.getElementById("time");
var questionEl = document.getElementById("question");
var optionEl = document.querySelector(".options");
var listItem = document.querySelector("li");
var qBlock = document.getElementById("question-block");
var secondsLeft = 60;

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
];
var questionIndex = 0;
// main index
// When my browser opens, I see View highscores button top left, Timer top right, and Coding Quiz Challenge, overview, and start game button on page. Questions are hidden
[].forEach.call(document.querySelectorAll('.hide'), function (el) {
    el.style.visibility = 'hidden';
});
// timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to end game
            endGame();
        }
    }, 1000);

};

// function to display final score and get player initials once all questions are answered or secondsLeft is 0
function endGame() {
    // clear timer
    timeEl.textContent = "Time's Up!";
    // hide questions screen
    qBlock.innerHTML = "";
    // display end screen    
    document.getElementById('end-screen').style.visibility = 'visible';

    // display final score
    document.getElementById("final-score").append(secondsLeft);

    // When I click Save, my intials and score are stored 
    saveButton.addEventListener("click", function () { saveScore(document.getElementById("initials").value, secondsLeft) })
};

// When i click Start Game button, my html displays the first question with answer options, and the clock on the timer starts to run down.
if (startButton) {
    startButton.addEventListener("click", function startGame() {
        // start timer
        setTime();
        // display Questions
        render(questionIndex);
    });
}

function render(questionIndex) {
    // creates new ul element
    var ulCreate = document.createElement("ul");
    // Clears question-block div content (hides start screen)
    qBlock.innerHTML = "";
    ulCreate.innerHTML = "";

    // For loop to loop throug question array
    for (var i = 0; i < question.length; i++) {
        // Append question title
        var qTitle = question[questionIndex].title;
        var qChoice = question[questionIndex].choices;
        // console.log(qTitle);
        // console.log(qChoice);
        qBlock.textContent = qTitle;
    }
    // for each for questions choice
    qChoice.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        qBlock.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
    // if secondsLeft=0, endGame
    if (secondsLeft === 0) {
        endGame();
    };
};

function compare(event) {
    // save user choice as element
    var userChoice = event.target
    // compare user choice with answer
    if (userChoice.matches("li")) {
        var createDiv = document.createElement("div")
        createDiv.setAttribute("id", "createDiv")

        // Correct answer
        if (userChoice.textContent === question[questionIndex].answer) {
            createDiv.innerHTML = "Correct!"
        } else {
            // wrong answer; will deduct 5 seconds from score
            secondsLeft = secondsLeft - 5
            createDiv.innerHTML = "Wrong! The correct answer is: " + question[questionIndex].answer;
        }
    }
    // determine which question the user is one, end if all questions answered
    questionIndex++;
    // When i answer all the questions OR the time runs out, the game ends and I am taken to the score screen.

    if (questionIndex >= question.length) {
        // end game after last question
        endGame();
    } else {
        render(questionIndex);
    }
    qBlock.appendChild(createDiv);

}

// Save scores
var playerScore = "";

function saveScore(initials, score) {

    // console.log(initials);
    // console.log(score);
    var playerScores = JSON.parse(localStorage.getItem("playerScores"));
    // uses initials as the key to look up the score
    if (!playerScores) {
        playerScores = {}
    }
    // playerScores[initials] = Math.max(playerScores[initials], score)
    if (playerScores[initials]) {
        if (playerScores[initials] < score) {
            playerScores[initials] = score
        }
    } else {
        playerScores[initials] = score
    }
    // playerScores[initials] = score > parseInt(playerScores[initials]) ? score : playerScores[initials];
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    // console.log(JSON.stringify(playerScores));

    localStorage.setItem("playerScores", JSON.stringify(playerScores));
    // location redirect // When I click Save, Highscores.html opens
    location.href = "highscores.html"
};

// Highscores live in separate HTML page; displays list of saved scores
function renderHighscores() {
    // Use JSON.parse() to convert text to JavaScript object
    var playerScores = JSON.parse(localStorage.getItem("playerScores"));
    var scoreList = "";
    for (x in playerScores) {
        scoreList += x + " : " + playerScores[x] + "<br>"
    }
    document.getElementById("score-item").innerHTML = scoreList

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
            location.href = "index.html"
        })
    }
};
