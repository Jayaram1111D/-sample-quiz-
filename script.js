const quizData = [
    {
        question: "which language runs on browser?",
        a:"java",
        b:"C",
        c:"python",
        d:"java script",
        correct: "d"
    },

    {
        question: "Html stands for?",
        a:"Hyper loop macine language",
        b:"hyper lap lorries",
        c:"Hyper text mark up laguage",
        d:"Hyper text mark down language",
        correct: "c"
    },
    {
        question: "css stands for?",
        a:"cascading style sheet",
        b:"cascading style loop",
        c:"cascading styling property loop",
        d:"cascading mark up language",
        correct: "a"
    },
    {
        question: "which cricketer most runs for ipl in year the of 2016?",
        a:"viat",
        b:"rohit",
        c:"warner",
        d:"abd",
        correct: "a"
    },
];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const aText= document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')

const submitBtn = document.getElementById('submit')

//initialising
let currentQuiz =0
let score = 0
loadQuiz()

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];
questionEl.innerText = currentQuizData.question
aText.innerText = currentQuizData.a
bText.innerText = currentQuizData.b
cText.innerText = currentQuizData.c
dText.innerText = currentQuizData.d

}
function deselectAnswer(){
    answerEls.forEach(answerEls => answerEls.checked= false)
}

function getselected(){
    //initialise
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }

    })
    return answer;
}
submitBtn.addEventListener('click',() => {
    const answer = getselected()

    if(answer) {
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++ //fetching next question
        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `<h2> you answerd ${score}/${quizData.length} questions correctly.
            <button onclick= "location.reload()">Reload</button></h2>`
        }
    }
})

