const questions = [
    {
        question: "Qual é o jogador mais rápido do Blue Lock",
        answers: [
            { id: 1, text: "Bachira", correct: false },
            { id: 2, text: "Isagi", correct: false },
            { id: 3, text: "Nagi", correct: false },
            { id: 4, text: "Chigiri", correct: true },
        ]

    },
    {
        question: "Qual é o melhor diblador do Blue Lock",
        answers: [
            { id: 1, text: "Bachira", correct: true },
            { id: 2, text: "Isagi", correct: false },
            { id: 3, text: "Yukimiya", correct: false },
            { id: 4, text: "Rin", correct: false },
        ]

    },
    {
        question: "Qual é o TOP 1 do Blue Lock",
        answers: [
            { id: 1, text: "Rin", correct: true },
            { id: 2, text: "Isagi", correct: false },
            { id: 3, text: "Shidou", correct: false },
            { id: 4, text: "Barou", correct: false },
        ]

    },
    {
        question: "Qual desses jogadores fez GOL em todas as Partidas do Blue Lock",
        answers: [
            { id: 1, text: "Rin", correct: true },
            { id: 2, text: "Isagi", correct: false },
            { id: 3, text: "Nagi", correct: false },
            { id: 4, text: "Barou", correct: false },
        ]

    },
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let correntQuestionIndex = 0;
let score = 0;

function startQuiz() {
    correntQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    ShowQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function ShowQuestion() {
    resetState();
    let correntQuestion = questions[correntQuestionIndex];
    let questionNo = correntQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + correntQuestion.question;

    correntQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id=answer.id;
        button.classList.add("btn");
        button.addEventListener("click",selectAnswer);
        answerButtons.appendChild(button);
    });
}
function selectAnswer(e) {
    answers=questions[correntQuestionIndex].answers;
    const correctAnswer=answers.filter((answer)=>answer.correct==true)[0];

    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.id== correctAnswer.id;
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else  {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button)=>{
     button.disabled=true;
    });
    nextButton.style.display="block";
}
function showscore() {
    resetState();
    questionElement.innerHTML=`voce acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML="Jogar Novamente";
    nextButton.style.display="block";
    
}
function han() {
    correntQuestionIndex++;
    if (correntQuestionIndex<questions.length) {
         ShowQuestion();
    }else{
        showscore();
    }

}
nextButton.addEventListener("click",()=>{
    if (correntQuestionIndex<questions.length) {
        han();
    }else{
        startQuiz();
    }
})
startQuiz();