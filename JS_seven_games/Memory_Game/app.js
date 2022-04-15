
const CardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, 
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, 
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

CardArray.sort(() => 0.5 - Math.random()); // ca sa sorteze obiectele din array, random
//console.log(CardArray);


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []   //am facut alt array, pentru a salva numele cardurile folosite, cu metoda push
let cardsChosenIds = [] //am facut alt array, pentru a stoca id-urile cardurilor folosite, tot cu metoda push cred , si cred ca o sa le compar id-urile ca sa pot
                          // sa vad daca am match intre carti.
const cardsWon = [] // adaug cate matches am facut, si dupa pot sa il folosesc ca Score display, dar e super basic.. fara chestii complexe

//console.log(gridDisplay); // sa vad daca am luat id-ul grid cu querySelector( cu el caut prin document pentru ID sa il selectez )

function createBoard(){
    for (let i=0; i< CardArray.length; i++){
        const card = document.createElement('img')  // asta sa il mai testez, cu el creez elemente (in cazul de fata am facut un img ca sa il leg cu constanta card)  
        card.setAttribute('src', 'images/blank.png') // asa setez atributele
        card.setAttribute('data-id', i) // setez un nou id care il leg cu incrementarea lui i++
        card.addEventListener('click', flipCard)
        
        console.log(card, i)
        gridDisplay.append(card) //aici i-am adaugat imaginea cardului(in cazul de fata, acel blank.png pe care l-am bagat mai sus ca atribute) pt
        // gridDisplay -care e legat cu acel div "grid" din HTML

    }
}
createBoard() //asa se cheama functia in JS, nu trebuie sa o aduc in void Start(){} ca in C# .


function checkMatch(){
    const cards = document.querySelectorAll('img')  // alt exemplu de a lua imaginile ce apartin acelui div #grid, ar fi asa:   ('#grid img') , # ca e id, sau . pt clasa
    const optionOneId = cardsChosenIds[0]  // astea 2 le-am schimbat mai jos in setAttribute si removeEventListener
    const optionTwoId = cardsChosenIds[1]  //
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId){
        alert('You have clicked the same image!')
    }
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')  // dupa ce intoarcem cartile si nu avem un match sa se reseteze tot si sa revina la imaginea colorata
        cards[optionTwoId].setAttribute('src', 'images/blank.png') 
        alert('Sorry, try again!')
    }

    resultDisplay.textContent = cardsWon.length //interesant mod de a face scorul
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === CardArray.length/2){
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
}


function flipCard(){
     console.log(CardArray)
     const cardId = this.getAttribute('data-id') // acel setAtribute pt data-id il iau aici pentru cardId (il fac constanta ca nu se schimba)

     cardsChosen.push(CardArray[cardId].name) // asa bag obiecte intr-un alt array (cum ar fi intr-un cos de cumparaturi de ex, sa nu uit de acel
     // addEventListener pe click + si adaug o functie ce sa faca dupa acel click, ce sa execute)
     cardsChosenIds.push(cardId)
     console.log('clicked', cardId)

     console.log(cardsChosenIds)
     console.log(cardsChosen)

     this.setAttribute('src', CardArray[cardId].img) /*  Atentie aici
     -prima data am setat acea imagine blank, acum ii adaug cardID (caruia i-am setat acel atribut data-id)
     -dupa asta (nu stiu cum sa ma exprim corect) dar leg acel id si ii adaug imaginea atribuita fiecarui card, nu stau sa le leg intre ele manual.
     */
     if (cardsChosen.length === 2){
         setTimeout(checkMatch, 500)
     }
}
























