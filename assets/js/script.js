var questionContentEl = document.getElementById('questionContent');
var answerContentEl = document.getElementById('answerContent');
var rightAnswerContentEl = document.getElementById('rightAnswerContentEl');
var startGameEl = document.getElementById('startGame');
var nextQuestionEl = document.getElementById('nextQuestion');
var questionnaireArray = [
	questionnaire1,
	//questionnaire2,
	//questionnaire3,
	//questionnaire4,
	];
var questionsAll =
	[
		{
			question: "If you were to fly in a straight line, how many               kilometers are between Sydney and London?",
			choices: ["A: 22,000km", "B: 8,000km", "C: 17,000km", "D: 30,000km",],
			answer: 2
		},

		{
			question: "How long is the world's shortest flight",
			choices: ["5 minutes", "1 minute", "3 minutes", "10 minutes",],
			answer: 1
		},

		{
			question: "Which is the busiest airport by passenger traffic",
			choices: ["Charles de Gualle (Paris)", "Heathrow (London)", "LAX (Las Angeles)", "Hartsfield-Jackson (Atlanta)",],
			answer: 3
		},

		{
			question: "What is the most visited country in the world",
			choices: ["France", "China", "Italy", "USA",],
			answer: 0
		}
	]

// START THE GAME. Clicking the button calls the questionnaire1 function which 
startGameEl.addEventListener('click', startGame)
function startGame() {
	questionnaire1()
}

function questionnaire1() {
	questionContentEl.innerHTML = `<div>${questionsAll[0].question}</div>
	<button class ="answer0">${questionsAll[0].choices[0]}</button>
	<button class ="answer0">${questionsAll[0].choices[1]}</button>
	<button class ="answer0">${questionsAll[0].choices[2]}</button>	
	<button class ="answer0">${questionsAll[0].choices[3]}</button>
	`;

	document.querySelectorAll('.answer0').forEach(item => {
	item.addEventListener('click', event => {})
	})
	if (".answer0" === 'C: 17,000km') {
		console.log ("Yes!!!! You're off to a great start");
	} else {
		console.log("Shame! That wasn't it. The answer was C: 17,000km.");
	}  
}

questionnaire1 ()

/*
//call right answer function	

//document.getElementById('answer1')choices.addEventListener('click', answer)
function answer() {
if (questionsAll.choices[2] === true) {
		console.log ("Yes!!!! You're off to a great start");
	} else {
		console.log("Shame! That wasn't it. The answer was C: 17,000km.");
	} 
	answer()
}







//Right Answer Function
//if click event on 'right answer' else if click on wrong answer Imight need to be a seperate function, deduct timers


pseudo code for answers for question1: anser is [2]
if 
	button is clicked on choices array [2], 
	console log You're off to a great start
else
	Shame! That wasn't right. The correct answer was C - 17,000km






// NEXT QUESTION - Event listener to click next question that calls the following function to continue playing the game

nextQuestionEl.addEventListener('click', nextQuestion)

function nextQuestion() {
	questionnaire2()
}

function questionnaire2() {
	questionContentEl.innerHTML = `<div>${questionsAll[1].question}</div>
	<button>${questionsAll[0].choices[0]}</button>	
	<button>${questionsAll[0].choices[1]}</button>	
	<button>${questionsAll[0].choices[2]}</button>	
	<button>${questionsAll[0].choices[3]}</button>
	`;	
}

function questionnaire3() {
	questionContentEl.innerHTML = `<div>${questionsAll[2].question}</div>
	<button>${questionsAll[0].choices[0]}</button>	
	<button>${questionsAll[0].choices[1]}</button>	
	<button>${questionsAll[0].choices[2]}</button>	
	<button>${questionsAll[0].choices[3]}</button>
	`;	
}

function questionnaire4() {
	questionContentEl.innerHTML = `<div>${questionsAll[3].question}</div>
	<button>${questionsAll[0].choices[0]}</button>	
	<button>${questionsAll[0].choices[1]}</button>	
	<button>${questionsAll[0].choices[2]}</button>	
	<button>${questionsAll[0].choices[3]}</button>
	`;	
}


//  TIMER FOR THE GAME STARTS AT 2 MINUTES 
var el = document.getElementById("timer"),
	mins = 2;
	secs = 0;

function countDown() {
	if (secs || mins) {
		setTimeout(countDown, 1000);
	}

	el.innerHTML = mins + ":" + (secs.toString().length < 2 ? "0" + secs : secs); 
	secs -= 1;
	if (secs < 0) {
		mins -= 1;
		secs = 59;
	}
}
countDown();


/*

// If the start button is pushed run function 1
// if next but is pushed a function that runs through questionsAll array 1,2,3
















// Start Button - going to need eventListener 'click' for both these steps
		/// start button actions the timer

		/// start button actions the questions

// Answering a question triggers the next question

// Incorrect answer triggers timer reduction

// If statement to end the game
		/// if timer runs out game ends
		/// if final question is answered game ends

*/

