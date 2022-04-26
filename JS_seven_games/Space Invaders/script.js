// asta pare mai interesant
// Note: 1)am facut acel for loop sa fac 225 de div-uri. 2)am facut grid.appendChild(square); ca sa le pun unde vreau ( in grid ).
      // 3)am selectat toate divurile si am format un array cu ele.



const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');
let currentShooterIndex = 202;
let width = 15;
let direction = 1;
let invadersId;
let goingRight = true;
let aliensRemoved = [];
let results = 0;

// Asa sa imi fac div-urile in JS, minimul il fac in HTML
for (let i = 0; i < 225; i++) {
    const square = document.createElement('div'); // creaza un div
    grid.appendChild(square); // adauga div-ul in grid -> square sa fie copilul lui grid

}

// const squares = document.querySelectorAll('.grid div'); //1.0 asa am inceput
const squares = Array.from(document.querySelectorAll('.grid div')); //1.1 am facut array cu div-urile


const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)){
            squares[alienInvaders[i]].classList.add('invader');
        }
        //squares[alienInvaders[i]].classList.add('invader');
    }
}

draw();

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader');
    }
}

squares[currentShooterIndex].classList.add('shooter');

function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.key){
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
            break;
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
            break;
    }
    squares[currentShooterIndex].classList.add('shooter');
}
document.addEventListener('keydown', moveShooter);


function moveInvaders() {

    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge && goingRight){
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width +1;
            direction = -1;
            goingRight = false;
        }
    }

    if (leftEdge && !goingRight){
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1;
            direction = 1;
            goingRight = true;
        }
    }

    for (let i=0; i < alienInvaders.length; i++){
        alienInvaders[i] += direction; // mutam tot array-ul de invadatori 
    }

    draw();


    if (squares[currentShooterIndex].classList.contains('invader', 'shooter')){
        //console.log('game over');
        resultsDisplay.innerHTML = 'Game Over';
        clearInterval(invadersId);
    }
    

    for (let i = 0; i < alienInvaders.length; i++){
        //console.log('squares.length', squares.length);
        if ( alienInvaders[i] > squares.length ){
            //console.log('squares.length', squares.length);
            resultsDisplay.innerHTML = 'Game Over';
            clearInterval(invadersId);
        }
    }

    if (aliensRemoved.length === alienInvaders.length){
        resultsDisplay.innerHTML = 'You Win!';
        clearInterval(invadersId);
    }
}


invadersId = setInterval(moveInvaders, 500);



function shoot(e){
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

        if (squares[currentLaserIndex].classList.contains('invader')){
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 200);
            clearInterval(laserId);

            const alienRemoval = alienInvaders.indexOf(currentLaserIndex);
            aliensRemoved.push(alienRemoval);
            results++;
            resultsDisplay.innerHTML = results;
            //console.log(aliensRemoved);
        }
    
    }

    switch(e.key){
        case 'ArrowUp':
            laserId = setInterval(moveLaser, 150);
    }

}

document.addEventListener('keydown', shoot);




//https://www.youtube.com/watch?v=ec8vSKJuZTk















