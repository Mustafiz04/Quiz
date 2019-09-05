// var firstName = prompt("What's your first name");
// var lastName = prompt("What's your last name");
// var age = prompt("What's your age");
// console.log(firstName + " " + lastName);
// console.log("your age is " + age);


// var totalDays = age * 365.25;
// alert("you are almost " + totalDays + " days old");

// function populate(){
//     if(quiz.isEnded()){
//         // showScore();
//     }
//     else{
//         var element = document.getElementById("question");
//         element.innerHTML = quiz.getQuestionIndex().text;
//     }
// }

// var questions = [
//     new Question("What is capital of India", ["New Delhi", "Jaipur", "Patna", "Mumbai"], "New Delhi"),
//     new Question("What is Currency of India", ["Doller", "Yen", "Rupee", "Pound"], "Rupee"),
//     new Question("What is Currency of India", ["Doller", "Yen", "Rupee", "Pound"], "Rupee"),
//     new Question("What is Currency of India", ["Doller", "Yen", "Rupee", "Pound"], "Rupee"),
//     new Question("What is Currency of India", ["Doller", "Yen", "Rupee", "Pound"], "Rupee")
// ];


// var quiz = new Quiz(questions);

// populate();









// var i = 0;
// var ques = document.querySelector("#question");
// var choice = document.querySelectorAll("#choice");
// var x = document.querySelector("#x");
// var y = document.querySelector("#y");
// var total = 0;
// var next = document.querySelector("#next");


// var questions = [
//     "What is capital of India?",
//     "Which is largest city in India?",
//     "How many state is in India?",    
// ]

// var options = [
//     ["New Delhi", "Mumbai", "Hyderabad", "Banglore"],
//     ["Hyderabad", "Mumbai", "Banglore","New Delhi"],
//     ["27", "28", "29", "30"],
// ]

// var correct = [
//     "New Delhi", "Mumbai", "29","New Delhi", "Mumbai", "29"
// ]

// ques.textContent = questions[0];

// for(var j =0; j<choice.length; j++){
//     choice[j].textContent = options[i][j];

//     choice[j].addEventListener("click", function(){
//         checkAns();

//     })

// }

// x.textContent = i+1;
// y.textContent = questions.length;


// next.addEventListener("click", function(){
//     i++;

//     ques.textContent = questions[i];

//     for(var j =0; j < choice.length; j++){
//         choice[j].textContent = options[i][j];
//     }

//     x.textContent = i+1; 

//     console.log(total);

// });

// // for(var z = 0; z< choice.length; z++){
    
// // }

// function checkAns(answer){
//     if(options[i][answer] === correct[i]){
//         total++;
//     }else{
//         total;
//     }
// }

