

// // de aici... 
// function moveFrog(e){
     //console.log(e);
//     switch(e.key){
//         case 'ArrowLeft':
//             console.log('move left');
//             break;
//         case 'ArrowRight':
//             console.log('move right');
//             break;
//         case 'ArrowUp':
//             console.log('move up');
//             break;
//         case 'ArrowDown':
//             console.log('move down');
//             break;
//     }


//     squares[currentIndex].classList.add('frog'); // trebuie sa apas o cheie ca sa imi apara... 
// }
// document.addEventListener('keyup', moveFrog) 
// // ...pana aici -> este in forma simplificata, de salvat si invatat!



const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
//console.log(squares);
let currentIndex = 76;
const width = 9; // 9 casute am toata latimea

    


function moveFrog(e){




    switch(e.key){
        case 'ArrowLeft':
            console.log('move left');
            //currentIndex = currentIndex - 1;
            //sau
            currentIndex -= 1;
            break;
        case 'ArrowRight':
            console.log('move right');
            currentIndex += 1;
            break;
        case 'ArrowUp':
            console.log('move up');
            currentIndex -= width;
            break;
        case 'ArrowDown':
            console.log('move down');
            currentIndex += width;
            break;
    }


    squares[currentIndex].classList.add('frog'); // trebuie sa apas o cheie ca sa imi apara... 
}
document.addEventListener('keyup', moveFrog)
































