
//===================<Quiz Block>======================================

//quizs data array of objects
const quizData = [
    {
        question: 'How old is Me?',
        a: '26yo',
        b: '32yo',
        c: '36yo',
        d: '42yo',
        correct: 'c'

    },{
        question: 'How many childs I have?',
        a: 'None',
        b: 'One',
        c: 'Two',
        d: 'More',
        correct: 'b'
    },{
        question: 'What is my base speciality?',
        a: 'Programming',
        b: 'Graphics',
        c: 'History',
        d: 'Astronomy',
        correct: 'b'
    },{
        question: 'What kind of projects have I been involved before?',
        a: 'Economical',
        b: 'QA',
        c: 'Engineering',
        d: 'DevOps',
        correct: 'c'
    },{
        question: 'What is my highest graduation?',
        a: 'High school',
        b: 'Bachelors degrees',
        c: 'Masters degree',
        d: 'Doctor of philosophy',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll(".answer");
 
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
// next quiz updating
function loadQuiz() {
    unActiveColor();

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
// get selected answer
function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}
// deselect choice after submitting
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
// Submit the answer
submitBtn.addEventListener('click', () => {
    
    // check to see the answer
    const answer = getSelected();
    
    if(answer){
        // varifing correct answer
        if(answer === quizData[currentQuiz].correct){
            score++;
            //indicate answer as correct
            submitBtn.classList.add("correct");
        } else{
            //indicate answer as incorrect
            submitBtn.classList.add("incorrect");
        }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            // timeout for visualisation of answer indication
            setTimeout(loadQuiz, 500);
            
        } else {
            // timeout for visualisation of answer indication before displaying summary result
            
            setTimeout(resultMessage, 500);
            // ${score}/${quizData.length} 
        }
    }
})
//to delete indication of correct submission
function unActiveColor(){
    // console.log("in func")
    submitBtn.classList.remove("correct");
    submitBtn.classList.remove("incorrect");
}

//showing result 
function resultMessage(){
    const percentScore = score / quizData.length * 100;
    quiz.classList.remove("quiz__container");
    quiz.innerHTML = `
    <div class = "result_container">
        <div class="circular-progress">
            <div class="value-container">
                0%
            </div>
        </div>
        <h3>You answered correctly at ${percentScore}% of questions.</h3>
    </div>
    `;
    resultBar(percentScore);
    
};


//===============================<Quiz Circular Bar>==================================
function resultBar(fullScore){
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = fullScore;
let speed = 15;

let progress = setInterval( () => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #2ec4b5 ${progressValue * 3.6}deg, 
        #ffffff66 ${progressValue * 3.6}deg )`
    if( progressValue === progressEndValue ){
        clearInterval(progress)
    }
}, speed);
}


//===============================<BLOCK of WebP tests>================================

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

"use strict"
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()||
                isMobile.BlackBerry()|| 
                isMobile.iOS()|| 
                isMobile.Opera() || 
                isMobile.Windows());
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}


