# Web APIs: Code Quiz

### Table of Contents:
* [User Story](#user-story)
* [Description](#description)

[Code Quiz]()


## User Story
As a full-stach we developer, I want to be able to creat a quiz using multiple choice questions and a timer. I also want to be able to store the highscores from the quiz in a single list that player can refer to while playing the game. 

## Description 
This project is my current working portfolio. To achieve a responsive, mobile-first design that allows users to view the web application on any device, mobile or desktop, I used BootStrap CSS grid formatting. This allows the navibar, images, and page contents to visually change depending on the width of the browser window. 

## Usage
Open the [Code Quiz](https://jenngreiner.github.io/javascript-password-generator-homework3/) in your browser. Click start to begin the quiz. Click on an option for each question, text will appear at the bottom telling you if your answer was right, or if not, what the correct answer is. Each wrong answer deducts 5 second off of the time remaining. Once all of the questions are answered, or the timer runs out, the game ends. The user can enter their initials and save their higscore. Onve the user clicks "Save score", they are taken to the current highscore list. The user can click "Go back" to retake the quiz, or "Clear highscores" to reset the highscores list. 

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

- - -

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz

WHEN I click the start button
THEN a timer starts and I am presented with a question
    When i click start game button, my html displays the first question with answer options, and the clock on the timer starts to run down.

WHEN I answer a question
THEN I am presented with another question
    When I click an answer choice, I am prompted with feedback that i answered the question correctly or not. Then I am presented another question.


WHEN I answer a question incorrectly
THEN time is subtracted from the clock
    When I give a wrong answer, the timer decreases by 10 seconds.


WHEN all questions are answered or the timer reaches 0
THEN the game is over
    When i answer all the questions OR the time runs out, the game ends and I am taken to the score screen.


WHEN the game is over
THEN I can save my initials and my score
    When I am on the score screen, I can enter my initials and save my score, then I am taken to the highscore html page.


```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
