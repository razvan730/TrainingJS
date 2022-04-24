const computerChoiceDispaly = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    // sau pot folosi in loc de 3:  possibleChoices.length
    // am adaugat si Math.floor si am impachetat treaba aia, ca sa ne iasa un integer

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    
    computerChoiceDispaly.innerHTML = computerChoice
}


function getResult(){
    if (computerChoice === userChoice){
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result = 'You Win!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors"){
        result = 'You Lost!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors"){
        result = 'You Win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock"){
        result = 'You Lost!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock"){
        result = 'You Win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper"){
        result = 'You Lost!'
    }
    resultDisplay.innerHTML = result
}




