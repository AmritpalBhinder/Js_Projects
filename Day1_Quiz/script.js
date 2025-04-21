const Questions  = [
    {
        question: "Which of the three banks will be merged with the other two to create India’s third-largest bank?",
        answers:[
            {text :"Punjab National Bank",correct:false},
            {text :"Indian Bank",correct:true},
            {text :"Bank of Baroda ",correct:false},
            {text :"Dena Bank",correct:false}
        ]
    },
    {
        question: "What is the name of the weak zone of the earth’s crust?",
        answers:[
            {text :"Seismic ",correct:true},
            {text :"Cosmic",correct:false},
            {text :"Formic ",correct:false},
            {text :"Anaemic",correct:false}
        ]
    },
    {
        question: "Where was India’s first national Museum opened?",
        answers:[
            {text :"Delhi ",correct:false},
            {text :"Hyderabad",correct:false},
            {text :"Rajasthan ",correct:false},
            {text :"Mumbai",correct:true}
        ]
    },
    {
        question: " In 2019, Which popular singer was awarded the Bharat Ratna award?",
        answers:[
            {text :"Lata Mangeshkar ",correct:false},
            {text :"Asha Bhosle",correct:false},
            {text :"Bhupen Hazarika  ",correct:true},
            {text :"Manna Dey",correct:false}
        ]
    },
    {
        question: "The world’s nation 5G mobile network was launched by which country?",
        answers:[
            {text :"Japan ",correct:false},
            {text :"Asia",correct:false},
            {text :"South Korea ",correct:true},
            {text :"Malaysia",correct:false}
        ]
    },
    {
        question: "When was Pravasi Bhartiya Divas held in Varanasi?",
        answers:[
            {text :"2017 ",correct:false},
            {text :"2015",correct:false},
            {text :"2019 ",correct:true},
            {text :"2020",correct:false}
        ]
    },
    {
        question: " Vijay Singh (golf player) is from which country?",
        answers:[
            {text :"UK ",correct:false},
            {text :"USA",correct:false},
            {text :"India ",correct:false},
            {text :"Fiji",correct:true}
        ]
    },
    {
        question: "What is the full form of DRDL?",
        answers:[
            {text :"Differential Research and Documentation Laboratory ",correct:false},
            {text :"Department of Research and Development Laboratory",correct:true},
            {text :"Defense Research and Development Laboratory ",correct:false},
            {text :"Defense Research and Development Laboratory",correct:false}
        ]
    },
    {
        question: "The green planet in the solar system is?",
        answers:[
            {text :"Mars ",correct:false},
            {text :"Uranus",correct:true},
            {text :"Venus ",correct:false},
            {text :"Earth",correct:false}
        ]
    },
    {
        question: "The father of Indian missile technology is _________________?",
        answers:[
            {text :"Dr Homi Bhabha ",correct:false},
            {text :"Dr Chidambaram",correct:false},
            {text :"Dr U.R. Rao ",correct:false},
            {text :"Dr A.P.J. Abdul Kalam",correct:true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${Questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < Questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < Questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();