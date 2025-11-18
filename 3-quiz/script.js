import { shuffle } from "./tools.js";

const startPage = document.querySelector("#start-page");
const questionsPage = document.querySelector("#questions-page");

const startQuizBtn = document.querySelector("#start-quiz");

// Элементы со страницы с вопросами
const questionElement = document.querySelector("#question-description");
const questionNumber = document.querySelector("#question-number");
const questionDiffuculty = document.querySelector(".question-diff");
const questionCategory = document.querySelector("#question-category");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-question");

let currentQuestionIndex = 0;
let score = 0;

const questionDiffs = {
    "hard": {
        bgColor: "red",
        color: "white"
    },
    "medium": {
        bgColor: "yellow",
        color: "black"
    },
    "easy": {
        bgColor: "green",
        color: "white"
    },
};

const responseCodes = {
    0: "Success Returned results successfully.",
    1: "No Results Could not return results. The API doesn't have enough questions for your query.",
    2: "Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid.",
    3: "Token Not Found Session Token does not exist.",
    4: "Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.",
    5: "Rate Limit Too many requests have occurred. Each IP can only access the API once every 5 seconds.",
};

let questions = [];

let url = "";

function showError(fieldName, message) {
    const errorElement = document.querySelector(`p.error[name=${fieldName}]`);

    if (errorElement) {
        errorElement.classList.add("show");
        errorElement.textContent = message;
    }
}

function clearError(fieldName) {
    const errorElement = document.querySelector(`p.error[name=${fieldName}]`);

    if (errorElement) {
        errorElement.classList.remove("show");
        errorElement.textContent = "";
    }
}

function setDiffColorTag(diff) {
    questionDiffuculty.style.backgroundColor = questionDiffs[diff].bgColor;
    questionDiffuculty.style.color = questionDiffs[diff].color;
}

function startQuiz() {
    startPage.style.display = "none";
    questionsPage.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question ➝";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";

    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore() {
    resetState();

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    questionCategory.innerHTML = "";
    questionDiffuculty.innerHTML = "";

    nextButton.innerHTML = "Reload Page to play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    let currentQuestionAnswers = shuffle([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]);

    questionNumber.innerHTML = "Question " + questionNum + " of " + questions.length;

    questionDiffuculty.innerHTML = currentQuestion.difficulty;
    setDiffColorTag(currentQuestion.difficulty);

    questionCategory.innerHTML = `Category: ${currentQuestion.category}`;
    questionElement.innerHTML = `${questionNum}. ${currentQuestion.question}`;

    currentQuestionAnswers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", (e) => {
            const selectedAnswer = e.target;
            const correctAnswer = currentQuestion.correct_answer;

            if (selectedAnswer.innerHTML === correctAnswer) {
                score++;
                selectedAnswer.classList.add("correct");
            } else {
                selectedAnswer.classList.add("incorrect");
            }

            Array.from(answerButtons.children).forEach((button) => {
                if (button.innerHTML === correctAnswer) {
                    button.classList.add("correct");
                }
                button.disabled = true;
            })

            if (currentQuestionIndex == (questions.length - 1)) {
                nextButton.innerHTML = "Show Score 🎉";
            }

            nextButton.style.display = "block";
        })
    });
}

const getQuestions = async (e) => {
    e.preventDefault();
    
    questions = [];
    
    const amount = document.querySelector("[name=amount]").value;
    if (amount < 5 || amount > 50) {
        showError("amount", "Number of Questions must be between 5 and 50");
        return;
    } else {
        clearError("amount");
    }

    const category = document.querySelector("[name=category]").value;
    const difficulty = document.querySelector("[name=difficulty]").value;

    url = `https://opentdb.com/api.php?amount=${amount}&type=multiple${difficulty !== "any" ? `&difficulty=${difficulty}` : ""}${
        category !== "any" ? `&category=${category}` : ""
    }`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.response_code !== 0) {
        showError("response-error", responseCodes[data.response_code]);
    } else {
        clearError("response-error");
        questions = data.results;
        startQuiz();
    }
};

startQuizBtn.addEventListener("click", getQuestions);
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {

    }
});
