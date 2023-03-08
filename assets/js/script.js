// GOLBAL VAR
var questionIndex = 0
var win = 0
var loss = 0
var secondsLeft = 60
var score = ""
var winCount = localStorage.getItem("Win Count")
var lossCount = localStorage.getItem("Loss Count")
var winCountEl = document.getElementById("winCount")
var lossCountEl = document.getElementById("lossCount")
var finalScoreEl = document.getElementById("finalScore")
var input = document.getElementById("inputDetails")
var submit = document.getElementById("submitBtn")
var timerEl = document.querySelector(".timer")
var timerMessageEl = document.getElementById('timerMessage')
var questionContentEl = document.getElementById('questionContent');
var answerContentEl = document.getElementById('answerContent');
var rightAnswerContentEl = document.getElementById('rightAnswerContent');
var startGameEl = document.getElementById('startGame');
var nextQuestionEl = document.getElementById('nextQuestion');
var questionsAll =
	[
		{
			question: "If you were to fly in a straight line, how many kilometers are between Sydney and London?",
			choices: ["A: 22,000km", "B: 8,000km", "C: 17,000km", "D: 30,000km",],
			answer: "C: 17,000km"
		},

		{
			question: "How long is the world's shortest flight",
			choices: ["5 minutes", "1 minute", "3 minutes", "10 minutes",],
			answer: "1 minute"
		},

		{
			question: "Which is the busiest airport by passenger traffic",
			choices: ["Charles de Gualle (Paris)", "Heathrow (London)", "LAX (Las Angeles)", "Hartsfield-Jackson (Atlanta)",],
			answer: "Hartsfield-Jackson (Atlanta)"
		},

		{
			question: "What is the most visited country in the world",
			choices: ["France", "China", "Italy", "USA",],
			answer: "France"
		}
	]

// START THE GAME. Clicking the button calls the questionnaire1 function which 

function startGame() {
	console.log('starting')
	questionnaire()
	winCountEl.textContent = 0;
	lossCountEl.textContent = 0;
	secondsLeft = 60;
}

function checkAnswer() {
	if (this.textContent == questionsAll[questionIndex].answer) {
		answerContentEl.textContent = "Yes! You got it right! Well done!";
		win++;
		winCountEl.textContent = win;
		localStorage.setItem("Win Count", win);
	}
	else {
		answerContentEl.textContent = "Shame! That was wrong! Better luck next time";
		loss++;
		lossCountEl.textContent = loss;
		localStorage.setItem("Loss Count", loss);
		secondsLeft -= 5
		sendMessage();
	}

	if (questionIndex === questionsAll.length - 1) {
		document.getElementById("next-finsih").style.visibility = "hidden";
		document.getElementById("storeDetails").style.visibility = "visible";
	}
}


function questionnaire() {
	if (questionIndex == 0) {
		score = 0
	}

	questionContentEl.innerHTML = `<div class ="questionAll">${questionsAll[questionIndex].question}</div>
	<button class ="answer0">${questionsAll[questionIndex].choices[0]}</button>
	<button class ="answer0">${questionsAll[questionIndex].choices[1]}</button>
	<button class ="answer0">${questionsAll[questionIndex].choices[2]}</button>	
	<button class ="answer0">${questionsAll[questionIndex].choices[3]}</button>
	`;

	document.querySelectorAll('.answer0').forEach(item => {
		item.addEventListener('click', checkAnswer)
	})
}

//  TIMER FOR THE GAME STARTS AT 2 MINUTES 
function countDown() {
	// Sets interval in variable
	var timerInterval = setInterval(function () {
		secondsLeft--;
		console.log(secondsLeft)
		timerEl.textContent = secondsLeft + " seconds left till end of game.";

		if (secondsLeft <= 0) {
			// Stops execution of action at set interval
			clearInterval(timerInterval);
			// Calls function to create and append image
			sendMessage();
			return;
		}

		if (questionIndex === questionsAll.length - 1) {
			clearInterval(timerInterval);
			console.log("Timer stopped!");
			return;
		}
	}, 1000);
}

function sendMessage() {
	timerMessageEl.textContent = "You were too slow! Your Plane crashed! ";
}

function nextQuestion() {
}

startGameEl.addEventListener('click', function () {
	startGame();
	countDown();
})

nextQuestionEl.addEventListener('click', function () {
	answerContentEl.textContent = ""
	questionIndex++
	console.log(questionIndex)
	questionnaire()
});

function scoreTotal() {
	var tally = win - loss;
	console.log(tally);
	return tally;
}

submit.addEventListener('click', function () {
	const val = document.querySelector('input').value;
	localStorage.setItem("Initials", input);
	finalScoreEl.textContent = scoreTotal
})




















































//questionnaire1 ()

/*
// Click on Next and the following question comes up
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
*/