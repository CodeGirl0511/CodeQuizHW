
var button = document.getElementById("startQuizButton");

var seconds = 60;
var checkAnswerText = "";
var newQuizQuestion = "";
var questionNum = 0;
var finalScore;
var submitHighScore = document.querySelector("#submit");
var correct = 0; 

button.addEventListener("click", function(){

  
    startCountdown();

    
    var startContent = document.getElementById("starterContent");

  
    startContent.remove();

  
    displayQuestions(questionNum);
});

var quizquestions = [
    { questText: "Commonly used data types DO NOT include :", opt1: "strings", opt2: "booleans", opt3: "alerts", opt4: "numbers", correct: "button3" },
    { questText: "The condition in an if / else statement is enclosed within _______.", opt1: "quotes", opt2: "curly brackets", opt3: "parentheses", opt4: "square brackets", correct: "button3" },
    { questText: "Arrays in JavaScript can be used to store ______.", opt1: "numbers and strings", opt2: "other arrays", opt3: "booleans", opt4: "all of the above", correct: "button4" },
    { questText: "String values must be enclosed within ______ when being assigned to variables.", opt1: "commas", opt2: "curly brackets", opt3: "quotes", opt4: "parentheses", correct: "button3" },
    { questText: "A very useful tool used during development and debugging for printing content to the debugger is:", opt1: "JavaScript", opt2: "terminal/bash", opt3: "for loops", opt4: "console.log", correct: "button4" }
];


function startCountdown(){

    var countdownTimer = setInterval(function() {

       
        var timerSpan = document.getElementById("quizTimer");

        timerSpan.textContent = seconds; 
        seconds--; 

      
        if (seconds === -1){
            clearInterval(countdownTimer);
            
            
            var questionSection = document.getElementById("newSectionForQuestions");
            questionSection.remove();

           
            allDone();
        }

       

        if (questionNum > 4){
            clearInterval(countdownTimer);

            // 
            allDone();
        }

       
        if(checkAnswerText === "Wrong"){
            checkAnswerText = "";
            seconds = seconds - 10;
        }
    }, 1000);
}


function displayQuestions(){

   
    createHTMLSkeleton();

    
    newQuizQuestion.textContent = quizquestions[questionNum].questText;

   
    var btn1 = document.getElementById("button1");
    btn1.textContent = quizquestions[questionNum].opt1;

    var btn2 = document.getElementById("button2");
    btn2.textContent = quizquestions[questionNum].opt2;

    var btn3 = document.getElementById("button3");
    btn3.textContent = quizquestions[questionNum].opt3;

    var btn4 = document.getElementById("button4");
    btn4.textContent = quizquestions[questionNum].opt4;

    var answerText = document.createElement("p");
    
    if(checkAnswerText === "Wrong"){
        answerText.innerHTML = "<br><hr><span style='color:red; font-size: 18px; font-weight:bold'>" + checkAnswerText + "</span>";
    }
    else {
        answerText.innerHTML = "<br><hr><span style='color:green; font-size: 18px; font-weight:bold'>" + checkAnswerText + "</span>";
    }

    var answerDiv = document.getElementById("newColumnDivForQuestion");
    answerDiv.appendChild(answerText);

   
    btn1.addEventListener("click", checkAnswer);
    btn2.addEventListener("click", checkAnswer);
    btn3.addEventListener("click", checkAnswer);
    btn4.addEventListener("click", checkAnswer);

   
    function checkAnswer(){
       
        var buttonClick = this.id;

       
        var sectionToClear = document.getElementById("newSectionForQuestions");

        
        if (buttonClick == quizquestions[questionNum].correct){
            checkAnswerText = "Correct!";
            correct++;
            sectionToClear.remove();
            
           
            questionNum++;

         
            if (questionNum > 4){
                return;
            }
            else {
                displayQuestions(questionNum);
            }
        }
       
        else {
            checkAnswerText = "Wrong";
            sectionToClear.remove();

           
            questionNum++;

            
            if (questionNum > 4){
                return;
            }
            else {
                displayQuestions(questionNum);
            }
        }
    }
}


function createHTMLSkeleton(){

   
    var newSection = document.createElement("section");

  
    newSection.setAttribute("id", "newSectionForQuestions");


    var main = document.getElementById("main");

  
    main.appendChild(newSection);

  
    var newRow = document.createElement("div");

    newRow.setAttribute("class", "row mt-3");

    newSection.appendChild(newRow);
 
    var newColEl = document.createElement("div");

   
    newColEl.setAttribute("class", "col-12 text-center");
    newColEl.setAttribute("id", "newColumnDivForQuestion");
    newColEl.style.marginTop = "-42px";

 
    newRow.appendChild(newColEl);

   
    var questionEL = document.getElementById("newColumnDivForQuestion");

   
    newQuizQuestion = document.createElement("p");

    newQuizQuestion.style.fontSize = "25px";
    newQuizQuestion.style.maxWidth = "70%"; 
    newQuizQuestion.style.margin = "auto";
    newQuizQuestion.style.paddingBottom = "25px";

  
    questionEL.appendChild(newQuizQuestion);

   
    var newButtonListOptUl = document.createElement("ul");

   
    newButtonListOptUl.setAttribute("id", "buttonListContainer");
    newButtonListOptUl.style.textAlign = "left";
    newButtonListOptUl.style.marginLeft = "28%";

  
    for (var i = 1; i < 5; i ++){
        var newliEl = document.createElement("li");
        newliEl.style.listStyle = "none";
        newButtonListOptUl.appendChild(newliEl);

        var buttonLi = document.createElement("button");
        buttonLi.setAttribute("id" , "button" + [i]);
        buttonLi.setAttribute("class", "btn btn-info");
        buttonLi.style.marginBottom = "5px";
        newliEl.appendChild(buttonLi);
    }


    questionEL.appendChild(newButtonListOptUl);
}


function allDone(){
    
 
    var formEl = document.getElementById("formElement");
    
   
    finalScore = ((correct/5) * 100) + "%";
    

    formEl.innerHTML = "<h1>All done!</h1><br> <span style='font-size: 20px'>Your final score is " + "<span style='color:#19A2B8'>" + finalScore + "</span>" + "<br></span>";

  
    var form = document.getElementById("hiddenForm");
    console.log("Form" + form);
    form.style.visibility = "visible";

   
    var answerText = document.createElement("p");

    if(checkAnswerText === "Wrong"){
        answerText.innerHTML = "<br><hr><span style='color:red;font-size: 18px; font-weight:bold'>" + checkAnswerText + "</span>";
    }
    else{
        answerText.innerHTML = "<br><hr><span style='color:green;font-size: 18px; font-weight:bold'>" + checkAnswerText + "</span>";
    }

    var answer = document.getElementById("lastQuestionEl");
    answer.appendChild(answerText);
};    

    


