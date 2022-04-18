// let text = "John Doe";  // String written inside quotes
// document.getElementById("demo").innerHTML = text;

// let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo2").innerHTML = text2.length;




// // Teste cu array si functii:
// function testFunctie(){
//     for(let i = 0; i < 10; i++){
//         document.getElementById("demo").innerHTML += i + "<br>";
//     }
// }
// //testFunctie();


// const arrayOne = [
//     "Bucuresti", 
//     1333, 
//     84, 
//     {
//         name: "John Doe" ,
//         age: "22"
//     },
//     function auu(){
//         console.log("Hello World")
//     },
//     "Bau-Bau",
//     function testFunctie(){
//         for(let i = 0; i < 10; i++){
//             document.getElementById("demo").innerHTML += i + "<br>";
//             console.log(i);
//         }
//     },
//     true
// ];


// nu imi returna nimic pentru ca nu am pus console.log in functie (imi trecea prin functie si nu vedeam nimic)
//console.log(arrayOne[6]()); 


// Break-ul il vede in document, in consola il afiseaza ca text...
//let demo = document.getElementById("demo").innerHTML = arrayOne[3].name + " <br> " + arrayOne[3].age;

//console.log(demo);


// Print a list of all the keys in the array
//console.log(Object.keys(arrayOne));   // asta mi-a aparut de la Copilot (e bun pentru a vedea cate items am, sau pot sa pun si array.length)


// asa printez doar valorile din array (nu printeaza functiile, obiectele - doar asa ca sloturi..)
// for(let i = 0; i < arrayOne.length; i++){
//     document.write(arrayOne[i] + "<br>");
//     console.log(arrayOne[i]); // aici vad ca imi apare si obiectul cu proprietatile lui, functiile  etc
// }


// un alt test, sa vad daca pot chema o functie dintr-un array
//auu();
//arrayOne[4](); // asa imi cheama functia din array


//arrayOne[6](); // asa imi cheama functia din array 2, nu trebuie sa scriu numele functiei, doar numarul slotului + parantezele ca pt functie


// exemple cu length

//let arrayTwo = [ false, 444, "Bucuresti", "Bau-Bau", "John Doe", "22"]
 
//arrayTwo.length = 3; // elementele care raman disponibile in array sunt [false, 444, "Bucuresti"], nu se sterg elementele din array - o sa fie doar inaccesibile
//arrayTwo.length = 30; // acum am marit array-ul la un numar de 300 elemente (sunt goale restul de elemente de dupa Bucuresti), cele 297 goale/nedefinite sunt undefined


/*Cum arata consola

(300) [false, 444, 'Bucuresti', empty × 297]
0: false
1: 444
2: "Bucuresti"
length: 300
[[Prototype]]: Array(0) 

*/

//console.log(arrayTwo);

/* Pot sa sterge prima limitare a lenght-ului (la 3 elemente) si imi ia tot array-ul + restul de sloturi nedefinite si va arata asa

(300) [false, 444, 'Bucuresti', 'Bau-Bau', 'John Doe', '22', empty × 294]
0: false
1: 444
2: "Bucuresti"
3: "Bau-Bau"
4: "John Doe"
5: "22"
length: 300
[[Prototype]]: Array(0)

*/

// // 1) cum caut un item in array:
//  for(let i = 0; i < arrayTwo.length; i++){
//      if(arrayTwo[i] == "John Doe"){
//          console.log("John Doe is at index " + i);
//      }
//  }

// // 2) cum sa adaug un item in array:
// arrayTwo.push("New Item");
// console.log(arrayTwo);  // holy mama (era usoara dar nu imi mai aduceam aminte :D)

// // 3) cum scot un element din array:
// arrayTwo.pop(); // scot ultimul element din array
// arrayTwo.shift(); // scot primul element din array

// console.log(arrayTwo);

// // 4) cum tai un array si fac alt array cu acele elemente:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -1); // sa nu uit cand fac un slice, sa fac o constanta unde sa salvez noul array , si sa selectez inceputul si sfarsitul

// console.log(fruits);
// console.log(myBest);



// // alt exemplu:
// let search = "Apples";

// for(let i = 0; i < fruits.length; i++){
//     if (fruits[i] === search){
//         //found
//         console.log("Fruit " + search + " is at index " + i);
//     }
//     if (fruits[i] !== search){
//         // not found
//         console.log("Fruit " + search + " is not found!");
//     }
// }


// alt exemplu cu numere:
// let found = true;
// let searchNumbers = 9;


// let grades = [44, 12, 3, 454, 53, 60, 37, 28, 9, 101];

// for (let i = 0; i < grades.length; i++){
//     if (grades[i] >= searchNumbers){
//         found = true;
//         console.log("Grades mai mari decat 9: " + grades[i] , "at index " + i);
        
//     }
//     if (grades[i] <= searchNumbers){
//         console.log("Grades mai mici decat 9 : " + grades[i] , "at index " + i);
       
//     }
// }

// // sort array (aici e de gandit, cum modific array-ul ca sa il sortez si sa bag console.log-ul in nested loops cred...)
// grades.sort();



// let grades = [44, 12, 3, 454, 53, 60, 37, 28, 9, 101];

// let largest = grades[0]; // de unde sa incep sa scanez array-ul si il iau in variabila noua facuta, sa il salvez in variabila noua, sa il compar in loop-ul de mai jos

// for(let i = 0; i < grades.length; i++){ // sa trec cu un loop prin array, sa vad care element din array este cel mai mare
//     if(grades[i] > largest){ // daca elementul curent din array e mai mare decat celalalt element din array, atunci il schimb cu cel mai mare
//         largest = grades[i]; // iau cel mai mare element din array
//     }
//     console.log(largest); // o sa printez elementul mai mare din array (454)
// }

 


//Alt exemplu unde adaug valoarea elementelor din array unei alte variabile:

let grades = [44, 12, 3, 454, 53, 60, 37, 28, 9, 101];
grades.length=30;
grades[34] = 40;

let count = 0;
let total = 0;

for(let i=0; i < grades.length; i++){
    if(grades[i] !== undefined){ // daca elementul din array este diferit de undefined, atunci il adaug la total
       //legit value 
        count++;
        total += grades[i]; // aici adaug valoarea elementului curent din array la total
    }
    let avg = total / count; // sa fac un total si sa il impart cu count (numarul de elemente din array)
    console.log(avg);
}





