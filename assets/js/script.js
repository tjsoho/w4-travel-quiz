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
			question: "How long is the world's shortest flight?",
			choices: ["A: 5 minutes", "B: 1 minute", "C: 3 minutes", "D: 10 minutes",],
			answer: "B: 1 minute"
		},

		{
			question: "Which is the busiest airport by passenger traffic?",
			choices: ["A: Charles de Gualle (Paris)", "B: Heathrow (London)", "C: LAX (Las Angeles)", "D: Jackson (Atlanta)",],
			answer: "D: Jackson (Atlanta)"
		},

		{
			question: "What is the most visited country in the world?",
			choices: ["A: France", "B: China", "C: Italy", "D: USA",],
			answer: "A: France"
		}
	]

// START THE GAME. Clicking the button calls the questionnaire1 function which 
// When user the questions start at 0 and the win and loss count is set to 0.



function startGame() {

	questionIndex = 0
	console.log('starting')
	questionnaire()
	winCountEl.textContent = 0;
	lossCountEl.textContent = 0;
	secondsLeft = 90;
	document.getElementById("score-container").style.display = "block";
	document.getElementById("image-container").style.display = "none";
	document.getElementById("the-game").style.display = "block";
	document.getElementById("storeDetails").style.display = "none";
	document.getElementById('success1').style.display = "none";
	document.getElementById('success2').style.display = "none";
	document.getElementById('success3').style.display = "none";
	document.getElementById('success4').style.display = "none";
}


// This function disables the buttons once the user has answered the question.
function disableButtons() {
	document.querySelectorAll('.answer0').forEach(item => {
		item.removeEventListener("click", checkAnswer)
		if (questionIndex < questionsAll.length - 1) {
			item.disabled = false;
		}
	});
}
disableButtons()

// This function checks the answer the input chose vs the correct answer to generate a right or wrong response.
// Onece the last question has been answered, an input box and a confirm button are revealed.
function checkAnswer() {
	disableButtons()
	if (this.textContent == questionsAll[questionIndex].answer) {
		answerContentEl.textContent = "✅ Yes! You got it right! Well done! ✅";
		document.getElementById("answerContent").style.display = "block";
		win++;
		winCountEl.textContent = win;
		localStorage.setItem("Win Count", win);
	}
	else {
		answerContentEl.textContent = `❌ WHOOPS!! The answer is ${questionsAll[questionIndex].answer}. Better luck next time! 😀`;
		document.getElementById("answerContent").style.display = "block";
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

// This function runs the loop of sending the 4 different questions and their optional answers to the HTML element for the user to choose.
function questionnaire() {
	if (questionIndex == 0) {
		score = 0
	}

	questionContentEl.innerHTML = `<div class ="questionAll">${questionsAll[questionIndex].question}</div>
	<button class ="answer0 col-4">${questionsAll[questionIndex].choices[0]}</button>
	<button class ="answer0 col-4">${questionsAll[questionIndex].choices[1]}</button>
	<button class ="answer0 col-4">${questionsAll[questionIndex].choices[2]}</button>	
	<button class ="answer0 col-4">${questionsAll[questionIndex].choices[3]}</button>
	`;

	// This function is to check the answer the user has chosen.
	document.querySelectorAll('.answer0').forEach(item => {
		item.addEventListener('click', checkAnswer)
	})
}

//  TIMER FOR THE GAME STARTS AT 2 MINUTES 
function countDown() {
	// Sets interval in variable
	var timerInterval = setInterval(function () {
		secondsLeft--;
		timerEl.textContent = secondsLeft + " seconds until end of game.";

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

// Message sent out if the itme runs out.
function sendMessage() {
	timerMessageEl.textContent = "You were too slow! Your Plane crashed! ";
}

function nextQuestion() {
}

// Event listener to start the game
startGameEl.addEventListener('click', function () {
	startGame();
	countDown();
})

// This function loads the next question when the user clicks next
nextQuestionEl.addEventListener('click', function () {
	answerContentEl.textContent = ""
	questionIndex++
	document.getElementById("answerContent").style.display = "none";
	console.log(questionIndex)
	questionnaire()
	document.getElementById("storeDetails").style.display = "block";
});

// This function tallys the final score
function scoreTotal() {
	var tally = win - loss;
	console.log(tally);
	return tally;
}


// This function logs the users initials to local storage and shows the user what their final score is
submit.addEventListener('click', function () {
	const val = document.querySelector('input').value;
	localStorage.setItem("Initials", input.value);
	finalScoreEl.textContent = "You scored " + getWinCount() + "/4";
	
	//save score to a high score scoreboard in local storage
	var highScore = localStorage.getItem("High Score");
	if (highScore === null) {
		highScore = 0;
	}
	if (scoreTotal() > highScore) {
		localStorage.setItem("High Score", scoreTotal());
	}
})

//function to get the users win count
function getWinCount() {
	var winCount = parseInt(localStorage.getItem("Win Count"));
	console.log(winCount)
	if (winCount === null) {
		winCount = 0;
	}
	if (winCount <= 1) {
		document.getElementById('success1').style.display = "block";
		document.getElementById('end-game').style.display = "none";
		document.getElementById('storeDetails').style.display = "none";
		document.getElementById('finalScore1').textContent = "You scored " + winCount + "/4";
		
	} else if (winCount === 2) {
		document.getElementById('success2').style.display = "block";
		document.getElementById('end-game').style.display = "none";
		document.getElementById('storeDetails').style.display = "none";
		document.getElementById('finalScore2').textContent = "You scored " + winCount + "/4";

	} else if (winCount === 3) {
		document.getElementById('success3').style.display = "block";
		document.getElementById('end-game').style.display = "none";
		document.getElementById('storeDetails').style.display = "none";
		document.getElementById('finalScore3').textContent = "You scored " + winCount + "/4";

	} else if (winCount === 4) {
		document.getElementById('success4').style.display = "block";
		document.getElementById('end-game').style.display = "none";
		document.getElementById('storeDetails').style.display = "none";
		document.getElementById('finalScore4').textContent = "You scored " + winCount + "/4";
	}
	return winCount;

}




function reloadGame(){
	window.location.reload()
}


