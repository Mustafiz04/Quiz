function load(){
    var preloader = document.querySelector(".loading");

    preloader.style.display = "none";
}



// getin
const gridQuiz = document.querySelector(".grid");
const quiz = document.getElementById("quiz");
const question  = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const result = document.getElementById("result");
const a = document.getElementById("score");
const o = document.getElementById("outOf");
const viewAns = document.getElementById("viewAns");
const E = document.getElementById("E");
const restart = document.querySelector(".restart");
const start = document.querySelector(".start");
var y = document.getElementById("y");
var x = document.getElementById("x");
// const restart = document.querySelector("#restart");


// count
const quesTime = 10;
const gaugeWidth = 300;
let count = 10;
const gaugeProgressUnit = gaugeWidth / quesTime;

// marks
var marks = 0;



// display
gridQuiz.style.display = "none";
result.style.display = "none";
viewAns.style.display = "none";




// questions
let questions = [
    {
        question : "Which is capital of India?",
        choiceA : "New Delhi",
        choiceB : "Hyderabad",
        choiceC : "Banglore",
        choiceD : "Mumbai",
        correct : "A"
    },
    {
        question : "Which is largest city of India?",
        choiceA : "New Delhi",
        choiceB : "Jaipur",
        choiceC : "Banglore",
        choiceD : "Mumbai",
        correct : "D"
    },
    {
        question : "Which is technology capital of India?",
        choiceA : "New Delhi",
        choiceB : "Hyderabad",
        choiceC : "Banglore",
        choiceD : "Chennai",
        correct : "B"
    },
    {
        question : "How many states is in India?",
        choiceA : "27",
        choiceB : "28",
        choiceC : "29",
        choiceD : "30",
        correct : "C"
    }
]
// question index
const lastQuestion = questions.length - 1;
let runningQuestion = 0;

y.textContent = questions.length;
x.textContent = runningQuestion + 1;



// displayOfQuestion
function renderQuestion(){
    let q = questions[runningQuestion];

    question.textContent = q.question;
    choiceA.textContent = q.choiceA;
    choiceB.textContent = q.choiceB;
    choiceC.textContent = q.choiceC;
    choiceD.textContent = q.choiceD;
}



// renderQuestion();
// // counterRender();
// Timer =  setInterval(counterRender, 1000);




// statquiz
start.addEventListener("click", startQuiz);

function startQuiz(){
    start.style.display = "none";
    gridQuiz.style.display = "block";
    
    renderQuestion();
    counterRender();
    Timer = setInterval(counterRender, 1000);
    // clearInterval
}

restart.addEventListener("click", reStart);

function reStart(){
    result.style.display = "none";
    gridQuiz.style.display = "block";

    // lastQuestion = questions.length - 1;
    runningQuestion = 0;
    x.textContent = 1;

    marks = 0;
    count = 10;
    renderQuestion();
    counterRender();
    // Timer = setInterval(counterRender, 1000);
}



// checking of ans
function checkAns(answer){
    if(answer == questions[runningQuestion].correct){
        // alert("right")
        marks++;
    }else{
        // alert("wronge");
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender();
    }

    changeOf();
}

// change index of question
function changeOf(){
    x.textContent = runningQuestion + 1;
}


// display of score
function scoreRender(){
    // quiz.innerHTML = "You score " + marks + " marks of " + questions.length
    gridQuiz.style.display = "none";
    result.style.display = "block";
    a.textContent = marks;
    o.textContent = questions.length;
}

E.addEventListener("click", function(){
    viewAns.style.display = "block";
    gridQuiz.style.display = "none";
    result.style.display = "none";
    
});



// count
function counterRender(){
    if(count <= quesTime && count>0){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count +"px";
        count--;
    }else{
        count = 0;
        timeOut();
        // if(runningQuestion < lastQuestion){
        //     runningQuestion++;
        //     renderQuestion();
        // }else{
        //     clearInterval(Timer);
        //             timeOut();
        // }
    }
}


// timee timeout
function timeOut(){
    if(count === 0 ){
        scoreRender();
    }
}