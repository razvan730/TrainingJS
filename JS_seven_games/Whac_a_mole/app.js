const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    //  console.log(randomSquare)
    //  console.log (Math.floor(Math.random() * 9)) // random stuff
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id // aici iau id-ul fiecarui random square cu hitPosition sa il folosesc si altundeva (aici ma cam chinuia pe mine in C#)
}


squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++; //  ca sa il pot folosi la scor
            score.textContent = result // in loc de textContent puteam sa pun si innerHTML
        }
    })
})


function moveMole(){
    let timeriD = null
    timerId = setInterval(randomSquare, 1000) // imi genereaza un randomSquare la 1000 milisecunde
 
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is: ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)

moveMole()




