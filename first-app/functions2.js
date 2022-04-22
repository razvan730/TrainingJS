// // Callback function


// function doSomething(){
//     console.log("Hello World");
//  }



//  setTimeout(doSomething, 2000); // 2 seconds (2000ms) timeout pentru a executa functia doSomething
// // Asyncronous function este o functie care se va executa candva in viitor, in cazul nostru la 2 secunde de la momentul in care se executa functia.
// // Nu trebuie sa astept ca codul sa se execute, functia se va executa in timpul executiei codului, la intervalul stabilit.



// function doSomething2(){
//     console.log("Hello World2");
//  }

// setTimeout(doSomething2,800); 



// functie expresie

// {
//     function pow(x, y){
//         let total = 1;
//         for (let i = 0; i<y; i++){
//             total *= x;
//             console.log(i);
//         }
//         return total;
//     }
    
    
//     console.log(pow(2,3));

// }


// x();

// // functie expresie este atunci cand am ceva de genul:
// var x = function(){
//     console.log("Hello World");
// }
// x();
// daca incerc sa o chem deasupra ei in cod, o sa-mi dea undefined, deoarece nu am declarat variabila x. 
// daca acea variabila caruia ii atribui o functie o chem sub , nu o sa-mi dea undefined, o sa execute codul din functie.
// cam spart exemplul asta...

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// doStuff();

// // asta e exemplul unei functii declarate
// function doStuff(){
//     console.log("Salut");
// }

// doStuff();




// // asta e exemplul 1 pentru o functie expresie (hoisting)
// var doStuff = function(){
//     console.log("Salut");
// }
// doStuff();



// // sau exemplul 2 pentru o functie expresie  (hoisting)
// var doStuff;
// doStuff = function(){
//     console.log("Salut");
// }
// doStuff();



{
    function pow(x, y){
        let total = 1;
        for (let i = 0; i<y; i++){
            total *= x;
            //console.log(i);
        }
        return total;
    }
    let coolFunctions =[pow];
    //console.log(coolFunctions[0](3,3)); // Result: 27
    // deci am facut un array cu elementul 0 care e functia pow, iar in functia pow am pus 3,3 ca sa o poata executa.

    let mathFunctions= {
        power: pow
    };
    console.log(mathFunctions.power(3,3)); // Result: 27

    // uite asa adaug proprietati unei functii (pentru ca in JS si functiile sunt obiecte)
    pow.description = "This function calculates the power of a number";
    console.log(pow.description); // Result: This function calculates the power of a number

    function callBackExample (func){
        return func(3,5);
    }
    console.log(callBackExample(pow)); // Result: 243

}




























