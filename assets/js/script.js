var questionContentEl = document.getElementById('questionContent');
var answerContentEl = document.getElementById('answerContent');
var rightAnswerContentEl = document.getElementById('rightAnswerContentEl');
var questionsAll = 
        [
                {
                question: "If you were to fly in a straight line, how many               kilometers are between Sydney and London?",
                choices: ["22,000km", "8,000km", "17,000km", "30,000km",],
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


function questionaire() {
        questionContentEl.append = questionsAll
        console.log('function is working')
        
}
questionaire();
















/*
// Start Button - going to need eventListener 'click' for both these steps
    /// start button actions the timer

    /// start button actions the questions

// Answering a question triggers the next question

// Incorrect answer triggers timer reduction

// If statement to end the game
    /// if timer runs out game ends
    /// if final question is answered game ends
*/



