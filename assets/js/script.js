
// Declaring Variables
var timeLeft = document.querySelector("#timeLeft");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var score = 0;
var questionsIndex = 0;

// 100 seconds are given, to average out at 10 seconds per question 
var currentTime = 101;
var holdInterval = 0;
var deduction = 15;
// Creates new element
var createUl = document.createElement("ul");

// Variables with array and object for questions 
var questions = [
    {
        title: "What city is the first US city to be founded by a woman?",
        choices: ["Portland, Oregon", "Miami, Florida", "San Diego, California", "Trenton, NJ"],
        answer: "Miami, Florida"
    },
    {
        title: "What is the most visited attraction in the world?",
        choices: ["The White House", "The Panama Canal", "Times Square, NYC", "The Roman Colosseum"],
        answer: "The Roman Colosseum"
    },
    {
        title: "What is the capital city of Spain?",
        choices: ["Barcelona", "Seville", "Madrid", "Valencia"],
        answer: "Madrid"
    },
    {
        title: "Which country produces the most coffee in the world?",
        choices: ["Brazil", "The United States", "Colombia", "Japan"],
        answer: "Brazil"
    },
    {
        title: "Zurich is the largest city in what country?",
        choices: ["Germany", "Switzerland", "Austria", "Moldova"],
        answer: "Switzerland"
    },
    {
        title: "What is the world's biggest island?",
        choices: ["Iceland", "Greenland", "Cuba", "Australia"],
        answer: "Greenland"
    },
    {
        title: "What is the national dish of Spain?",
        choices: ["Paella", "Empanadas", "Tacos", "Flan"],
        answer: "Paella"
    },
    {
        title: "Which desert is the largest in the world?",
        choices: ["The Mojave Desert", "The Great Basin", "The Atacoma Desert", "The Sahara Desert"],
        answer: "The Sahara Desert"
    },
    {
        title: "Which US city is known as the City of Brotherly Love?",
        choices: ["New York, NY", "Philadephia, PA", "Sacramento, CA", "Trenton, NJ"],
        answer: "Philadephia, PA"
    },
    {
        title: "What is the capital city of Japan?",
        choices: ["Yokohama", "Kyoto", "Tokyo", "Osaka"],
        answer: "Tokyo"
    },


];

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            currentTime--;
            timeLeft.textContent = currentTime;

            if (currentTime <= 0) {
                clearInterval(holdInterval);
                finishQuiz();
                timeLeft.textContent = "You are OUT of time!";
            }
        }, 1000);
    }
    wrapper.style.display = "none"; 
    render(questionsIndex);
});

// Renders questions and choices to page: 
function render(questionsIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    createUl.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
    
    // Appends question title only
        var usersQuestions = questions[questionsIndex].title;
        var usersChoices = questions[questionsIndex].choices;
        questionsDiv.textContent = usersQuestions;
    }
    // New for each for question choices
    usersChoices.forEach(function (newItem) {
        var liItem = document.createElement("li");
        liItem.textContent = newItem;
        questionsDiv.appendChild(createUl);
        createUl.appendChild(liItem);
        liItem.addEventListener("click", (check));
    })
}
// Event to check choices with answer
function check(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionsIndex].answer) {
            score++;
            createDiv.textContent = "Correct! Stamp your Passport!"
            // Correct condition 
        } else {
            // Will deduct -5 seconds off currentTime for wrong answers
            currentTime = currentTime - deduction;
            createDiv.textContent = "INCCORRECT -15 For you! "
        }

    }
    // Question Index determines number question user is on
    questionsIndex++;

    if (questionsIndex >= questions.length) {
        // End of the quizz
        finishQuiz();
        createDiv.textContent = "You did it! You traveled the globe!" + " " + "You got " + score + " questions right!";
    } else {
        render(questionsIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// finishQuiz will be used to appened any lost children.
function finishQuiz() {
    questionsDiv.innerHTML = "";
    timeLeft.innerHTML = "";

    // Heading:
    var finishedH1 = document.createElement("h1");
    finishedH1.setAttribute("id", "finishedH1");
    finishedH1.textContent = "Congrats! You finished the Quiz!!"

    questionsDiv.appendChild(finishedH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time 
    if (currentTime >= 0) {
        var timeRemaining = currentTime;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Final Score: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Please enter your name: ";

    questionsDiv.appendChild(createLabel);

    // Enter your name
    var addInput = document.createElement("input");
    addInput.setAttribute("type", "text");
    addInput.setAttribute("id", "name");
    addInput.textContent = "";

    questionsDiv.appendChild(addInput);

    // submit
    var subInput = document.createElement("button");
    subInput.setAttribute("type", "submit");
    subInput.setAttribute("id", "Submit");
    subInput.textContent = "Submit";

    questionsDiv.appendChild(subInput);

    // Event listener to capture the user initial and the scores 
    subInput.addEventListener("click", function () {
        var name = addInput.value;

        if (name === null) {

            console.log("Nothing was added");

        } else {
            var finalScore = {
                name: name,
                score: timeRemaining
            }
            console.log(finalScore);
            var totalScores = localStorage.getItem("totalScores");
            if (totalScores === null) {
                totalScores = [];
            } else {
                totalScores = JSON.parse(totalScores);
            }
            totalScores.push(finalScore);
            var newScore = JSON.stringify(totalScores);
            localStorage.setItem("totalScores", newScore);
            // go back to the index page 
            window.location.replace("./HighScores.html");
        }
    });

}