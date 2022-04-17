const grid = document.querySelector('.grid') //selects the grid
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100 // set the width of the block
const blockHeight = 20  // set the height of the block
const ballDiameter = 20
let timerId
let xDirection = -2
let yDirection = 2
let score = 0


const userStart = [230, 10] // set the starting position of the user
let currentPosition = userStart // set the current position of the user
const boardWidth = 560
const boardHeight = 300

const ballStart = [270, 40] // set the starting position of the ball
let ballCurrentPosition = ballStart // set the current position of the ball

//create Block
class Block{
    constructor(xAxis, yAxis){ //constructor for the block
        this.bottomLeft = [xAxis, yAxis] //bottom left corner of the block
        this.bottomRight = [xAxis + blockWidth, yAxis] //bottom right corner of the block
        this.topLeft = [xAxis, yAxis + blockHeight] //top left corner of the block
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight] //top right corner of the block
    }

}

//all my blocks
const blocks = [
    new Block(10, 270), //bottom left corner of the block
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)

]


// draw all my blocks
function addBlocks() {  
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement('div'); // create a div element
    block.classList.add('block'); // add class to the div element
    block.style.left = blocks[i].bottomLeft[0] + 'px'; // set the left position of the div element
    block.style.bottom = blocks[i].bottomLeft[1] + 'px'; // set the bottom position of the div element
    grid.appendChild(block); // append the div element to the grid
    }
}

addBlocks() // call the function to add the block

// add user
const user = document.createElement('div'); // create a div element
user.classList.add('user'); // add class to the div element
drawUser() // call the function to add the user
grid.appendChild(user); // append the div element to the grid


function drawUser(){
    user.style.left = currentPosition[0] + 'px'; // set the left position of the div element
    user.style.bottom = currentPosition[1] + 'px'; // set the bottom position of the div element
}

//draw ball
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px'; // set the left position of the div element
    ball.style.bottom = ballCurrentPosition[1] + 'px'; // set the bottom position of the div element
}

//move user
function moveUser(e){
    switch(e.keyCode){
        case 37: // left
            if(currentPosition[0] > 0){  // check if the user is not at the left wall
                currentPosition[0] -= 10 // move the user 10 pixels to the left
                drawUser() 
            }
            break;
        // case 38: // up
        //     if(currentPosition[1] > 0){ 
        //         currentPosition[1] -= blockHeight
        //         drawUser()
        //     }
        //     break;
        case 39: // right
            if(currentPosition[0] < boardWidth - blockWidth){ // check if the user is not at the right wall
                currentPosition[0] += 10
                drawUser()
            }
            break;
        // case 40: // down
        //     if(currentPosition[1] < boardWidth){
        //         currentPosition[1] += blockHeight
        //         drawUser()
        //     }
        //     break;
    }
}


document.addEventListener('keydown', moveUser) // add event listener to the keydown event

//add ball
const ball = document.createElement('div'); // create a div element
ball.classList.add('ball'); // add class to the div element
drawBall() // call the function to add the ball
grid.appendChild(ball); // fac grid parintele lui ball


//move ball 
function moveBall(){ 
    ballCurrentPosition[0] += xDirection // move the ball 2 pixels to the right
    ballCurrentPosition[1] += yDirection // move the ball 2 pixels down
    drawBall()
    checkForCollisions()
}

timerId = setInterval (moveBall, 30) // call the function to move the ball every 30 miliseconds

// chack for collisions
function checkForCollisions(){  
    // check for collisions with the blocks
    for (let i = 0; i < blocks.length; i++) {
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && 
            (ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) 
            {
           const allBlocks = Array.from(document.querySelectorAll('.block')); // select all the blocks
           allBlocks[i].classList.remove('block') // remove the block
           blocks.splice(i, 1) // remove the block from the array
           changeDirection()
           score++; // increase the score
           scoreDisplay.innerHTML = score; 
        }
          
        
    }

    //check for wall collisions
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || // check if the ball hits the right wall
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) || // check if the ball hits the top wall
        ballCurrentPosition[0] <= 0 // check if the ball hits the left wall
    ){ 
        changeDirection()
    }

    //check for user collisions
    if (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth && 
        ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight   
        ){ // check if the ball hits the user
        changeDirection()
    }

    //chack for game over
    if (ballCurrentPosition[1] <= 0){
       
        clearInterval(timerId) // stop the timer
        scoreDisplay.innerHTML = 'You lost! Your score is: ' + score
        document.removeEventListener('keydown', moveUser)
    }

}


function changeDirection(){
    if (xDirection === 2 && yDirection === 2){ // if the ball is moving to the right and down
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2){ // if the ball is moving to the right and up
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2){ // if the ball is moving to the left and up
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2){ // if the ball is moving to the left and down
        xDirection = 2
        return
    }

}

